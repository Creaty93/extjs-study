/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('study.view.main.AjaxSampleModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.ajaxsample',

    stores:{
	gridStore:{
		fields:['column1','column2','column3'],
		data:[]
	}
}

    //TODO - add data, formulas and/or methods to support your view
});
