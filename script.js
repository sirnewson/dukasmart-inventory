// Simple inventory manager for DukaSmart MVP
const items = [];

/**
 * Helper to render the inventory table based on the current items array.
 */
function renderTable() {
  const tbody = document.querySelector('#inventoryTable tbody');
  // Clear existing rows
  tbody.innerHTML = '';
  items.forEach((item) => {
    const row = document.createElement('tr');
    // Item name
    const nameCell = document.createElement('td');
    nameCell.textContent = item.name;
    row.appendChild(nameCell);
    // Quantity
    const qtyCell = document.createElement('td');
    qtyCell.textContent = item.quantity;
    row.appendChild(qtyCell);
    // Threshold
    const threshCell = document.createElement('td');
    threshCell.textContent = item.threshold;
    row.appendChild(threshCell);
    // Status
    const statusCell = document.createElement('td');
    statusCell.textContent = item.quantity <= item.threshold ? 'Reorder' : 'OK';
    statusCell.className = item.quantity <= item.threshold ? 'reorder' : 'ok';
    row.appendChild(statusCell);
    tbody.appendChild(row);
  });
}

/**
 * Event handler for the add item form.
 * Validates input, adds item to array, then re-renders table.
 */
document.getElementById('addItemForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('itemName').value.trim();
  const quantity = parseInt(document.getElementById('quantity').value, 10);
  const threshold = parseInt(document.getElementById('threshold').value, 10);
  if (!name || isNaN(quantity) || isNaN(threshold)) {
    alert('Please fill in all fields correctly.');
    return;
  }
  items.push({ name, quantity, threshold });
  // Reset form fields
  document.getElementById('itemName').value = '';
  document.getElementById('quantity').value = '';
  document.getElementById('threshold').value = '';
  renderTable();
});
