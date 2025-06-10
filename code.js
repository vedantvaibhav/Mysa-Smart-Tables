figma.showUI(__html__, { width: 400, height: 420 });

// Centralized column definitions with component keys
const ALL_COLUMNS = {
  "Checkbox": { name: "Checkbox", type: "text", componentKey: '097cf490391c4652660e57db8e3c65ec388f39e5' },
  "Bill Narration": { name: "Bill Narration", type: "text", componentKey: '9377b056779a1f5dc27e24a498b50d51b1db571e' },
  "Payment Title": { name: "Payment Title", type: "text", componentKey: 'fef030797d3344874e570e3c6fd559a43e06b555' },
  "Vendor": { name: "Vendor", type: "text", componentKey: '9e9d6860fcb43abbd7e7b130bd9321a06978077f' },
  "User Name": { name: "User Name", type: "text", componentKey: '5d5a86b4b2dbba0d04363cf8a7bb9a5309a41641' },
  "Beneficiary": { name: "Beneficiary", type: "text", componentKey: 'b6055aaa0682016c20b7d16da9f57cce26d363b0' },
  "ID": { name: "ID", type: "text", componentKey: 'd55b44ee5671c48baeadcace6cf2a7a41d2452c1' },
  "UTR": { name: "UTR", type: "text", componentKey: '3c3aabe0bba0607045552b3ade8a0dcffff8ace2' },
  "PO Number": { name: "PO Number", type: "text", componentKey: '7e8c79b0b873a1c1e141f6edd13f850f702a67b7' },
  "Due Date": { name: "Due Date", type: "text", componentKey: '90c6ea1ff4bef2bde0175ec010b0b5a135b56c08' },
  "Posting Date": { name: "Posting Date", type: "text", componentKey: '8c9ec351b4de54c78d467324a48e9bc621aa2672' },
  "Cost Centre": { name: "Cost Centre", type: "text", componentKey: '3587ef5abb768ab6055daa795d7f14477debe4ed' },
  "Uploaded By": { name: "Uploaded By", type: "text", componentKey: '52c4f649ee1bbb6fac2716eee540a3579240cce4' },
  "Created By": { name: "Created By", type: "text", componentKey: '976d5e51d2f14d945ab2064f038112d8718845dd' },
  "Authorised By": { name: "Authorised By", type: "text", componentKey: 'd01b70169da9e9a01ecb190e4f9551f18669b72a' },
  "Created At": { name: "Created At", type: "text", componentKey: '9ab5a0dd10683221715f0961fea96115a07f2027' },
  "Business Unit": { name: "Business Unit", type: "text", componentKey: '5e8e7f00d3f598a107cdc8a075ec04c8352ceca6' },
  "Payment Mode": { name: "Payment Mode", type: "text", componentKey: '9efedc34bebbb9254be995c6f5c0444bbfe0b33e' },
  "Bill Amount": { name: "Bill Amount", type: "text", componentKey: '162cec495cca524d61f27d724fa2189444c7f09d' },
  "Payment Amount": { name: "Payment Amount", type: "text", componentKey: '7dc044c2bb078d388f01e85c3352584eef050ca6' },
  "Bill Date": { name: "Bill Date", type: "text", componentKey: '4493fcafa6d8c2d798575bd81ededa32198e7dc5' },
  "Credited On": { name: "Credited On", type: "text", componentKey: 'c0351f3ad048d3768cbc7c39b165f480222f6c8b' },
  "Branches": { name: "Branches", type: "text", componentKey: 'f172ca8e3435493656697f4cc31a3a7dce27728a' },
  "Status": { name: "Status", type: "text", componentKey: '485d7e9cb06f7177eaf1ccd149e65a48f2306315' },
  "Mysa Category": { name: "Mysa Category", type: "text", componentKey: '7d8e442abdf36d21a5fe9c88df7f48b44efcc1ff' },
  "Department": { name: "Department", type: "text", componentKey: '543bdf130a9b3fd32f52d1b9b12a94d330d336c0' },
  "Due Amount": { name: "Due Amount", type: "text", componentKey: '55bfa6ec18f2a7acdd5597d2aad08d7da6e7a6ad' },
  "Bill": { name: "Bill", type: "text", componentKey: 'f2309cdbf04059152a77024d5ae134052492e30d' },
  "Beneficiary Account": { name: "Beneficiary Account", type: "text", componentKey: '9c8d2d5713483ce0646149379c99465a4d7bf0c8' },
  "Authorised on": { name: "Authorised on", type: "text", componentKey: '2e59dd6f107fd68c381b2bc9d384f1b39cba3575' },
  "Pay by date": { name: "Pay by date", type: "text", componentKey: 'e56a9145a2699cf409ff52615c1749f32787ff5d' },
  "Pan": { name: "Pan", type: "text", componentKey: '8d776f05aec2490e3bbcb031ab220a7ec88d05e6' },
  "Gstin": { name: "Gstin", type: "text", componentKey: 'bc5d81b48cc85ef0b48e64d02e319d814d8c93df' },
  "Category": { name: "Category", type: "text", componentKey: '4c780081994ee19f4efb85239d109682e5e19747' },
  "Outstanding": { name: "Outstanding", type: "text", componentKey: '27a22601e5b6ce21e4b89ed6fb438668478beb51' },
  "This Month's Spend": { name: "This Month's Spend", type: "text", componentKey: 'dc838920494ae8ecef3aa2d1df966e044cb17724' },
  "Type": { name: "Type", type: "text", componentKey: '4f4adbc18824d73a7cd3753670d7ce8481bd78f7' },
  "Role": { name: "Role", type: "text", componentKey: '33edff433a14241f94fc1cdecd18a98fdd42294c' },
  "User type": { name: "User type", type: "text", componentKey: 'aaead73f9b7981479a18c58dbcee38a2b09ebcf4' },
  "COA/Ledger": { name: "COA/Ledger", type: "text", componentKey: '92c1917371359ad67a6091ffa87a0cec2021713c' },
  "Manager(s)": { name: "Manager(s)", type: "text", componentKey: 'ee8fc470dc85d35ea35ee9dfe145b6a880ccc76f' },
  "Paid through": { name: "Paid through", type: "text", componentKey: '1d519cd937a7d88694a929bc5aafd5cc8bcdf1d5' },
  "Email": { name: "Email", type: "text", componentKey: '226e317e7c172fab7622e76225e6fca867165a9d' },
  "Link": { name: "Link", type: "text", componentKey: 'e88c78959ae4397c8f77274a7d67a3fd4c23db18' },
  "Date": { name: "Date", type: "text", componentKey: '3a3d59b652b26f6d2c4c316e52d99fc2f8340124' },
  "Running balance": { name: "Running balance", type: "text", componentKey: 'f93965889b88be12daefff40bf39696efd3e4af9' },
  "Month": { name: "Month", type: "text", componentKey: '24985dd5a3d87128d78d4b767002610398750520' },
  "Section": { name: "Section", type: "text", componentKey: '6cc7250949babc6e1c703b7335d03c5d1d47ada1' },
  "Description": { name: "Description", type: "text", componentKey: '4be0d90359f7e8a8f55afcda49945121bcf0c9e6' },
  "Business type": { name: "Business type", type: "text", componentKey: '3e50000ba1329f865c1ea09aa2a1a818cb33423f' },
  "Amount": { name: "Amount", type: "text", componentKey: '84ef72bcb1d2258b0e28bf92244d217e45328448' },
  "> 60 days": { name: "> 60 days", type: "text", componentKey: '951919e260972e6e23cedd8f1e278ef324160c72' },
  "40 - 60 days": { name: "40 - 60 days", type: "text", componentKey: '0ae25e308fa3ea4851a0638871515680af61be48' },
  "31 - 45 days": { name: "31 - 45 days", type: "text", componentKey: '1dda1c5cd94db2041e75dda08ec0c5a8fa1deaef' },
  "1 - 30 days": { name: "1 - 30 days", type: "text", componentKey: 'c09b8390fbf35b528a8143283e18e6b12da4eb8a' },
  "Total Overdue": { name: "Total Overdue", type: "text", componentKey: '8d446817064c0c223d83a0723d66abbe05d8b869' },
  "Approved By": { name: "Approved By", type: "text", componentKey: 'e1b0a4519dace273a7993af0900b5001a82a385c' },
  "Next Approved By": { name: "Next Approved By", type: "text", componentKey: 'a527ba760900e12471d98cc41ee2de16ec44af90' },
  "Fin Review By": { name: "Fin Review By", type: "text", componentKey: 'b98c8bf93b397df189a6f4a4b23994991ce6d3d1' },
  "Reviewed By": { name: "Reviewed By", type: "text", componentKey: 'e859e95ed63b420306f6f5e26411f30bc866a944' },
  "RRN/UTR": { name: "RRN/UTR", type: "text", componentKey: '0cb0f535b7d234457937350cf2a9ec105c682435' },
  "Pay On": { name: "Pay On", type: "text", componentKey: '1c2bd1018eeda66e1b35db26fce698018c387920' },
  "Title": { name: "Title", type: "text", componentKey: '8fed741f6e1b651b5a0eb8a6d36aec86bca4bbd9' },
  "Payment Method": { name: "Payment Method", type: "text", componentKey: 'fec9cf204ef6036c5f17ffe2d4f2acdd2f3e0949' },
  "Authorizers": { name: "Authorizers", type: "text", componentKey: 'cf23d49299b84c8ba9bff8e7dd2ecca8ca0555ef' },
  "Paid At": { name: "Paid At", type: "text", componentKey: '845cf56746893f11a3a073b1d5deee3dc96f4a88' },
  "Title/Narration": { name: "Title/Narration", type: "text", componentKey: '8f1fec0be7de5f3ab8c2fa2f706a3232e0147a43' },
  "Narration": { name: "Narration", type: "text", componentKey: 'd96cd61d94afec22d163b7bc6e6bb58d86086c33' },
  "Rejected By": { name: "Rejected By", type: "text", componentKey: '8efdabcd7be3b5d0aa97bb1d6ea9682b0d3ad0d7' },
  "Created On": { name: "Created On", type: "text", componentKey: '651aa6855f27f69fe7bbd20e70f56c05341c3fd8' },
  "Created By": { name: "Created By", type: "text", componentKey: '48fe65fedfb86fd869d3e76138e4683b2ffd8c0c' },
  "Status (Accounting)": { name: "Status (Accounting)", type: "text", componentKey: '966756b8498df9ca06ee45b99455e6a12befea4e' },
  "ERP Vendor": { name: "ERP Vendor", type: "text", componentKey: '79a3dbfbdcdff2981115fd52ffe5bdcfd32facb0' },
  "Status (Vendor)": { name: "Status (Vendor)", type: "text", componentKey: '277f0b39e338a8b6c75adb28afbc83745dfca7f9' },
  "Status (Team settings)": { name: "Status (Team settings)", type: "text", componentKey: '8156f010edf85d9dab0854e285333494119a5b17' },
  "Custom column 1": { name: "Custom column 1", type: "text", componentKey: '3cfe27f1085dbfebe6d344298ddc1d5c874d3700' },
  "Custom column 2": { name: "Custom column 2", type: "text", componentKey: '3cfe27f1085dbfebe6d344298ddc1d5c874d3700' },
  "Custom column 3": { name: "Custom column 3", type: "text", componentKey: '3cfe27f1085dbfebe6d344298ddc1d5c874d3700' }
};

