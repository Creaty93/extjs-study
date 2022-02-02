Ext.define('study.view.Introduce', {
    extend: 'Ext.panel.Panel',
    xtype: 'introduce',
    
    title:'Introduce',
    width:'100%',
    height:'100%',
    
    layout:'vbox',
    items:[{
	xtype:'image',
	width: 150,
	height: 150,
	src:'https://creaty93.github.io/extjs-study/resources/myprofileimg.jpg',
	padding:'0 0 10 0'
},{
	xtype:'label',
	text:'안녕하세요 개발자 손민규 입니다.',
	padding:'0 0 10 0'
},{
	xtype:'label',
	text:'Email : stonbeam1@naver.com',
},{
	xtype:'label',
	html:'<p>Github : <a href="https://github.com/creaty93" target="_blank">https://github.com/creaty93</a></p>'
},{
	xtype:'label',
	text:'기술스택 : C#, ASP.NET MVC, Javascript, Ajax, ExtJS, ASP.NET Core Blazor, Winform, Devexpress, MS-SQL'
}]
});
