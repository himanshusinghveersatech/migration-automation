export const a = [

    {
      "name": "tabPageGeneral",
      "x": null,
      "y": null,
      "controls": [
        "accumulatorAdjustmentDetailsGeneral"
      ],
      "parentControl": null,
      "properties": {
        "tabPageGeneral": "DevExpress.XtraTab.XtraTabPage",
        "AutoScroll": true,
        "Size": {
          "width": 615,
          "height": 342
        },
        "Text": "General"
      },
      "childControls": [
        {
          "name": "accumulatorAdjustmentDetailsGeneral",
          "x": 0,
          "y": 0,
          "controls": null,
          "parentControl": "tabPageGeneral",
          "properties": {
            "accumulatorAdjustmentDetailsGeneral": "HealthEdge.Controls.AccumulatorAdjustment.AccumulatorAdjustmentDetailsGeneral",
            "Dock": "Fill",
            "Size": {
              "width": 615,
              "height": 342
            },
            "TabIndex": 1,
            "Row": 0,
            "Column": 0
          },
          "childControls": []
        }
      ]
    },
    {
      "name": "tabPageWarnings",
      "x": null,
      "y": null,
      "controls": [
        "warningsGrid"
      ],
      "parentControl": null,
      "properties": {
        "tabPageWarnings": "DevExpress.XtraTab.XtraTabPage",
        "PageVisible": false,
        "Size": {
          "width": 615,
          "height": 342
        },
        "Text": "Warnings"
      },
      "childControls": [
        {
          "name": "warningsGrid",
          "x": 0,
          "y": 0,
          "controls": null,
          "parentControl": "tabPageWarnings",
          "properties": {
            "warningsGrid": "HealthEdge.Controls.Shared.WarningsGrid",
            "AutoHeight": true,
            "AutoWidth": false,
            "Dock": "Fill",
            "Hidden": false,
            "Size": {
              "width": 615,
              "height": 342
            },
            "TabIndex": 1,
            "Row": 0,
            "Column": 0
          },
          "childControls": []
        }
      ]
    },
    {
      "name": "tabControlAccumulatorAdjustment",
      "x": 0,
      "y": 0,
      "controls": null,
      "parentControl": null,
      "properties": {
        "tabControlAccumulatorAdjustment": "DevExpress.XtraTab.XtraTabControl",
        "Dock": "Fill",
        "SelectedTabPage": "tabPageGeneral",
        "Size": {
          "width": 622,
          "height": 371
        },
        "TabIndex": 0,
        "TabPages": [
          "tabPageGeneral",
          "tabPageWarnings"
        ]
      },
      "childControls": []
    }
  ]
  
  