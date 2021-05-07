Exhibit.Localization.importLocale("it", {
    "%general.missingLabel": "missing",
    "%general.missingSortKey": "(missing)",
    "%general.notApplicableSortKey": "(n/a)",
    "%general.itemLinkLabel": "link",
    "%general.busyIndicatorMessage": " Working...",
    "%general.showDocumentationMessage": "%1$s\n\nWe will show the relevant documentation after this message.",
    "%general.showJavascriptValidationMessage": "We will explain the error in details after this message.",
    "%general.showJsonValidationMessage": "%1$s\n\nWe will explain the error in details after this message.",
    "%general.showJsonValidationFormMessage": "We will browse to a web service where you can upload and check your code after this message.",
    "%general.badJsonMessage": "The JSON data file\n  %1$s\ncontains errors =\n\n%2$s",
    "%general.failedToLoadDataFileMessage": "We cannot locate the data file\n  %1$s\nCheck that the file name is correct.",
    "%general.error.disposeCollection": "Failed to dispose of collection",
    "%general.error.cannotRegister": "Cannot register component %1$s --",
    "%general.error.componentNameTaken": "another component has taken that name",
    "%general.error.noComponentObject": "%1$s no component object provided",
    "%general.error.missingCreateFunction": "%1$s component has no create function",
    "%general.error.missingDOMCreateFunction": "%1$s component has no createFromDOM function",
    "%general.error.unknownViewClass": "Unknown viewClass: %1$s",
    "%general.error.unknownFacetClass": "Unknown facetClass: %1$s",
    "%general.error.unknownCoderClass": "Unknown coderClass: %1$s",
    "%general.error.unknownClass": "Unknown class: %1$s",
    "%general.error.unknownLensType": "Unknown Exhibit.UI.showItemInPopup opts.lensType: %1$s",
    "%general.error.lensSelectorNotFunction": "lensSelector is not a function",
    "%general.error.lensSelectorExpressionNotFunction": "lensSelector expression %1$s is not a function",
    "%general.error.badLensSelectorExpression": "Bad lensSelector expression: %1$s",
    "%general.error.dataloadExecution": "Could not run your ondataload function; consider using a jQuery event listener for 'dataload.exhibit' instead of embedding it in the document body.",

    "%lens.error.unknownLensType": "Unknown lens type: %1$s",
    "%lens.error.failedToLoad": "Failed to load view template from %1$s\n%2$s",
    "%lens.error.constructingTemplate": "Lens: Error constructing lens template in job queue",
    "%lens.error.compilingTemplate": "Lens: Error compiling lens template and processing template job queue",
    "%lens.error.misplacedAcceptChanges": "accept-changes element in non-submission item",

    "%registry.error.noSuchRegistry": "No such registry for component: %1$s",

    "%datetime.error.invalidDate": "Invalid date string: %1$s",
    "%datetime.error.invalidTime": "Invalid time string: %1$s",

    "%settings.error.inconsistentDimensions": "Expected a tuple of %1$d dimensions separated with %2$s but got %3$s",
    "%settings.error.notFloatingPoint": "Expected a floating point number but got %1$s",
    "%settings.error.notInteger": "Expected an integer but got %1$s",
    "%settings.error.notBoolean": "Expected either 'true' or 'false' but got %1$s",
    "%settings.error.notFunction": "Expected a function or the name of a function but got %1$s",
    "%settings.error.notEnumerated": "Expected one of %1$s but got %2$s",
    "%settings.error.unknownSetting": "Unknown setting type %1$s",

    "%export.exportButtonLabel": "Export",
    "%export.exportAllButtonLabel": "Export All",
    "%export.exportDialogBoxCloseButtonLabel" : "Close",
    "%export.exportDialogBoxPrompt": "Copy this code to your clipboard as you would copy any text. Press ESC to close this dialog box.",
    "%export.focusDialogBoxCloseButtonLabel": "Close",
    "%export.rdfXmlExporterLabel": "RDF/XML",
    "%export.smwExporterLabel": "Semantic wikitext",
    "%export.exhibitJsonExporterLabel": "Exhibit JSON",
    "%export.tsvExporterLabel": "Tab Separated Values",
    "%export.htmlTableExporterLabel": "HTML Table",
    "%export.htmlExporterLabel": "Generated HTML of this view",
    "%export.bibtexExporterLabel": "BibTeX",

    "%import.couldNotLoad": "Could not load data from %1$s into the database",
    "%import.couldNotParse": "Could not parse %1$s",
    "%import.missingOrFilesystem": "Failed to access %1$s, possibly because the file is missing or because you are accessing your files via filesystem instead of a webserver while using Chrome or IE.  Use a different browser or move your files onto a webserver.",
    "%import.httpError": "Failed to access %1$s (HTTP %2$d)",
    "%import.failedAccess": "Failed to access %1$s%2$s",
    "%import.failedAccessHttpStatus": " (HTTP %1$d)",
    "%import.missingFragment": "Failed to locate fragment in %1$s",

    "%database.itemType.label": "risorsa",
    "%database.itemType.pluralLabel": "risorse",
    "%database.labelProperty.label": "label",
    "%database.labelProperty.pluralLabel": "labels",
    "%database.labelProperty.reverseLabel": "label of",
    "%database.labelProperty.reversePluralLabel": "labels of",
    "%database.idProperty.label": "id",
    "%database.idProperty.pluralLabel": "ids",
    "%database.idProperty.reverseLabel": "id of",
    "%database.idProperty.reversePluralLabel": "ids of",
    "%database.typeProperty.label": "type",
    "%database.typeProperty.pluralLabel": "types",
    "%database.typeProperty.reverseLabel": "type of",
    "%database.typeProperty.reversePluralLabel": "types of",
    "%database.uriProperty.label": "URI",
    "%database.uriProperty.pluralLabel": "URIs",
    "%database.uriProperty.reverseLabel": "URI of",
    "%database.uriProperty.reversePuralLabel": "URIS of",
    "%database.sortLabels.text.ascending":  "a - z",
    "%database.sortLabels.text.descending": "z - a",
    "%database.sortLabels.number.ascending":  "smallest first",
    "%database.sortLabels.number.descending": "largest first",
    "%database.sortLabels.date.ascending":  "earliest first",
    "%database.sortLabels.date.descending": "latest first",
    "%database.sortLabels.boolean.ascending":  "false first",
    "%database.sortLabels.boolean.descending": "true first",
    "%database.sortLabels.item.ascending":  "a - z",
    "%database.sortLabels.item.descending": "z - a",
    "%database.reverseLabel": "reverse of %1$s",
    "%database.reversePluralLabel": "reverse of %1$s",
    "%database.error.unloadable": "Could not load data.",
    "%database.error.loadTypesFailure": "Database loading of types failed",
    "%database.error.loadPropertiesFailure": "Database loading of properties failed",
    "%database.error.loadItemsFailure": "Database loading of items failed",
    "%database.error.removeAllStatementsFailure": "Removing all statements from database failed",
    "%database.error.noImporterFailure": "No importer for data of type %1$s",
    "%database.error.itemSyntaxError": "Item entry has no label and no id: %1$s",
    "%database.error.itemMissingLabelFailure": "Cannot add new item containing no label: %1$s",

    "%expression.error.noSuchFunction": "No such function named %1$s",
    "%expression.error.noSuchVariable": "No such variable called %1$s",
    "%expression.error.mustBeForward": "Last path of segment must be forward",
    "%expression.error.missingPropertyID": "Missing property ID at position %1$d",
    "%expression.error.missingFactor": "Missing factor at end of expression",
    "%expression.error.missingParenEnd": "Missing ) to end %1$s at %2$d",
    "%expression.error.missingParenStart": "Missing ( to start %1$s at %2$d",
    "%expression.error.missingParenFunction": "Missing ) after function call %1$s at position %2$d",
    "%expression.error.missingParen": "Missing ) at position %1$d",
    "%expression.error.unexpectedSyntax": "Unexpected text %1$s at position %2$d",
    "%expression.error.unterminatedString": "Unterminated string starting at %1$d",

    "%coders.mixedCaseLabel": "mixed",
    "%coders.missingCaseLabel": "missing",
    "%coders.othersCaseLabel": "others",
    "%coders.error.configuration": "%1$s: Error processing configuration of coder",

    "%facets.clearSelectionsTooltip": "Clear these selections",
    "%facets.facetSelectActionTitle": "Select %1$s in facet %2$s",
    "%facets.facetUnselectActionTitle": "Unselect %1$s in facet %2$s",
    "%facets.facetSelectOnlyActionTitle": "Select only %1$s in facet %2$s",
    "%facets.facetClearSelectionsActionTitle": "Clear selections in facet %1$s",
    "%facets.facetTextSearchActionTitle": "Text search %1$s",
    "%facets.facetClearTextSearchActionTitle": "Clear text search",
    "%facets.missingThisField": "(missing this field)",
    "%facets.missingLabel": "missing %1$s",
    "%facets.error.configuration": "%1$s: Error processing configuration of facet",
    "%facets.numeric.rangeShort": "%1$d - %2$d",
    "%facets.numeric.rangeWords": "%1$d to %2$d",
    "%facets.alpha.rangeShort": "%1$s - %2$s",
    "%facets.alpha.rangeWords": "%1$s to %2$s",
    "%facets.hierarchical.othersLabel": "(others)",
    "%facets.hierarchical.rootLabel": "(root)",

    "%views.unplottableTemplate": "<a class=\"exhibit-action exhibit-views-unplottableCount\" href=\"#\" id=\"unplottableCountLink\">%1$d %2$s</a> out of <span class=\"exhibit-views-totalCount\">%3$d</span> cannot be plotted.",
    "%views.resultLabel": "result",
    "%views.resultsLabel": "results",

    "%viewPanel.selectViewActionTitle": "select %1$s view",
    "%viewPanel.missingViewClassMessage": "The specification for one of the views is missing the viewClass field.",
    "%viewPanel.viewClassNotFunctionMessage": "The view class attribute value '%1$s' you have specified\nfor one of the views does not evaluate to a Javascript function.",
    "%viewPanel.badViewClassMessage": "The view class attribute value '%1$s' you have specified\nfor one of the views is not a valid Javascript expression.",
    "%viewPanel.viewSeparator": " &bull; ",
    "%viewPanel.noViewLabel": "[no view label set]",
    "%viewPanel.error.unknownView": "Unknown viewClass: %1$s",
    "%viewPanel.error.failedViewCreate": "Failed to create view %1$s (%2$d)",

    "%TileView.label": "Tiles",
    "%TileView.tooltip": "View items as tiles in a list",

    "%ThumbnailView.label": "Thumbnails",
    "%ThumbnailView.tooltip": "View items as thumbnails",

    "%TabularView.label": "Table",
    "%TabularView.tooltip": "View items in a table",
    "%TabularView.columnHeaderSortTooltip": "Click to sort by this column",
    "%TabularView.columnHeaderReSortTooltip": "Click to sort in the reverse order",
    "%TabularView.sortColumnAscending": "sort ascending by %1$s",
    "%TabularView.sortColumnDescending": "sort descending by %1$s",
    "%TabularView.error.configuration": "TabularView: Error processing configuration of tabular view",

    "%orderedViewFrame.removeOrderLabel": "Remove this order",
    "%orderedViewFrame.sortingControlsTemplate": "sorted by: <span id=\"ordersSpan\"></span>; <a id=\"thenSortByAction\" href=\"#\" class=\"exhibit-action\" title=\"Further sort the items\">then by...</a>",
    "%orderedViewFrame.formatSortActionTitle": "Sorted by %1$s (%2$s)",
    "%orderedViewFrame.formatRemoveOrderActionTitle": "Removed order by %1$s (%2$s)",
    "%orderedViewFrame.groupedAsSortedOptionLabel": "grouped as sorted",
    "%orderedViewFrame.groupAsSortedActionTitle": "group as sorted",
    "%orderedViewFrame.ungroupAsSortedActionTitle": "ungroup as sorted",
    "%orderedViewFrame.showAllActionTitle": "show all results",
    "%orderedViewFrame.dontShowAllActionTitle": "show first few results",
    "%orderedViewFrame.formatDontShowAll": "Show only the first %1$d results",
    "%orderedViewFrame.formatShowAll": "Show all %1$d results",
    "%orderedViewFrame.pageWindowEllipses": " ... ",
    "%orderedViewFrame.pageSeparator": " &bull; ",
    "%orderedViewFrame.previousPage": "&laquo;&nbsp;Previous",
    "%orderedViewFrame.nextPage": "Next&nbsp;&raquo;",
    "%orderedViewFrame.pagingActionTitle": "Page %1$d",
    "%orderedViewFrame.pagingLinkTooltip": "Go to page %1$d",
    "%orderedViewFrame.error.orderExpression": "Bad order expression: %1$s",
    "%orderedViewFrame.error.orderObject": "Bad order object: %1$s",
    "%orderedViewFrame.error.possibleOrderExpression": "Bad possible order expression: %1$s",
    "%orderedViewFrame.error.possibleOrderObject": "Bad possible order object: %1$s",
    "%orderedViewFrame.error.noSuchPropertyOrderWarning": "No such property %1$s available for ordering",

    "%widget.bookmark.tooltip": "Fai click qui per generare un bookmark con i filtri che hai applicato",

    "%widget.collectionSummary.resetFiltersLabel": "Annulla tutti i filtri",
    "%widget.collectionSummary.resetFiltersTooltip": "Clear all filters and see the original items",
    "%widget.collectionSummary.resetActionTitle": "Annulla tutti i filtri",
    "%widget.collectionSummary.allResultsTemplate": "<span class=\"%1$s\" id=\"resultDescription\"></span>",
    "%widget.collectionSummary.noResultsTemplate": "<span class=\"%1$s\"><span class=\"%2$s\">0</span> results</span> (<span id=\"resetActionLink\"></span>)",
    "%widget.collectionSummary.filteredResultsTemplate": "<span class=\"%1$s\" id=\"resultDescription\"></span> su <span id=\"originalCountSpan\">0</span> (<span id=\"resetActionLink\"></span>)",

    "%formatter.listSeparator": ", ",
    "%formatter.listLastSeparator": ", and ",
    "%formatter.listPairSeparator": " and ",
    "%formatter.textEllipsis": "%1$s...",
    "%formatter.booleanTrue": "true",
    "%formatter.booleanFalse": "false",
    "%formatter.currencySymbol": "$",
    "%formatter.currencySymbolPlacement": "first", // "last", "after-sign"
    "%formatter.currencyShowSign": true,
    "%formatter.currencyShowRed": false,
    "%formatter.currencyShowParentheses": false,
    "%formatter.dateTimeDefaultFormat": "EEE, MMM d, yyyy, hh:mm a",
    "%formatter.dateShortFormat": "dd/MM/yy",
    "%formatter.timeShortFormat": "hh:mm a",
    "%formatter.dateTimeShortFormat": "dd/MM/yy hh:mm a",
    "%formatter.dateMediumFormat": "EEE, MMM d, yyyy",
    "%formatter.timeMediumFormat": "hh:mm a",
    "%formatter.dateTimeMediumFormat": "EEE, MMM d, yyyy, hh:mm a",
    "%formatter.dateLongFormat": "EEEE, MMMM d, yyyy",
    "%formatter.timeLongFormat": "HH:mm:ss z",
    "%formatter.dateTimeLongFormat": "EEEE, MMMM d, yyyy, HH:mm:ss z",
    "%formatter.dateFullFormat": "EEEE, MMMM d, yyyy",
    "%formatter.timeFullFormat": "HH:mm:ss.S z",
    "%formatter.dateTimeFullFormat": "EEEE, MMMM d, yyyy G, HH:mm:ss.S z",
    "%formatter.shortDaysOfWeek": [ "Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat" ],
    "%formatter.daysOfWeek": [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
    "%formatter.shortMonths": [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
    "%formatter.months": [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
    "%formatter.commonEra": "CE",
    "%formatter.beforeCommonEra": "BCE",
    "%formatter.beforeNoon": "am",
    "%formatter.afterNoon": "pm",
    "%formatter.BeforeNoon": "AM",
    "%formatter.AfterNoon": "PM",

    "%format.error.missingNumber": "Missing number at position %1$d",
    "%format.error.missingInteger": "Missing integer at position %1$d",
    "%format.error.missingNonNegativeInteger": "Missing non-negative integer at position %1$d",
    "%format.error.missingString": "Missing string at position %1$d",
    "%format.error.missingURL": "Missing url at position %1$d",
    "%format.error.missingExpression": "Missing expression at position %1$d",
    "%format.error.missingExpressionOrString": "Missing expression or string at position %1$d",
    "%format.error.missingOption": "Missing option at position %1$d",
    "%format.error.unsupportedOption": "Unsupported option %1$s for setting %2$s on value type %3$s found at position %4$d",
    "%format.error.unsupportedFlag": "Unsupported flag %1$s for setting %2$s on value type %3$s found at position %4$d",
    "%format.error.unsupportedSetting": "Unsupported setting called %1$s for value type %2$s found at position %3$d",
    "%format.error.missingColon": "Missing : at position %1$d",
    "%format.error.missingValueType": "Missing value type at position %1$d",
    "%format.error.unsupportedValueType": "Unsupported value type %1$s at position %2$d",
    "%format.error.missingBrace": "Missing } at position %1$d",
    "%format.error.unterminatedString": "Unterminated string starting at %1$d",
    "%format.error.missingCloseURL": "Missing ) to close url at %1$d"
});
