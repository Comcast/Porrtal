# Porrtal Features

*Porrtal provides the plumbing to compose your components together*

![Porrtal Features](porrtal-features-diagram.jpg)

* **Porrtal Panes** - host your components in several regions or "panes".
  * **Nav Pane** - a region on the left side of the application.  The Nav Pane allows switching between components using a set of icons arranged vertically.
  * **Main Pane** - the main application region that allows switching between components using a set of tabs.
  * **Search Pane** - a region displayed in a popup when the user enters search text.  The Search Pane allows switching between components using a set of tabs.  The components in the Search Pane can subscribe to the search text and react by retrieving and displaying matching data records.
* **Component "View" Registration** - Porrtal provides a flexible mechanism for registering your components.  A registered component is referred to as a "view" in the Porrtal app.  As part of the view registration, you can specify the Porrtal Pane where the view should be hosted.  You can specify the "startup" flag if the view should be loaded when the application launches.  Other properties, including icon, text, and tooltip can be specified to control the display of the view's tab in the Porrtal app.
* **Dynamic "View" Launching** - Porrtal provides an easy way to launch a view (and its associated component) from code.
* **Dynamic "View" Launching via "Entity Menu"** - As an example, suppose we have a search component that retrieves matching accounts from an HR data source.  In this case, the Porrtal "Entity Type" is "account".  When we are displaying the resulting account items in the search component, we can use the Porrtal "Entity Menu" to display all of the registered views that specify the "account" entity type.  When the user clicks on the account item, the "Entity Menu" is displayed showing each of the matching "Entity Type"="account" views.  When a view is selected in the menu, that view is launched in the "Main Pane" and passed in the particular account that should be displayed.

*This text that you are reading here is in a component view registered in this Porrtal application.  You can see the "features" tab above.  This view references a "markdown viewer" component.  The contentUrl for the markdown file is passed to the component when it is launched dynamically from the nav view*
