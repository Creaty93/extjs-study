/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('study.view.main.AjaxSampleController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.ajaxsample',

	rowClick:function( obj, record, element, rowIndex, e, eOpts){
		Ext.MessageBox.show({
			title:'RowClick',
			msg: 'rowindex : '+rowIndex
		});
	},
	dataLoadClick:function(btn){
		Ext.Ajax.request({
			url:'/data/grid.json',
			method:'POST',
			success:function(response){
				var result = Ext.decode(response.responseText);
				var store = btn.up('grid').getStore();
				store.loadData(result.data);
			},
			failure:function(response){
				console.log('fail data load');
			}
		});
	},
});
