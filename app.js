
Ext.onReady(function(){
	Ext.create('Ext.container.Viewport',{
		rederTo:Ext.getBody(),
		items:[{
			xtype:'button',
			text:'show modal',
			handler:function(btn){
				var win = Ext.create('Ext.window.Window',{
		width:300,
		height:300,
		title:'Window Title',
		autoShow:true,
		modal:true,
		items:[{
			xtype:'button',
			text:'window btn'
		}]
	});
	
	win.show();
			}
		}]
	})
})