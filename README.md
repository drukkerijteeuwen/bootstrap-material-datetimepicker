# bootstrap-material-datetimepicker

### Prerequisites

jquery [http://jquery.com/download/](http://jquery.com/download/)

momentjs [http://momentjs.com/](http://momentjs.com/)

### Usage

```
$('input').bootstrapMaterialDatePicker();
```

### Parameters

| Name				| Type							| Description									|
| ----------------- | ----------------------------- | --------------------------------------------- |
| **format**		| String						| MomentJS Format								|
| **shortTime**		| Boolean						| true => Display 12 hours AM|PM 				|
| **minDate**		| (String\|Date\|Moment)		| Minimum selectable date						|
| **maxDate**		| (String\|Date\|Moment)		| Maximum selectable date						|
| **currentDate**	| (String\|Date\|Moment)		| Initial Date									|
| **year**			| Boolean						| true => Has Yearpicker						|
| **date**			| Boolean						| true => Has Datepicker						|
| **disabledDays**	| Array							| Array containing day indices (1-7) to disable	|
| **time**			| Boolean						| true => Has Timepicker 						|
| **clearButton**	| Boolean						| true => Show Clear Button						|
| **nowButton**		| Boolean						| true => Show Now Button						|
| **switchOnClick**	| Boolean						| true => Switch view on click 					|
| **cancelText**	| String						| Text for the cancel button 					|
| **okText**		| String						| Text for the OK button 						|
| **clearText**		| String						| Text for the Clear button 					|
| **nowText**		| String						| Text for the Now button 						|
| **triggerEvent**	| String						| Event to fire the calendar 					|
| **monthPicker**	| Boolean						| true => Act as monthpicker (hide calendar)  	|
| **lang**			| String						| MomentJS local								|
| **weekStart**		| Int							| start of the week(0:sat, 1:mon, enz)			|
| **startTime**		| Int							| Start time of the hours						|
| **endTime**		| Int							| End time of the hours							|
| **minutesSelect**	| Int							| Minits selection by clock						|

### Events

| Name				| Parameters				| Description										|
| ----------------- | ------------------------- | ------------------------------------------------- |
| **beforeChange**	| event, date				| OK button is clicked								|
| **change**		| event, date				| OK button is clicked and input value is changed	|
| **yearSelected**	| event, date				| New year is selected								|
| **dateSelected**	| event, date				| New date is selected								|
| **open**	        | event				        | datepicker is opened								|
| **close**	        | event				        | datepicker is closed								|


### Methods

$('input').bootstrapMaterialDatePicker('setDate', moment());

| Name				| Parameter					| Description					|
| ----------------- | ------------------------- | ----------------------------- |
| **setDate**		| (String\|Date\|Moment)	| Set initial date				|
| **setMinDate**	| (String\|Date\|Moment)	| Set minimum selectable date	|
| **setMaxDate**	| (String\|Date\|Moment)	| Set maximum selectable date	|
| **destroy**		| NULL						| Destroy the datepicker		|
