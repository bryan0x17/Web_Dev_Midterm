SAIT Web Development (CPRG256) Midterm Project

Part One: Currency Converter (10 Marks)

Under ‘midtermproject’, create a directory titled ‘currencyconverter’.  Your application will work with the following types of currency:

Euro
US Dollar
Canadian Dollar
Bitcoin Digital Currency
Ethereum Digital Currency

Please research the most recent currency exchange rates.

This application will allow you to convert between any of these listed currencies. Your application will allow a user to select the type and amount of a currency on hand and select what currency to convert it to.

Example:

A user has 500 Euro and wants to convert this to Canadian Dollar. The user selects ‘Euro’ from ‘Currency on hand’ and enter the amount. Then the user selects ‘Candian Dollar’ from ‘Covert to’ column. Your application will require a JavaScript event handler (eg onChange) that will respond when the user selects the type from the ‘Covert to’ column.

Currency on hand	Amount	Covert to:	Conversion Value
Euro	500	Canadian Dollar	766.50CDN (1.533:1)

Your Conversion Value should display the converted amount to 2 significant digits, the type of currency and the conversion ratio.




Part Two: Travel and Tourism site (10 Marks)


Under ‘midtermproject’ create a subdirectory titled ‘travelsite’. 

Create a slide show for a travel and tourism company. Use between 8 and 12 pictures that will automatically change every 1 to 3 seconds. You may use the pictures from ‘usplash.com’ or from your own collection.  The slide show will have the following features:

•	Use a background image, colour or pattern.

•	The pictures must use a type of ‘transition’ ie Fade in/Fade out when the pictures change. 

•	Each picture must include a brief caption describing it. 

•	The page will include a ‘header’ that provides the name of the company and a logo. Use the CSS ‘text-shadow’ property on the company name. 

•	The page must include a ‘footer’ section with the address and contact information of the company.


 
Part Three: New City Bakery (15 Marks)


Under ‘midtermproject’ create a subdirectory titled ‘newcitybakeries’. 

You are required to create a web application for ‘New City Bakeries’. This company creates custom cakes and pastries. Create a customized page with appropriate background colours or images. Include a header that lists the company name and contact information.

Your page will contain a form that prompts the user for the following:

First and last name
Address
Postal Code
Phone number
E-mail

Control the user input as follows:

Use HTML 5 inputs
All the fields must be entered
Validate the data (except address) using patterns or regular expressions. 
‘Autofocus’ must be set to the First Name

The cakes are either sheet cakes (square or rectangular) or round cakes. They can be 1, 2 or 3 layers.

The sheet cakes are a minimum size of 30 cm length and 30 cm width with one layer. The base price is $18. The maximum size is 60 cm length and 45 cm width. Area is calculated as length x width. Minimum area is 900 cm2

The round cakes are a minimum size of 15cm radius with 1 layer. The base price is $15. The maximum size is a radius of 30cm. Area is calculated as: area=radius2 x 3.14. Minimum area is 707 cm2.

The cost of the cake increases by both size and the number of layers. Increasing the dimensions adds 2 cents (0.02) per square cm above the base cost.  Adding another layer increases the base cost an additional 50% per layer.

Use JavaScript event handling to control the data entry for the cake type. If a client chooses a sheet cake, only the dimensions and layers for a sheet cake can be entered. If a client chooses a round cake, only the radius and layers for a round cake can be entered. You cannot exceed the maximum dimensions of the cake.
Example 1:

A customer orders a sheet cake with the dimensions 35cm and 40cm. The minimum size is 900 cm2 (30 x 30). The new dimensions are 1400 cm2 (35 x 40). 1400 – 900 = 500 cm2. This will cost an additional $10 (500 * 0.02) for a total of $28.

Example 2:

A customer orders a round cake, minimum size with 2 layers. The cost will be $15 for the first layer and $7.50 for the additional layer, for a total of $22.50.

Example 3:

A customer orders a sheet cake 50 cm length and 40 cm width with 3 layers. The cost would be calculated as follows:

 2000 (50 x 40) – 900 (30 x 30) = 1100 cm2. The cost for the base layer is $18 (minimum) plus 1100 x 0.02 = $22 for a total cost of $40. Each additional layer is 50% of this cost, $20. The additional 2 layers is $40. The total cost would be $80.

Example 4:

A customer orders a round cake 20cm radius and 2 layers. The cost of the first layer is: Area=202 x 3.14 = 1256. Subtract minimum area of a round cake: 707 = 549 cm2. Cost of first layer is 549 x 0.02 = 10.98 + $15 = 25.98. The additional layer is 12.99 for a total of $38.98

Additional Choices:

Cream Cheese icing is an extra $5.
Fruit and Almonds topping is an extra $7
Fruit jam filling between layers is an extra $4

When the user submits the form, an invoice will be created and displayed. Here is an example:
Don Willis
345 SAIT Drive
T2N0L4
587-555-1212
dw@live.net

Your order:

Round cake 20cm with 2 layers: 	$38.98.
Fruit and Almond topping		$7
Fruit Jam filling				$4
Total:					$49.98
