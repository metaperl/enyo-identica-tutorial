enyo.kind({
  name: "Tweet",
  kind: enyo.Control,
  tag: "div",
  style: "border-style: solid; border-width: 2px; " +
         "padding: 10px; margin: 10px; min-height: 50px",

  published: {
    icon: "",
    handle: "",
    text: ""
  },

  components: [
    { tag: "img", name: "icon",
      style: "width: 50px; height: 50px; float: left; padding-right: 10px" },
    { tag: "b", name: "handle" },
    { tag: "span", name: "text" }
  ],

  create: function() {
    this.inherited(arguments);
    this.iconChanged();
    this.handleChanged();
    this.textChanged();
  },

  iconChanged: function() {
    this.$.icon.setAttribute("src", this.icon);
  },

  handleChanged: function() {
    this.$.handle.setContent(this.handle + ": ");
  },

  textChanged: function() {
    this.$.text.setContent(this.text);
  }
});

enyo.kind({
    name: "App",
    kind: "FittableRows",
    fit: true,
    components:[
        {kind: "onyx.Toolbar", components: [
            {kind: "onyx.Button", content: "Reload", ontap: "reloadTweets"}
        ]},
	{kind: "enyo.Scroller", fit: true, components: [
	    {name: "main", classes: "nice-padding"}
	]},
        {kind: "onyx.TextArea"
        },
	{kind: "onyx.Toolbar", components: [
	    {kind: "onyx.Button", content: "Post Tweet", ontap: "postTweet"}
	]}
    ],
    reloadTweets: function(inSender, inEvent) {
        t = new Tweet();
        t.text = "hoho";
	this.$.main.addContent(t);
    }
});
