// Install in a private Apps Script project. Set recipient and secret in Script Properties.
function doPost(e) {
  var output = function (ok) { return ContentService.createTextOutput(JSON.stringify({ok: ok})).setMimeType(ContentService.MimeType.JSON); };
  var lock = LockService.getScriptLock();
  try {
    if (!e.postData || e.postData.contents.length > 20000) return output(false);
    var input = JSON.parse(e.postData.contents);
    var settings = PropertiesService.getScriptProperties();
    var secret = settings.getProperty('CONTACT_SHARED_SECRET');
    var recipient = settings.getProperty('CONTACT_RECIPIENT');
    if (!secret || secret.length < 32 || !recipient || typeof input.payload !== 'string' || !/^[a-f0-9]{64}$/.test(input.signature)) return output(false);
    var signature = Utilities.computeHmacSha256Signature(input.payload, secret, Utilities.Charset.UTF_8).map(function(b) { return ('0' + ((b + 256) % 256).toString(16)).slice(-2); }).join('');
    var difference = 0;
    for (var i = 0; i < 64; i++) difference |= signature.charCodeAt(i) ^ input.signature.charCodeAt(i);
    if (difference !== 0) return output(false);
    var data = JSON.parse(input.payload);
    if (!Number.isFinite(data.timestamp) || Math.abs(Date.now() - data.timestamp) > 120000 || !/^[a-f0-9-]{36}$/.test(data.id)) return output(false);
    if (typeof data.name !== 'string' || !data.name.trim() || data.name.length > 120 || /[\r\n]/.test(data.name)
      || typeof data.email !== 'string' || data.email.length > 254 || !/^[^\s@,;<>]+@[^\s@,;<>]+\.[^\s@,;<>]+$/.test(data.email)
      || typeof data.message !== 'string' || data.message.length < 10 || data.message.length > 5000
      || typeof data.company !== 'string' || data.company.length > 160) return output(false);
    if (!lock.tryLock(5000)) return output(false);
    var cache = CacheService.getScriptCache();
    if (cache.get(data.id)) return output(true);
    if (MailApp.getRemainingDailyQuota() < 1) return output(false);
    MailApp.sendEmail({
      to: recipient,
      replyTo: data.email,
      subject: 'Define website inquiry: ' + data.name,
      body: 'Name: ' + data.name + '\nEmail: ' + data.email + '\nCompany: ' + data.company + '\n\n' + data.message,
      name: 'Define website inquiries'
    });
    cache.put(data.id, 'sent', 600);
    return output(true);
  } catch (error) {
    // Do not log inquiry contents or recipient details.
    return output(false);
  } finally {
    if (lock.hasLock()) lock.releaseLock();
  }
}
