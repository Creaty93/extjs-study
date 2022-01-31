
Ext.onReady(function(){
	Ext.create('Ext.panel.Panel',{
		width:500,
		height:500,
		title:'tree panel',
		renderTo:Ext.getBody(),
		items:[{
			xtype:'treepanel',
			store:{
				root:{
					text:'Servers',
					expanded:true
				},
				proxy:{
					type:'ajax',
					url:'/data/tree.json',
					reader:{
						type:'json'
					}
				}
			}	
		}]
	})
})