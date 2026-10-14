/* Navigation is provided by Lanza. Mark active destinations without hiding content. */
(() => {
  const current = location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('.df-nav a').forEach((link) => {
    if (new URL(link.href, location.href).pathname.replace(/\/$/, '') === (current === '/' ? '' : current)) {
      link.setAttribute('aria-current', 'page');
    }
  });
})();
/* Group CMS-authored team destinations; without JS all bio links remain usable. */
(() => {
  const nav = document.querySelector(".df-nav");
  if (!nav) return;
  const parent = nav.querySelector('a[href="/team/"]');
  const bios = [...nav.querySelectorAll('a[href^="/team/"]')].filter(link => link !== parent);
  if (!parent || !bios.length) return;
  const group = document.createElement("div"); group.className = "df-team-nav";
  parent.before(group); group.append(parent);
  const toggle = document.createElement("button"); toggle.type = "button";
  toggle.textContent = "⌄"; toggle.setAttribute("aria-label", parent.textContent.trim());
  toggle.setAttribute("aria-expanded", "false"); toggle.setAttribute("aria-controls", "df-team-menu");
  const menu = document.createElement("div"); menu.className = "df-team-menu"; menu.id = "df-team-menu";
  menu.append(...bios); group.append(toggle, menu);
  const open = value => { group.toggleAttribute("data-open", value); toggle.setAttribute("aria-expanded", String(value)); };
  toggle.addEventListener("click", () => open(!group.hasAttribute("data-open")));
  group.addEventListener("mouseenter", () => { if (matchMedia("(min-width: 761px)").matches) open(true); });
  group.addEventListener("mouseleave", () => { if (!group.contains(document.activeElement)) open(false); });
  group.addEventListener("focusin", event => { if (event.target !== toggle) open(true); });
  group.addEventListener("focusout", event => { if (!group.contains(event.relatedTarget)) open(false); });
  group.addEventListener("keydown", event => { if (event.key === "Escape") {toggle.focus(); open(false);} });
  document.addEventListener("click", event => { if (!group.contains(event.target)) open(false); });
})();
