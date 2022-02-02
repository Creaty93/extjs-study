/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('study.view.main.InputFieldSampleController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.inputfieldsample',

    checkboxChange:function( obj, newValue, oldValue, eOpts){
			obj.setBoxLabel(newValue?'true':'false');
		},
	
	buttonClick:function(btn){
		Ext.MessageBox.show({
			title:'btnTitle',
			msg:'btn click'
		});
		},
		
	buttonMenuClick:function(menu, item, e, eOpts){
				Ext.toast({
					html:item.text,
					closable:false,
					align:'b'
				});
			},
	
	comboChange:function(obj, newValue, oldValue, eOpts){
			console.log('comobo change:',newValue);
		},
});
