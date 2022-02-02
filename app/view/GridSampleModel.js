/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('study.view.main.GridSampleModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.gridsample',

    stores:{
	gridStore:{
		fields:['column1','column2','column3'],
		proxy:{
			type:'ajax',
			url:'/data/grid.json',
			reader:{
				type:'json',
				rootProperty:'data'
			}
		}
	}
}

    //TODO - add data, formulas and/or methods to support your view
});
