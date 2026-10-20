'use strict';

const content = window.portfolio;
const projectDialog = document.querySelector('#project-dialog');
const placeholderDialog = document.querySelector('#placeholder-dialog');
let opener = null;

function openDialog(dialog, trigger) {
  opener = trigger;
  dialog.showModal();
  document.body.classList.add('modal-open');
  dialog.scrollTop = 0;
}

for (const dialog of [projectDialog, placeholderDialog]) {
  dialog.addEventListener('close', () => {
    document.body.classList.remove('modal-open');
    if (opener) opener.focus({ preventScroll: true });
  });
  dialog.addEventListener('click', (event) => {
    const bounds = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
  });
}
document.querySelector('#close-dialog').addEventListener('click', () => projectDialog.close());
document.querySelector('#close-placeholder').addEventListener('click', () => placeholderDialog.close());

function safeWebUrl(value) {
  if (!value) return null;
  try {
    const url = new URL(value, window.location.href);
    return ['http:', 'https:'].includes(url.protocol) ? url.href : null;
  } catch { return null; }
}

document.querySelectorAll('[data-project]').forEach(button => {
  button.addEventListener('click', () => {
    const project = content.projects[button.dataset.project];
    const fields = { title: 'name', category: 'category', intro: 'intro', question: 'question', approach: 'approach', focus: 'focus' };
    Object.entries(fields).forEach(([id, key]) => { document.querySelector(`#dialog-${id}`).textContent = project[key]; });
    const stack = document.querySelector('#dialog-stack');
    stack.replaceChildren(...project.stack.map(label => {
      const tag = document.createElement('span'); tag.textContent = label; return tag;
    }));
    const links = document.querySelector('#dialog-links');
    links.replaceChildren();
    for (const [label, value] of [['Repository', project.repository], ['Live demo', project.demo]]) {
      const comingSoon = label === 'Live demo' && value == null;
      const url = comingSoon ? null : safeWebUrl(value);
      const link = document.createElement(url ? 'a' : 'span');
      link.textContent = comingSoon ? 'Coming soon...' : url ? `${label} ↗` : `${label} [add link]`;
      if (url) { link.href = url; link.target = '_blank'; link.rel = 'noopener noreferrer'; }
      links.append(link);
    }
    openDialog(projectDialog, button);
  });
});

document.querySelectorAll('[data-filter]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach(item => {
      const selected = item === button;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    let count = 0;
    document.querySelectorAll('.project-card').forEach(card => {
      const show = button.dataset.filter === 'all' || card.dataset.categories.split(' ').includes(button.dataset.filter);
      card.hidden = !show;
      if (show) count++;
    });
    document.querySelector('#filter-status').textContent = button.dataset.filter === 'all'
      ? `Showing all ${count} projects`
      : `Showing ${count} project${count === 1 ? '' : 's'} in ${button.textContent}`;
  });
});

const demoStates = {
  strict: { icon: '↻', title: 'Same plan. Different order.', copy: 'Move to the seated row, then return to the chest press. Your original exercises stay in the plan.', principle: 'A changed order shouldn’t mean a changed goal.' },
  alternative: { icon: '⇄', title: 'A suggestion. Your decision.', copy: 'Consider a dumbbell press as an alternative. In Spotter’s flow, a suggestion only changes the plan after you accept it.', principle: 'An alternative is an invitation, not an automatic swap.' }
};
document.querySelectorAll('[data-mode]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-mode]').forEach(item => {
      const selected = item === button;
      item.classList.toggle('selected', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    const state = demoStates[button.dataset.mode];
    document.querySelector('#result-icon').textContent = state.icon;
    document.querySelector('#result-title').textContent = state.title;
    document.querySelector('#result-copy').textContent = state.copy;
    document.querySelector('#demo-principle').textContent = state.principle;
  });
});

function showPlaceholder(trigger, title, message) {
  document.querySelector('#placeholder-title').textContent = title;
  document.querySelector('#placeholder-copy').textContent = message;
  openDialog(placeholderDialog, trigger);
}

const resumeButton = document.querySelector('#resume-button');
if (safeWebUrl(content.resume)) resumeButton.querySelector('.placeholder-tag').hidden = true;
resumeButton.addEventListener('click', () => {
  const url = safeWebUrl(content.resume);
  if (url) window.open(url, '_blank', 'noopener,noreferrer');
  else showPlaceholder(resumeButton, 'Résumé coming soon.', 'A résumé will live here. This placeholder is ready for the latest PDF or résumé link.');
});

const emailLink = document.querySelector('#email-link');
if (content.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(content.email)) {
  emailLink.href = `mailto:${content.email}`;
  document.querySelector('#email-text').textContent = content.email;
  document.querySelector('#email-placeholder-note').hidden = true;
} else {
  emailLink.addEventListener('click', event => {
    event.preventDefault();
    showPlaceholder(emailLink, 'Let’s connect. Soon.', 'The contact address hasn’t been added yet. Check back once the portfolio’s contact details are filled in.');
  });
}
for (const service of ['github', 'linkedin']) {
  const link = document.querySelector(`#${service}-link`);
  const url = safeWebUrl(content[service]);
  if (url) { link.href = url; link.target = '_blank'; link.rel = 'noopener noreferrer'; link.querySelector('span').remove(); }
  else link.addEventListener('click', event => {
    event.preventDefault();
    const label = service === 'github' ? 'GitHub' : 'LinkedIn';
    showPlaceholder(link, `${label} link coming soon.`, `This space is reserved for Thanmay’s ${label} profile. The verified profile link will be added here.`);
  });
}
for (const field of ['location', 'education']) {
  if (content[field]) document.querySelector(`#${field}-detail em`).textContent = content[field];
}
document.querySelector('#year').textContent = new Date().getFullYear();