// Table presets with their column configurations nested under modules
const TABLE_PRESETS = {
  "Payables": {
    "My Approvals": {
      visibleColumns: ["Checkbox", "Vendor", "ID", "Bill", "Bill Amount", "Uploaded By", "Due Date", "Bill Narration", "Approved By", "Bill Date", "Mysa Category", "Department"],
      hiddenColumns: ["Status", "Posting Date", "Created At", "PO Number", "Due Amount", "Business Unit", "Cost Centre", "Branches", "Next Approved By", "Fin Review By", "Reviewed By"]
    },
    "Finance Review": {
      visibleColumns: ["Checkbox", "Vendor", "ID", "Bill", "Bill Amount", "Due Date", "Bill Narration", "Bill Date", "Mysa Category", "Uploaded By", "Approved By", "Department", "Due Amount", "Business Unit", "Cost Centre", "Branches"],
      hiddenColumns: ["Status", "Next Approved By", "Fin Review By", "Reviewed By", "Posting Date", "Created At", "PO Number"]
    },
    "My Uploads": {
      visibleColumns: ["Checkbox", "Vendor", "ID", "Bill", "Bill Amount", "Due Amount", "Status", "Due Date", "Bill Narration", "Bill Date", "Department", "Mysa Category"],
      hiddenColumns: ["Uploaded By", "Created At", "Posting Date", "PO Number", "Business Unit", "Cost Centre", "Branches", "Next Approved By", "Approved By", "Fin Review By", "Reviewed By"]
    },
    "Drafts": {
      visibleColumns: ["Checkbox", "Vendor", "ID", "Bill", "Bill Amount", "Due Date", "Bill Narration", "Department", "Bill Date", "Mysa Category"],
      hiddenColumns: ["Uploaded By", "Status", "Due Amount", "Business Unit", "Cost Centre", "PO Number", "Posting Date", "Created At", "Branches", "Next Approved By", "Approved By", "Fin Review By", "Reviewed By"]
    },
    "All Drafts": {
      visibleColumns: ["Checkbox", "Vendor", "ID", "Bill", "Bill Amount", "Due Date", "Uploaded By", "Bill Narration", "Department", "Bill Date", "Mysa Category"],
      hiddenColumns: ["Status", "Due Amount", "Created At", "Posting Date", "PO Number", "Business Unit", "Cost Centre", "Branches", "Next Approved By", "Approved By", "Fin Review By", "Reviewed By"]
    },
    "All Bills": {
      visibleColumns: ["Checkbox", "Vendor", "ID", "Bill", "Bill Amount", "Due Amount", "Due Date", "Status", "Bill Narration", "Department", "Bill Date", "Mysa Category", "Branches", "Uploaded By"],
      hiddenColumns: ["Business Unit", "Cost Centre", "Created At", "Posting Date", "PO Number", "Next Approved By", "Approved By", "Fin Review By", "Reviewed By"]
    },
    "Rejected": {
      visibleColumns: ["Checkbox", "Vendor", "ID", "Bill", "Bill Amount", "Due Date", "Uploaded By", "Bill Narration", "Department", "Bill Date", "Mysa Category", "Rejected By", "Status"],
      hiddenColumns: ["Business Unit", "Cost Centre", "Due Amount", "Approved By", "Fin Review By", "Reviewed By", "PO Number", "Posting Date", "Created At", "Branches"]
    }
  },
  "Payments": {
    "Ready to Pay": {
      visibleColumns: ["Checkbox", "Vendor", "ID", "Bill", "Bill Amount", "Due Amount", "Due Date", "Pay by date", "Status", "Bill Narration", "Bill Date", "Mysa Category", "Uploaded By"],
      hiddenColumns: ["Posting Date", "Created At", "PO Number", "Cost Centre", "Business Unit", "Branches"]
    },
    "In Auth": {
      visibleColumns: ["Checkbox", "Beneficiary", "Beneficiary Account", "Payment Amount", "Pay On", "Bill", "Created By", "Title", "Created On", "Payment Method", "Authorizers", "Mysa Category"],
      hiddenColumns: ["Branches"]
    },
    "All Transactions": {
      visibleColumns: ["Checkbox", "Beneficiary", "Beneficiary Account", "Payment Amount", "Bill", "Status", "Authorised on", "Authorised By", "Title", "Paid At", "UTR", "Mysa Category"],
      hiddenColumns: ["Branches", "Created On", "Created By"]
    },
    "Rejected": {
      visibleColumns: ["Checkbox", "Beneficiary", "Beneficiary Account", "Payment Amount", "Title", "Bill", "Created On", "Status", "Mysa Category", "Created By"],
      hiddenColumns: ["Payment Mode", "Due Amount", "PO Number"]
    }
  },
  "Accounting": {
    "Needs Review": {
      visibleColumns: ["Checkbox", "Vendor", "Narration", "ID", "Date", "Bill", "Amount", "COA/Ledger", "ERP Vendor", "Paid through", "Mysa Category", "Type", "Due Date"],
      hiddenColumns: ["Status (Accounting)"]
    },
    "Ready to sync": {
      visibleColumns: ["Checkbox", "Vendor", "Narration", "ID", "Date", "Bill", "Amount", "COA/Ledger", "ERP Vendor", "Paid through", "Mysa Category", "Type", "Due Date"],
      hiddenColumns: ["Status (Accounting)"]
    },
    "Synced": {
      visibleColumns: ["Checkbox", "Vendor", "Narration", "ID", "Date", "Bill", "Amount", "COA/Ledger", "ERP Vendor", "Paid through", "Mysa Category", "Type", "Due Date"],
      hiddenColumns: ["Status (Accounting)"]
    },
    "Excluded": {
      visibleColumns: ["Checkbox", "Vendor", "Narration", "ID", "Date", "Bill", "Amount", "COA/Ledger", "ERP Vendor", "Paid through", "Mysa Category", "Type", "Due Date"],
      hiddenColumns: ["Status (Accounting)"]
    }
  },
  "Smart Statements": {
    "Smart Statements": {
      visibleColumns: ["Checkbox", "Date", "Beneficiary", "Title/Narration", "Payment Amount", "Running balance", "Bill", "RRN/UTR"],
      hiddenColumns: ["Narration"]
    }
  },
  "Reports": {
    "AP Overdue": {
      visibleColumns: ["Checkbox", "Vendor", "> 60 days", "40 - 60 days", "31 - 45 days", "1 - 30 days", "Total Overdue"],
      hiddenColumns: []
    },
    "TDS": {
      visibleColumns: ["Checkbox", "Month", "Section", "Description", "Business type", "Amount"],
      hiddenColumns: []
    }
  },
  "Team Settings": {
    "Active/Inactive": {
      visibleColumns: ["Checkbox", "User Name", "Email", "Role", "Manager(s)", "Department", "Status (Team settings)"],
      hiddenColumns: []
    }
  },
  "Vendors": {
    "Active/Inactive": {
      visibleColumns: ["Checkbox", "Vendor", "Category", "Gstin", "Pan", "Outstanding", "This Month's Spend", "Status (Vendor)"],
      hiddenColumns: []
    },
    "Invited": {
      visibleColumns: ["Checkbox", "Vendor", "Email", "Status (Vendor)", "Link"],
      hiddenColumns: []
    }
  }
};

