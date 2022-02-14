Ext.define('study.view.WindowSample', {
    extend: 'Ext.panel.Panel',
    xtype: 'windowsample',
    
    title:'WindowSample',
    width:'100%',
    height:'100%',
    
    layout:'vbox',
    items:[{
	xtype:'button',
	text:'윈도우 띄우기',
	handler:function(btn){
		var win = Ext.create("Ext.window.Window",{
			width:300,
			height:300,
			title:'New Window',
			items:[{
				xtype:'button',
				text:'윈도우 버튼'
			}],
			maximizable:true,
			modal:true
		})
		win.show();
	}
}]
});
