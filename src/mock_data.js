// export const a = [
//     {
//       "name": "components",
//       "type": null,
//       "x": null,
//       "y": null,
//       "controls": null,
//       "parentControl": null,
//       "properties": {},
//       "childControls": []
//     },
//     {
//       "name": "entityPanelAlternateServiceDetail",
//       "type": null,
//       "x": 0,
//       "y": 0,
//       "controls": [
//         "headerGroupAlternateService"
//       ],
//       "parentControl": null,
//       "properties": {
//         "entityPanelAlternateServiceDetail": "HealthEdge.Controls.MetadataDriven.EntityPanel",
//         "AutoHeight": true,
//         "AutoWidth": false,
//         "Dock": "Top",
//         "Entity": null,
//         "EntityType": "AlternateServiceDetail",
//         "Hidden": false,
//         "Size": {
//           "width": 707,
//           "height": 150
//         },
//         "TabIndex": 0,
//         "TabOrderStyle": "Horizontal",
//         "XPadding": 0,
//         "YPadding": 0,
//         "Layout": "System.Windows.Forms.LayoutEventHandler"
//       },
//       "childControls": [
//         {
//           "name": "headerGroupAlternateService",
//           "type": null,
//           "x": 0,
//           "y": 0,
//           "controls": [
//             "subEntityPanelFromService",
//             "subEntityPanelToService",
//             "subEntityPanelAlternateServiceSchedule",
//             "labelControlSchedule",
//             "comboBoxAlternateSchedule"
//           ],
//           "parentControl": "entityPanelAlternateServiceDetail",
//           "properties": {
//             "headerGroupAlternateService": "HealthEdge.Controls.HeaderGroupControl",
//             "AllowAdd": false,
//             "AllowDelete": false,
//             "AlwaysFireAddedEvent": false,
//             "Dock": "Top",
//             "RepeatableTypeName": null,
//             "Size": {
//               "width": 707,
//               "height": 127
//             },
//             "TabIndex": 0,
//             "TabOrderStyle": "Horizontal",
//             "Text": "Alternate Service Detail",
//             "Row": 0,
//             "Column": 0
//           },
//           "childControls": [
//             {
//               "name": "subEntityPanelFromService",
//               "type": null,
//               "x": 4,
//               "y": 56,
//               "controls": [
//                 "autoEditFromServiceDescription",
//                 "codeAutoEditFromService"
//               ],
//               "parentControl": "headerGroupAlternateService",
//               "properties": {
//                 "subEntityPanelFromService": "HealthEdge.Controls.MetadataDriven.SubEntityPanel",
//                 "AutoHeight": true,
//                 "AutoWidth": false,
//                 "EntityType": "Service",
//                 "Hidden": false,
//                 "Path": "FromService",
//                 "ReadOnly": true,
//                 "Size": {
//                   "width": 687,
//                   "height": 28
//                 },
//                 "TabIndex": 8,
//                 "XPadding": 0,
//                 "YPadding": 0,
//                 "Row": 3,
//                 "Column": 1
//               },
//               "childControls": [
//                 {
//                   "name": "autoEditFromServiceDescription",
//                   "type": "textbox",
//                   "x": 348,
//                   "y": 5,
//                   "controls": null,
//                   "parentControl": "subEntityPanelFromService",
//                   "properties": {
//                     "autoEditFromServiceDescription": "HealthEdge.Controls.MetadataDriven.AutoEdit",
//                     "AlertTypeName": null,
//                     "AttachedReferenceMenuButton": null,
//                     "AutoShowPopup": true,
//                     "ComboBoxItems": null,
//                     "CustomLookupNameValues": null,
//                     "EditType": "Automatic",
//                     "EditValue": null,
//                     "EnableCustomMask": false,
//                     "Enabled": false,
//                     "HasPrivacyInfo": false,
//                     "HideLabel": false,
//                     "HideShortDescriptionField": false,
//                     "IgnoreMask": false,
//                     "IgnorePropertyChangedEvent": false,
//                     "LabelDock": "Left",
//                     "LabelText": "Description:",
//                     "LabelTextAlignment": "MiddleLeft",
//                     "LabelWidth": 0,
//                     "LinkType": null,
//                     "LongDescriptionField": "",
//                     "Path": "ServiceShortDescription",
//                     "PositiveOnlyCurrency": false,
//                     "ReadOnly": true,
//                     "ShortDescriptionField": "",
//                     "Size": {
//                       "width": 322,
//                       "height": 20
//                     },
//                     "TabIndex": 10,
//                     "ToolTipPath": null,
//                     "BeforeReadOnlyChanged": "HealthEdge.Controls.BeforeReadOnlyChangedEventHandler",
//                     "Row": 1,
//                     "Column": 1
//                   },
//                   "childControls": []
//                 },
//                 {
//                   "name": "codeAutoEditFromService",
//                   "type": "textbox",
//                   "x": 7,
//                   "y": 4,
//                   "controls": null,
//                   "parentControl": "subEntityPanelFromService",
//                   "properties": {
//                     "codeAutoEditFromService": "HealthEdge.Controls.MetadataDriven.CodeAutoEdit",
//                     "AlertTypeName": null,
//                     "AlignmentColumn": "Column1",
//                     "AttachedReferenceMenuButton": null,
//                     "AutoShowPopup": true,
//                     "ComboBoxItems": null,
//                     "CustomLookupNameValues": null,
//                     "EditType": "CodeHyperlinkEdit",
//                     "EditValue": null,
//                     "EnableCustomMask": false,
//                     "HasPrivacyInfo": false,
//                     "HideLabel": false,
//                     "HideShortDescriptionField": false,
//                     "IgnoreMask": false,
//                     "IgnorePropertyChangedEvent": false,
//                     "LabelDock": "Left",
//                     "LabelText": "Service From:",
//                     "LabelTextAlignment": "MiddleLeft",
//                     "LabelWidth": 88,
//                     "LinkType": null,
//                     "LongDescriptionField": "ServiceLongDescription",
//                     "Path": "ServiceCode",
//                     "PositiveOnlyCurrency": false,
//                     "ReadOnly": true,
//                     "ReferencePanel": "subEntityPanelFromService",
//                     "ShortDescriptionField": "ServiceShortDescription",
//                     "Size": {
//                       "width": 294,
//                       "height": 21
//                     },
//                     "TabIndex": 9,
//                     "ToolTipPath": null,
//                     "BeforeReadOnlyChanged": "HealthEdge.Controls.BeforeReadOnlyChangedEventHandler",
//                     "OnEditValueChanged": "System.EventHandler",
//                     "Row": 0,
//                     "Column": 0
//                   },
//                   "childControls": []
//                 }
//               ]
//             },
//             {
//               "name": "subEntityPanelToService",
//               "type": null,
//               "x": 3,
//               "y": 87,
//               "controls": [
//                 "autoEditToServiceDescription",
//                 "codeAutoEditToService"
//               ],
//               "parentControl": "headerGroupAlternateService",
//               "properties": {
//                 "subEntityPanelToService": "HealthEdge.Controls.MetadataDriven.SubEntityPanel",
//                 "AutoHeight": true,
//                 "AutoWidth": false,
//                 "EntityType": "Service",
//                 "Hidden": false,
//                 "Path": "ToService",
//                 "ReadOnly": true,
//                 "Size": {
//                   "width": 688,
//                   "height": 28
//                 },
//                 "TabIndex": 11,
//                 "XPadding": 0,
//                 "YPadding": 0,
//                 "EntityChanged": "System.EventHandler",
//                 "Row": 4,
//                 "Column": 1
//               },
//               "childControls": [
//                 {
//                   "name": "autoEditToServiceDescription",
//                   "type": "textbox",
//                   "x": 349,
//                   "y": 5,
//                   "controls": null,
//                   "parentControl": "subEntityPanelToService",
//                   "properties": {
//                     "autoEditToServiceDescription": "HealthEdge.Controls.MetadataDriven.AutoEdit",
//                     "AlertTypeName": null,
//                     "AttachedReferenceMenuButton": null,
//                     "AutoShowPopup": true,
//                     "ComboBoxItems": null,
//                     "CustomLookupNameValues": null,
//                     "EditType": "Automatic",
//                     "EditValue": null,
//                     "EnableCustomMask": false,
//                     "Enabled": false,
//                     "HasPrivacyInfo": false,
//                     "HideLabel": false,
//                     "HideShortDescriptionField": false,
//                     "IgnoreMask": false,
//                     "IgnorePropertyChangedEvent": false,
//                     "LabelDock": "Left",
//                     "LabelText": "Description:",
//                     "LabelTextAlignment": "MiddleLeft",
//                     "LabelWidth": 0,
//                     "LinkType": null,
//                     "LongDescriptionField": "",
//                     "Path": "ServiceShortDescription",
//                     "PositiveOnlyCurrency": false,
//                     "ReadOnly": true,
//                     "ShortDescriptionField": "",
//                     "Size": {
//                       "width": 322,
//                       "height": 20
//                     },
//                     "TabIndex": 13,
//                     "ToolTipPath": null,
//                     "BeforeReadOnlyChanged": "HealthEdge.Controls.BeforeReadOnlyChangedEventHandler",
//                     "Row": 1,
//                     "Column": 1
//                   },
//                   "childControls": []
//                 },
//                 {
//                   "name": "codeAutoEditToService",
//                   "type": "textbox",
//                   "x": 7,
//                   "y": 4,
//                   "controls": null,
//                   "parentControl": "subEntityPanelToService",
//                   "properties": {
//                     "codeAutoEditToService": "HealthEdge.Controls.MetadataDriven.CodeAutoEdit",
//                     "AlertTypeName": null,
//                     "AlignmentColumn": "Column1",
//                     "AttachedReferenceMenuButton": null,
//                     "AutoShowPopup": true,
//                     "ComboBoxItems": null,
//                     "CustomLookupNameValues": null,
//                     "EditType": "CodeHyperlinkEdit",
//                     "EditValue": null,
//                     "EnableCustomMask": false,
//                     "HasPrivacyInfo": false,
//                     "HideLabel": false,
//                     "HideShortDescriptionField": false,
//                     "IgnoreMask": false,
//                     "IgnorePropertyChangedEvent": false,
//                     "LabelDock": "Left",
//                     "LabelText": "Service To:",
//                     "LabelTextAlignment": "MiddleLeft",
//                     "LabelWidth": 88,
//                     "LinkType": null,
//                     "LongDescriptionField": "ServiceLongDescription",
//                     "Path": "ServiceCode",
//                     "PositiveOnlyCurrency": false,
//                     "ReadOnly": true,
//                     "ReferencePanel": "subEntityPanelToService",
//                     "ShortDescriptionField": "ServiceShortDescription",
//                     "Size": {
//                       "width": 294,
//                       "height": 21
//                     },
//                     "TabIndex": 12,
//                     "ToolTipPath": null,
//                     "OnEditValueChanged": "System.EventHandler",
//                     "Row": 0,
//                     "Column": 0
//                   },
//                   "childControls": []
//                 }
//               ]
//             },
//             {
//               "name": "subEntityPanelAlternateServiceSchedule",
//               "type": null,
//               "x": 4,
//               "y": 28,
//               "controls": [
//                 "autoEditAlternateServiceSchedule"
//               ],
//               "parentControl": "headerGroupAlternateService",
//               "properties": {
//                 "subEntityPanelAlternateServiceSchedule": "HealthEdge.Controls.MetadataDriven.SubEntityPanel",
//                 "AutoHeight": true,
//                 "AutoWidth": false,
//                 "CreateIfEmpty": true,
//                 "EntityType": "AlternateServiceSchedule",
//                 "Hidden": false,
//                 "Path": "Schedule",
//                 "ReadOnly": true,
//                 "Size": {
//                   "width": 328,
//                   "height": 22
//                 },
//                 "TabIndex": 3,
//                 "XPadding": 0,
//                 "YPadding": 0,
//                 "Row": 0,
//                 "Column": 0
//               },
//               "childControls": [
//                 {
//                   "name": "autoEditAlternateServiceSchedule",
//                   "type": "textbox",
//                   "x": 7,
//                   "y": 2,
//                   "controls": null,
//                   "parentControl": "subEntityPanelAlternateServiceSchedule",
//                   "properties": {
//                     "autoEditAlternateServiceSchedule": "HealthEdge.Controls.MetadataDriven.AutoEdit",
//                     "AlertTypeName": null,
//                     "AlignmentColumn": "Column1",
//                     "AttachedReferenceMenuButton": null,
//                     "AutoShowPopup": true,
//                     "ComboBoxItems": null,
//                     "CustomLookupNameValues": null,
//                     "EditType": "Automatic",
//                     "EditValue": null,
//                     "EnableCustomMask": false,
//                     "HasPrivacyInfo": false,
//                     "HideLabel": false,
//                     "HideShortDescriptionField": false,
//                     "IgnoreMask": false,
//                     "IgnorePropertyChangedEvent": false,
//                     "LabelDock": "Left",
//                     "LabelText": "Schedule Name:",
//                     "LabelTextAlignment": "MiddleLeft",
//                     "LabelWidth": 88,
//                     "LinkType": null,
//                     "LongDescriptionField": "",
//                     "Path": "ScheduleName",
//                     "PositiveOnlyCurrency": false,
//                     "ReadOnly": true,
//                     "ShortDescriptionField": "",
//                     "Size": {
//                       "width": 294,
//                       "height": 21
//                     },
//                     "TabIndex": 4,
//                     "ToolTipPath": null,
//                     "Row": 0,
//                     "Column": 0
//                   },
//                   "childControls": []
//                 }
//               ]
//             },
//             {
//               "name": "labelControlSchedule",
//               "type": null,
//               "x": 12,
//               "y": 32,
//               "controls": null,
//               "parentControl": "headerGroupAlternateService",
//               "properties": {
//                 "labelControlSchedule": "DevExpress.XtraEditors.LabelControl",
//                 "Size": {
//                   "width": 77,
//                   "height": 13
//                 },
//                 "TabIndex": 7,
//                 "Text": "Schedule Name:",
//                 "Row": 2,
//                 "Column": 1
//               },
//               "childControls": []
//             },
//             {
//               "name": "comboBoxAlternateSchedule",
//               "type": null,
//               "x": 98,
//               "y": 30,
//               "controls": null,
//               "parentControl": "headerGroupAlternateService",
//               "properties": {
//                 "comboBoxAlternateSchedule": "DevExpress.XtraEditors.ComboBoxEdit",
//                 "Properties.AllowNullInput": "False",
//                 "Size": {
//                   "width": 206,
//                   "height": 20
//                 },
//                 "TabIndex": 5,
//                 "Row": 1,
//                 "Column": 1
//               },
//               "childControls": []
//             }
//           ]
//         }
//       ]
//     }
//   ]


// export const a = [
//   {
//     "name": "components",
//     "type": null,
//     "x": null,
//     "y": null,
//     "controls": null,
//     "parentControl": null,
//     "properties": {},
//     "childControls": []
//   },
//   {
//     "name": "autoEditDiagnosisCode",
//     "type": "textbox",
//     "x": 9,
//     "y": 2,
//     "controls": null,
//     "parentControl": null,
//     "properties": {
//       "autoEditDiagnosisCode": "HealthEdge.Controls.MetadataDriven.CodeAutoEdit",
//       "AlertTypeName": null,
//       "AlignmentColumn": "Column1",
//       "AttachedReferenceMenuButton": null,
//       "AutoShowPopup": true,
//       "ComboBoxItems": null,
//       "CustomAlertImage": null,
//       "CustomAlertToolTipText": null,
//       "CustomAlertToolTipTitle": null,
//       "CustomLookupNameValues": null,
//       "EditType": "CodeHyperlinkEdit",
//       "EnableCustomMask": false,
//       "EnableTextEditor": false,
//       "HasPrivacyInfo": false,
//       "HideLabel": false,
//       "HideShortDescriptionField": false,
//       "IgnoreMask": false,
//       "IgnorePropertyChangedEvent": true,
//       "LabelDock": "Left",
//       "LabelText": "Diagnosis Code",
//       "LabelWidth": 95,
//       "LinkType": null,
//       "LongDescriptionField": "DiagnosisLongDescription",
//       "NullValuePrompt": null,
//       "Padding": "System.Windows.Forms.Padding",
//       "Path": "DiagnosisCode",
//       "PHIRestricted": false,
//       "PositiveOnlyCurrency": false,
//       "ReadOnly": true,
//       "ReferencePanel": null,
//       "ShortDescriptionField": "DiagnosisShortDescription",
//       "ShowCustomAlert": false,
//       "Size": {
//         "width": 175,
//         "height": 20
//       },
//       "TabIndex": 1,
//       "ToolTipPath": null,
//       "Leave": "System.EventHandler"
//     },
//     "childControls": []
//   },
//   {
//     "name": "autoEditDescription",
//     "type": "textbox",
//     "x": 253,
//     "y": 2,
//     "controls": null,
//     "parentControl": null,
//     "properties": {
//       "autoEditDescription": "HealthEdge.Controls.MetadataDriven.AutoEdit",
//       "AlertTypeName": null,
//       "AlignmentColumn": "Column5",
//       "AllowEditing": false,
//       "AttachedReferenceMenuButton": "diagnosisResolverButton",
//       "AutoShowPopup": true,
//       "ComboBoxItems": null,
//       "CustomAlertImage": null,
//       "CustomAlertToolTipText": null,
//       "CustomAlertToolTipTitle": null,
//       "CustomLookupNameValues": null,
//       "EditType": "Automatic",
//       "EnableCustomMask": false,
//       "Enabled": false,
//       "EnableTextEditor": false,
//       "HasPrivacyInfo": false,
//       "HideLabel": false,
//       "HideShortDescriptionField": false,
//       "IgnoreMask": false,
//       "IgnorePropertyChangedEvent": false,
//       "LabelDock": "Left",
//       "LabelText": "Description",
//       "LabelWidth": 0,
//       "LinkType": null,
//       "LongDescriptionField": null,
//       "NullValuePrompt": null,
//       "Padding": "System.Windows.Forms.Padding",
//       "Path": "DiagnosisShortDescription",
//       "PHIRestricted": false,
//       "PositiveOnlyCurrency": false,
//       "ReadOnly": true,
//       "ShortDescriptionField": null,
//       "ShowCustomAlert": false,
//       "Size": {
//         "width": 322,
//         "height": 20
//       },
//       "TabIndex": 3,
//       "ToolTipPath": null
//     },
//     "childControls": []
//   },
//   {
//     "name": "autoEditCodeType",
//     "type": "textbox",
//     "x": 585,
//     "y": 2,
//     "controls": null,
//     "parentControl": null,
//     "properties": {
//       "autoEditCodeType": "HealthEdge.Controls.MetadataDriven.AutoEdit",
//       "AlertTypeName": null,
//       "AllowEditing": false,
//       "AttachedReferenceMenuButton": "diagnosisResolverButton",
//       "AutoShowPopup": true,
//       "ComboBoxItems": null,
//       "CustomAlertImage": null,
//       "CustomAlertToolTipText": null,
//       "CustomAlertToolTipTitle": null,
//       "CustomLookupNameValues": null,
//       "EditType": "Automatic",
//       "EnableCustomMask": false,
//       "EnableTextEditor": false,
//       "HasPrivacyInfo": false,
//       "HideLabel": false,
//       "HideShortDescriptionField": false,
//       "IgnoreMask": false,
//       "IgnorePropertyChangedEvent": false,
//       "LabelDock": "Left",
//       "LabelText": "",
//       "LabelWidth": 0,
//       "LinkType": null,
//       "LongDescriptionField": null,
//       "NullValuePrompt": null,
//       "Padding": "System.Windows.Forms.Padding",
//       "Path": "DiagnosisTypeCode",
//       "PHIRestricted": false,
//       "PositiveOnlyCurrency": false,
//       "ReadOnly": true,
//       "ShortDescriptionField": null,
//       "ShowCustomAlert": false,
//       "Size": {
//         "width": 46,
//         "height": 20
//       },
//       "TabIndex": 4,
//       "ToolTipPath": null
//     },
//     "childControls": []
//   },
//   {
//     "name": "diagnosisResolverButton",
//     "type": "button",
//     "x": 195,
//     "y": 2,
//     "controls": null,
//     "parentControl": null,
//     "properties": {
//       "diagnosisResolverButton": "HealthEdge.Controls.ReferenceMenuButton",
//       "Appearance.Image": "diagnosisResolverButton.Appearance.Image",
//       "Appearance.Options.UseImage": true,
//       "AutoPosition": true,
//       "CanCreate": false,
//       "CreateDocumentType": "None",
//       "Down": false,
//       "MaximumSize": {
//         "width": 18,
//         "height": 18
//       },
//       "ResolverTypeName": "HealthEdge.Controls.Inquiry.DiagnosisResolver",
//       "Size": {
//         "width": 18,
//         "height": 18
//       },
//       "SubEntityPanel": null,
//       "TabIndex": 2,
//       "TargetControlName": "autoEditDiagnosisCode",
//       "Visible": false,
//       "Resolved": "HealthEdge.Controls.ReferenceResolved",
//       "ClearClicked": "System.EventHandler"
//     },
//     "childControls": []
//   }
// ]