async function loadFont(fontFamily = "Inter", style = "Regular") {
  try {
    await figma.loadFontAsync({ family: fontFamily, style: style });
    return { family: fontFamily, style: style };
  } catch (e) {
    console.warn(`Failed to load ${fontFamily} ${style}, falling back to Inter Regular`);
    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
    return { family: "Inter", style: "Regular" };
  }
}

async function createTableFromPreset(moduleName, tabName) {
  const module = TABLE_PRESETS[moduleName];
  if (!module) {
    throw new Error(`Unknown module: ${moduleName}`);
  }
  const preset = module[tabName];
  if (!preset) {
    throw new Error(`Unknown tab: ${tabName} in module ${moduleName}`);
  }
  // Pass the column names to generateTable
  // Check if the preset has visibleColumns/hiddenColumns (Payables) or just columns (others)
  const columnNamesToGenerate = preset.visibleColumns ? [...preset.visibleColumns, ...(preset.hiddenColumns || [])] : preset.columns;
  return await generateTable(tabName, columnNamesToGenerate);
}

async function createPaginationControls() {
  try {
    // Import the pagination component using the provided key
    const paginationComponent = await figma.importComponentByKeyAsync('dab02afbb2c0d44d1c181624ccb89a6e1fc62ed8');
    if (!paginationComponent) {
      throw new Error('Failed to import pagination component');
    }

    // Create an instance of the pagination component
    const paginationInstance = paginationComponent.createInstance();
    paginationInstance.name = "Pagination Controls";

    return paginationInstance;
  } catch (error) {
    console.error('Error creating pagination controls:', error);
    figma.notify(`Error creating pagination controls: ${error.message}`);
    return null;
  }
}

