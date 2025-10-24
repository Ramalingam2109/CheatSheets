// CSS Grid Visual Cheat Sheet - Interactive JavaScript

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get all control elements
    const gridTemplateColumns = document.getElementById('grid-template-columns');
    const gridTemplateRows = document.getElementById('grid-template-rows');
    const gap = document.getElementById('gap');
    const columnGap = document.getElementById('column-gap');
    const rowGap = document.getElementById('row-gap');
    const justifyContent = document.getElementById('justify-content');
    const alignContent = document.getElementById('align-content');
    const itemColumn = document.getElementById('item-column');
    const itemRow = document.getElementById('item-row');
    const itemJustify = document.getElementById('item-justify');
    const itemAlign = document.getElementById('item-align');
    
    // Get the grid container and items
    const gridContainer = document.getElementById('grid-container');
    const gridItems = document.querySelectorAll('.grid-item');
    const cssCode = document.getElementById('css-code');
    
    // Track the currently selected item
    let selectedItem = gridItems[0];
    
    // Initialize with first item selected
    if (selectedItem) {
        selectedItem.style.backgroundColor = '#b21f1f';
    }
    
    // Function to update the grid based on control values
    function updateGrid() {
        if (!gridContainer) return;
        
        // Update grid container properties
        gridContainer.style.gridTemplateColumns = gridTemplateColumns.value;
        gridContainer.style.gridTemplateRows = gridTemplateRows.value;
        
        // Handle gap properties
        if (gap.value) {
            gridContainer.style.gap = gap.value;
        }
        
        if (columnGap.value) {
            gridContainer.style.columnGap = columnGap.value;
        }
        
        if (rowGap.value) {
            gridContainer.style.rowGap = rowGap.value;
        }
        
        gridContainer.style.justifyContent = justifyContent.value;
        gridContainer.style.alignContent = alignContent.value;
        
        // Update selected item properties
        if (selectedItem) {
            selectedItem.style.gridColumn = itemColumn.value;
            selectedItem.style.gridRow = itemRow.value;
            selectedItem.style.justifySelf = itemJustify.value;
            selectedItem.style.alignSelf = itemAlign.value;
        }
        
        // Update the CSS code display
        updateCodeDisplay();
    }
    
    // Function to update the CSS code display
    function updateCodeDisplay() {
        if (!cssCode) return;
        
        let code = `.grid-container {\n`;
        code += `  display: grid;\n`;
        code += `  grid-template-columns: ${gridTemplateColumns.value || 'none'};\n`;
        code += `  grid-template-rows: ${gridTemplateRows.value || 'none'};\n`;
        
        if (gap.value) code += `  gap: ${gap.value};\n`;
        if (columnGap.value) code += `  column-gap: ${columnGap.value};\n`;
        if (rowGap.value) code += `  row-gap: ${rowGap.value};\n`;
        
        code += `  justify-content: ${justifyContent.value};\n`;
        code += `  align-content: ${alignContent.value};\n`;
        code += `}\n\n`;
        
        if (selectedItem) {
            code += `.grid-item:nth-child(${selectedItem.dataset.item}) {\n`;
            code += `  grid-column: ${itemColumn.value};\n`;
            code += `  grid-row: ${itemRow.value};\n`;
            code += `  justify-self: ${itemJustify.value};\n`;
            code += `  align-self: ${itemAlign.value};\n`;
            code += `}`;
        }
        
        cssCode.textContent = code;
    }
    
    // Add event listeners to all controls
    const controls = [
        gridTemplateColumns, gridTemplateRows, gap, columnGap, rowGap,
        justifyContent, alignContent, itemColumn, itemRow, itemJustify, itemAlign
    ];
    
    controls.forEach(control => {
        if (control) {
            control.addEventListener('input', updateGrid);
        }
    });
    
    // Add click event listeners to grid items for selection
    gridItems.forEach(item => {
        item.addEventListener('click', function() {
            // Reset background of previously selected item
            if (selectedItem) {
                selectedItem.style.backgroundColor = '#1a2a6c';
            }
            
            // Set new selected item
            selectedItem = this;
            selectedItem.style.backgroundColor = '#b21f1f';
            
            // Update item-specific controls
            itemColumn.value = this.style.gridColumn || 'auto';
            itemRow.value = this.style.gridRow || 'auto';
            itemJustify.value = this.style.justifySelf || 'stretch';
            itemAlign.value = this.style.alignSelf || 'stretch';
            
            updateCodeDisplay();
        });
    });
    
    // Initialize the grid
    updateGrid();
    
    console.log('CSS Grid Visual Cheat Sheet loaded successfully!');
});