/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('study.view.main.InputFieldSampleModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.inputfieldsample',

    stores:{
	comboStore:{
		fields:['key','value'],
		data:[{
			'key':'key1', 'value':'value1'
		},{
			'key':'key2', 'value':'value2'
		},{
			'key':'key3', 'value':'value3'
		}]
	}
}

    //TODO - add data, formulas and/or methods to support your view
});