async function generateTable(tabName, columnNames) {
  try {
    // Main frame (table container)
    const tableFrame = figma.createFrame();
    // Using combined column count for frame name
    tableFrame.name = `${tabName} - ${columnNames.length} columns`;
    tableFrame.layoutMode = "VERTICAL";
    tableFrame.primaryAxisSizingMode = "AUTO";
    tableFrame.counterAxisSizingMode = "AUTO";
    tableFrame.itemSpacing = 0;
    tableFrame.fills = [];
    tableFrame.paddingLeft = 0;
    tableFrame.paddingRight = 0;
    tableFrame.paddingTop = 0;
    tableFrame.paddingBottom = 0;
    tableFrame.layoutAlign = "STRETCH";
    
    // Add corner radius and border
    tableFrame.cornerRadius = 4;
    tableFrame.strokes = [{
      type: 'SOLID',
      color: {
        r: 228 / 255,
        g: 228 / 255,
        b: 231 / 255
      }
    }];
    tableFrame.strokeWeight = 1;
    tableFrame.strokeAlign = 'INSIDE';

    // Create table content frame
    const tableContentFrame = figma.createFrame();
    tableContentFrame.name = "Table Content";
    tableContentFrame.layoutMode = "HORIZONTAL";
    tableContentFrame.primaryAxisSizingMode = "AUTO";
    tableContentFrame.counterAxisSizingMode = "AUTO";
    tableContentFrame.itemSpacing = 0;
    tableContentFrame.fills = [];
    tableContentFrame.layoutAlign = "STRETCH";

    // Iterate through columns to be generated
    for (let i = 0; i < columnNames.length; i++) {
      const columnName = columnNames[i];
      const columnDefinition = ALL_COLUMNS[columnName];

      if (!columnDefinition) {
          console.warn(`Column definition not found for name: ${columnName}. Skipping column.`);
          figma.notify(`Warning: Column definition not found for ${columnName}. Skipping.`);
          continue;
      }

      const componentIdentifier = columnDefinition.componentKey || columnDefinition.componentVariant;

      if (componentIdentifier) {
        try {
          let instance = null;
          if (columnDefinition.componentKey) {
            const masterComponent = await figma.importComponentByKeyAsync(componentIdentifier);
            if (masterComponent) {
              instance = masterComponent.createInstance();
            }
          } else {
            const masterComponent = figma.getNodeById(componentIdentifier);
            if (masterComponent && (masterComponent.type === 'COMPONENT' || masterComponent.type === 'COMPONENT_SET')) {
                 instance = masterComponent.createInstance();
            }
          }

          if (instance) {
            instance.name = `${columnDefinition.name} Column`;
            tableContentFrame.appendChild(instance);
          } else {
            const idType = columnDefinition.componentKey ? 'key' : 'ID';
            console.warn(`Component with ${idType} '${componentIdentifier}' not found or is not a component. Cannot add column ${columnDefinition.name}.`);
            figma.notify(`Warning: Component with ${idType} '${componentIdentifier}' not found or is not a component. Skipping column ${columnDefinition.name}.`);
          }
        } catch (error) {
          const idType = columnDefinition.componentKey ? 'key' : 'ID';
          console.error(`Error using component ${idType} for column ${columnDefinition.name}:`, error);
          figma.notify(`Error using component ${idType} for ${columnDefinition.name}: ${error.message}. Skipping column.`);
        }
      } else {
         console.warn(`Column ${columnName} does not have a componentKey or componentVariant specified. Skipping column.`);
         figma.notify(`Warning: Column ${columnName} does not have a component specified. Skipping.`);
      }
    }

    // Add table content to main frame
    tableFrame.appendChild(tableContentFrame);

    // Create and add pagination controls
    const paginationControls = await createPaginationControls();
    tableFrame.appendChild(paginationControls);

    // Position the table
    tableFrame.x = figma.viewport.center.x - tableFrame.width / 2;
    tableFrame.y = figma.viewport.center.y - tableFrame.height / 2;

    // Select the table
    figma.currentPage.selection = [tableFrame];
    figma.viewport.scrollAndZoomIntoView([tableFrame]);

    console.log('Table generation completed in generateTable.');
    return tableFrame;
  } catch (error) {
    console.error('Error generating table within generateTable function:', error);
    figma.notify(`Error generating table: ${error.message}`);
    return null;
  }
}

