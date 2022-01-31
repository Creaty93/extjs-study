
Ext.onReady(function(){
	Ext.create("Ext.container.Viewport",{
		renderTo  : Ext.getBody(),
		layout : 'border',
		items : [{
			xtype : 'panel',
			height : 100,
			header : false,
			region : 'north',
			items:[{
				xtype:'toolbar',
				items:[{
					xtype:'button',
					text:'File',
					menu:[{
						text:'New',
						listeners:{
							click:function(btn){
								alert('New');
							}
						}
					},{
						text:'Open File'
					},{
						text:'Close'
					}]
				}]
			}]
		},{
			xtype : 'panel',
			width : 150,
			split : true,
			title : 'test',
			region : 'west'
		},{
			xtype : 'panel',
			region : 'center',
			title : 'main'
		}]
	})
})