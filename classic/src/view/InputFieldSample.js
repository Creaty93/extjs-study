Ext.define('study.view.InputFieldSample', {
    extend: 'Ext.panel.Panel',
    xtype: 'inputfieldsample',
    
    controller:'inputfieldsample',
    viewModel:'inputfieldsample',
    
    title:'InputField Sample',
    
    layout:{
	type:'vbox'
},
    items:[{
	xtype:'textfield',
	padding:'5 5 5 5',
	fieldLabel:'TextField'
},{
	xtype: 'textfield',
	padding:'5 5 5 5',
	fieldLabel:'Password',
	inputType:'password',
	placeholder:'input your password'
},{
	xtype: 'datefield',
	padding:'5 5 5 5',
	fieldLabel:'Datefield'
},{
	xtype: 'timefield',
	padding:'5 5 5 5',
	fieldLabel:'Timefield'
},{
	xtype: 'datepicker',
	padding:'5 5 5 5',
	fieldLabel:'DatePicker'
},{
	xtype: 'monthpicker',
	padding:'5 5 5 5',
	fieldLabel:'MonthPicker'
},{
	xtype: 'numberfield',
	padding:'5 5 5 5',
	fieldLabel:'Numberfield',
	minValue:0,
	maxValue:10,
	step:0.1
},{
	xtype: 'textarea',
	padding:'5 5 5 5',
	fieldLabel:'TextArea'
},{
	xtype: 'checkbox',
	padding:'5 5 5 5',
	boxLabel:'CheckBox',
	listeners:{
		change:'checkboxChange'
	}
},{
	xtype: 'radio',
	name:'radio',
	padding:'5 5 5 5',
	boxLabel:'radio1'
},{
	xtype: 'radio',
	name:'radio',
	padding:'5 5 5 5',
	boxLabel:'radio2'
},{
	xtype: 'radio',
	name:'radio',
	padding:'5 5 5 5',
	boxLabel:'radio3'
},{
	xtype:'radiogroup',
	name:'radiogroupd',
	items:[{
		boxLabel:'item1',
		inputValue:1
	},{
		boxLabel:'item2',
		inputValue:2
	},{
		boxLabel:'item3',
		inputValue:3
	}]
},{
	xtype: 'button',
	padding:'5 5 5 5',
	text:'button',
	handler:'buttonClick'
},{
	xtype: 'button',
	padding:'5 5 5 5',
	iconCls: 'fas fa-fighter-jet'
},{
	xtype: 'button',
	padding:'5 5 5 5',
	iconCls: 'fas fa-fighter-jet',
	text:'icon button'
},{
	xtype: 'button',
	padding:'5 5 5 5',
	text:'menu button',
	
	menu:{
		xtype:'menu',
		items:[{
			text:'menu1'
		},{
			text:'menu2'
		},{
			text:'menu3'
		}],
		listeners:{
			click:'buttonMenuClick'
		}
	}
},{
	xtype:'combo',
	fieldLabel:'combo box',
	queryMode:'local',
	displayField:'key',
	valueField:'value',
	bind:{
		store:'{comboStore}'
	},
	listeners:{
		change:'comboChange'
	}
}]
});