function getDefaultValueForType(type) {
  switch (type) {
    case "checkbox":
      return "☐";
    case "number":
      return "0";
    case "currency":
      return "$0.00";
    case "select":
      return "Select...";
    default:
      return "Text";
  }
}

figma.ui.onmessage = async (msg) => {
  console.log('Plugin received message:', msg.type, msg);
  if (msg.type === 'generate-custom-table') {
    try {
      const columns = msg.columns;
      if (!columns || columns.length === 0) {
        throw new Error('No columns selected for custom table generation.');
      }
      console.log('Generating custom table with columns:', columns);
      await generateTable('Custom Table', columns);
      console.log('About to post custom-generation-complete message.');
      figma.ui.postMessage({ type: 'custom-generation-complete' });
    } catch (error) {
      console.error('Error generating custom table:', error);
      console.log('About to post custom-generation-error message.');
      figma.ui.postMessage({ type: 'custom-generation-error', error: error.message });
    }
  } else if (msg.type === 'generate-preset-table') {
    try {
      const { module, preset, viewType } = msg;
      console.log(`Generating preset table for module: ${module}, preset: ${preset}, viewType: ${viewType}`);
      await createTableFromPreset(module, preset, viewType);
      console.log('About to post generation-complete message.');
      figma.ui.postMessage({ type: 'generation-complete' });
    } catch (error) {
      console.error('Error generating preset table:', error);
      console.log('About to post generation-error message.');
      figma.ui.postMessage({ type: 'generation-error', error: error.message });
    }
  }
};
