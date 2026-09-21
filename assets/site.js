(() => {
  const filters = document.querySelector('.publication-filters');
  const groups = [...document.querySelectorAll('.publication-group')];
  const status = document.querySelector('#publication-status');
  if (!filters || !groups.length || !status) return;

  filters.hidden = false;
  filters.addEventListener('click', (event) => {
    const selected = event.target.closest('button[data-filter]');
    if (!selected || !filters.contains(selected)) return;

    filters.querySelectorAll('button').forEach((button) => {
      button.setAttribute('aria-pressed', String(button === selected));
    });

    let count = 0;
    groups.forEach((group) => {
      group.hidden = selected.dataset.filter !== 'all' && selected.dataset.filter !== group.dataset.category;
      if (!group.hidden) count += group.querySelectorAll('.publication').length;
    });
    status.textContent = `${selected.textContent.trim()}: showing ${count} publications.`;
  });
})();