// export const a = [
//   {
//     "name": "components",
//     "type": null,
//     "x": null,
//     "y": null,
//     "controls": null,
//     "parentControl": null,
//     "properties": {},
//     "childControls": []
//   },
//   {
//     "name": "autoEditProcedureCode",
//     "type": "textbox",
//     "x": 9,
//     "y": 6,
//     "controls": null,
//     "parentControl": null,
//     "properties": {
//       "autoEditProcedureCode": "HealthEdge.Controls.MetadataDriven.CodeAutoEdit",
//       "AlertTypeName": null,
//       "AttachedReferenceMenuButton": null,
//       "AutoShowPopup": true,
//       "ComboBoxItems": null,
//       "CustomAlertImage": null,
//       "CustomAlertToolTipText": null,
//       "CustomAlertToolTipTitle": null,
//       "CustomLookupNameValues": null,
//       "EditType": "CodeHyperlinkEdit",
//       "EnableCustomMask": false,
//       "EnableTextEditor": false,
//       "HasPrivacyInfo": false,
//       "HideLabel": false,
//       "HideShortDescriptionField": false,
//       "IgnoreMask": false,
//       "IgnorePropertyChangedEvent": false,
//       "LabelDock": "Left",
//       "LabelText": "Procedure Code:",
//       "LabelTextAlignment": "MiddleLeft",
//       "LabelWidth": 90,
//       "LinkType": null,
//       "LongDescriptionField": "LongDescription",
//       "NullValuePrompt": null,
//       "Path": "ProcedureCode",
//       "PHIRestricted": false,
//       "PositiveOnlyCurrency": false,
//       "ReadOnly": true,
//       "ReferencePanel": null,
//       "ShortDescriptionField": "ShortDescription",
//       "ShowCustomAlert": false,
//       "Size": {
//         "width": 175,
//         "height": 20
//       },
//       "TabIndex": 1,
//       "ToolTipPath": "ShortDescription",
//       "Leave": "System.EventHandler"
//     },
//     "childControls": []
//   },
//   {
//     "name": "autoEditCodeType",
//     "type": "textbox",
//     "x": 565,
//     "y": 6,
//     "controls": null,
//     "parentControl": null,
//     "properties": {
//       "autoEditCodeType": "HealthEdge.Controls.MetadataDriven.AutoEdit",
//       "AlertTypeName": null,
//       "AllowEditing": false,
//       "AttachedReferenceMenuButton": null,
//       "AutoShowPopup": true,
//       "ComboBoxItems": null,
//       "CustomAlertImage": null,
//       "CustomAlertToolTipText": null,
//       "CustomAlertToolTipTitle": null,
//       "CustomLookupNameValues": null,
//       "EditType": "Automatic",
//       "EnableCustomMask": false,
//       "EnableTextEditor": false,
//       "HasPrivacyInfo": false,
//       "HideLabel": false,
//       "HideShortDescriptionField": false,
//       "IgnoreMask": false,
//       "IgnorePropertyChangedEvent": false,
//       "LabelDock": "Left",
//       "LabelText": "",
//       "LabelTextAlignment": "MiddleLeft",
//       "LabelWidth": 0,
//       "LinkType": null,
//       "NullValuePrompt": null,
//       "Path": "ProcedureTypeCode",
//       "PHIRestricted": false,
//       "PositiveOnlyCurrency": false,
//       "ReadOnly": true,
//       "ShowCustomAlert": false,
//       "Size": {
//         "width": 93,
//         "height": 20
//       },
//       "TabIndex": 4,
//       "ToolTipPath": null
//     },
//     "childControls": []
//   },
//   {
//     "name": "procedureResolverButton",
//     "type": "button",
//     "x": 189,
//     "y": 6,
//     "controls": null,
//     "parentControl": null,
//     "properties": {
//       "procedureResolverButton": "HealthEdge.Controls.ReferenceMenuButton",
//       "AutoPosition": true,
//       "CanCreate": false,
//       "CreateDocumentType": "None",
//       "Down": false,
//       "Image": "procedureResolverButton.Image",
//       "ImageLocation": "MiddleCenter",
//       "MaximumSize": {
//         "width": 18,
//         "height": 18
//       },
//       "ResolverTypeName": "HealthEdge.Controls.Inquiry.ProcedureCodeResolver",
//       "Size": {
//         "width": 18,
//         "height": 18
//       },
//       "SubEntityPanel": null,
//       "TabIndex": 2,
//       "TargetControlName": "autoEditProcedureCode",
//       "Visible": false,
//       "Resolved": "HealthEdge.Controls.ReferenceResolved",
//       "ClearClicked": "System.EventHandler"
//     },
//     "childControls": []
//   },
//   {
//     "name": "autoEditDescription",
//     "type": "textbox",
//     "x": 233,
//     "y": 6,
//     "controls": null,
//     "parentControl": null,
//     "properties": {
//       "autoEditDescription": "HealthEdge.Controls.MetadataDriven.AutoEdit",
//       "AlertTypeName": null,
//       "AllowEditing": false,
//       "AttachedReferenceMenuButton": null,
//       "AutoShowPopup": true,
//       "ComboBoxItems": null,
//       "CustomAlertImage": null,
//       "CustomAlertToolTipText": null,
//       "CustomAlertToolTipTitle": null,
//       "CustomLookupNameValues": null,
//       "EditType": "Automatic",
//       "EnableCustomMask": false,
//       "Enabled": false,
//       "EnableTextEditor": false,
//       "HasPrivacyInfo": false,
//       "HideLabel": false,
//       "HideShortDescriptionField": false,
//       "IgnoreMask": false,
//       "IgnorePropertyChangedEvent": false,
//       "LabelDock": "Left",
//       "LabelText": "Description:",
//       "LabelTextAlignment": "MiddleLeft",
//       "LabelWidth": 0,
//       "LinkType": null,
//       "NullValuePrompt": null,
//       "Path": "ShortDescription",
//       "PHIRestricted": false,
//       "PositiveOnlyCurrency": false,
//       "ReadOnly": true,
//       "ShowCustomAlert": false,
//       "Size": {
//         "width": 322,
//         "height": 20
//       },
//       "TabIndex": 3,
//       "ToolTipPath": null
//     },
//     "childControls": []
//   }
// ]
export const a = [
  {
    "name": "components",
    "type": null,
    "x": null,
    "y": null,
    "controls": null,
    "parentControl": null,
    "properties": {},
    "childControls": []
  },
  {
    "name": "entityPanelAccumulatorAdjustment",
    "type": null,
    "x": 0,
    "y": 0,
    "controls": [
      "panelControlAdjustmentInformation",
      "autoSizingPanelSubscriptionMember"
    ],
    "parentControl": null,
    "properties": {
      "entityPanelAccumulatorAdjustment": "HealthEdge.Controls.MetadataDriven.EntityPanel",
      "AutoHeight": true,
      "AutoWidth": false,
      "Dock": "Fill",
      "EntityType": "AccumulatorAdjustment",
      "Hidden": false,
      "Size": {
        "width": 821,
        "height": 323
      },
      "TabIndex": 0,
      "XPadding": 0,
      "YPadding": 0
    },
    "childControls": [
      {
        "name": "panelControlAdjustmentInformation",
        "type": null,
        "x": 0,
        "y": 115,
        "controls": [
          "autoSizingPanelAdjustmentUnitAndAmount",
          "panelControlGeneral"
        ],
        "parentControl": "entityPanelAccumulatorAdjustment",
        "properties": {
          "panelControlAdjustmentInformation": "HealthEdge.Controls.AutoSizingPanel",
          "AutoHeight": true,
          "AutoWidth": false,
          "Dock": "Top",
          "Hidden": false,
          "Size": {
            "width": 821,
            "height": 195
          },
          "TabIndex": 1,
          "XPadding": 0,
          "YPadding": 0,
          "Row": 1,
          "Column": 0
        },
        "childControls": [
          {
            "name": "autoSizingPanelAdjustmentUnitAndAmount",
            "type": null,
            "x": 0,
            "y": 93,
            "controls": [
              "autoSizingPanelAdjustAmount",
              "panelControlAdjustmentUnitType"
            ],
            "parentControl": "panelControlAdjustmentInformation",
            "properties": {
              "autoSizingPanelAdjustmentUnitAndAmount": "HealthEdge.Controls.AutoSizingPanel",
              "AutoHeight": true,
              "AutoWidth": false,
              "Dock": "Top",
              "Hidden": false,
              "Padding": "System.Windows.Forms.Padding",
              "Size": {
                "width": 821,
                "height": 99
              },
              "TabIndex": 1,
              "XPadding": 0,
              "YPadding": 0,
              "Row": 1,
              "Column": 0
            },
            "childControls": [
              {
                "name": "autoSizingPanelAdjustAmount",
                "type": null,
                "x": 0,
                "y": 42,
                "controls": [
                  "autoEditAdjustmentDays",
                  "autoEditAdjustmentUnitCount",
                  "autoEditAdjustmentDollarAmount"
                ],
                "parentControl": "autoSizingPanelAdjustmentUnitAndAmount",
                "properties": {
                  "autoSizingPanelAdjustAmount": "HealthEdge.Controls.AutoSizingPanel",
                  "AutoHeight": true,
                  "AutoWidth": false,
                  "Dock": "Top",
                  "Hidden": false,
                  "Size": {
                    "width": 821,
                    "height": 31
                  },
                  "TabIndex": 1,
                  "XPadding": 0,
                  "YPadding": 0,
                  "Row": 1,
                  "Column": 0
                },
                "childControls": [
                  {
                    "name": "autoEditAdjustmentDays",
                    "type": "textbox",
                    "x": 533,
                    "y": 7,
                    "controls": null,
                    "parentControl": "autoSizingPanelAdjustAmount",
                    "properties": {
                      "autoEditAdjustmentDays": "HealthEdge.Controls.MetadataDriven.AutoEdit",
                      "AlertTypeName": null,
                      "AlignmentColumn": "Column1",
                      "AttachedReferenceMenuButton": null,
                      "AutoShowPopup": true,
                      "ComboBoxItems": null,
                      "CustomAlertImage": null,
                      "CustomAlertToolTipText": null,
                      "CustomAlertToolTipTitle": null,
                      "CustomLookupNameValues": null,
                      "EditType": "Automatic",
                      "EnableCustomMask": false,
                      "EnableTextEditor": false,
                      "HasPrivacyInfo": false,
                      "HideLabel": false,
                      "HideShortDescriptionField": false,
                      "IgnoreMask": false,
                      "IgnorePropertyChangedEvent": false,
                      "LabelDock": "Left",
                      "LabelText": "Adjustment Days",
                      "LabelWidth": 110,
                      "LinkType": null,
                      "LongDescriptionField": null,
                      "NullValuePrompt": null,
                      "Padding": "System.Windows.Forms.Padding",
                      "Path": "AdjustmentDayCount",
                      "PHIRestricted": false,
                      "PositiveOnlyCurrency": false,
                      "ReadOnly": true,
                      "ShortDescriptionField": null,
                      "ShowCustomAlert": false,
                      "Size": {
                        "width": 278,
                        "height": 20
                      },
                      "TabIndex": 2,
                      "ToolTipPath": null,
                      "Row": 0,
                      "Column": 2
                    },
                    "childControls": []
                  },
                  {
                    "name": "autoEditAdjustmentUnitCount",
                    "type": "textbox",
                    "x": 334,
                    "y": 7,
                    "controls": null,
                    "parentControl": "autoSizingPanelAdjustAmount",
                    "properties": {
                      "autoEditAdjustmentUnitCount": "HealthEdge.Controls.MetadataDriven.AutoEdit",
                      "AlertTypeName": null,
                      "AlignmentColumn": "Column1",
                      "AllowNullInput": true,
                      "AttachedReferenceMenuButton": null,
                      "AutoShowPopup": true,
                      "ComboBoxItems": null,
                      "CustomAlertImage": null,
                      "CustomAlertToolTipText": null,
                      "CustomAlertToolTipTitle": null,
                      "CustomLookupNameValues": null,
                      "EditType": "Automatic",
                      "EnableCustomMask": false,
                      "EnableTextEditor": false,
                      "HasPrivacyInfo": false,
                      "HideLabel": false,
                      "HideShortDescriptionField": false,
                      "IgnoreMask": false,
                      "IgnorePropertyChangedEvent": false,
                      "LabelDock": "Left",
                      "LabelText": "Adjustment Unit",
                      "LabelWidth": 110,
                      "LinkType": null,
                      "LongDescriptionField": null,
                      "NullValuePrompt": null,
                      "Padding": "System.Windows.Forms.Padding",
                      "Path": "AdjustmentUnitCount",
                      "PHIRestricted": false,
                      "PositiveOnlyCurrency": false,
                      "ReadOnly": true,
                      "ShortDescriptionField": null,
                      "ShowCustomAlert": false,
                      "Size": {
                        "width": 278,
                        "height": 20
                      },
                      "TabIndex": 1,
                      "ToolTipPath": null,
                      "Row": 0,
                      "Column": 1
                    },
                    "childControls": []
                  },
                  {
                    "name": "autoEditAdjustmentDollarAmount",
                    "type": "textbox",
                    "x": 7,
                    "y": 7,
                    "controls": null,
                    "parentControl": "autoSizingPanelAdjustAmount",
                    "properties": {
                      "autoEditAdjustmentDollarAmount": "HealthEdge.Controls.MetadataDriven.AutoEdit",
                      "AlertTypeName": null,
                      "AlignmentColumn": "Column1",
                      "AllowNullInput": true,
                      "AttachedReferenceMenuButton": null,
                      "AutoShowPopup": true,
                      "ComboBoxItems": null,
                      "CustomAlertImage": null,
                      "CustomAlertToolTipText": null,
                      "CustomAlertToolTipTitle": null,
                      "CustomLookupNameValues": null,
                      "EditType": "Automatic",
                      "EnableCustomMask": false,
                      "EnableTextEditor": false,
                      "HasPrivacyInfo": false,
                      "HideLabel": false,
                      "HideShortDescriptionField": false,
                      "IgnoreMask": false,
                      "IgnorePropertyChangedEvent": false,
                      "LabelDock": "Left",
                      "LabelText": "Adjustment Amount",
                      "LabelWidth": 110,
                      "LinkType": null,
                      "LongDescriptionField": null,
                      "NullValuePrompt": null,
                      "Padding": "System.Windows.Forms.Padding",
                      "Path": "AdjustmentDollarAmount",
                      "PHIRestricted": false,
                      "PositiveOnlyCurrency": false,
                      "ReadOnly": true,
                      "ShortDescriptionField": null,
                      "ShowCustomAlert": false,
                      "Size": {
                        "width": 278,
                        "height": 20
                      },
                      "TabIndex": 0,
                      "ToolTipPath": null,
                      "Row": 0,
                      "Column": 0
                    },
                    "childControls": []
                  }
                ]
              },
              {
                "name": "panelControlAdjustmentUnitType",
                "type": null,
                "x": 0,
                "y": 6,
                "controls": [
                  "groupBoxAmountOrUnits"
                ],
                "parentControl": "autoSizingPanelAdjustmentUnitAndAmount",
                "properties": {
                  "panelControlAdjustmentUnitType": "HealthEdge.Controls.AutoSizingPanel",
                  "AutoHeight": true,
                  "AutoWidth": false,
                  "Dock": "Top",
                  "Hidden": false,
                  "Size": {
                    "width": 821,
                    "height": 36
                  },
                  "TabIndex": 0,
                  "XPadding": 0,
                  "YPadding": 0,
                  "Row": 0,
                  "Column": 0
                },
                "childControls": [
                  {
                    "name": "groupBoxAmountOrUnits",
                    "type": null,
                    "x": 15,
                    "y": 0,
                    "controls": [
                      "radioGroupAdjustmentUnitType"
                    ],
                    "parentControl": "panelControlAdjustmentUnitType",
                    "properties": {
                      "groupBoxAmountOrUnits": "DevExpress.XtraEditors.GroupControl",
                      "ShowCaption": false,
                      "Size": {
                        "width": 222,
                        "height": 35
                      },
                      "TabIndex": 0,
                      "Row": 0,
                      "Column": 0
                    },
                    "childControls": [
                      {
                        "name": "radioGroupAdjustmentUnitType",
                        "type": "radioButton",
                        "x": 3,
                        "y": 5,
                        "controls": null,
                        "parentControl": "groupBoxAmountOrUnits",
                        "properties": {
                          "radioGroupAdjustmentUnitType": "DevExpress.XtraEditors.RadioGroup",
                          "EditValue": 0,
                          "Margin": "System.Windows.Forms.Padding",
                          "Properties.AllowMouseWheel": false,
                          "Properties.Appearance.BackColor": "Transparent",
                          "Properties.Appearance.Options.UseBackColor": true,
                          "Properties.BorderStyle": "NoBorder",
                          "Items": [
                            {
                              "Type": "DevExpress.XtraEditors.Controls.RadioGroupItem",
                              "value": "0",
                              "Discricption": "Amount"
                            },
                            {
                              "Type": "DevExpress.XtraEditors.Controls.RadioGroupItem",
                              "value": "1",
                              "Discricption": "Units "
                            },
                            {
                              "Type": "DevExpress.XtraEditors.Controls.RadioGroupItem",
                              "value": "2",
                              "Discricption": "Days"
                            }
                          ],
                          "Properties.ReadOnly": true,
                          "Size": {
                            "width": 215,
                            "height": 25
                          },
                          "TabIndex": 0,
                          "SelectedIndexChanged": "System.EventHandler",
                          "Row": 0,
                          "Column": 0
                        },
                        "childControls": []
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "name": "panelControlGeneral",
            "type": null,
            "x": 0,
            "y": 0,
            "controls": [
              "autoEditDescription",
              "autoEditAccumulatorLabel",
              "autoEditStartDate",
              "autoEditEndDate",
              "codeEntryEditAdjustmentSource",
              "codeEntryEditBenefitPlanType"
            ],
            "parentControl": "panelControlAdjustmentInformation",
            "properties": {
              "panelControlGeneral": "HealthEdge.Controls.AutoSizingPanel",
              "AutoHeight": true,
              "AutoWidth": false,
              "Dock": "Top",
              "Hidden": false,
              "Size": {
                "width": 821,
                "height": 93
              },
              "TabIndex": 0,
              "XPadding": 0,
              "YPadding": 0,
              "Row": 0,
              "Column": 0
            },
            "childControls": [
              {
                "name": "autoEditDescription",
                "type": "textbox",
                "x": 354,
                "y": 65,
                "controls": null,
                "parentControl": "panelControlGeneral",
                "properties": {
                  "autoEditDescription": "HealthEdge.Controls.MetadataDriven.AutoEdit",
                  "AlertTypeName": null,
                  "AlignmentColumn": "Column5",
                  "AttachedReferenceMenuButton": null,
                  "AutoShowPopup": true,
                  "ComboBoxItems": null,
                  "CustomAlertImage": null,
                  "CustomAlertToolTipText": null,
                  "CustomAlertToolTipTitle": null,
                  "CustomLookupNameValues": null,
                  "EditType": "Automatic",
                  "EnableCustomMask": false,
                  "EnableTextEditor": false,
                  "HasPrivacyInfo": false,
                  "HideLabel": false,
                  "HideShortDescriptionField": false,
                  "IgnoreMask": false,
                  "IgnorePropertyChangedEvent": false,
                  "LabelDock": "Left",
                  "LabelText": "Description",
                  "LinkType": null,
                  "LongDescriptionField": null,
                  "NullValuePrompt": null,
                  "Padding": "System.Windows.Forms.Padding",
                  "Path": "Description",
                  "PHIRestricted": false,
                  "PositiveOnlyCurrency": false,
                  "ReadOnly": true,
                  "ShortDescriptionField": null,
                  "ShowCustomAlert": false,
                  "Size": {
                    "width": 268,
                    "height": 20
                  },
                  "TabIndex": 5,
                  "ToolTipPath": null,
                  "Row": 4,
                  "Column": 1
                },
                "childControls": []
              },
              {
                "name": "autoEditAccumulatorLabel",
                "type": "textbox",
                "x": 7,
                "y": 36,
                "controls": null,
                "parentControl": "panelControlGeneral",
                "properties": {
                  "autoEditAccumulatorLabel": "HealthEdge.Controls.MetadataDriven.AutoEdit",
                  "AlertTypeName": null,
                  "AlignmentColumn": "Column1",
                  "AttachedReferenceMenuButton": null,
                  "AutoShowPopup": true,
                  "ComboBoxItems": null,
                  "CustomAlertImage": null,
                  "CustomAlertToolTipText": null,
                  "CustomAlertToolTipTitle": null,
                  "CustomLookupNameValues": null,
                  "EditType": "ComboBoxEdit",
                  "EnableCustomMask": false,
                  "EnableTextEditor": false,
                  "HasPrivacyInfo": false,
                  "HideLabel": false,
                  "HideShortDescriptionField": false,
                  "IgnoreMask": false,
                  "IgnorePropertyChangedEvent": false,
                  "LabelDock": "Left",
                  "LabelText": "Provision Label",
                  "LabelWidth": 110,
                  "LinkType": null,
                  "LongDescriptionField": null,
                  "NullValuePrompt": null,
                  "Padding": "System.Windows.Forms.Padding",
                  "Path": "ProvisionLabel",
                  "PHIRestricted": false,
                  "PositiveOnlyCurrency": false,
                  "ReadOnly": true,
                  "ShortDescriptionField": null,
                  "ShowCustomAlert": false,
                  "Size": {
                    "width": 278,
                    "height": 20
                  },
                  "TabIndex": 3,
                  "ToolTipPath": null,
                  "Leave": "System.EventHandler",
                  "Row": 2,
                  "Column": 1
                },
                "childControls": []
              },
              {
                "name": "autoEditStartDate",
                "type": "textbox",
                "x": 7,
                "y": 7,
                "controls": null,
                "parentControl": "panelControlGeneral",
                "properties": {
                  "autoEditStartDate": "HealthEdge.Controls.MetadataDriven.AutoEdit",
                  "AlertTypeName": null,
                  "AlignmentColumn": "Column1",
                  "AttachedReferenceMenuButton": null,
                  "AutoShowPopup": true,
                  "ComboBoxItems": null,
                  "CustomAlertImage": null,
                  "CustomAlertToolTipText": null,
                  "CustomAlertToolTipTitle": null,
                  "CustomLookupNameValues": null,
                  "EditType": "Automatic",
                  "EnableCustomMask": false,
                  "EnableTextEditor": false,
                  "HasPrivacyInfo": false,
                  "HideLabel": false,
                  "HideShortDescriptionField": false,
                  "IgnoreMask": false,
                  "IgnorePropertyChangedEvent": false,
                  "LabelDock": "Left",
                  "LabelText": "Start Date",
                  "LabelWidth": 110,
                  "LinkType": null,
                  "LongDescriptionField": null,
                  "NullValuePrompt": null,
                  "Padding": "System.Windows.Forms.Padding",
                  "Path": "StartDate",
                  "PHIRestricted": false,
                  "PositiveOnlyCurrency": false,
                  "ReadOnly": true,
                  "ShortDescriptionField": null,
                  "ShowCustomAlert": false,
                  "Size": {
                    "width": 278,
                    "height": 20
                  },
                  "TabIndex": 0,
                  "ToolTipPath": null,
                  "OnEditValueChanged": "System.EventHandler",
                  "Leave": "System.EventHandler",
                  "Row": 0,
                  "Column": 0
                },
                "childControls": []
              },
              {
                "name": "autoEditEndDate",
                "type": "textbox",
                "x": 354,
                "y": 7,
                "controls": null,
                "parentControl": "panelControlGeneral",
                "properties": {
                  "autoEditEndDate": "HealthEdge.Controls.MetadataDriven.AutoEdit",
                  "AlertTypeName": null,
                  "AlignmentColumn": "Column5",
                  "AttachedReferenceMenuButton": null,
                  "AutoShowPopup": true,
                  "ComboBoxItems": null,
                  "CustomAlertImage": null,
                  "CustomAlertToolTipText": null,
                  "CustomAlertToolTipTitle": null,
                  "CustomLookupNameValues": null,
                  "EditType": "Automatic",
                  "EnableCustomMask": false,
                  "EnableTextEditor": false,
                  "HasPrivacyInfo": false,
                  "HideLabel": false,
                  "HideShortDescriptionField": false,
                  "IgnoreMask": false,
                  "IgnorePropertyChangedEvent": false,
                  "LabelDock": "Left",
                  "LabelText": "Through Date",
                  "LinkType": null,
                  "LongDescriptionField": null,
                  "NullValuePrompt": null,
                  "Padding": "System.Windows.Forms.Padding",
                  "Path": "EndDate",
                  "PHIRestricted": false,
                  "PositiveOnlyCurrency": false,
                  "ReadOnly": true,
                  "ShortDescriptionField": null,
                  "ShowCustomAlert": false,
                  "Size": {
                    "width": 268,
                    "height": 20
                  },
                  "TabIndex": 1,
                  "ToolTipPath": null,
                  "Row": 0,
                  "Column": 1
                },
                "childControls": []
              },
              {
                "name": "codeEntryEditAdjustmentSource",
                "type": "Default",
                "x": 7,
                "y": 62,
                "controls": null,
                "parentControl": "panelControlGeneral",
                "properties": {
                  "codeEntryEditAdjustmentSource": "HealthEdge.Controls.MetadataDriven.CodeEntryEdit",
                  "AlignmentColumn": "Column1",
                  "AllowDelete": false,
                  "AutoHeight": false,
                  "AutoSize": true,
                  "AutoSizeMode": "GrowAndShrink",
                  "AutoWidth": false,
                  "CodeSetName": "AccumulatorAdjustmentSource",
                  "EditControlWidth": 168,
                  "EditType": "Automatic",
                  "Hidden": false,
                  "Index": 0,
                  "LabelText": "Adjustment Source",
                  "LabelWidth": 110,
                  "Padding": "System.Windows.Forms.Padding",
                  "Path": "AdjustmentSource",
                  "ReadOnly": true,
                  "ShowCodeEntryValueColumn": false,
                  "Size": {
                    "width": 112,
                    "height": 18
                  },
                  "TabIndex": 4,
                  "Row": 3,
                  "Column": 1
                },
                "childControls": []
              },
              {
                "name": "codeEntryEditBenefitPlanType",
                "type": "Default",
                "x": 354,
                "y": 34,
                "controls": null,
                "parentControl": "panelControlGeneral",
                "properties": {
                  "codeEntryEditBenefitPlanType": "HealthEdge.Controls.MetadataDriven.CodeEntryEdit",
                  "AlignmentColumn": "Column5",
                  "AllowDelete": false,
                  "AutoHeight": false,
                  "AutoSize": true,
                  "AutoSizeMode": "GrowAndShrink",
                  "AutoWidth": false,
                  "CodeSetName": "BenefitPlanType",
                  "EditControlWidth": 168,
                  "EditType": "Automatic",
                  "Hidden": false,
                  "Index": 0,
                  "LabelText": "Benefit Plan Type",
                  "Padding": "System.Windows.Forms.Padding",
                  "Path": "BenefitPlanType",
                  "ReadOnly": true,
                  "ShowCodeEntryValueColumn": false,
                  "Size": {
                    "width": 102,
                    "height": 18
                  },
                  "TabIndex": 2,
                  "Row": 1,
                  "Column": 1
                },
                "childControls": []
              }
            ]
          }
        ]
      },
      {
        "name": "autoSizingPanelSubscriptionMember",
        "type": null,
        "x": 0,
        "y": 0,
        "controls": [
          "subEntityPanelAuthorizedMember",
          "subEntityPanelSubscription",
          "panelControlMemberOrSubscription"
        ],
        "parentControl": "entityPanelAccumulatorAdjustment",
        "properties": {
          "autoSizingPanelSubscriptionMember": "HealthEdge.Controls.AutoSizingPanel",
          "AutoHeight": true,
          "AutoWidth": false,
          "Dock": "Top",
          "Hidden": false,
          "Size": {
            "width": 821,
            "height": 115
          },
          "TabIndex": 0,
          "XPadding": 0,
          "YPadding": 0,
          "Row": 0,
          "Column": 0
        },
        "childControls": [
          {
            "name": "subEntityPanelAuthorizedMember",
            "type": null,
            "x": 0,
            "y": 76,
            "controls": [
              "memberMenuButton",
              "subEntityPanelMemberIle",
              "autoEditHccIdentifier"
            ],
            "parentControl": "autoSizingPanelSubscriptionMember",
            "properties": {
              "subEntityPanelAuthorizedMember": "HealthEdge.Controls.MetadataDriven.SubEntityPanel",
              "AutoHeight": true,
              "AutoWidth": false,
              "Dock": "Top",
              "EntityType": "Membership",
              "Hidden": false,
              "Path": "Member",
              "ReadOnly": true,
              "Size": {
                "width": 821,
                "height": 30
              },
              "TabIndex": 2,
              "XPadding": 0,
              "YPadding": 0,
              "EntityChanged": "System.EventHandler",
              "Row": 2,
              "Column": 0
            },
            "childControls": [
              {
                "name": "memberMenuButton",
                "type": "button",
                "x": 312,
                "y": 3,
                "controls": null,
                "parentControl": "subEntityPanelAuthorizedMember",
                "properties": {
                  "memberMenuButton": "HealthEdge.Controls.ReferenceMenuButton",
                  "Appearance.Image": "memberMenuButton.Appearance.Image",
                  "AutoPosition": true,
                  "CanCreate": false,
                  "CreateDocumentType": "None",
                  "Down": false,
                  "ImageOptions.Image": "memberMenuButton.ImageOptions.Image",
                  "ImageOptions.Location": "MiddleCenter",
                  "MaximumSize": {
                    "width": 18,
                    "height": 18
                  },
                  "ResolverTypeName": "HealthEdge.Controls.Inquiry.MemberResolver",
                  "Size": {
                    "width": 18,
                    "height": 18
                  },
                  "SubEntityPanel": "subEntityPanelAuthorizedMember",
                  "TabIndex": 1,
                  "TargetControlName": "subEntityPanelLegalName",
                  "Visible": false,
                  "Resolved": "HealthEdge.Controls.ReferenceResolved",
                  "ClearClicked": "System.EventHandler",
                  "Row": 1,
                  "Column": 1
                },
                "childControls": []
              },
              {
                "name": "subEntityPanelMemberIle",
                "type": null,
                "x": 8,
                "y": 0,
                "controls": [
                  "subEntityPanelLegalName"
                ],
                "parentControl": "subEntityPanelAuthorizedMember",
                "properties": {
                  "subEntityPanelMemberIle": "HealthEdge.Controls.MetadataDriven.SubEntityPanel",
                  "AutoHeight": false,
                  "AutoWidth": false,
                  "EntityType": "IndividualInformation",
                  "Hidden": false,
                  "Path": "Individual",
                  "ReadOnly": true,
                  "Size": {
                    "width": 284,
                    "height": 24
                  },
                  "TabIndex": 0,
                  "XPadding": 0,
                  "YPadding": 0,
                  "Row": 0,
                  "Column": 0
                },
                "childControls": [
                  {
                    "name": "subEntityPanelLegalName",
                    "type": null,
                    "x": 0,
                    "y": 0,
                    "controls": [
                      "personNameViewControl"
                    ],
                    "parentControl": "subEntityPanelMemberIle",
                    "properties": {
                      "subEntityPanelLegalName": "HealthEdge.Controls.MetadataDriven.SubEntityPanel",
                      "AutoHeight": false,
                      "AutoWidth": false,
                      "EntityType": null,
                      "Hidden": false,
                      "Path": "PrimaryName",
                      "ReadOnly": true,
                      "Size": {
                        "width": 285,
                        "height": 25
                      },
                      "TabIndex": 0,
                      "XPadding": 0,
                      "YPadding": 0,
                      "Row": 0,
                      "Column": 0
                    },
                    "childControls": [
                      {
                        "name": "personNameViewControl",
                        "type": "Link",
                        "x": 0,
                        "y": 3,
                        "controls": null,
                        "parentControl": "subEntityPanelLegalName",
                        "properties": {
                          "personNameViewControl": "HealthEdge.Controls.IndividualLegalEntity.PersonNameViewControl",
                          "AlignmentColumn": "Column1",
                          "AttachedReferenceMenuButton": "memberMenuButton",
                          "LabelText": "Member Name: ",
                          "LabelWidth": 110,
                          "Linked": true,
                          "LinkType": "Member",
                          "Margin": "System.Windows.Forms.Padding",
                          "PHI": false,
                          "Size": {
                            "width": 278,
                            "height": 20
                          },
                          "TabIndex": 0,
                          "VIP": false,
                          "LinkClick": "DevExpress.XtraEditors.Controls.OpenLinkEventHandler",
                          "Row": 0,
                          "Column": 0
                        },
                        "childControls": []
                      }
                    ]
                  }
                ]
              },
              {
                "name": "autoEditHccIdentifier",
                "type": "textbox",
                "x": 354,
                "y": 3,
                "controls": null,
                "parentControl": "subEntityPanelAuthorizedMember",
                "properties": {
                  "autoEditHccIdentifier": "HealthEdge.Controls.MetadataDriven.AutoEdit",
                  "AlertTypeName": null,
                  "AlignmentColumn": "Column5",
                  "AllowEditing": false,
                  "AttachedReferenceMenuButton": null,
                  "AutoShowPopup": true,
                  "ComboBoxItems": null,
                  "CustomAlertImage": null,
                  "CustomAlertToolTipText": null,
                  "CustomAlertToolTipTitle": null,
                  "CustomLookupNameValues": null,
                  "EditType": "Automatic",
                  "EnableCustomMask": false,
                  "EnableTextEditor": false,
                  "HasPrivacyInfo": false,
                  "HideLabel": false,
                  "HideShortDescriptionField": false,
                  "IgnoreMask": false,
                  "IgnorePropertyChangedEvent": false,
                  "LabelDock": "Left",
                  "LabelText": "Member ID",
                  "LinkType": null,
                  "LongDescriptionField": null,
                  "NullValuePrompt": null,
                  "Padding": "System.Windows.Forms.Padding",
                  "Path": "HccIdentifier",
                  "PHIRestricted": false,
                  "PositiveOnlyCurrency": false,
                  "ReadOnly": true,
                  "ShortDescriptionField": null,
                  "ShowCustomAlert": false,
                  "Size": {
                    "width": 268,
                    "height": 20
                  },
                  "TabIndex": 2,
                  "ToolTipPath": null,
                  "Row": 1,
                  "Column": 2
                },
                "childControls": []
              }
            ]
          },
          {
            "name": "subEntityPanelSubscription",
            "type": null,
            "x": 0,
            "y": 44,
            "controls": [
              "subscriptionMenuButton",
              "autoEditSubscriptionHccId"
            ],
            "parentControl": "autoSizingPanelSubscriptionMember",
            "properties": {
              "subEntityPanelSubscription": "HealthEdge.Controls.MetadataDriven.SubEntityPanel",
              "AutoHeight": true,
              "AutoWidth": false,
              "Dock": "Top",
              "EntityType": "Subscription",
              "Hidden": false,
              "Path": "Subscription",
              "ReadOnly": true,
              "Size": {
                "width": 821,
                "height": 32
              },
              "TabIndex": 1,
              "XPadding": 0,
              "YPadding": 0,
              "EntityChanged": "System.EventHandler",
              "Row": 1,
              "Column": 0
            },
            "childControls": [
              {
                "name": "subscriptionMenuButton",
                "type": "button",
                "x": 311,
                "y": 2,
                "controls": null,
                "parentControl": "subEntityPanelSubscription",
                "properties": {
                  "subscriptionMenuButton": "HealthEdge.Controls.ReferenceMenuButton",
                  "Appearance.Image": "subscriptionMenuButton.Appearance.Image",
                  "AutoPosition": true,
                  "CanCreate": false,
                  "CreateDocumentType": "None",
                  "Down": false,
                  "ImageOptions.Image": "subscriptionMenuButton.ImageOptions.Image",
                  "ImageOptions.Location": "MiddleCenter",
                  "MaximumSize": {
                    "width": 18,
                    "height": 18
                  },
                  "ResolverTypeName": "HealthEdge.Controls.Inquiry.SubscriptionResolver",
                  "Size": {
                    "width": 18,
                    "height": 18
                  },
                  "SubEntityPanel": "subEntityPanelSubscription",
                  "TabIndex": 1,
                  "TargetControlName": "autoEditSubscriptionHccId",
                  "Visible": false,
                  "Resolved": "HealthEdge.Controls.ReferenceResolved",
                  "ClearClicked": "System.EventHandler",
                  "Row": 0,
                  "Column": 1
                },
                "childControls": []
              },
              {
                "name": "autoEditSubscriptionHccId",
                "type": "textbox",
                "x": 8,
                "y": 2,
                "controls": null,
                "parentControl": "subEntityPanelSubscription",
                "properties": {
                  "autoEditSubscriptionHccId": "HealthEdge.Controls.MetadataDriven.AutoEdit",
                  "AlertTypeName": null,
                  "AlignmentColumn": "Column1",
                  "AllowEditing": false,
                  "AttachedReferenceMenuButton": "subscriptionMenuButton",
                  "AutoShowPopup": true,
                  "ComboBoxItems": null,
                  "CustomAlertImage": null,
                  "CustomAlertToolTipText": null,
                  "CustomAlertToolTipTitle": null,
                  "CustomLookupNameValues": null,
                  "EditType": "HyperLinkEdit",
                  "EnableCustomMask": false,
                  "EnableTextEditor": false,
                  "HasPrivacyInfo": false,
                  "HideLabel": false,
                  "HideShortDescriptionField": false,
                  "IgnoreMask": false,
                  "IgnorePropertyChangedEvent": false,
                  "LabelDock": "Left",
                  "LabelText": "Subscription",
                  "LabelWidth": 110,
                  "LinkType": "Subscription",
                  "LongDescriptionField": null,
                  "NullValuePrompt": null,
                  "Padding": "System.Windows.Forms.Padding",
                  "Path": "HccIdentifier",
                  "PHIRestricted": false,
                  "PositiveOnlyCurrency": false,
                  "ReadOnly": true,
                  "ShortDescriptionField": null,
                  "ShowCustomAlert": false,
                  "Size": {
                    "width": 278,
                    "height": 20
                  },
                  "TabIndex": 0,
                  "ToolTipPath": null,
                  "Row": 0,
                  "Column": 0
                },
                "childControls": []
              }
            ]
          },
          {
            "name": "panelControlMemberOrSubscription",
            "type": null,
            "x": 0,
            "y": 0,
            "controls": [
              "groupMemberOrSubscription"
            ],
            "parentControl": "autoSizingPanelSubscriptionMember",
            "properties": {
              "panelControlMemberOrSubscription": "HealthEdge.Controls.AutoSizingPanel",
              "AutoHeight": true,
              "AutoWidth": false,
              "Dock": "Top",
              "Hidden": false,
              "Size": {
                "width": 821,
                "height": 44
              },
              "TabIndex": 0,
              "XPadding": 0,
              "YPadding": 0,
              "Row": 0,
              "Column": 0
            },
            "childControls": [
              {
                "name": "groupMemberOrSubscription",
                "type": null,
                "x": 15,
                "y": 3,
                "controls": [
                  "radioGroupMemberOrSubscription"
                ],
                "parentControl": "panelControlMemberOrSubscription",
                "properties": {
                  "groupMemberOrSubscription": "DevExpress.XtraEditors.GroupControl",
                  "Appearance.BackColor": "Transparent",
                  "Appearance.Options.UseBackColor": true,
                  "ShowCaption": false,
                  "Size": {
                    "width": 168,
                    "height": 35
                  },
                  "TabIndex": 0,
                  "Row": 0,
                  "Column": 0
                },
                "childControls": [
                  {
                    "name": "radioGroupMemberOrSubscription",
                    "type": "radioButton",
                    "x": 3,
                    "y": 6,
                    "controls": null,
                    "parentControl": "groupMemberOrSubscription",
                    "properties": {
                      "radioGroupMemberOrSubscription": "DevExpress.XtraEditors.RadioGroup",
                      "EditValue": 0,
                      "Margin": "System.Windows.Forms.Padding",
                      "Properties.AllowMouseWheel": false,
                      "Properties.Appearance.BackColor": "Transparent",
                      "Properties.Appearance.Options.UseBackColor": true,
                      "Properties.BorderStyle": "NoBorder",
                      "Items": [
                        {
                          "Type": "DevExpress.XtraEditors.Controls.RadioGroupItem",
                          "value": "0",
                          "Discricption": "Member"
                        },
                        {
                          "Type": "DevExpress.XtraEditors.Controls.RadioGroupItem",
                          "value": "1",
                          "Discricption": "Subscription"
                        }
                      ],
                      "Properties.ReadOnly": true,
                      "Size": {
                        "width": 163,
                        "height": 24
                      },
                      "TabIndex": 0,
                      "SelectedIndexChanged": "System.EventHandler",
                      "Row": 0,
                      "Column": 0
                    },
                    "childControls": []
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
]

// export const a = [
//   {
//     "name": "components",
//     "type": null,
//     "x": null,
//     "y": null,
//     "controls": null,
//     "parentControl": null,
//     "properties": {},
//     "childControls": []
//   },
//   {
//     "name": "entityPanelBenefitSearch",
//     "type": null,
//     "x": 0,
//     "y": 0,
//     "controls": [
//       "xtraScrollableControl"
//     ],
//     "parentControl": null,
//     "properties": {
//       "entityPanelBenefitSearch": "HealthEdge.Controls.MetadataDriven.EntityPanel",
//       "AutoHeight": true,
//       "AutoWidth": false,
//       "Dock": "Fill",
//       "EntityType": "BenefitSearchInput",
//       "Hidden": false,
//       "Size": {
//         "width": 1029,
//         "height": 658
//       },
//       "TabIndex": 0,
//       "XPadding": 0,
//       "YPadding": 0
//     },
//     "childControls": [
//       {
//         "name": "xtraScrollableControl",
//         "type": null,
//         "x": 0,
//         "y": 0,
//         "controls": [
//           "dentalInfoControl",
//           "repeaterPanelModifierCodes",
//           "repeaterPanelProcedureCodes",
//           "repeaterPanelDiagnosisCodes",
//           "headerGroupControlSuppressPartialMatches",
//           "autoSizingPanelBenefitPlanSelection",
//           "autoSizingBenefitPlanPanel",
//           "autoSizingSubscriptionPanel",
//           "autoSizingSupplierPractitionerPanel",
//           "autoSizingPanel3",
//           "autoSizingPanelTop",
//           "autoSizingQuestionPanel"
//         ],
//         "parentControl": "entityPanelBenefitSearch",
//         "properties": {
//           "xtraScrollableControl": "DevExpress.XtraEditors.XtraScrollableControl",
//           "Dock": "Fill",
//           "Size": {
//             "width": 1029,
//             "height": 658
//           },
//           "TabIndex": 0,
//           "TabStop": false,
//           "Row": 0,
//           "Column": 0
//         },
//         "childControls": [
//           {
//             "name": "dentalInfoControl",
//             "type": "Default",
//             "x": 0,
//             "y": 513,
//             "controls": null,
//             "parentControl": "xtraScrollableControl",
//             "properties": {
//               "dentalInfoControl": "HealthEdge.Controls.BenefitPredictor.DentalInfoControl",
//               "AutoHeight": true,
//               "AutoWidth": false,
//               "Dock": "Top",
//               "Hidden": false,
//               "Padding": "System.Windows.Forms.Padding",
//               "Size": {
//                 "width": 1029,
//                 "height": 130
//               },
//               "TabIndex": 11,
//               "DataSourceModified": "System.EventHandler<HealthEdge.Controls.BenefitPredictor.DentalInfoChangedEventArgs>",
//               "Row": 11,
//               "Column": 0
//             },
//             "childControls": []
//           },
//           {
//             "name": "repeaterPanelModifierCodes",
//             "type": "Default",
//             "x": 0,
//             "y": 490,
//             "controls": null,
//             "parentControl": "xtraScrollableControl",
//             "properties": {
//               "repeaterPanelModifierCodes": "HealthEdge.Controls.Repeater.RepeaterPanel",
//               "Dock": "Top",
//               "EntityTypeNameFilter": null,
//               "Margin": "System.Windows.Forms.Padding",
//               "Path": "Modifiers",
//               "ReadOnly": false,
//               "RepeatableTypeName": "HealthEdge.Controls.BenefitPredictor.RepeatableModifierPanel",
//               "Size": {
//                 "width": 1029,
//                 "height": 23
//               },
//               "TabIndex": 10,
//               "TabOrderStyle": "Horizontal",
//               "Text": "Modifiers",
//               "Row": 10,
//               "Column": 0
//             },
//             "childControls": []
//           },
//           {
//             "name": "repeaterPanelProcedureCodes",
//             "type": "Default",
//             "x": 0,
//             "y": 467,
//             "controls": null,
//             "parentControl": "xtraScrollableControl",
//             "properties": {
//               "repeaterPanelProcedureCodes": "HealthEdge.Controls.Repeater.RepeaterPanel",
//               "Dock": "Top",
//               "EntityTypeNameFilter": null,
//               "Margin": "System.Windows.Forms.Padding",
//               "Path": "Procedures",
//               "ReadOnly": false,
//               "RepeatableTypeName": "HealthEdge.Controls.BenefitPredictor.RepeatableProcedurePanel",
//               "Size": {
//                 "width": 1029,
//                 "height": 23
//               },
//               "TabIndex": 9,
//               "TabOrderStyle": "Horizontal",
//               "Text": "Procedures",
//               "AfterRepeatableControlAdded": "HealthEdge.Controls.RepeatableControlEventHandler",
//               "AfterRepeatableControlDeleted": "HealthEdge.Controls.RepeatableControlEventHandler",
//               "Row": 9,
//               "Column": 0
//             },
//             "childControls": []
//           },
//           {
//             "name": "repeaterPanelDiagnosisCodes",
//             "type": "Default",
//             "x": 0,
//             "y": 444,
//             "controls": null,
//             "parentControl": "xtraScrollableControl",
//             "properties": {
//               "repeaterPanelDiagnosisCodes": "HealthEdge.Controls.Repeater.RepeaterPanel",
//               "Dock": "Top",
//               "EntityTypeNameFilter": null,
//               "Margin": "System.Windows.Forms.Padding",
//               "Path": "Diagnoses",
//               "ReadOnly": false,
//               "RepeatableTypeName": "HealthEdge.Controls.BenefitPredictor.RepeatableDiagnosisPanel",
//               "Size": {
//                 "width": 1029,
//                 "height": 23
//               },
//               "TabIndex": 8,
//               "TabOrderStyle": "Horizontal",
//               "Text": "Diagnoses",
//               "Row": 8,
//               "Column": 0
//             },
//             "childControls": []
//           },
//           {
//             "name": "headerGroupControlSuppressPartialMatches",
//             "type": null,
//             "x": 0,
//             "y": 286,
//             "controls": [
//               "labelControlPartialMatchReason",
//               "groupBox",
//               "checkEditSuppressAllPartialMatches"
//             ],
//             "parentControl": "xtraScrollableControl",
//             "properties": {
//               "headerGroupControlSuppressPartialMatches": "HealthEdge.Controls.HeaderGroupControl",
//               "AllowAdd": false,
//               "AllowDelete": false,
//               "Dock": "Top",
//               "ExpandWithContent": false,
//               "Margin": "System.Windows.Forms.Padding",
//               "RepeatableTypeName": null,
//               "Size": {
//                 "width": 1029,
//                 "height": 158
//               },
//               "TabIndex": 7,
//               "Text": "Suppress Partial Match Options",
//               "CollapsedChanged": "System.EventHandler",
//               "Row": 7,
//               "Column": 0
//             },
//             "childControls": [
//               {
//                 "name": "labelControlPartialMatchReason",
//                 "type": "Default",
//                 "x": 33,
//                 "y": 26,
//                 "controls": null,
//                 "parentControl": "headerGroupControlSuppressPartialMatches",
//                 "properties": {
//                   "labelControlPartialMatchReason": "DevExpress.XtraEditors.LabelControl",
//                   "Size": {
//                     "width": 208,
//                     "height": 13
//                   },
//                   "TabIndex": 0,
//                   "Text": "Suppress partial matches for these reasons",
//                   "Row": 1,
//                   "Column": 0
//                 },
//                 "childControls": []
//               },
//               {
//                 "name": "groupBox",
//                 "type": null,
//                 "x": 16,
//                 "y": 40,
//                 "controls": [
//                   "autoEditNoOtherClaims",
//                   "autoEditNoDiagnosis",
//                   "autoEditNoPractitioner",
//                   "autoEditNoService",
//                   "autoEditNoCondition",
//                   "autoEditNoProcedure",
//                   "autoEditNoModifier"
//                 ],
//                 "parentControl": "headerGroupControlSuppressPartialMatches",
//                 "properties": {
//                   "groupBox": "System.Windows.Forms.GroupBox",
//                   "Margin": "System.Windows.Forms.Padding",
//                   "Padding": "System.Windows.Forms.Padding",
//                   "Size": {
//                     "width": 316,
//                     "height": 108
//                   },
//                   "TabIndex": 2,
//                   "TabStop": false,
//                   "Row": 2,
//                   "Column": 0
//                 },
//                 "childControls": [
//                   {
//                     "name": "autoEditNoOtherClaims",
//                     "type": "textbox",
//                     "x": 134,
//                     "y": 29,
//                     "controls": null,
//                     "parentControl": "groupBox",
//                     "properties": {
//                       "autoEditNoOtherClaims": "HealthEdge.Controls.MetadataDriven.AutoEdit",
//                       "AlertTypeName": null,
//                       "AllowNullInput": true,
//                       "AttachedReferenceMenuButton": null,
//                       "AutoShowPopup": true,
//                       "ComboBoxItems": null,
//                       "CustomAlertImage": null,
//                       "CustomAlertToolTipText": null,
//                       "CustomAlertToolTipTitle": null,
//                       "CustomLookupNameValues": null,
//                       "EditType": "Automatic",
//                       "EnableCustomMask": false,
//                       "EnableTextEditor": false,
//                       "HasPrivacyInfo": false,
//                       "HideLabel": false,
//                       "HideShortDescriptionField": false,
//                       "IgnoreMask": false,
//                       "IgnorePropertyChangedEvent": false,
//                       "LabelDock": "Left",
//                       "LabelText": "Dependency On Other Services",
//                       "LabelTextAlignment": "MiddleLeft",
//                       "LabelWidth": 160,
//                       "LinkType": null,
//                       "NullValuePrompt": null,
//                       "Path": "SkipHistoryPartialMatches",
//                       "PHIRestricted": false,
//                       "PositiveOnlyCurrency": false,
//                       "ShowCustomAlert": false,
//                       "Size": {
//                         "width": 178,
//                         "height": 20
//                       },
//                       "TabIndex": 3,
//                       "ToolTip": "in a certain timeframe",
//                       "ToolTipPath": null,
//                       "OnEditValueChanged": "System.EventHandler",
//                       "Row": 1,
//                       "Column": 1
//                     },
//                     "childControls": []
//                   },
//                   {
//                     "name": "autoEditNoDiagnosis",
//                     "type": "textbox",
//                     "x": 10,
//                     "y": 29,
//                     "controls": null,
//                     "parentControl": "groupBox",
//                     "properties": {
//                       "autoEditNoDiagnosis": "HealthEdge.Controls.MetadataDriven.AutoEdit",
//                       "AlertTypeName": null,
//                       "AllowNullInput": true,
//                       "AttachedReferenceMenuButton": null,
//                       "AutoShowPopup": true,
//                       "ComboBoxItems": null,
//                       "CustomAlertImage": null,
//                       "CustomAlertToolTipText": null,
//                       "CustomAlertToolTipTitle": null,
//                       "CustomLookupNameValues": null,
//                       "EditType": "Automatic",
//                       "EnableCustomMask": false,
//                       "EnableTextEditor": false,
//                       "HasPrivacyInfo": false,
//                       "HideLabel": false,
//                       "HideShortDescriptionField": false,
//                       "IgnoreMask": false,
//                       "IgnorePropertyChangedEvent": false,
//                       "LabelDock": "Left",
//                       "LabelText": "Diagnosis",
//                       "LabelTextAlignment": "MiddleLeft",
//                       "LabelWidth": 75,
//                       "LinkType": null,
//                       "NullValuePrompt": null,
//                       "Path": "NoDiagnosis",
//                       "PHIRestricted": false,
//                       "PositiveOnlyCurrency": false,
//                       "ShowCustomAlert": false,
//                       "Size": {
//                         "width": 108,
//                         "height": 20
//                       },
//                       "TabIndex": 2,
//                       "ToolTip": "Suppress partial matches that depend on diagnosis",
//                       "ToolTipPath": null,
//                       "OnEditValueChanged": "System.EventHandler",
//                       "Row": 1,
//                       "Column": 1
//                     },
//                     "childControls": []
//                   },
//                   {
//                     "name": "autoEditNoPractitioner",
//                     "type": "textbox",
//                     "x": 134,
//                     "y": 12,
//                     "controls": null,
//                     "parentControl": "groupBox",
//                     "properties": {
//                       "autoEditNoPractitioner": "HealthEdge.Controls.MetadataDriven.AutoEdit",
//                       "AlertTypeName": null,
//                       "AllowNullInput": true,
//                       "AttachedReferenceMenuButton": null,
//                       "AutoShowPopup": true,
//                       "ComboBoxItems": null,
//                       "CustomAlertImage": null,
//                       "CustomAlertToolTipText": null,
//                       "CustomAlertToolTipTitle": null,
//                       "CustomLookupNameValues": null,
//                       "EditType": "Automatic",
//                       "EnableCustomMask": false,
//                       "EnableTextEditor": false,
//                       "HasPrivacyInfo": false,
//                       "HideLabel": false,
//                       "HideShortDescriptionField": false,
//                       "IgnoreMask": false,
//                       "IgnorePropertyChangedEvent": false,
//                       "LabelDock": "Left",
//                       "LabelText": "Practitioner",
//                       "LabelTextAlignment": "MiddleLeft",
//                       "LabelWidth": 160,
//                       "LinkType": null,
//                       "NullValuePrompt": null,
//                       "Path": "NoPractitioner",
//                       "PHIRestricted": false,
//                       "PositiveOnlyCurrency": false,
//                       "ShowCustomAlert": false,
//                       "Size": {
//                         "width": 178,
//                         "height": 20
//                       },
//                       "TabIndex": 1,
//                       "ToolTip": "Suppress partial matches that depend on rendering practitioner",
//                       "ToolTipPath": null,
//                       "OnEditValueChanged": "System.EventHandler",
//                       "Row": 0,
//                       "Column": 1
//                     },
//                     "childControls": []
//                   },
//                   {
//                     "name": "autoEditNoService",
//                     "type": "textbox",
//                     "x": 10,
//                     "y": 12,
//                     "controls": null,
//                     "parentControl": "groupBox",
//                     "properties": {
//                       "autoEditNoService": "HealthEdge.Controls.MetadataDriven.AutoEdit",
//                       "AlertTypeName": null,
//                       "AllowNullInput": true,
//                       "AttachedReferenceMenuButton": null,
//                       "AutoShowPopup": true,
//                       "ComboBoxItems": null,
//                       "CustomAlertImage": null,
//                       "CustomAlertToolTipText": null,
//                       "CustomAlertToolTipTitle": null,
//                       "CustomLookupNameValues": null,
//                       "EditType": "Automatic",
//                       "EnableCustomMask": false,
//                       "EnableTextEditor": false,
//                       "HasPrivacyInfo": false,
//                       "HideLabel": false,
//                       "HideShortDescriptionField": false,
//                       "IgnoreMask": false,
//                       "IgnorePropertyChangedEvent": false,
//                       "LabelDock": "Left",
//                       "LabelText": "Service Code",
//                       "LabelTextAlignment": "MiddleLeft",
//                       "LabelWidth": 75,
//                       "LinkType": null,
//                       "NullValuePrompt": null,
//                       "Path": "NoServiceCode",
//                       "PHIRestricted": false,
//                       "PositiveOnlyCurrency": false,
//                       "ShowCustomAlert": false,
//                       "Size": {
//                         "width": 108,
//                         "height": 20
//                       },
//                       "TabIndex": 0,
//                       "ToolTip": "Suppress partial matches that depend on service code",
//                       "ToolTipPath": null,
//                       "OnEditValueChanged": "System.EventHandler",
//                       "Row": 0,
//                       "Column": 0
//                     },
//                     "childControls": []
//                   },
//                   {
//                     "name": "autoEditNoCondition",
//                     "type": "textbox",
//                     "x": 10,
//                     "y": 83,
//                     "controls": null,
//                     "parentControl": "groupBox",
//                     "properties": {
//                       "autoEditNoCondition": "HealthEdge.Controls.MetadataDriven.AutoEdit",
//                       "AlertTypeName": null,
//                       "AllowNullInput": true,
//                       "AttachedReferenceMenuButton": null,
//                       "AutoShowPopup": true,
//                       "ComboBoxItems": null,
//                       "CustomAlertImage": null,
//                       "CustomAlertToolTipText": null,
//                       "CustomAlertToolTipTitle": null,
//                       "CustomLookupNameValues": null,
//                       "EditType": "Automatic",
//                       "EnableCustomMask": false,
//                       "EnableTextEditor": false,
//                       "HasPrivacyInfo": false,
//                       "HideLabel": false,
//                       "HideShortDescriptionField": false,
//                       "IgnoreMask": false,
//                       "IgnorePropertyChangedEvent": false,
//                       "LabelDock": "Left",
//                       "LabelText": "Condition",
//                       "LabelTextAlignment": "MiddleLeft",
//                       "LabelWidth": 75,
//                       "LinkType": null,
//                       "NullValuePrompt": null,
//                       "Path": "NoConditionCode",
//                       "PHIRestricted": false,
//                       "PositiveOnlyCurrency": false,
//                       "ShowCustomAlert": false,
//                       "Size": {
//                         "width": 103,
//                         "height": 20
//                       },
//                       "TabIndex": 6,
//                       "ToolTip": "Suppress partial matches that depend on condition code",
//                       "ToolTipPath": null,
//                       "OnEditValueChanged": "System.EventHandler",
//                       "Row": 4,
//                       "Column": 1
//                     },
//                     "childControls": []
//                   },
//                   {
//                     "name": "autoEditNoProcedure",
//                     "type": "textbox",
//                     "x": 10,
//                     "y": 47,
//                     "controls": null,
//                     "parentControl": "groupBox",
//                     "properties": {
//                       "autoEditNoProcedure": "HealthEdge.Controls.MetadataDriven.AutoEdit",
//                       "AlertTypeName": null,
//                       "AllowNullInput": true,
//                       "AttachedReferenceMenuButton": null,
//                       "AutoShowPopup": true,
//                       "ComboBoxItems": null,
//                       "CustomAlertImage": null,
//                       "CustomAlertToolTipText": null,
//                       "CustomAlertToolTipTitle": null,
//                       "CustomLookupNameValues": null,
//                       "EditType": "Automatic",
//                       "EnableCustomMask": false,
//                       "EnableTextEditor": false,
//                       "HasPrivacyInfo": false,
//                       "HideLabel": false,
//                       "HideShortDescriptionField": false,
//                       "IgnoreMask": false,
//                       "IgnorePropertyChangedEvent": false,
//                       "LabelDock": "Left",
//                       "LabelText": "Procedure",
//                       "LabelTextAlignment": "MiddleLeft",
//                       "LabelWidth": 75,
//                       "LinkType": null,
//                       "NullValuePrompt": null,
//                       "Path": "NoProcedureCode",
//                       "PHIRestricted": false,
//                       "PositiveOnlyCurrency": false,
//                       "ShowCustomAlert": false,
//                       "Size": {
//                         "width": 103,
//                         "height": 20
//                       },
//                       "TabIndex": 4,
//                       "ToolTip": "Suppress partial matches that depend on procedure code",
//                       "ToolTipPath": null,
//                       "OnEditValueChanged": "System.EventHandler",
//                       "Row": 2,
//                       "Column": 1
//                     },
//                     "childControls": []
//                   },
//                   {
//                     "name": "autoEditNoModifier",
//                     "type": "textbox",
//                     "x": 10,
//                     "y": 65,
//                     "controls": null,
//                     "parentControl": "groupBox",
//                     "properties": {
//                       "autoEditNoModifier": "HealthEdge.Controls.MetadataDriven.AutoEdit",
//                       "AlertTypeName": null,
//                       "AllowNullInput": true,
//                       "AttachedReferenceMenuButton": null,
//                       "AutoShowPopup": true,
//                       "ComboBoxItems": null,
//                       "CustomAlertImage": null,
//                       "CustomAlertToolTipText": null,
//                       "CustomAlertToolTipTitle": null,
//                       "CustomLookupNameValues": null,
//                       "EditType": "Automatic",
//                       "EnableCustomMask": false,
//                       "EnableTextEditor": false,
//                       "HasPrivacyInfo": false,
//                       "HideLabel": false,
//                       "HideShortDescriptionField": false,
//                       "IgnoreMask": false,
//                       "IgnorePropertyChangedEvent": false,
//                       "LabelDock": "Left",
//                       "LabelText": "Modifier",
//                       "LabelTextAlignment": "MiddleLeft",
//                       "LabelWidth": 75,
//                       "LinkType": null,
//                       "NullValuePrompt": null,
//                       "Path": "NoModifier",
//                       "PHIRestricted": false,
//                       "PositiveOnlyCurrency": false,
//                       "ShowCustomAlert": false,
//                       "Size": {
//                         "width": 103,
//                         "height": 20
//                       },
//                       "TabIndex": 5,
//                       "ToolTip": "Suppress partial matches that depend on modifier code",
//                       "ToolTipPath": null,
//                       "OnEditValueChanged": "System.EventHandler",
//                       "Row": 3,
//                       "Column": 1
//                     },
//                     "childControls": []
//                   }
//                 ]
//               },
//               {
//                 "name": "checkEditSuppressAllPartialMatches",
//                 "type": "Default",
//                 "x": 258,
//                 "y": 24,
//                 "controls": null,
//                 "parentControl": "headerGroupControlSuppressPartialMatches",
//                 "properties": {
//                   "checkEditSuppressAllPartialMatches": "DevExpress.XtraEditors.CheckEdit",
//                   "Properties.Caption": "Check All",
//                   "Properties.GlyphAlignment": "Far",
//                   "RightToLeft": "No",
//                   "Size": {
//                     "width": 68,
//                     "height": 19
//                   },
//                   "TabIndex": 1,
//                   "CheckedChanged": "System.EventHandler",
//                   "Row": 0,
//                   "Column": 0
//                 },
//                 "childControls": []
//               }
//             ]
//           },
//           {
//             "name": "autoSizingPanelBenefitPlanSelection",
//             "type": null,
//             "x": 0,
//             "y": 253,
//             "controls": [
//               "planType",
//               "labelPlanType",
//               "lookUpEditBenefitPlan"
//             ],
//             "parentControl": "xtraScrollableControl",
//             "properties": {
//               "autoSizingPanelBenefitPlanSelection": "HealthEdge.Controls.AutoSizingPanel",
//               "AutoHeight": true,
//               "AutoWidth": false,
//               "Dock": "Top",
//               "Hidden": false,
//               "Padding": "System.Windows.Forms.Padding",
//               "Size": {
//                 "width": 1029,
//                 "height": 33
//               },
//               "TabIndex": 6,
//               "XPadding": 0,
//               "YPadding": 0,
//               "Row": 6,
//               "Column": 0
//             },
//             "childControls": [
//               {
//                 "name": "planType",
//                 "type": "Default",
//                 "x": 445,
//                 "y": 10,
//                 "controls": null,
//                 "parentControl": "autoSizingPanelBenefitPlanSelection",
//                 "properties": {
//                   "planType": "DevExpress.XtraEditors.LabelControl",
//                   "Size": {
//                     "width": 0,
//                     "height": 13
//                   },
//                   "TabIndex": 2,
//                   "Row": 1,
//                   "Column": 2
//                 },
//                 "childControls": []
//               },
//               {
//                 "name": "labelPlanType",
//                 "type": "Default",
//                 "x": 382,
//                 "y": 10,
//                 "controls": null,
//                 "parentControl": "autoSizingPanelBenefitPlanSelection",
//                 "properties": {
//                   "labelPlanType": "DevExpress.XtraEditors.LabelControl",
//                   "Size": {
//                     "width": 51,
//                     "height": 13
//                   },
//                   "TabIndex": 1,
//                   "Text": "Plan Type:",
//                   "Row": 1,
//                   "Column": 1
//                 },
//                 "childControls": []
//               },
//               {
//                 "name": "lookUpEditBenefitPlan",
//                 "type": "Default",
//                 "x": 14,
//                 "y": 7,
//                 "controls": null,
//                 "parentControl": "autoSizingPanelBenefitPlanSelection",
//                 "properties": {
//                   "lookUpEditBenefitPlan": "DevExpress.XtraEditors.LookUpEdit",
//                   "Properties.AllowNullInput": "True",
//                   "Properties.AllowMouseWheel": false,
//                   "Properties.NullText": "[Select a benefit plan...]",
//                   "Properties.TextEditStyle": "DisableTextEditor",
//                   "Properties.Closed": "DevExpress.XtraEditors.Controls.ClosedEventHandler",
//                   "Properties.ButtonPressed": "DevExpress.XtraEditors.Controls.ButtonPressedEventHandler",
//                   "Size": {
//                     "width": 351,
//                     "height": 20
//                   },
//                   "TabIndex": 0,
//                   "EditValueChanged": "System.EventHandler",
//                   "Row": 0,
//                   "Column": 0
//                 },
//                 "childControls": []
//               }
//             ]
//           },
//           {
//             "name": "autoSizingBenefitPlanPanel",
//             "type": null,
//             "x": 0,
//             "y": 222,
//             "controls": [
//               "subEntityPanelBenefitPlan"
//             ],
//             "parentControl": "xtraScrollableControl",
//             "properties": {
//               "autoSizingBenefitPlanPanel": "HealthEdge.Controls.AutoSizingPanel",
//               "AutoHeight": true,
//               "AutoWidth": false,
//               "Dock": "Top",
//               "Hidden": false,
//               "Size": {
//                 "width": 1029,
//                 "height": 31
//               },
//               "TabIndex": 5,
//               "XPadding": 0,
//               "YPadding": 0,
//               "Row": 5,
//               "Column": 0
//             },
//             "childControls": [
//               {
//                 "name": "subEntityPanelBenefitPlan",
//                 "type": null,
//                 "x": 0,
//                 "y": 0,
//                 "controls": [
//                   "referenceMenuButtonBenefitPlan",
//                   "autoEditBenefitPlan"
//                 ],
//                 "parentControl": "autoSizingBenefitPlanPanel",
//                 "properties": {
//                   "subEntityPanelBenefitPlan": "HealthEdge.Controls.MetadataDriven.SubEntityPanel",
//                   "AllowEditing": false,
//                   "AutoHeight": true,
//                   "AutoWidth": false,
//                   "Dock": "Top",
//                   "EntityType": "BenefitPlan",
//                   "Hidden": false,
//                   "HideIfNull": true,
//                   "Padding": "System.Windows.Forms.Padding",
//                   "Path": "BenefitPlan",
//                   "ReadOnly": true,
//                   "Size": {
//                     "width": 1029,
//                     "height": 29
//                   },
//                   "TabIndex": 0,
//                   "XPadding": 0,
//                   "YPadding": 0,
//                   "Row": 0,
//                   "Column": 0
//                 },
//                 "childControls": [
//                   {
//                     "name": "referenceMenuButtonBenefitPlan",
//                     "type": "button",
//                     "x": 318,
//                     "y": 4,
//                     "controls": null,
//                     "parentControl": "subEntityPanelBenefitPlan",
//                     "properties": {
//                       "referenceMenuButtonBenefitPlan": "HealthEdge.Controls.ReferenceMenuButton",
//                       "AutoPosition": true,
//                       "CanCreate": false,
//                       "CreateDocumentType": "None",
//                       "Down": false,
//                       "ImageOptions.Image": "referenceMenuButtonBenefitPlan.ImageOptions.Image",
//                       "ImageOptions.Location": "MiddleCenter",
//                       "MaximumSize": {
//                         "width": 18,
//                         "height": 18
//                       },
//                       "ResolverTypeName": "HealthEdge.Controls.Inquiry.BenefitPlanResolver",
//                       "Size": {
//                         "width": 18,
//                         "height": 18
//                       },
//                       "SubEntityPanel": "subEntityPanelBenefitPlan",
//                       "TabIndex": 1,
//                       "TargetControlName": "autoEditBenefitPlan",
//                       "ClearClicked": "System.EventHandler",
//                       "Row": 0,
//                       "Column": 1
//                     },
//                     "childControls": []
//                   },
//                   {
//                     "name": "autoEditBenefitPlan",
//                     "type": "textbox",
//                     "x": 13,
//                     "y": 4,
//                     "controls": null,
//                     "parentControl": "subEntityPanelBenefitPlan",
//                     "properties": {
//                       "autoEditBenefitPlan": "HealthEdge.Controls.MetadataDriven.AutoEdit",
//                       "AlertTypeName": null,
//                       "AllowEditing": false,
//                       "AttachedReferenceMenuButton": null,
//                       "AutoShowPopup": true,
//                       "ComboBoxItems": null,
//                       "CustomAlertImage": null,
//                       "CustomAlertToolTipText": null,
//                       "CustomAlertToolTipTitle": null,
//                       "CustomLookupNameValues": null,
//                       "EditType": "HyperLinkEdit",
//                       "EnableCustomMask": false,
//                       "EnableTextEditor": false,
//                       "HasPrivacyInfo": false,
//                       "HideLabel": false,
//                       "HideShortDescriptionField": false,
//                       "IgnoreMask": false,
//                       "IgnorePropertyChangedEvent": false,
//                       "LabelDock": "Left",
//                       "LabelText": "Benefit Plan:",
//                       "LabelTextAlignment": "MiddleLeft",
//                       "LabelWidth": 75,
//                       "LinkType": "BenefitPlan",
//                       "NullValuePrompt": null,
//                       "Path": "BenefitPlanName",
//                       "PHIRestricted": false,
//                       "PositiveOnlyCurrency": false,
//                       "ReadOnly": true,
//                       "ShowCustomAlert": false,
//                       "Size": {
//                         "width": 299,
//                         "height": 20
//                       },
//                       "TabIndex": 0,
//                       "ToolTipPath": null,
//                       "Row": 0,
//                       "Column": 0
//                     },
//                     "childControls": []
//                   }
//                 ]
//               }
//             ]
//           },
//           {
//             "name": "autoSizingSubscriptionPanel",
//             "type": null,
//             "x": 0,
//             "y": 191,
//             "controls": [
//               "subEntityPanelSubscription",
//               "autoEditMemberGender",
//               "autoEditMemberAge",
//               "subEntityPanelMembership"
//             ],
//             "parentControl": "xtraScrollableControl",
//             "properties": {
//               "autoSizingSubscriptionPanel": "HealthEdge.Controls.AutoSizingPanel",
//               "AutoHeight": true,
//               "AutoWidth": false,
//               "Dock": "Top",
//               "Hidden": false,
//               "Padding": "System.Windows.Forms.Padding",
//               "Size": {
//                 "width": 1029,
//                 "height": 31
//               },
//               "TabIndex": 4,
//               "XPadding": 0,
//               "YPadding": 0,
//               "Row": 4,
//               "Column": 0
//             },
//             "childControls": [
//               {
//                 "name": "subEntityPanelSubscription",
//                 "type": null,
//                 "x": 376,
//                 "y": 3,
//                 "controls": [
//                   "autoEditSubscriptionID"
//                 ],
//                 "parentControl": "autoSizingSubscriptionPanel",
//                 "properties": {
//                   "subEntityPanelSubscription": "HealthEdge.Controls.MetadataDriven.SubEntityPanel",
//                   "AllowEditing": false,
//                   "AutoHeight": true,
//                   "AutoWidth": false,
//                   "EntityType": "Subscription",
//                   "Hidden": false,
//                   "Path": "Subscription",
//                   "ReadOnly": true,
//                   "Size": {
//                     "width": 340,
//                     "height": 22
//                   },
//                   "TabIndex": 1,
//                   "XPadding": 0,
//                   "YPadding": 0,
//                   "Row": 0,
//                   "Column": 0
//                 },
//                 "childControls": [
//                   {
//                     "name": "autoEditSubscriptionID",
//                     "type": "textbox",
//                     "x": 5,
//                     "y": 2,
//                     "controls": null,
//                     "parentControl": "subEntityPanelSubscription",
//                     "properties": {
//                       "autoEditSubscriptionID": "HealthEdge.Controls.MetadataDriven.AutoEdit",
//                       "AlertTypeName": null,
//                       "AttachedReferenceMenuButton": null,
//                       "AutoShowPopup": true,
//                       "ComboBoxItems": null,
//                       "CustomAlertImage": null,
//                       "CustomAlertToolTipText": null,
//                       "CustomAlertToolTipTitle": null,
//                       "CustomLookupNameValues": null,
//                       "EditType": "Automatic",
//                       "EnableCustomMask": false,
//                       "EnableTextEditor": false,
//                       "HasPrivacyInfo": false,
//                       "HideLabel": false,
//                       "HideShortDescriptionField": false,
//                       "IgnoreMask": false,
//                       "IgnorePropertyChangedEvent": false,
//                       "LabelDock": "Left",
//                       "LabelText": "Subscription ID:",
//                       "LabelTextAlignment": "MiddleLeft",
//                       "LabelWidth": 90,
//                       "LinkType": null,
//                       "NullValuePrompt": null,
//                       "Path": "HccIdentifier",
//                       "PHIRestricted": false,
//                       "PositiveOnlyCurrency": false,
//                       "ReadOnly": true,
//                       "ShowCustomAlert": false,
//                       "Size": {
//                         "width": 311,
//                         "height": 20
//                       },
//                       "TabIndex": 0,
//                       "ToolTipPath": null,
//                       "Row": 0,
//                       "Column": 0
//                     },
//                     "childControls": []
//                   }
//                 ]
//               },
//               {
//                 "name": "autoEditMemberGender",
//                 "type": "textbox",
//                 "x": 890,
//                 "y": 5,
//                 "controls": null,
//                 "parentControl": "autoSizingSubscriptionPanel",
//                 "properties": {
//                   "autoEditMemberGender": "HealthEdge.Controls.MetadataDriven.AutoEdit",
//                   "AlertTypeName": null,
//                   "AttachedReferenceMenuButton": null,
//                   "AutoShowPopup": true,
//                   "ComboBoxItems": null,
//                   "CustomAlertImage": null,
//                   "CustomAlertToolTipText": null,
//                   "CustomAlertToolTipTitle": null,
//                   "CustomLookupNameValues": null,
//                   "EditType": "Automatic",
//                   "EnableCustomMask": false,
//                   "EnableTextEditor": false,
//                   "HasPrivacyInfo": false,
//                   "HideLabel": false,
//                   "HideShortDescriptionField": false,
//                   "IgnoreMask": false,
//                   "IgnorePropertyChangedEvent": false,
//                   "LabelDock": "Left",
//                   "LabelText": "Member Gender:",
//                   "LabelTextAlignment": "MiddleLeft",
//                   "LabelWidth": 87,
//                   "LinkType": null,
//                   "NullValuePrompt": null,
//                   "Path": "MemberGender",
//                   "PHIRestricted": false,
//                   "PositiveOnlyCurrency": false,
//                   "ShowCustomAlert": false,
//                   "Size": {
//                     "width": 167,
//                     "height": 20
//                   },
//                   "TabIndex": 3,
//                   "ToolTipPath": null,
//                   "Visible": false,
//                   "Row": 1,
//                   "Column": 2
//                 },
//                 "childControls": []
//               },
//               {
//                 "name": "autoEditMemberAge",
//                 "type": "textbox",
//                 "x": 708,
//                 "y": 5,
//                 "controls": null,
//                 "parentControl": "autoSizingSubscriptionPanel",
//                 "properties": {
//                   "autoEditMemberAge": "HealthEdge.Controls.MetadataDriven.AutoEdit",
//                   "AlertTypeName": null,
//                   "AllowNullInput": true,
//                   "AttachedReferenceMenuButton": null,
//                   "AutoShowPopup": true,
//                   "ComboBoxItems": null,
//                   "CustomAlertImage": null,
//                   "CustomAlertToolTipText": null,
//                   "CustomAlertToolTipTitle": null,
//                   "CustomLookupNameValues": null,
//                   "EditType": "Automatic",
//                   "EnableCustomMask": true,
//                   "EnableTextEditor": false,
//                   "HasPrivacyInfo": false,
//                   "HideLabel": false,
//                   "HideShortDescriptionField": false,
//                   "IgnoreMask": false,
//                   "IgnorePropertyChangedEvent": false,
//                   "LabelDock": "Left",
//                   "LabelText": "Member Age:",
//                   "LabelTextAlignment": "MiddleLeft",
//                   "LabelWidth": 71,
//                   "LinkType": null,
//                   "NullValuePrompt": null,
//                   "Path": "MemberAge",
//                   "PHIRestricted": false,
//                   "PositiveOnlyCurrency": false,
//                   "ShowCustomAlert": false,
//                   "Size": {
//                     "width": 161,
//                     "height": 20
//                   },
//                   "TabIndex": 2,
//                   "ToolTipPath": null,
//                   "Visible": false,
//                   "Row": 1,
//                   "Column": 1
//                 },
//                 "childControls": []
//               },
//               {
//                 "name": "subEntityPanelMembership",
//                 "type": null,
//                 "x": 0,
//                 "y": 5,
//                 "controls": [
//                   "subEntityPanelMemberIle"
//                 ],
//                 "parentControl": "autoSizingSubscriptionPanel",
//                 "properties": {
//                   "subEntityPanelMembership": "HealthEdge.Controls.MetadataDriven.SubEntityPanel",
//                   "AutoHeight": true,
//                   "AutoWidth": false,
//                   "EntityType": "Membership",
//                   "Hidden": false,
//                   "Path": "Member",
//                   "Size": {
//                     "width": 356,
//                     "height": 20
//                   },
//                   "TabIndex": 0,
//                   "XPadding": 0,
//                   "YPadding": 0,
//                   "EntityChanged": "System.EventHandler",
//                   "Row": 1,
//                   "Column": 0
//                 },
//                 "childControls": [
//                   {
//                     "name": "subEntityPanelMemberIle",
//                     "type": null,
//                     "x": 0,
//                     "y": 0,
//                     "controls": [
//                       "subEntityPanelLegalName"
//                     ],
//                     "parentControl": "subEntityPanelMembership",
//                     "properties": {
//                       "subEntityPanelMemberIle": "HealthEdge.Controls.MetadataDriven.SubEntityPanel",
//                       "AutoHeight": true,
//                       "AutoWidth": false,
//                       "Dock": "Left",
//                       "EntityType": "IndividualInformation",
//                       "Hidden": false,
//                       "Path": "Individual",
//                       "Size": {
//                         "width": 353,
//                         "height": 20
//                       },
//                       "TabIndex": 0,
//                       "XPadding": 0,
//                       "YPadding": 0,
//                       "Row": 0,
//                       "Column": 0
//                     },
//                     "childControls": [
//                       {
//                         "name": "subEntityPanelLegalName",
//                         "type": null,
//                         "x": 0,
//                         "y": 0,
//                         "controls": [
//                           "referenceMenuButtonMember",
//                           "personNameViewControl"
//                         ],
//                         "parentControl": "subEntityPanelMemberIle",
//                         "properties": {
//                           "subEntityPanelLegalName": "HealthEdge.Controls.MetadataDriven.SubEntityPanel",
//                           "AutoHeight": true,
//                           "AutoWidth": false,
//                           "EntityType": null,
//                           "Hidden": false,
//                           "Path": "PrimaryName",
//                           "Size": {
//                             "width": 350,
//                             "height": 22
//                           },
//                           "TabIndex": 0,
//                           "XPadding": 0,
//                           "YPadding": 0,
//                           "Row": 0,
//                           "Column": 0
//                         },
//                         "childControls": [
//                           {
//                             "name": "referenceMenuButtonMember",
//                             "type": "button",
//                             "x": 318,
//                             "y": 0,
//                             "controls": null,
//                             "parentControl": "subEntityPanelLegalName",
//                             "properties": {
//                               "referenceMenuButtonMember": "HealthEdge.Controls.ReferenceMenuButton",
//                               "AutoPosition": true,
//                               "CanCreate": false,
//                               "CreateDocumentType": "None",
//                               "Down": false,
//                               "ImageOptions.Image": "referenceMenuButtonMember.ImageOptions.Image",
//                               "ImageOptions.Location": "MiddleCenter",
//                               "MaximumSize": {
//                                 "width": 18,
//                                 "height": 18
//                               },
//                               "ResolverTypeName": "HealthEdge.Controls.Inquiry.MemberResolver",
//                               "Size": {
//                                 "width": 18,
//                                 "height": 18
//                               },
//                               "SubEntityPanel": "subEntityPanelMembership",
//                               "TabIndex": 1,
//                               "TargetControlName": "personNameViewControl",
//                               "Row": 0,
//                               "Column": 1
//                             },
//                             "childControls": []
//                           },
//                           {
//                             "name": "personNameViewControl",
//                             "type": "Link",
//                             "x": 13,
//                             "y": 0,
//                             "controls": null,
//                             "parentControl": "subEntityPanelLegalName",
//                             "properties": {
//                               "personNameViewControl": "HealthEdge.Controls.IndividualLegalEntity.PersonNameViewControl",
//                               "AttachedReferenceMenuButton": null,
//                               "LabelText": "Member:",
//                               "LabelWidth": 75,
//                               "Linked": true,
//                               "LinkType": "Membership",
//                               "Margin": "System.Windows.Forms.Padding",
//                               "PHI": false,
//                               "Size": {
//                                 "width": 299,
//                                 "height": 20
//                               },
//                               "SubscriptionID": 0,
//                               "TabIndex": 0,
//                               "VIP": false,
//                               "Row": 0,
//                               "Column": 0
//                             },
//                             "childControls": []
//                           }
//                         ]
//                       }
//                     ]
//                   }
//                 ]
//               }
//             ]
//           },
//           {
//             "name": "autoSizingSupplierPractitionerPanel",
//             "type": null,
//             "x": 0,
//             "y": 156,
//             "controls": [
//               "subEntityPanelPractitioner",
//               "subEntityPanelSupplier"
//             ],
//             "parentControl": "xtraScrollableControl",
//             "properties": {
//               "autoSizingSupplierPractitionerPanel": "HealthEdge.Controls.AutoSizingPanel",
//               "AutoHeight": true,
//               "AutoWidth": false,
//               "Dock": "Top",
//               "Hidden": false,
//               "Margin": "System.Windows.Forms.Padding",
//               "Padding": "System.Windows.Forms.Padding",
//               "Size": {
//                 "width": 1029,
//                 "height": 35
//               },
//               "TabIndex": 3,
//               "XPadding": 0,
//               "YPadding": 0,
//               "Row": 3,
//               "Column": 0
//             },
//             "childControls": [
//               {
//                 "name": "subEntityPanelPractitioner",
//                 "type": null,
//                 "x": 376,
//                 "y": 5,
//                 "controls": [
//                   "referenceMenuButtonPractitioner",
//                   "subEntityPanelPractitionerName"
//                 ],
//                 "parentControl": "autoSizingSupplierPractitionerPanel",
//                 "properties": {
//                   "subEntityPanelPractitioner": "HealthEdge.Controls.MetadataDriven.SubEntityPanel",
//                   "AutoHeight": true,
//                   "AutoWidth": false,
//                   "EntityType": null,
//                   "Hidden": false,
//                   "Path": "Practitioner",
//                   "Size": {
//                     "width": 415,
//                     "height": 20
//                   },
//                   "TabIndex": 1,
//                   "XPadding": 0,
//                   "YPadding": 0,
//                   "Row": 0,
//                   "Column": 1
//                 },
//                 "childControls": [
//                   {
//                     "name": "referenceMenuButtonPractitioner",
//                     "type": "button",
//                     "x": 346,
//                     "y": 0,
//                     "controls": null,
//                     "parentControl": "subEntityPanelPractitioner",
//                     "properties": {
//                       "referenceMenuButtonPractitioner": "HealthEdge.Controls.ReferenceMenuButton",
//                       "AutoPosition": true,
//                       "CanCreate": false,
//                       "CreateDocumentType": "None",
//                       "Down": false,
//                       "ImageOptions.Image": "referenceMenuButtonPractitioner.ImageOptions.Image",
//                       "ImageOptions.Location": "MiddleCenter",
//                       "MaximumSize": {
//                         "width": 18,
//                         "height": 18
//                       },
//                       "ResolverTypeName": "HealthEdge.Controls.Inquiry.PractitionerResolver",
//                       "Size": {
//                         "width": 18,
//                         "height": 18
//                       },
//                       "SubEntityPanel": "subEntityPanelPractitioner",
//                       "TabIndex": 1,
//                       "TargetControlName": "personNameViewPractitioner",
//                       "Row": 0,
//                       "Column": 1
//                     },
//                     "childControls": []
//                   },
//                   {
//                     "name": "subEntityPanelPractitionerName",
//                     "type": null,
//                     "x": 3,
//                     "y": 0,
//                     "controls": [
//                       "subEntityPanelPractitionerPrimaryName"
//                     ],
//                     "parentControl": "subEntityPanelPractitioner",
//                     "properties": {
//                       "subEntityPanelPractitionerName": "HealthEdge.Controls.MetadataDriven.SubEntityPanel",
//                       "AutoHeight": true,
//                       "AutoWidth": false,
//                       "EntityType": null,
//                       "Hidden": false,
//                       "Path": "Individual",
//                       "Size": {
//                         "width": 337,
//                         "height": 20
//                       },
//                       "TabIndex": 0,
//                       "XPadding": 0,
//                       "YPadding": 0,
//                       "Row": 0,
//                       "Column": 0
//                     },
//                     "childControls": [
//                       {
//                         "name": "subEntityPanelPractitionerPrimaryName",
//                         "type": null,
//                         "x": -5,
//                         "y": 0,
//                         "controls": [
//                           "labelControlPractitioner",
//                           "personNameViewPractitioner"
//                         ],
//                         "parentControl": "subEntityPanelPractitionerName",
//                         "properties": {
//                           "subEntityPanelPractitionerPrimaryName": "HealthEdge.Controls.MetadataDriven.SubEntityPanel",
//                           "AutoHeight": true,
//                           "AutoWidth": false,
//                           "EntityType": null,
//                           "Hidden": false,
//                           "Path": "PrimaryName",
//                           "Size": {
//                             "width": 339,
//                             "height": 20
//                           },
//                           "TabIndex": 0,
//                           "XPadding": 0,
//                           "YPadding": 0,
//                           "Row": 0,
//                           "Column": -1
//                         },
//                         "childControls": [
//                           {
//                             "name": "labelControlPractitioner",
//                             "type": "Default",
//                             "x": 11,
//                             "y": 3,
//                             "controls": null,
//                             "parentControl": "subEntityPanelPractitionerPrimaryName",
//                             "properties": {
//                               "labelControlPractitioner": "DevExpress.XtraEditors.LabelControl",
//                               "Size": {
//                                 "width": 59,
//                                 "height": 13
//                               },
//                               "TabIndex": 0,
//                               "Text": "Practitioner:",
//                               "Row": 1,
//                               "Column": 0
//                             },
//                             "childControls": []
//                           },
//                           {
//                             "name": "personNameViewPractitioner",
//                             "type": "Default",
//                             "x": 79,
//                             "y": 0,
//                             "controls": null,
//                             "parentControl": "subEntityPanelPractitionerPrimaryName",
//                             "properties": {
//                               "personNameViewPractitioner": "HealthEdge.Controls.IndividualLegalEntity.PersonNameView",
//                               "AttachedReferenceMenuButton": null,
//                               "EditValue": "Person Name",
//                               "Linked": true,
//                               "LinkType": "Practitioner",
//                               "LinkUnderlineType": "Hover",
//                               "Properties.ReadOnly": true,
//                               "Properties.StartKey": "DevExpress.Utils.KeyShortcut",
//                               "Size": {
//                                 "width": 239,
//                                 "height": 20
//                               },
//                               "TabIndex": 1,
//                               "Row": 0,
//                               "Column": 0
//                             },
//                             "childControls": []
//                           }
//                         ]
//                       }
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "name": "subEntityPanelSupplier",
//                 "type": null,
//                 "x": 8,
//                 "y": 5,
//                 "controls": [
//                   "subEntityPanelSupplierOrganization"
//                 ],
//                 "parentControl": "autoSizingSupplierPractitionerPanel",
//                 "properties": {
//                   "subEntityPanelSupplier": "HealthEdge.Controls.MetadataDriven.SubEntityPanel",
//                   "AutoHeight": true,
//                   "AutoWidth": false,
//                   "EntityType": null,
//                   "Hidden": false,
//                   "Path": "Supplier",
//                   "Size": {
//                     "width": 362,
//                     "height": 20
//                   },
//                   "TabIndex": 0,
//                   "XPadding": 0,
//                   "YPadding": 0,
//                   "Row": 0,
//                   "Column": 0
//                 },
//                 "childControls": [
//                   {
//                     "name": "subEntityPanelSupplierOrganization",
//                     "type": null,
//                     "x": 0,
//                     "y": 0,
//                     "controls": [
//                       "autoEditSupplierName",
//                       "referenceMenuButtonSupplier"
//                     ],
//                     "parentControl": "subEntityPanelSupplier",
//                     "properties": {
//                       "subEntityPanelSupplierOrganization": "HealthEdge.Controls.MetadataDriven.SubEntityPanel",
//                       "AutoHeight": true,
//                       "AutoWidth": false,
//                       "EntityType": null,
//                       "Hidden": false,
//                       "Path": "Organization",
//                       "Size": {
//                         "width": 348,
//                         "height": 20
//                       },
//                       "TabIndex": 0,
//                       "XPadding": 0,
//                       "YPadding": 0,
//                       "Row": 0,
//                       "Column": 0
//                     },
//                     "childControls": [
//                       {
//                         "name": "autoEditSupplierName",
//                         "type": "textbox",
//                         "x": 5,
//                         "y": 0,
//                         "controls": null,
//                         "parentControl": "subEntityPanelSupplierOrganization",
//                         "properties": {
//                           "autoEditSupplierName": "HealthEdge.Controls.MetadataDriven.AutoEdit",
//                           "AlertTypeName": null,
//                           "AttachedReferenceMenuButton": null,
//                           "AutoShowPopup": true,
//                           "ComboBoxItems": null,
//                           "CustomAlertImage": null,
//                           "CustomAlertToolTipText": null,
//                           "CustomAlertToolTipTitle": null,
//                           "CustomLookupNameValues": null,
//                           "EditType": "HyperLinkEdit",
//                           "EnableCustomMask": false,
//                           "EnableTextEditor": false,
//                           "HasPrivacyInfo": false,
//                           "HideLabel": false,
//                           "HideShortDescriptionField": false,
//                           "IgnoreMask": false,
//                           "IgnorePropertyChangedEvent": false,
//                           "LabelDock": "Left",
//                           "LabelText": "Supplier:",
//                           "LabelTextAlignment": "MiddleLeft",
//                           "LabelWidth": 75,
//                           "LinkType": "Supplier",
//                           "NullValuePrompt": null,
//                           "Path": "PrimaryName",
//                           "PHIRestricted": false,
//                           "PositiveOnlyCurrency": false,
//                           "ReadOnly": true,
//                           "ShowCustomAlert": false,
//                           "Size": {
//                             "width": 299,
//                             "height": 20
//                           },
//                           "TabIndex": 0,
//                           "ToolTipPath": null,
//                           "Row": 0,
//                           "Column": 0
//                         },
//                         "childControls": []
//                       },
//                       {
//                         "name": "referenceMenuButtonSupplier",
//                         "type": "button",
//                         "x": 311,
//                         "y": 1,
//                         "controls": null,
//                         "parentControl": "subEntityPanelSupplierOrganization",
//                         "properties": {
//                           "referenceMenuButtonSupplier": "HealthEdge.Controls.ReferenceMenuButton",
//                           "AutoPosition": true,
//                           "CanCreate": false,
//                           "CreateDocumentType": "None",
//                           "Down": false,
//                           "ImageOptions.Image": "referenceMenuButtonSupplier.ImageOptions.Image",
//                           "ImageOptions.Location": "MiddleCenter",
//                           "MaximumSize": {
//                             "width": 18,
//                             "height": 18
//                           },
//                           "ResolverTypeName": "HealthEdge.Controls.Inquiry.SupplierResolver",
//                           "Size": {
//                             "width": 18,
//                             "height": 18
//                           },
//                           "SubEntityPanel": "subEntityPanelSupplier",
//                           "TabIndex": 1,
//                           "TargetControlName": "autoEditSupplierName",
//                           "Row": 1,
//                           "Column": 1
//                         },
//                         "childControls": []
//                       }
//                     ]
//                   }
//                 ]
//               }
//             ]
//           },
//           {
//             "name": "autoSizingPanel3",
//             "type": null,
//             "x": 0,
//             "y": 65,
//             "controls": [
//               "autoEditRenderedByPCP",
//               "subEntityPanelSupplierClassification",
//               "subEntityPanelPractitionerSpecialty",
//               "claimTypeLabel",
//               "lookUpEditClaimType",
//               "autoEditUnitCount",
//               "autoEditBilledAmount",
//               "autoEditServiceDate"
//             ],
//             "parentControl": "xtraScrollableControl",
//             "properties": {
//               "autoSizingPanel3": "HealthEdge.Controls.AutoSizingPanel",
//               "AutoHeight": true,
//               "AutoWidth": false,
//               "Dock": "Top",
//               "Hidden": false,
//               "Margin": "System.Windows.Forms.Padding",
//               "Size": {
//                 "width": 1029,
//                 "height": 91
//               },
//               "TabIndex": 2,
//               "XPadding": 0,
//               "YPadding": 0,
//               "Row": 2,
//               "Column": 0
//             },
//             "childControls": [
//               {
//                 "name": "autoEditRenderedByPCP",
//                 "type": "textbox",
//                 "x": 13,
//                 "y": 34,
//                 "controls": null,
//                 "parentControl": "autoSizingPanel3",
//                 "properties": {
//                   "autoEditRenderedByPCP": "HealthEdge.Controls.MetadataDriven.AutoEdit",
//                   "AlertTypeName": null,
//                   "AttachedReferenceMenuButton": null,
//                   "AutoShowPopup": true,
//                   "ComboBoxItems": null,
//                   "CustomAlertImage": null,
//                   "CustomAlertToolTipText": null,
//                   "CustomAlertToolTipTitle": null,
//                   "CustomLookupNameValues": null,
//                   "EditType": "Automatic",
//                   "EnableCustomMask": false,
//                   "EnableTextEditor": false,
//                   "HasPrivacyInfo": false,
//                   "HideLabel": false,
//                   "HideShortDescriptionField": false,
//                   "IgnoreMask": false,
//                   "IgnorePropertyChangedEvent": false,
//                   "LabelDock": "Left",
//                   "LabelText": "PCP Option:",
//                   "LabelTextAlignment": "MiddleLeft",
//                   "LabelWidth": 75,
//                   "LinkType": null,
//                   "NullValuePrompt": null,
//                   "Path": "RenderedByMembersPCP",
//                   "PHIRestricted": false,
//                   "PositiveOnlyCurrency": false,
//                   "ShowCustomAlert": false,
//                   "Size": {
//                     "width": 299,
//                     "height": 20
//                   },
//                   "TabIndex": 5,
//                   "ToolTipPath": null,
//                   "Row": 2,
//                   "Column": 3
//                 },
//                 "childControls": []
//               },
//               {
//                 "name": "subEntityPanelSupplierClassification",
//                 "type": null,
//                 "x": 14,
//                 "y": 62,
//                 "controls": [
//                   "naturalKeyLookupEditorClassification"
//                 ],
//                 "parentControl": "autoSizingPanel3",
//                 "properties": {
//                   "subEntityPanelSupplierClassification": "HealthEdge.Controls.MetadataDriven.SubEntityPanel",
//                   "AutoHeight": true,
//                   "AutoWidth": false,
//                   "EntityType": null,
//                   "Hidden": false,
//                   "Path": "SupplierClassification",
//                   "Size": {
//                     "width": 319,
//                     "height": 25
//                   },
//                   "TabIndex": 6,
//                   "XPadding": 0,
//                   "YPadding": 0,
//                   "Row": 3,
//                   "Column": 3
//                 },
//                 "childControls": [
//                   {
//                     "name": "naturalKeyLookupEditorClassification",
//                     "type": "Default",
//                     "x": -1,
//                     "y": 0,
//                     "controls": null,
//                     "parentControl": "subEntityPanelSupplierClassification",
//                     "properties": {
//                       "naturalKeyLookupEditorClassification": "HealthEdge.Controls.MetadataDriven.NaturalKeyLookupEditor",
//                       "AppliesToIndividuals": false,
//                       "EditorIndent": 75,
//                       "EditorWidth": 225,
//                       "EditValue": null,
//                       "GetTaxonomy": true,
//                       "Index": 0,
//                       "LabelDock": "None",
//                       "LabelText": "Classification:",
//                       "LabelWidth": 75,
//                       "Path": "SupplierClassification",
//                       "ReferencePanel": null,
//                       "SelectText": "",
//                       "Size": {
//                         "width": 302,
//                         "height": 25
//                       },
//                       "TabIndex": 0,
//                       "TextEditStyle": "DisableTextEditor",
//                       "Tooltip": null,
//                       "TypeName": "ProviderTaxonomy",
//                       "Row": 0,
//                       "Column": -1
//                     },
//                     "childControls": []
//                   }
//                 ]
//               },
//               {
//                 "name": "subEntityPanelPractitionerSpecialty",
//                 "type": null,
//                 "x": 381,
//                 "y": 62,
//                 "controls": [
//                   "naturalKeyLookupEditorSpecialty"
//                 ],
//                 "parentControl": "autoSizingPanel3",
//                 "properties": {
//                   "subEntityPanelPractitionerSpecialty": "HealthEdge.Controls.MetadataDriven.SubEntityPanel",
//                   "AutoHeight": true,
//                   "AutoWidth": false,
//                   "EntityType": null,
//                   "Hidden": false,
//                   "Path": "PractitionerSpecialty",
//                   "Size": {
//                     "width": 335,
//                     "height": 25
//                   },
//                   "TabIndex": 7,
//                   "XPadding": 0,
//                   "YPadding": 0,
//                   "Row": 3,
//                   "Column": 3
//                 },
//                 "childControls": [
//                   {
//                     "name": "naturalKeyLookupEditorSpecialty",
//                     "type": "Default",
//                     "x": 0,
//                     "y": 0,
//                     "controls": null,
//                     "parentControl": "subEntityPanelPractitionerSpecialty",
//                     "properties": {
//                       "naturalKeyLookupEditorSpecialty": "HealthEdge.Controls.MetadataDriven.ProviderTaxonomyKeyLookup",
//                       "AppliesToIndividuals": true,
//                       "EditorIndent": 71,
//                       "EditorWidth": 225,
//                       "EditValue": null,
//                       "GetTaxonomy": true,
//                       "Index": 0,
//                       "LabelDock": "None",
//                       "LabelText": "Specialty:",
//                       "Path": "PractitionerSpecialty",
//                       "ReferencePanel": null,
//                       "SelectText": "",
//                       "Size": {
//                         "width": 318,
//                         "height": 25
//                       },
//                       "TabIndex": 0,
//                       "TypeName": "ProviderTaxonomy",
//                       "Row": 0,
//                       "Column": 0
//                     },
//                     "childControls": []
//                   }
//                 ]
//               },
//               {
//                 "name": "claimTypeLabel",
//                 "type": "Default",
//                 "x": 526,
//                 "y": 10,
//                 "controls": null,
//                 "parentControl": "autoSizingPanel3",
//                 "properties": {
//                   "claimTypeLabel": "DevExpress.XtraEditors.LabelControl",
//                   "AutoSize": true,
//                   "Size": {
//                     "width": 63,
//                     "height": 13
//                   },
//                   "TabIndex": 3,
//                   "Text": "Claim Type:",
//                   "Row": 1,
//                   "Column": 3
//                 },
//                 "childControls": []
//               },
//               {
//                 "name": "lookUpEditClaimType",
//                 "type": "Default",
//                 "x": 592,
//                 "y": 6,
//                 "controls": null,
//                 "parentControl": "autoSizingPanel3",
//                 "properties": {
//                   "lookUpEditClaimType": "DevExpress.XtraEditors.LookUpEdit",
//                   "Properties.AllowMouseWheel": false,
//                   "Properties.ImmediatePopup": true,
//                   "Properties.NullText": "",
//                   "Size": {
//                     "width": 100,
//                     "height": 20
//                   },
//                   "TabIndex": 4,
//                   "Closed": "DevExpress.XtraEditors.Controls.ClosedEventHandler",
//                   "ButtonPressed": "DevExpress.XtraEditors.Controls.ButtonPressedEventHandler",
//                   "EditValueChanged": "System.EventHandler",
//                   "Row": 0,
//                   "Column": 3
//                 },
//                 "childControls": []
//               },
//               {
//                 "name": "autoEditUnitCount",
//                 "type": "textbox",
//                 "x": 381,
//                 "y": 6,
//                 "controls": null,
//                 "parentControl": "autoSizingPanel3",
//                 "properties": {
//                   "autoEditUnitCount": "HealthEdge.Controls.MetadataDriven.AutoEdit",
//                   "AlertTypeName": null,
//                   "AttachedReferenceMenuButton": null,
//                   "AutoShowPopup": true,
//                   "AutoValidate": "Disable",
//                   "ComboBoxItems": null,
//                   "CustomAlertImage": null,
//                   "CustomAlertToolTipText": null,
//                   "CustomAlertToolTipTitle": null,
//                   "CustomLookupNameValues": null,
//                   "EditType": "Automatic",
//                   "EnableCustomMask": false,
//                   "EnableTextEditor": false,
//                   "HasPrivacyInfo": false,
//                   "HideLabel": false,
//                   "HideShortDescriptionField": false,
//                   "IgnoreMask": false,
//                   "IgnorePropertyChangedEvent": false,
//                   "LabelDock": "Left",
//                   "LabelText": "Unit Count:",
//                   "LabelTextAlignment": "MiddleLeft",
//                   "LabelWidth": 71,
//                   "LinkType": null,
//                   "NullValuePrompt": null,
//                   "Path": "UnitCount",
//                   "PHIRestricted": false,
//                   "PositiveOnlyCurrency": false,
//                   "ShowCustomAlert": false,
//                   "Size": {
//                     "width": 125,
//                     "height": 20
//                   },
//                   "TabIndex": 2,
//                   "ToolTipPath": null,
//                   "Row": 0,
//                   "Column": 2
//                 },
//                 "childControls": []
//               },
//               {
//                 "name": "autoEditBilledAmount",
//                 "type": "textbox",
//                 "x": 198,
//                 "y": 6,
//                 "controls": null,
//                 "parentControl": "autoSizingPanel3",
//                 "properties": {
//                   "autoEditBilledAmount": "HealthEdge.Controls.MetadataDriven.AutoEdit",
//                   "AlertTypeName": null,
//                   "AttachedReferenceMenuButton": null,
//                   "AutoShowPopup": true,
//                   "AutoValidate": "Disable",
//                   "ComboBoxItems": null,
//                   "CustomAlertImage": null,
//                   "CustomAlertToolTipText": null,
//                   "CustomAlertToolTipTitle": null,
//                   "CustomLookupNameValues": null,
//                   "EditType": "Automatic",
//                   "EnableCustomMask": false,
//                   "EnableTextEditor": false,
//                   "HasPrivacyInfo": false,
//                   "HideLabel": false,
//                   "HideShortDescriptionField": false,
//                   "IgnoreMask": false,
//                   "IgnorePropertyChangedEvent": false,
//                   "LabelDock": "Left",
//                   "LabelText": "Billed Amount:",
//                   "LabelTextAlignment": "MiddleLeft",
//                   "LabelWidth": 87,
//                   "LinkType": null,
//                   "NullValuePrompt": null,
//                   "Path": "BilledAmount",
//                   "PHIRestricted": false,
//                   "PositiveOnlyCurrency": false,
//                   "ShowCustomAlert": false,
//                   "Size": {
//                     "width": 167,
//                     "height": 20
//                   },
//                   "TabIndex": 1,
//                   "ToolTipPath": null,
//                   "Row": 0,
//                   "Column": 1
//                 },
//                 "childControls": []
//               },
//               {
//                 "name": "autoEditServiceDate",
//                 "type": "textbox",
//                 "x": 13,
//                 "y": 6,
//                 "controls": null,
//                 "parentControl": "autoSizingPanel3",
//                 "properties": {
//                   "autoEditServiceDate": "HealthEdge.Controls.MetadataDriven.AutoEdit",
//                   "AlertTypeName": null,
//                   "AttachedReferenceMenuButton": null,
//                   "AutoShowPopup": true,
//                   "ComboBoxItems": null,
//                   "CustomAlertImage": null,
//                   "CustomAlertToolTipText": null,
//                   "CustomAlertToolTipTitle": null,
//                   "CustomLookupNameValues": null,
//                   "EditType": "Automatic",
//                   "EnableCustomMask": false,
//                   "EnableTextEditor": false,
//                   "HasPrivacyInfo": false,
//                   "HideLabel": false,
//                   "HideShortDescriptionField": false,
//                   "IgnoreMask": false,
//                   "IgnorePropertyChangedEvent": false,
//                   "LabelDock": "Left",
//                   "LabelText": "Service Date:",
//                   "LabelTextAlignment": "MiddleLeft",
//                   "LabelWidth": 75,
//                   "LinkType": null,
//                   "NullValuePrompt": null,
//                   "Path": "ServiceDate",
//                   "PHIRestricted": false,
//                   "PositiveOnlyCurrency": false,
//                   "ShowCustomAlert": false,
//                   "Size": {
//                     "width": 161,
//                     "height": 20
//                   },
//                   "TabIndex": 0,
//                   "ToolTipPath": null,
//                   "Leave": "System.EventHandler",
//                   "Row": 0,
//                   "Column": 0
//                 },
//                 "childControls": []
//               }
//             ]
//           },
//           {
//             "name": "autoSizingPanelTop",
//             "type": null,
//             "x": 0,
//             "y": 33,
//             "controls": [
//               "subEntityPanelTypeOfBill",
//               "subEntityPanelPlaceOfService",
//               "subEntityPanelRevenueCode",
//               "subEntityPanelTypeOfService"
//             ],
//             "parentControl": "xtraScrollableControl",
//             "properties": {
//               "autoSizingPanelTop": "HealthEdge.Controls.AutoSizingPanel",
//               "AutoHeight": true,
//               "AutoSizeMode": "GrowAndShrink",
//               "AutoWidth": false,
//               "Dock": "Top",
//               "Hidden": false,
//               "Size": {
//                 "width": 1029,
//                 "height": 32
//               },
//               "TabIndex": 1,
//               "XPadding": 0,
//               "YPadding": 0,
//               "Row": 1,
//               "Column": 0
//             },
//             "childControls": [
//               {
//                 "name": "subEntityPanelTypeOfBill",
//                 "type": null,
//                 "x": 523,
//                 "y": 3,
//                 "controls": [
//                   "typeOfBillResolverButton",
//                   "codeAutoEditTypeOfBill"
//                 ],
//                 "parentControl": "autoSizingPanelTop",
//                 "properties": {
//                   "subEntityPanelTypeOfBill": "HealthEdge.Controls.MetadataDriven.SubEntityPanel",
//                   "AutoHeight": true,
//                   "AutoWidth": false,
//                   "EntityType": "TypeOfBill",
//                   "Hidden": false,
//                   "Path": "TypeOfBill",
//                   "Size": {
//                     "width": 182,
//                     "height": 30
//                   },
//                   "TabIndex": 3,
//                   "XPadding": 0,
//                   "YPadding": 0,
//                   "Row": 1,
//                   "Column": 3
//                 },
//                 "childControls": [
//                   {
//                     "name": "typeOfBillResolverButton",
//                     "type": "button",
//                     "x": 153,
//                     "y": 6,
//                     "controls": null,
//                     "parentControl": "subEntityPanelTypeOfBill",
//                     "properties": {
//                       "typeOfBillResolverButton": "HealthEdge.Controls.ReferenceMenuButton",
//                       "AutoPosition": true,
//                       "CanCreate": false,
//                       "CreateDocumentType": "None",
//                       "Down": false,
//                       "ImageOptions.Image": "typeOfBillResolverButton.ImageOptions.Image",
//                       "ImageOptions.Location": "MiddleCenter",
//                       "MaximumSize": {
//                         "width": 18,
//                         "height": 18
//                       },
//                       "ResolverTypeName": "HealthEdge.Controls.Inquiry.TypeOfBillResolver",
//                       "Size": {
//                         "width": 18,
//                         "height": 18
//                       },
//                       "SubEntityPanel": "subEntityPanelTypeOfBill",
//                       "TabIndex": 1,
//                       "TargetControlName": "codeAutoEditTypeOfBill",
//                       "Resolved": "HealthEdge.Controls.ReferenceResolved",
//                       "ClearClicked": "System.EventHandler",
//                       "Row": 0,
//                       "Column": 1
//                     },
//                     "childControls": []
//                   },
//                   {
//                     "name": "codeAutoEditTypeOfBill",
//                     "type": "textbox",
//                     "x": 3,
//                     "y": 6,
//                     "controls": null,
//                     "parentControl": "subEntityPanelTypeOfBill",
//                     "properties": {
//                       "codeAutoEditTypeOfBill": "HealthEdge.Controls.MetadataDriven.CodeAutoEdit",
//                       "AlertTypeName": null,
//                       "AttachedReferenceMenuButton": null,
//                       "AutoShowPopup": true,
//                       "ComboBoxItems": null,
//                       "CustomAlertImage": null,
//                       "CustomAlertToolTipText": null,
//                       "CustomAlertToolTipTitle": null,
//                       "CustomLookupNameValues": null,
//                       "EditType": "Automatic",
//                       "EnableCustomMask": false,
//                       "EnableTextEditor": false,
//                       "HasPrivacyInfo": false,
//                       "HideLabel": false,
//                       "HideShortDescriptionField": false,
//                       "IgnoreMask": false,
//                       "IgnorePropertyChangedEvent": false,
//                       "LabelDock": "Left",
//                       "LabelText": "TOB:",
//                       "LabelTextAlignment": "MiddleLeft",
//                       "LabelWidth": 65,
//                       "LinkType": null,
//                       "NullValuePrompt": null,
//                       "Path": "TypeOfBillCode",
//                       "PHIRestricted": false,
//                       "PositiveOnlyCurrency": false,
//                       "ReferencePanel": "subEntityPanelTypeOfBill",
//                       "ShortDescriptionField": "TypeOfBillDescription",
//                       "ShowCustomAlert": false,
//                       "Size": {
//                         "width": 144,
//                         "height": 20
//                       },
//                       "TabIndex": 0,
//                       "ToolTipPath": "TypeOfBillDescription",
//                       "CodeValueChange": "HealthEdge.Controls.MetadataDriven.CodeValueChangeEventHandler",
//                       "OnEditValueChanged": "System.EventHandler",
//                       "Row": 0,
//                       "Column": 0
//                     },
//                     "childControls": []
//                   }
//                 ]
//               },
//               {
//                 "name": "subEntityPanelPlaceOfService",
//                 "type": null,
//                 "x": 381,
//                 "y": 0,
//                 "controls": [
//                   "placeOfServiceResolverButton",
//                   "codeAutoEditPlaceOfService"
//                 ],
//                 "parentControl": "autoSizingPanelTop",
//                 "properties": {
//                   "subEntityPanelPlaceOfService": "HealthEdge.Controls.MetadataDriven.SubEntityPanel",
//                   "AutoHeight": true,
//                   "AutoWidth": false,
//                   "EntityType": "PlaceOfService",
//                   "Hidden": false,
//                   "Path": "PlaceOfService",
//                   "Size": {
//                     "width": 134,
//                     "height": 33
//                   },
//                   "TabIndex": 2,
//                   "XPadding": 0,
//                   "YPadding": 0,
//                   "Row": 0,
//                   "Column": 2
//                 },
//                 "childControls": [
//                   {
//                     "name": "placeOfServiceResolverButton",
//                     "type": "button",
//                     "x": 112,
//                     "y": 9,
//                     "controls": null,
//                     "parentControl": "subEntityPanelPlaceOfService",
//                     "properties": {
//                       "placeOfServiceResolverButton": "HealthEdge.Controls.ReferenceMenuButton",
//                       "AutoPosition": true,
//                       "CanCreate": false,
//                       "CreateDocumentType": "None",
//                       "Down": false,
//                       "ImageOptions.Image": "placeOfServiceResolverButton.ImageOptions.Image",
//                       "ImageOptions.Location": "MiddleCenter",
//                       "MaximumSize": {
//                         "width": 18,
//                         "height": 18
//                       },
//                       "ResolverTypeName": "HealthEdge.Controls.Inquiry.PlaceOfServiceResolver",
//                       "Size": {
//                         "width": 18,
//                         "height": 18
//                       },
//                       "SubEntityPanel": "subEntityPanelPlaceOfService",
//                       "TabIndex": 1,
//                       "TargetControlName": "codeAutoEditPlaceOfService",
//                       "ClearClicked": "System.EventHandler",
//                       "Row": 0,
//                       "Column": 1
//                     },
//                     "childControls": []
//                   },
//                   {
//                     "name": "codeAutoEditPlaceOfService",
//                     "type": "textbox",
//                     "x": 0,
//                     "y": 9,
//                     "controls": null,
//                     "parentControl": "subEntityPanelPlaceOfService",
//                     "properties": {
//                       "codeAutoEditPlaceOfService": "HealthEdge.Controls.MetadataDriven.CodeAutoEdit",
//                       "AlertTypeName": null,
//                       "AttachedReferenceMenuButton": null,
//                       "AutoShowPopup": true,
//                       "ComboBoxItems": null,
//                       "CustomAlertImage": null,
//                       "CustomAlertToolTipText": null,
//                       "CustomAlertToolTipTitle": null,
//                       "CustomLookupNameValues": null,
//                       "EditType": "Automatic",
//                       "EnableCustomMask": false,
//                       "EnableTextEditor": false,
//                       "HasPrivacyInfo": false,
//                       "HideLabel": false,
//                       "HideShortDescriptionField": false,
//                       "IgnoreMask": false,
//                       "IgnorePropertyChangedEvent": false,
//                       "LabelDock": "Left",
//                       "LabelText": "POS:",
//                       "LabelTextAlignment": "MiddleLeft",
//                       "LabelWidth": 71,
//                       "LinkType": null,
//                       "NullValuePrompt": null,
//                       "Path": "PlaceOfServiceCode",
//                       "PHIRestricted": false,
//                       "PositiveOnlyCurrency": false,
//                       "ReferencePanel": "subEntityPanelPlaceOfService",
//                       "ShortDescriptionField": "PlaceOfServiceDescription",
//                       "ShowCustomAlert": false,
//                       "Size": {
//                         "width": 105,
//                         "height": 20
//                       },
//                       "TabIndex": 0,
//                       "ToolTipPath": "PlaceOfServiceDescription",
//                       "CodeValueChange": "HealthEdge.Controls.MetadataDriven.CodeValueChangeEventHandler",
//                       "OnEditValueChanged": "System.EventHandler",
//                       "Row": 0,
//                       "Column": 0
//                     },
//                     "childControls": []
//                   }
//                 ]
//               },
//               {
//                 "name": "subEntityPanelRevenueCode",
//                 "type": null,
//                 "x": 198,
//                 "y": 0,
//                 "controls": [
//                   "codeAutoEditRevenueCode",
//                   "revenueCodeResolverButton"
//                 ],
//                 "parentControl": "autoSizingPanelTop",
//                 "properties": {
//                   "subEntityPanelRevenueCode": "HealthEdge.Controls.MetadataDriven.SubEntityPanel",
//                   "AutoHeight": true,
//                   "AutoWidth": false,
//                   "EntityType": null,
//                   "Hidden": false,
//                   "Path": "RevenueCode",
//                   "Size": {
//                     "width": 177,
//                     "height": 33
//                   },
//                   "TabIndex": 1,
//                   "XPadding": 0,
//                   "YPadding": 0,
//                   "Row": 0,
//                   "Column": 1
//                 },
//                 "childControls": [
//                   {
//                     "name": "codeAutoEditRevenueCode",
//                     "type": "textbox",
//                     "x": 2,
//                     "y": 9,
//                     "controls": null,
//                     "parentControl": "subEntityPanelRevenueCode",
//                     "properties": {
//                       "codeAutoEditRevenueCode": "HealthEdge.Controls.Claim.RevenueCodeAutoEdit",
//                       "AlertTypeName": null,
//                       "AlignmentColumn": "Column1",
//                       "AttachedReferenceMenuButton": null,
//                       "AutoShowPopup": true,
//                       "ComboBoxItems": null,
//                       "CustomAlertImage": null,
//                       "CustomAlertToolTipText": null,
//                       "CustomAlertToolTipTitle": null,
//                       "CustomLookupNameValues": null,
//                       "EditType": "Automatic",
//                       "EnableCustomMask": false,
//                       "EnableTextEditor": false,
//                       "HasPrivacyInfo": false,
//                       "HideLabel": false,
//                       "HideShortDescriptionField": false,
//                       "IgnoreMask": false,
//                       "IgnorePropertyChangedEvent": false,
//                       "LabelDock": "Left",
//                       "LabelText": "Revenue Code:",
//                       "LabelTextAlignment": "MiddleLeft",
//                       "LabelWidth": 87,
//                       "LinkType": null,
//                       "NullValuePrompt": null,
//                       "Path": "ServiceCode",
//                       "PHIRestricted": false,
//                       "PositiveOnlyCurrency": false,
//                       "ReferencePanel": "subEntityPanelRevenueCode",
//                       "ShowCustomAlert": false,
//                       "Size": {
//                         "width": 144,
//                         "height": 20
//                       },
//                       "TabIndex": 0,
//                       "ToolTipPath": "ServiceShortDescription",
//                       "CodeValueChange": "HealthEdge.Controls.MetadataDriven.CodeValueChangeEventHandler",
//                       "OnEditValueChanged": "System.EventHandler",
//                       "Row": 0,
//                       "Column": 0
//                     },
//                     "childControls": []
//                   },
//                   {
//                     "name": "revenueCodeResolverButton",
//                     "type": "button",
//                     "x": 151,
//                     "y": 9,
//                     "controls": null,
//                     "parentControl": "subEntityPanelRevenueCode",
//                     "properties": {
//                       "revenueCodeResolverButton": "HealthEdge.Controls.ReferenceMenuButton",
//                       "AutoPosition": true,
//                       "CanCreate": false,
//                       "CreateDocumentType": "None",
//                       "Down": false,
//                       "ImageOptions.Image": "revenueCodeResolverButton.ImageOptions.Image",
//                       "ImageOptions.Location": "MiddleCenter",
//                       "MaximumSize": {
//                         "width": 18,
//                         "height": 18
//                       },
//                       "ResolverTypeName": "HealthEdge.Controls.Inquiry.ServiceResolver",
//                       "Size": {
//                         "width": 18,
//                         "height": 18
//                       },
//                       "SubEntityPanel": "subEntityPanelRevenueCode",
//                       "TabIndex": 1,
//                       "TargetControlName": "autoEditRevenueCode",
//                       "ClearClicked": "System.EventHandler",
//                       "Row": 0,
//                       "Column": 1
//                     },
//                     "childControls": []
//                   }
//                 ]
//               },
//               {
//                 "name": "subEntityPanelTypeOfService",
//                 "type": null,
//                 "x": 0,
//                 "y": 0,
//                 "controls": [
//                   "serviceCodeResolverButton",
//                   "codeAutoEditServiceCode"
//                 ],
//                 "parentControl": "autoSizingPanelTop",
//                 "properties": {
//                   "subEntityPanelTypeOfService": "HealthEdge.Controls.MetadataDriven.SubEntityPanel",
//                   "AutoHeight": true,
//                   "AutoWidth": false,
//                   "EntityType": "Service",
//                   "Hidden": false,
//                   "Path": "ServiceCode",
//                   "Size": {
//                     "width": 184,
//                     "height": 33
//                   },
//                   "TabIndex": 0,
//                   "XPadding": 0,
//                   "YPadding": 0,
//                   "Row": 0,
//                   "Column": 0
//                 },
//                 "childControls": [
//                   {
//                     "name": "serviceCodeResolverButton",
//                     "type": "button",
//                     "x": 156,
//                     "y": 9,
//                     "controls": null,
//                     "parentControl": "subEntityPanelTypeOfService",
//                     "properties": {
//                       "serviceCodeResolverButton": "HealthEdge.Controls.ReferenceMenuButton",
//                       "AutoPosition": true,
//                       "CanCreate": false,
//                       "CreateDocumentType": "None",
//                       "Down": false,
//                       "ImageOptions.Image": "serviceCodeResolverButton.ImageOptions.Image",
//                       "ImageOptions.Location": "MiddleCenter",
//                       "MaximumSize": {
//                         "width": 18,
//                         "height": 18
//                       },
//                       "ResolverTypeName": "HealthEdge.Controls.Inquiry.ServiceResolver",
//                       "Size": {
//                         "width": 18,
//                         "height": 18
//                       },
//                       "SubEntityPanel": "subEntityPanelTypeOfService",
//                       "TabIndex": 1,
//                       "TargetControlName": "autoEditServiceCode",
//                       "Row": 0,
//                       "Column": 1
//                     },
//                     "childControls": []
//                   },
//                   {
//                     "name": "codeAutoEditServiceCode",
//                     "type": "textbox",
//                     "x": 13,
//                     "y": 9,
//                     "controls": null,
//                     "parentControl": "subEntityPanelTypeOfService",
//                     "properties": {
//                       "codeAutoEditServiceCode": "HealthEdge.Controls.MetadataDriven.CodeAutoEdit",
//                       "AlertTypeName": null,
//                       "AttachedReferenceMenuButton": null,
//                       "AutoShowPopup": true,
//                       "ComboBoxItems": null,
//                       "CustomAlertImage": null,
//                       "CustomAlertToolTipText": null,
//                       "CustomAlertToolTipTitle": null,
//                       "CustomLookupNameValues": null,
//                       "EditType": "Automatic",
//                       "EnableCustomMask": false,
//                       "EnableTextEditor": false,
//                       "HasPrivacyInfo": false,
//                       "HideLabel": false,
//                       "HideShortDescriptionField": false,
//                       "IgnoreMask": false,
//                       "IgnorePropertyChangedEvent": false,
//                       "LabelDock": "Left",
//                       "LabelText": "Service Code:",
//                       "LabelTextAlignment": "MiddleLeft",
//                       "LabelWidth": 75,
//                       "LinkType": null,
//                       "LongDescriptionField": "ServiceLongDescription",
//                       "NullValuePrompt": null,
//                       "Path": "ServiceCode",
//                       "PHIRestricted": false,
//                       "PositiveOnlyCurrency": false,
//                       "ReferencePanel": "subEntityPanelTypeOfService",
//                       "ShortDescriptionField": "ServiceShortDescription",
//                       "ShowCustomAlert": false,
//                       "Size": {
//                         "width": 138,
//                         "height": 20
//                       },
//                       "TabIndex": 0,
//                       "ToolTipPath": "ServiceShortDescription",
//                       "CodeValueChange": "HealthEdge.Controls.MetadataDriven.CodeValueChangeEventHandler",
//                       "Row": 0,
//                       "Column": 0
//                     },
//                     "childControls": []
//                   }
//                 ]
//               }
//             ]
//           },
//           {
//             "name": "autoSizingQuestionPanel",
//             "type": null,
//             "x": 0,
//             "y": 0,
//             "controls": [
//               "lookUpEditCommonQuestion"
//             ],
//             "parentControl": "xtraScrollableControl",
//             "properties": {
//               "autoSizingQuestionPanel": "HealthEdge.Controls.AutoSizingPanel",
//               "AutoHeight": true,
//               "AutoWidth": false,
//               "Dock": "Top",
//               "Hidden": false,
//               "Size": {
//                 "width": 1029,
//                 "height": 33
//               },
//               "TabIndex": 0,
//               "XPadding": 0,
//               "YPadding": 0,
//               "Row": 0,
//               "Column": 0
//             },
//             "childControls": [
//               {
//                 "name": "lookUpEditCommonQuestion",
//                 "type": "Default",
//                 "x": 14,
//                 "y": 7,
//                 "controls": null,
//                 "parentControl": "autoSizingQuestionPanel",
//                 "properties": {
//                   "lookUpEditCommonQuestion": "DevExpress.XtraEditors.SearchLookUpEdit",
//                   "Properties.AllowNullInput": "True",
//                   "Properties.AllowMouseWheel": false,
//                   "Properties.NullText": "[Select a question...]",
//                   "Properties.PopupFilterMode": "Contains",
//                   "Properties.Closed": "DevExpress.XtraEditors.Controls.ClosedEventHandler",
//                   "Properties.ButtonPressed": "DevExpress.XtraEditors.Controls.ButtonPressedEventHandler",
//                   "Size": {
//                     "width": 555,
//                     "height": 20
//                   },
//                   "TabIndex": 0,
//                   "EditValueChanged": "System.EventHandler",
//                   "Row": 0,
//                   "Column": 0
//                 },
//                 "childControls": []
//               }
//             ]
//           }
//         ]
//       }
//     ]
//   }
// ]

// export const a = [
//   {
//     "name": "components",
//     "type": null,
//     "x": null,
//     "y": null,
//     "controls": null,
//     "parentControl": null,
//     "properties": {},
//     "childControls": []
//   },
//   {
//     "name": "autoSizingPanelTeeth",
//     "type": null,
//     "x": 2,
//     "y": 2,
//     "controls": [
//       "subEntityPanelTooth",
//       "autoEditToothSystem"
//     ],
//     "parentControl": null,
//     "properties": {
//       "autoSizingPanelTeeth": "HealthEdge.Controls.AutoSizingPanel",
//       "AutoHeight": false,
//       "AutoWidth": false,
//       "Dock": "Top",
//       "Hidden": false,
//       "Size": {
//         "width": 854,
//         "height": 35
//       },
//       "TabIndex": 1,
//       "XPadding": 0,
//       "YPadding": 0
//     },
//     "childControls": [
//       {
//         "name": "subEntityPanelTooth",
//         "type": null,
//         "x": 1,
//         "y": 3,
//         "controls": [
//           "autoEditToothName"
//         ],
//         "parentControl": "autoSizingPanelTeeth",
//         "properties": {
//           "subEntityPanelTooth": "HealthEdge.Controls.MetadataDriven.SubEntityPanel",
//           "AutoHeight": true,
//           "AutoWidth": false,
//           "EntityType": "ToothSearch",
//           "Hidden": false,
//           "Path": "ToothSearch",
//           "Size": {
//             "width": 260,
//             "height": 27
//           },
//           "TabIndex": 0,
//           "XPadding": 0,
//           "YPadding": 0,
//           "Row": 0,
//           "Column": 0
//         },
//         "childControls": [
//           {
//             "name": "autoEditToothName",
//             "type": "textbox",
//             "x": 8,
//             "y": 4,
//             "controls": null,
//             "parentControl": "subEntityPanelTooth",
//             "properties": {
//               "autoEditToothName": "HealthEdge.Controls.MetadataDriven.AutoEdit",
//               "AlertTypeName": null,
//               "AlignmentColumn": "Column1",
//               "AttachedReferenceMenuButton": null,
//               "AutoShowPopup": true,
//               "ComboBoxItems": null,
//               "CustomAlertImage": null,
//               "CustomAlertToolTipText": null,
//               "CustomAlertToolTipTitle": null,
//               "CustomLookupNameValues": null,
//               "EditType": "Automatic",
//               "EnableCustomMask": false,
//               "EnableTextEditor": false,
//               "HasPrivacyInfo": false,
//               "HideLabel": false,
//               "HideShortDescriptionField": false,
//               "IgnoreMask": false,
//               "IgnorePropertyChangedEvent": false,
//               "LabelDock": "Left",
//               "LabelText": "Tooth Number:",
//               "LabelTextAlignment": "MiddleLeft",
//               "LabelWidth": 85,
//               "LinkType": null,
//               "NullValuePrompt": null,
//               "Path": "ToothName",
//               "PHIRestricted": false,
//               "PositiveOnlyCurrency": false,
//               "ReadOnly": true,
//               "ShowCustomAlert": false,
//               "Size": {
//                 "width": 180,
//                 "height": 20
//               },
//               "TabIndex": 0,
//               "ToolTipPath": null,
//               "OnEditValueChanged": "System.EventHandler",
//               "Row": 0,
//               "Column": 0
//             },
//             "childControls": []
//           }
//         ]
//       },
//       {
//         "name": "autoEditToothSystem",
//         "type": "textbox",
//         "x": 381,
//         "y": 7,
//         "controls": null,
//         "parentControl": "autoSizingPanelTeeth",
//         "properties": {
//           "autoEditToothSystem": "HealthEdge.Controls.MetadataDriven.AutoEdit",
//           "AlertTypeName": null,
//           "AttachedReferenceMenuButton": null,
//           "AutoShowPopup": true,
//           "ComboBoxItems": null,
//           "CustomAlertImage": null,
//           "CustomAlertToolTipText": null,
//           "CustomAlertToolTipTitle": null,
//           "CustomLookupNameValues": null,
//           "EditType": "Automatic",
//           "EnableCustomMask": false,
//           "EnableTextEditor": false,
//           "HasPrivacyInfo": false,
//           "HideLabel": false,
//           "HideShortDescriptionField": false,
//           "IgnoreMask": false,
//           "IgnorePropertyChangedEvent": false,
//           "LabelDock": "Left",
//           "LabelText": "Tooth System:",
//           "LabelTextAlignment": "MiddleLeft",
//           "LabelWidth": 80,
//           "LinkType": null,
//           "NullValuePrompt": null,
//           "Path": "ToothSystem",
//           "PHIRestricted": false,
//           "PositiveOnlyCurrency": false,
//           "ReadOnly": true,
//           "ShowCustomAlert": false,
//           "Size": {
//             "width": 360,
//             "height": 20
//           },
//           "TabIndex": 1,
//           "ToolTipPath": null,
//           "Row": 1,
//           "Column": 1
//         },
//         "childControls": []
//       }
//     ]
//   },
//   {
//     "name": "autoEditToothSystem",
//     "type": "textbox",
//     "x": 381,
//     "y": 7,
//     "controls": null,
//     "parentControl": "autoSizingPanelTeeth",
//     "properties": {
//       "autoEditToothSystem": "HealthEdge.Controls.MetadataDriven.AutoEdit",
//       "AlertTypeName": null,
//       "AttachedReferenceMenuButton": null,
//       "AutoShowPopup": true,
//       "ComboBoxItems": null,
//       "CustomAlertImage": null,
//       "CustomAlertToolTipText": null,
//       "CustomAlertToolTipTitle": null,
//       "CustomLookupNameValues": null,
//       "EditType": "Automatic",
//       "EnableCustomMask": false,
//       "EnableTextEditor": false,
//       "HasPrivacyInfo": false,
//       "HideLabel": false,
//       "HideShortDescriptionField": false,
//       "IgnoreMask": false,
//       "IgnorePropertyChangedEvent": false,
//       "LabelDock": "Left",
//       "LabelText": "Tooth System:",
//       "LabelTextAlignment": "MiddleLeft",
//       "LabelWidth": 80,
//       "LinkType": null,
//       "NullValuePrompt": null,
//       "Path": "ToothSystem",
//       "PHIRestricted": false,
//       "PositiveOnlyCurrency": false,
//       "ReadOnly": true,
//       "ShowCustomAlert": false,
//       "Size": {
//         "width": 360,
//         "height": 20
//       },
//       "TabIndex": 1,
//       "ToolTipPath": null,
//       "Row": 1,
//       "Column": 1
//     },
//     "childControls": []
//   },
//   {
//     "name": "autoEditToothName",
//     "type": "textbox",
//     "x": 8,
//     "y": 4,
//     "controls": null,
//     "parentControl": "subEntityPanelTooth",
//     "properties": {
//       "autoEditToothName": "HealthEdge.Controls.MetadataDriven.AutoEdit",
//       "AlertTypeName": null,
//       "AlignmentColumn": "Column1",
//       "AttachedReferenceMenuButton": null,
//       "AutoShowPopup": true,
//       "ComboBoxItems": null,
//       "CustomAlertImage": null,
//       "CustomAlertToolTipText": null,
//       "CustomAlertToolTipTitle": null,
//       "CustomLookupNameValues": null,
//       "EditType": "Automatic",
//       "EnableCustomMask": false,
//       "EnableTextEditor": false,
//       "HasPrivacyInfo": false,
//       "HideLabel": false,
//       "HideShortDescriptionField": false,
//       "IgnoreMask": false,
//       "IgnorePropertyChangedEvent": false,
//       "LabelDock": "Left",
//       "LabelText": "Tooth Number:",
//       "LabelTextAlignment": "MiddleLeft",
//       "LabelWidth": 85,
//       "LinkType": null,
//       "NullValuePrompt": null,
//       "Path": "ToothName",
//       "PHIRestricted": false,
//       "PositiveOnlyCurrency": false,
//       "ReadOnly": true,
//       "ShowCustomAlert": false,
//       "Size": {
//         "width": 180,
//         "height": 20
//       },
//       "TabIndex": 0,
//       "ToolTipPath": null,
//       "OnEditValueChanged": "System.EventHandler",
//       "Row": 0,
//       "Column": 0
//     },
//     "childControls": []
//   }
// ]