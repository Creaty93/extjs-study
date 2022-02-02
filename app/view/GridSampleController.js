/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('study.view.main.GridSampleController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.gridsample',

	rowClick:function( obj, record, element, rowIndex, e, eOpts){
		Ext.MessageBox.show({
			title:'RowClick',
			msg: 'rowindex : '+rowIndex
		});
		},
		
});
