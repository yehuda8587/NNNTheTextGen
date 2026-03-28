// status of spa selected
let spaNameStatus = document.querySelector(".selected");
let addOnsStatus = document.getElementById("chooseAddons");

// Location NAME variables in text
let locationNameArray = document.getElementsByClassName("varLocationName");
let upDatedSpaName = "SELECT SPA"
// Location ADDRESS variables in text
let locationAddressArray = document.getElementsByClassName("varLocationAddress");
let upDatedSpaAddress = "SELECT SPA FOR LOCATION "
// Location LINK variables in text
let locationALinkArray = document.getElementsByClassName("varLocationFormLink");
let upDatedSpaLINK = "SELECT SPA FOR FORM LINK" 
// Location MAP LINK variables in text
let locationMapLinkArray = document.getElementsByClassName("varLocationMapLink");
let upDatedSpaMapLINK = "SELECT SPA FOR MAP LINK"; // New variable for map link

// Location PARKING LINK variables in text
let locationParkLinkArray = document.getElementsByClassName("varLocationParkLink");
let upDatedSpaParkLINK = "SELECT SPA FOR PARKING LINK"; // New variable for parking link

// NNN Location PHONE variables in text
let locationPhoneArray = document.getElementsByClassName("varLocationPhone");
let upDatedSpaPhone = "SELECT SPA FOR Location Phone" 

// Actual Location PHONE variables in text
let acutalLocationPhoneArray = document.getElementsByClassName("varLocationActualPhone");
let upDatedActualSpaPhone = "SELECT SPA FOR Location Phone" 

// Location WEB LINK variables in text
let locationWebLinkArray = document.getElementsByClassName("varWebLink");
let upDatedSpaWebLINK = "SELECT SPA FOR FORM WEB LINK" 

// Duration Total variables in text
let DurationTotalArray = document.getElementsByClassName("varDurationTotal");
let upDatedDurationTotal    = "Please select spa"

// Duration One variables in text
let DurationOneArray = document.getElementsByClassName("varDurationOne");
let upDatedDurationOne    = " "

// Duration Two variables in text
let DurationTwoArray = document.getElementsByClassName("varDurationTwo");
let upDatedDurationTwo    = " "

// Addons variables in text
let addOnsArray = document.getElementsByClassName("varAddons");
let upDatedAddons = "No Addons Selected"



function updateForm(){
    //LOCATION NAME FORLOOP
    for (let i = 0; i < locationNameArray.length; i++) {
            locationNameArray[0].innerHTML = upDatedSpaName;
            locationNameArray[i].innerHTML = upDatedSpaName;      
            }

    //LOCATION ADDRESS FORLOOP
    for (let i = 0; i < locationAddressArray.length; i++) {
            locationAddressArray[0].innerHTML = upDatedSpaAddress;
            locationAddressArray[i].innerHTML = upDatedSpaAddress;      
            }

    //LOCATION LINK FORLOOP
    for (let i = 0; i < locationALinkArray.length; i++) {
        locationALinkArray[0].innerHTML = upDatedSpaLINK;
        locationALinkArray[i].innerHTML = upDatedSpaLINK; 
            }

    // LOCATION MAP LINK FORLOOP        
    for (let i = 0; i < locationMapLinkArray.length; i++) {
        locationMapLinkArray[0].innerHTML = upDatedSpaMapLINK;
        locationMapLinkArray[i].innerHTML = upDatedSpaMapLINK; // Update map link
            }

      // LOCATION PARk LINK FORLOOP        
   for (let i = 0; i < locationParkLinkArray.length; i++) {
    locationParkLinkArray[0].innerHTML = upDatedSpaParkLINK;
    locationParkLinkArray[i].innerHTML = upDatedSpaParkLINK;
}

            //LOCATION Phone FORLOOP
    for (let i = 0; i < locationPhoneArray.length; i++) {
        locationPhoneArray[0].innerHTML = upDatedSpaPhone;
        locationPhoneArray[i].innerHTML = upDatedSpaPhone; 
            }

            //LOCATION Actual Phone FORLOOP
    for (let i = 0; i < acutalLocationPhoneArray.length; i++) {
        acutalLocationPhoneArray[0].innerHTML = upDatedActualSpaPhone;
        acutalLocationPhoneArray[i].innerHTML = upDatedActualSpaPhone; 
            }


    //LOCATION WEB LINK FORLOOP
    for (let i = 0; i < locationWebLinkArray.length; i++) {
        locationWebLinkArray[0].innerHTML = upDatedSpaWebLINK;
        locationWebLinkArray[i].innerHTML = upDatedSpaWebLINK; 
            }

        
    //Duration Total FORLOOP
    for (let i = 0; i < DurationTotalArray.length; i++) {
        DurationTotalArray[0].innerHTML = upDatedDurationTotal;
        DurationTotalArray[i].innerHTML = upDatedDurationTotal; 
            }

            //Duration One FORLOOP
    for (let i = 0; i < DurationOneArray.length; i++) {
        DurationOneArray[0].innerHTML = upDatedDurationOne;
        DurationOneArray[i].innerHTML = upDatedDurationOne; 
            }

            //Duration Two FORLOOP
    for (let i = 0; i < DurationTwoArray.length; i++) {
        DurationTwoArray[0].innerHTML = upDatedDurationTwo;
        DurationTwoArray[i].innerHTML = upDatedDurationTwo;
    }
            

    //Addons FORLOOP
    for (let i = 0; i < addOnsArray.length; i++) {
        addOnsArray[0].innerHTML = upDatedAddons;
        addOnsArray[i].innerHTML = upDatedAddons; 
            }
            upDatedAddons = addOnsStatus.value;


    // SWITCH FOR LOCATIONS INFORMATION
    switch (spaNameStatus.innerHTML) {
        case "Select Spa":
        upDatedSpaName = "Please Select Spa Spa";
        upDatedSpaAddress = "No Spa Selected";
        upDatedSpaLINK = "No Spa Selected";
        upDatedSpaMapLINK = "No Spa Selected";
        upDatedSpaWebLINK = "No Spa Selected";
        upDatedSpaPhone = "No Spa Selected";
        upDatedDurationTotal = "No Spa Selected";
        upDatedDurationOne = "No Spa Selected";
        upDatedDurationTwo = "No Spa Selected";
        promoPrice = "No Spa Selected";
        newSpaPhoneNumberSelected = "No Spa Selected";
        insteadOfSpa = "No Spa Selected";
        break;

      

        case "Adore Cookstown Men's Skin Tightening $89.95":
        upDatedSpaName = "Adore Spa";
        upDatedSpaAddress = "Tanger Outlet,"+"<br>"+"3311 County Road 89, Cookstown, ON L0L 1L0" +"<br>"+"(Between Clavin Klein & Lids)";
        upDatedSpaLINK = "https://forms.gle/wQhsDWzjTS6GM9ko7";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/PhJMxC8pXQ8oB23L9";
        upDatedSpaWebLINK = "https://adore-cooks.noneedleneeded.com/men-skin-tightening-89-95-booking" ;
        upDatedSpaPhone = "(705) 400-8900";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 20 Minutes Light Cleaning";
        upDatedDurationTwo = "- 40 Minutes Skin Tightening Treatment & Consultation";
        promoPrice = "89.95"
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (844) 377-7753";
        treatmentSelected = "Skin Tightening Treatment";
        newSpaPhoneNumberSelected = "(844) 377-7753";
        insteadOfSpa = "$299"
        break;

        case "Adore Cookstown Natural Facelift":
        upDatedSpaName = "Adore Spa";
        upDatedSpaAddress = "Tanger Outlet,"+"<br>"+"3311 County Road 89, Cookstown, ON L0L 1L0" +"<br>"+"(Between Clavin Klein & Lids)";
        upDatedSpaLINK = "https://forms.gle/wQhsDWzjTS6GM9ko7";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/PhJMxC8pXQ8oB23L9";
        upDatedSpaWebLINK = "https://adore-cooks.noneedleneeded.com/natural-facelift-79-95-book-page" ;
        upDatedSpaPhone = "(705) 400-8900";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 20 Minutes Light Cleaning";
        upDatedDurationTwo = "- 40 Minutes Natural Facelift Treatment & Consultation";
        promoPrice = "79.95"
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (844) 377-7753";
        treatmentSelected = "Natural Facelift Treatment";
        newSpaPhoneNumberSelected = "(844) 377-7753";
        insteadOfSpa = "$377"
        break;

        case "Adore Cookstown Neck and Jawline 79.95":
        upDatedSpaName = "Adore Spa";
        upDatedSpaAddress = "Tanger Outlet,"+"<br>"+"3311 County Road 89, Cookstown, ON L0L 1L0" +"<br>"+"(Between Clavin Klein & Lids)";
        upDatedSpaLINK = "https://forms.gle/wQhsDWzjTS6GM9ko7";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/PhJMxC8pXQ8oB23L9";
        upDatedSpaWebLINK = "https://adore-cooks.noneedleneeded.com/booking-neck-and-jawline-79-95-ltb" ;
        upDatedSpaPhone = "(705) 400-8900";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 Minutes Light Cleaning";
        upDatedDurationTwo = "- 45 Minutes Neck and Jawline Treatment & Consultation";
        promoPrice = "79.95"
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (844) 377-7753";
        treatmentSelected = "Neck and Jawline Tightening Treatment";
        newSpaPhoneNumberSelected = "(844) 377-7753";
        insteadOfSpa = "$377"
        break;

        case "Aeternitas Neck and Jawline $79.95":
        upDatedSpaName = "Aeternitas";
        upDatedSpaAddress = "443 W Dearborn St., Englewood, FL 34223"+"<br>"+"(Middle of Dearborn St)";
        upDatedSpaLINK = "https://forms.gle/EcbScL9LSqebPv4C9";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/DCDkdjf8KB52yFYC8";
        upDatedSpaWebLINK = "https://aeternitas.firstouchbeauty.com/neck-and-jawline-79-95-book";
        upDatedSpaPhone = "(941) 867-4376";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = " - 15 minutes Cleansing";
        upDatedDurationTwo = " - 30 minutes Neck and Jawline Treatment & 15 minutes Consultation";
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (941) 867-4376";
        treatmentSelected = "Neck and Jawline";
        newSpaPhoneNumberSelected = "(941) 867-4376";
        insteadOfSpa = "$377"
        break;

        case "Aeternitas Non Surgical Facelift $89.00":
        upDatedSpaName = "Aeternitas";
        upDatedSpaAddress = "443 W Dearborn St., Englewood, FL 34223"+"<br>"+"(Middle of Dearborn St)";
        upDatedSpaLINK = "https://forms.gle/EcbScL9LSqebPv4C9";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/DCDkdjf8KB52yFYC8";
        upDatedSpaWebLINK = "https://aeternitas.firstouchbeauty.com/non-surgical-facelift-book-page";
        upDatedSpaPhone = "(941) 867-4376";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = " - 15 minutes Cleansing";
        upDatedDurationTwo = " - 30 minutes Non Surgical Facelift Treatment & 15 minutes Consultation";
        promoPrice = "89.00";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (941) 867-4376";
        treatmentSelected = "Non Surgical Facelift";
        newSpaPhoneNumberSelected = "(941) 867-4376";
        insteadOfSpa = "$377"
        break;

        case "Aeternitas Triple Lift $89.00":
        upDatedSpaName = "Aeternitas";
        upDatedSpaAddress = "443 W Dearborn St., Englewood, FL 34223"+"<br>"+"(Middle of Dearborn St)";
        upDatedSpaLINK = "https://forms.gle/EcbScL9LSqebPv4C9";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/DCDkdjf8KB52yFYC8";
        upDatedSpaWebLINK = "https://aeternitas.firstouchbeauty.com/triple-lift-booking";
        upDatedSpaPhone = "(941) 867-4376";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = " - 15 minutes Cleansing";
        upDatedDurationTwo = " - 30 minutes Triple Lift Treatment & 15 minutes Consultation";
        promoPrice = "89.00";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (941) 867-4376";
        treatmentSelected = "Triple Lift";
        newSpaPhoneNumberSelected = "(941) 867-4376";
        insteadOfSpa = "$377"
        break;


        case "Beauty Affairs MediSpa Brookvale Natural Facelift $148":
        upDatedSpaName = "Beauty Affairs MediSpa";
        upDatedSpaAddress = "Lifestyle Workplace, 11/117 Old Pittwater Rd, Brookvale NSW 2100" +"<br>"+"(Next to Warringah Mall)";
        upDatedSpaLINK = "https://forms.gle/cXX5H8qs2fxXUF3x7";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/uZGb5bDujWPGcUEh9";
        upDatedSpaWebLINK = "https://beauty-affairs-brook.noneedleneeded.com/booking-page-natural-facelift-148";
        upDatedSpaPhone = "+61 483 946 963";
        upDatedDurationTotal = "45 Minutes";
        upDatedDurationOne = " ";
        upDatedDurationTwo = "- 30 Minutes Natural Facelift Treatment & 15 minutes Consultation";
        promoPrice = "148"
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at +612 9905 3873";
        treatmentSelected = "Natural Facelift Treatment";
        newSpaPhoneNumberSelected = "+612 9905 3873";
        insteadOfSpa = "$400"
        break;

        case "Beauty Affairs MediSpa CBD Natural Facelift $148":
        upDatedSpaName = "Beauty Affairs MediSpa";
        upDatedSpaAddress = "St Martins Tower, Suite 2205/ Level 22 31 Market St, Sydney NSW 2000" +"<br>"+"(Next to Queen Victoria Building)";
        upDatedSpaLINK = "https://forms.gle/u7BU2hZMkmJsLdEE9";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/U6NvFep1HU2Tn1KP6";
        upDatedSpaWebLINK = "https://beautyaffairs.noneedleneeded.com/natural-facelift-148-book-page";
        upDatedSpaPhone = "+61 468 021 570";
        upDatedDurationTotal = "45 Minutes";
        upDatedDurationOne = " ";
        upDatedDurationTwo = "- 30 Minutes Natural Facelift Treatment & 15 minutes Consultation";
        promoPrice = "148"
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at +612 9286 3898";
        treatmentSelected = "Natural Facelift Treatment";
        newSpaPhoneNumberSelected = "+612 9286 3898";
        insteadOfSpa = "$400"
        break;

        case "Beauty Lounge 3 in 1 Skin Tightening 79.95":
        upDatedSpaName = "Beauty Lounge";
        upDatedSpaAddress = "3101 SW 34th Ave, #701, Ocala, FL 34474"+"<br>"+"(2 shops next to Ollie's Bargain Outlet,  Next to Christie Dental)";
        upDatedSpaLINK = "https://forms.gle/82TrFg5vLcFZQ4A37";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/VsjjSdkkDXrGG9Mr5";
        upDatedSpaWebLINK = "https://beauty-lounge.noneedleneeded.com/booking-3-in-1-skin-tightening-79-95";
        upDatedSpaPhone = "(352) 607-7773";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 Minutes Cleansing";
        upDatedDurationTwo = "- 45 Minutes 3 in 1 Skin Tightening Treatment & Consultation";
        promoPrice = "79.95"
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (352) 235-9336";
        treatmentSelected = "3 in 1 Skin Tightening Treatment";
        newSpaPhoneNumberSelected = "(352) 235-9336";
        insteadOfSpa = "$377"
        break;

        case "Beauty Lounge Bye Bye Saggy Eyes 59.95":
        upDatedSpaName = "Beauty Lounge";
        upDatedSpaAddress = "3101 SW 34th Ave, #701, Ocala, FL 34474"+"<br>"+"(2 shops next to Ollie's Bargain Outlet,  Next to Christie Dental)";
        upDatedSpaLINK = "https://forms.gle/82TrFg5vLcFZQ4A37";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/VsjjSdkkDXrGG9Mr5";
        upDatedSpaWebLINK = "https://beauty-lounge.noneedleneeded.com/booking-page-bye-bye-saggy-eyes";
        upDatedSpaPhone = "(352) 607-7773";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 Minutes Cleansing";
        upDatedDurationTwo = "- 30 minutes of the LED & Hyaluronic Acid Treatment & 15 minutes Consultation";
        promoPrice = "59.95"
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (352) 235-9336";
        treatmentSelected = "Bye Bye Saggy Eyes Treatment";
        newSpaPhoneNumberSelected = "(352) 235-9336";
        insteadOfSpa = "$377"
        break;

        case "Beauty Lounge Natural Facelift 79.95":
        upDatedSpaName = "Beauty Lounge";
        upDatedSpaAddress = "3101 SW 34th Ave, #701, Ocala, FL 34474"+"<br>"+"(2 shops next to Ollie's Bargain Outlet,  Next to Christie Dental)";
        upDatedSpaLINK = "https://forms.gle/82TrFg5vLcFZQ4A37";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/VsjjSdkkDXrGG9Mr5";
        upDatedSpaWebLINK = "https://beauty-lounge.noneedleneeded.com/natural-facelift-79-95-book-page";
        upDatedSpaPhone = "(352) 607-7773";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 Minutes Cleansing and Facial Massage";
        upDatedDurationTwo = "- 30 Minutes Natural Facelift Treatment & 15 minutes Consultation";
        promoPrice = "79.95"
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (352) 235-9336";
        treatmentSelected = "Natural Facelift Treatment";
        newSpaPhoneNumberSelected = "(352) 235-9336";
        insteadOfSpa = "$377"
        break;

        case "Beauty Lounge Neck and Jawline 69.95":
        upDatedSpaName = "Beauty Lounge";
        upDatedSpaAddress = "3101 SW 34th Ave, #701, Ocala, FL 34474"+"<br>"+"(2 shops next to Ollie's Bargain Outlet,  Next to Christie Dental)";
        upDatedSpaLINK = "https://forms.gle/82TrFg5vLcFZQ4A37";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/VsjjSdkkDXrGG9Mr5";
        upDatedSpaWebLINK = "https://beauty-lounge.noneedleneeded.com/neck-and-jawline-69-95-book-page";
        upDatedSpaPhone = "(352) 607-7773";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 Minutes Cleansing";
        upDatedDurationTwo = "- 45 Minutes Neck and Jawline Tightening Treatment & Consultation";
        promoPrice = "69.95"
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (352) 235-9336";
        treatmentSelected = "Neck and Jawline Tightening Treatment";
        newSpaPhoneNumberSelected = "(352) 235-9336";
        insteadOfSpa = "$377"
        break;

        case "Beauty Lounge Non Surgical Facelift 79.95":
        upDatedSpaName = "Beauty Lounge";
        upDatedSpaAddress = "3101 SW 34th Ave, #701, Ocala, FL 34474"+"<br>"+"(2 shops next to Ollie's Bargain Outlet,  Next to Christie Dental)";
        upDatedSpaLINK = "https://forms.gle/82TrFg5vLcFZQ4A37";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/VsjjSdkkDXrGG9Mr5";
        upDatedSpaWebLINK = "https://beauty-lounge.noneedleneeded.com/non-surgical-facelift-79-95-book";
        upDatedSpaPhone = "(352) 607-7773";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 Minutes Cleansing and Facial Massage";
        upDatedDurationTwo = "- 30 Minutes Non Surgical Facelift Treatment & 15 minutes Consultation";
        promoPrice = "79.95"
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (352) 235-9336";
        treatmentSelected = "Non Surgical Facelift Treatment";
        newSpaPhoneNumberSelected = "(352) 235-9336";
        insteadOfSpa = "$377"
        break;

        case "Below Zero Alpharetta Spa Hyperbaric Treatment $99":
        upDatedSpaName = "Below Zero Alpharetta";
        upDatedSpaAddress = "7000 North Point Cir, Alpharetta, GA 30022"+"<br>"+"(NORTH POINT MALL - our spa located at the first floor between Image is Everything Salon and Emani maternity store best entrance is the one near Von Maur or Dillard's)";
        upDatedSpaLINK = "https://forms.gle/sQzmJF2atr2V2RJd9";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/q1RTXZ6gR4bKHks27";
        upDatedSpaWebLINK = "https://belowzeroalpha.firstouchbeauty.com/hyperbaric-treatment-booking-page";
        upDatedSpaPhone = "(404) 618-4124";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- ";
        upDatedDurationTwo = "- 46 minutes Hyperbaric Treatment and 15 minutes post-care and consultation";
        promoPrice = "99";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (706) 901-8979";
        treatmentSelected = "Hyperbaric Treatment Treatment";
        newSpaPhoneNumberSelected = "(706) 901-8979";
        insteadOfSpa = "$399"
        break;

        case "Below Zero Alpharetta Spa Natural Facelift $89.95":
        upDatedSpaName = "Below Zero Alpharetta";
        upDatedSpaAddress = "7000 North Point Cir, Alpharetta, GA 30022"+"<br>"+"(NORTH POINT MALL - our spa located at the first floor between Image is Everything Salon and Emani maternity store best entrance is the one near Von Maur or Dillard's)";
        upDatedSpaLINK = "https://forms.gle/sQzmJF2atr2V2RJd9";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/q1RTXZ6gR4bKHks27";
        upDatedSpaWebLINK = "https://belowzeroalpha.firstouchbeauty.com/natural-facelift-89-95-book-page";
        upDatedSpaPhone = "(404) 618-4124";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 minutes Cleansing";
        upDatedDurationTwo = "- 30 minutes Natural Facelift Treatment and 15 minutes post-care and consultation";
        promoPrice = "89.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (706) 901-8979";
        treatmentSelected = "Natural Facelift Treatment";
        newSpaPhoneNumberSelected = "(706) 901-8979";
        insteadOfSpa = "$377"
        break;

        case "Below Zero Spa Rochester Natural Facelift $79.95":
        upDatedSpaName = "Below Zero Rochester";
        upDatedSpaAddress = "337 Eastview Mall, Victor, NY 14564"+"<br>"+"(Located inside Eastview Mall, on the main Von Maur aisle, next to AT&T and directly across from The Source Jewelry.)<br>"+"Nearest entrance: #6";
        upDatedSpaLINK = "https://forms.gle/57j3KLsY1Ekw4gDu7";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/SG2RYd3nBvcTAGxR8";
        upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/below-zero-rochester-natural-facelift-promo-79-95";
        upDatedSpaPhone = "(585) 252-4003";
        upDatedDurationTotal = "45 Minutes";
        upDatedDurationOne = "- 10 minutes Cleansing";
        upDatedDurationTwo = "- 35 minutes Natural Facelift Treatment and Consultation";
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (585) 449-2100";
        treatmentSelected = "Natural Facelift Treatment";
        newSpaPhoneNumberSelected = "(585) 449-2100";
        insteadOfSpa = "$377"
        break;

        case "Below Zero Spa Rochester Neck and Jawline $79.95":
        upDatedSpaName = "Below Zero Rochester";
        upDatedSpaAddress = "337 Eastview Mall, Victor, NY 14564"+"<br>"+"(Located inside Eastview Mall, on the main Von Maur aisle, next to AT&T and directly across from The Source Jewelry.)<br>"+"Nearest entrance: #6";
        upDatedSpaLINK = "https://forms.gle/57j3KLsY1Ekw4gDu7";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/SG2RYd3nBvcTAGxR8";
        upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/below-zero-rochester-neck-and-jawline-79-95";
        upDatedSpaPhone = "(585) 252-4003";
        upDatedDurationTotal = "45 Minutes";
        upDatedDurationOne = "- 10 minutes Cleansing";
        upDatedDurationTwo = "- 35 minutes Neck and Jawline Treatment and Consultation";
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (585) 449-2100";
        treatmentSelected = "Neck and Jawline Treatment";
        newSpaPhoneNumberSelected = "(585) 449-2100";
        insteadOfSpa = "$377"
        break;

        case "Ben's Beauty Triple Lift $59.95":
        upDatedSpaName = "Ben's Beauty Spa";
        upDatedSpaAddress = "20 N Raymond Ave, Pasadena CA 91103,"+"<br>"+"(Entrance is the door just left of Jimmy John's, 2nd Floor, Suite 250)"+"<br>"+"Door Code: 250"+"<br>"+"Use the door code, we'll buzz you in via intercom. Pull the door open after the buzz."+"<br>"+"Park at metered spots in front or park at 48 N Raymond Ave Parking Garage.";
        upDatedSpaLINK = "https://form.jotform.com/232685044919060";
        upDatedSpaMapLINK = "";
        upDatedSpaWebLINK = "https://bensbeautypasa.noneedleneeded.com/triple-lift-booking" ;
        upDatedSpaPhone = "(626) 225-0556";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "15 minute Cleansing ";
        upDatedDurationTwo = "30 minutes of Triple Lift Treatment and 15 minutes Consultation";
        promoPrice = "59.95"
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (626) 298-6456";
        treatmentSelected = "Triple Lift Treatment";
        newSpaPhoneNumberSelected = "(626) 298-6456";
        insteadOfSpa = "$377";
        break;

        case "Ben's Beauty Natural Facelift $59.95":
        upDatedSpaName = "Ben's Beauty Spa";
        upDatedSpaAddress = "20 N Raymond Ave, Pasadena CA 91103,"+"<br>"+"(Entrance is the door just left of Jimmy John's, 2nd Floor, Suite 250)"+"<br>"+"Door Code: 250"+"<br>"+"Use the door code, we'll buzz you in via intercom. Pull the door open after the buzz."+"<br>"+"Park at metered spots in front or park at 48 N Raymond Ave Parking Garage.";
        upDatedSpaLINK = "https://form.jotform.com/232685044919060";
        upDatedSpaMapLINK = "";
        upDatedSpaWebLINK = "https://bensbeautypasa.noneedleneeded.com/natural-facelift-59-95-book-page" ;
        upDatedSpaPhone = "(626) 225-0556";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "15 minute Cleansing ";
        upDatedDurationTwo = "30 minutes of Natural Facelift Treatment and 15 minutes Consultation";
        promoPrice = "59.95"
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (626) 298-6456";
        treatmentSelected = "Natural Facelift Treatment";
        newSpaPhoneNumberSelected = "(626) 298-6456";
        insteadOfSpa = "$377";
        break; 

        case "Ben's Beauty Neck and Jawline $59.95":
        upDatedSpaName = "Ben's Beauty Spa";
        upDatedSpaAddress = "20 N Raymond Ave, Pasadena CA 91103,"+"<br>"+"(Entrance is the door just left of Jimmy John's, 2nd Floor, Suite 250)"+"<br>"+"Door Code: 250"+"<br>"+"Use the door code, we'll buzz you in via intercom. Pull the door open after the buzz."+"<br>"+"Park at metered spots in front or park at 48 N Raymond Ave Parking Garage.";
        upDatedSpaLINK = "https://form.jotform.com/232685044919060";
        upDatedSpaMapLINK = "";
        upDatedSpaWebLINK = "https://bensbeautypasa.noneedleneeded.com/neck-and-jawline-59-95-book" ;
        upDatedSpaPhone = "(626) 225-0556";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "15 minute Cleansing ";
        upDatedDurationTwo = "30 minutes of Beauty Neck and Jawline Treatment and 15 minutes Consultation";
        promoPrice = "59.95"
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (626) 298-6456";
        treatmentSelected = "Beauty Neck and Jawline Treatment";
        newSpaPhoneNumberSelected = "(626) 298-6456";
        insteadOfSpa = "$377";
        break;       

        case "Ben's Beauty Irvine Bye Bye Saggy Eyes 79.95":
        upDatedSpaName = "Ben's Beauty Irvine";
        upDatedSpaAddress = "220 Technology Dr, Suite 110, Irvine, CA 92618,"+"<br>"+"(Corner office building on the first floor.)"+"<br>"+"Parking lot";
        upDatedSpaLINK = "https://forms.gle/D2zbjrQS1F2Gy97c6";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/6XscTMpmrn379nJh9";
        upDatedSpaWebLINK = "https://bensbeautypasa.noneedleneeded.com/bye-bye-saggy-eyes-book" ;
        upDatedSpaPhone = "(714) 430-3899";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 minutes Cleansing";
        upDatedDurationTwo = "- 30 minutes Bye Bye Saggy Eyes and 15 minutes Consultation";
        promoPrice = "79.95"
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (949) 490-7726";
        treatmentSelected = "Bye Bye Saggy Eyes Treatment";
        newSpaPhoneNumberSelected = "(949) 490-7726";
        insteadOfSpa = "$377";
        break;

        case "Ben's Beauty Irvine Natural Facelift 99.95":
        upDatedSpaName = "Ben's Beauty Irvine";
        upDatedSpaAddress = "220 Technology Dr, Suite 110, Irvine, CA 92618,"+"<br>"+"(Corner office building on the first floor.)"+"<br>"+"Parking lot";
        upDatedSpaLINK = "https://forms.gle/D2zbjrQS1F2Gy97c6";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/6XscTMpmrn379nJh9";
        upDatedSpaWebLINK = "https://bensbeautypasa.noneedleneeded.com/natural-facelift-99-95-book-page" ;
        upDatedSpaPhone = "(714) 430-3899";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 minutes Cleansing";
        upDatedDurationTwo = "- 30 minutes Natural Facelift and 15 minutes Consultation";
        promoPrice = "99.95"
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (949) 490-7726";
        treatmentSelected = "Natural Facelift  Treatment";
        newSpaPhoneNumberSelected = "(949) 490-7726";
        insteadOfSpa = "$377";
        break;

        case "Ben's Beauty Irvine Anti-Aging Facial 59.95":
        upDatedSpaName = "Ben's Beauty Irvine";
        upDatedSpaAddress = "220 Technology Dr, Suite 110, Irvine, CA 92618,"+"<br>"+"(Corner office building on the first floor.)"+"<br>"+"Parking lot";
        upDatedSpaLINK = "https://forms.gle/D2zbjrQS1F2Gy97c6";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/6XscTMpmrn379nJh9";
        upDatedSpaWebLINK = "https://bensbeautypasa.noneedleneeded.com/booking-page-anti-aging-facial" ;
        upDatedSpaPhone = "(714) 430-3899";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 minutes Cleansing";
        upDatedDurationTwo = "- 30 minutes Anti-Aging Facial Tightening and 15 minutes Consultation";
        promoPrice = "59.95"
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (949) 490-7726";
        treatmentSelected = "Anti-Aging Facial Treatment";
        newSpaPhoneNumberSelected = "(949) 490-7726";
        insteadOfSpa = "$377";
        break;

        case "BioLed Beauty Natural Facelift $79.95":
        upDatedSpaName = "BioLed Beauty";
        upDatedSpaAddress = "Twelve Oaks Mall, 27500 Novi Rd. Novi, MI. 48377"+"<br>"+"(STE E205, 2nd floor next to Coach)";
        upDatedSpaLINK = "https://forms.gle/mJre1yWCABLtPhuN7";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/jXGbtY9eGYpNAeyr8";
        upDatedSpaWebLINK = "https://www.advancedbeautytreatments.com/pages/form-bioled-natural-facelift-79-95-377";
        upDatedSpaPhone = "(248) 392-2204";
        upDatedDurationTotal = "45 Minutes";
        upDatedDurationOne = " - 5 minutes Cleansing";
        upDatedDurationTwo = " - 25 minutes Skin Tightening Treatment and 15 minutes Consultation";
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (734) 291-2085";
        treatmentSelected = "Natural Facelift Treatment";
        newSpaPhoneNumberSelected = "(734) 291-2085";
        insteadOfSpa = "$377"
        break;

        case "Blesseli Spa Natural Facelift $79.95":
        upDatedSpaName = "Blesseli Spa ";
        upDatedSpaAddress = "456 N. New Ballas, Suite 342"+"<br>"+"(After entering the building, the elevators are located on the right. Take the elevator to the 3rd floor. When you exit, turn right and walk straight down the hallway. Suite 342 will be at the end.)";
        upDatedSpaLINK = "https://forms.gle/FX62JFqPpav8cp399";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/AuXmTsoZBL1ck2Qk7";
        upDatedSpaWebLINK = "https://blesseli.advancedbeautytreatments.com/natural-facelift-79-95-book-page";
        upDatedSpaPhone = "(314) 377-5991";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 minutes Cleansing";
        upDatedDurationTwo = "- 30 minutes Natural Facelift Treatment and 15 minutes Consultation";
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (314) 664-9655";
        treatmentSelected = "Natural Facelift Treatment";
        newSpaPhoneNumberSelected = "(314) 664-9655";
        insteadOfSpa = "$377"
        break;

        case "Blesseli Spa Men Skin Tightening $79.95":
        upDatedSpaName = "Blesseli Spa ";
        upDatedSpaAddress = "456 N. New Ballas, Suite 342"+"<br>"+"(After entering the building, the elevators are located on the right. Take the elevator to the 3rd floor. When you exit, turn right and walk straight down the hallway. Suite 342 will be at the end.)";
        upDatedSpaLINK = "https://forms.gle/FX62JFqPpav8cp399";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/AuXmTsoZBL1ck2Qk7";
        upDatedSpaWebLINK = "https://blesseli.advancedbeautytreatments.com/men-skin-tightening-79-95-booking";
        upDatedSpaPhone = "(314) 377-5991";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 minutes Cleansing";
        upDatedDurationTwo = "- 30 minutes Men Skin Tightening Treatment and 15 minutes Consultation";
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (314) 664-9655";
        treatmentSelected = "Men Skin Tightening Treatment";
        newSpaPhoneNumberSelected = "(314) 664-9655";
        insteadOfSpa = "$377"
        break;

        case "Blesseli Spa Neck and Jawline $79.95":
        upDatedSpaName = "Blesseli Spa ";
        upDatedSpaAddress = "456 N. New Ballas, Suite 342"+"<br>"+"(After entering the building, the elevators are located on the right. Take the elevator to the 3rd floor. When you exit, turn right and walk straight down the hallway. Suite 342 will be at the end.)";
        upDatedSpaLINK = "https://forms.gle/FX62JFqPpav8cp399";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/AuXmTsoZBL1ck2Qk7";
        upDatedSpaWebLINK = "https://blesseli.advancedbeautytreatments.com/booking-neck-and-jawline-79-95-ltb";
        upDatedSpaPhone = "(314) 377-5991";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 minutes Cleansing";
        upDatedDurationTwo = "- 30 minutes Neck and Jawline Treatment and 15 minutes Consultation";
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (314) 664-9655";
        treatmentSelected = "Neck and Jawline Treatment";
        newSpaPhoneNumberSelected = "(314) 664-9655";
        insteadOfSpa = "$377"
        break;

        case "Blossom Cosmetics Collagen Enhancing $59.95":
        upDatedSpaName = "Blossom";
        upDatedSpaAddress = "10400 San Jose Blvd, Jacksonville, FL 32257"+"<br>"+"(Suite 2, Next to EverBank)"+"<br>"+"(Plenty of parking within the premises)";
        upDatedSpaLINK = "https://forms.gle/wMBGEkEVzETSdEr77";
        upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/blossom-collagen-enhancing-promo-page";
        upDatedSpaPhone = "(904) 516-9268";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 minutes cleansing";
        upDatedDurationTwo = "- 30-minute LED Anti-aging Treatment and 15-minutes Consultation"
        promoPrice = "59.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (904) 629-3611";
        treatmentSelected = "Collagen Enhancing";
        newSpaPhoneNumberSelected = "(904) 629-3611";
        insteadOfSpa = "$377";
        break;

        case "Blowout Spa Men Skin Tightening $89.95":
        upDatedSpaName = "Blowout Spa";
        upDatedSpaAddress = "3393 Peachtree Rd NE, Atlanta, GA 30326"+"<br>"+"(Lenox square Mall, at the corner next to Forever 21 store)";
        upDatedSpaLINK = "https://forms.gle/zqgBmUhwJUk8tbMH9";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/FkN3AnaaCpaiXq6F9";
        upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/blowout-spa-men-skin-tightening-promo";
        upDatedSpaPhone = "(678) 992-5095";
        upDatedDurationTotal = "45 Minutes";
        upDatedDurationOne = " - 15 minutes Cleansing";
        upDatedDurationTwo = " - 30 minutes Skin Tightening Treatment and Consultation";
        promoPrice = "89.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (979) 324-5845";
        treatmentSelected = "Skin Tightening Treatment";
        newSpaPhoneNumberSelected = "(979) 324-5845";
        insteadOfSpa = "$377"
        break;

        case "Chantel Beauty Spa Triple Lift $59.95":
        upDatedSpaName = "Chantel Beauty Spa";
        upDatedSpaAddress = "12285 Scripps Poway Pkwy, Poway, CA 92064"+"<br>"+"(STE103 - Front store in the plaza between 2 dentist)";
        upDatedSpaLINK = "https://forms.gle/x5fSwJsBi3388VxT8";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/wJs4VNoeJWwweu3s7";
        upDatedSpaWebLINK = "https://chantelbeauty.firstouchbeauty.com/triple-lift-booking59";
        upDatedSpaPhone = "(858) 746-7200";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = " - 15 minutes Cleansing";
        upDatedDurationTwo = " - 30 minutes of Triple Lift Treatment and 15 minutes Consultation";
        promoPrice = "59.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (619) 673-8219";
        treatmentSelected = "Triple Lift Treatment";
        newSpaPhoneNumberSelected = "(619) 673-8219";
        insteadOfSpa = "$377"
        break;

        case "Chantel Beauty Spa Natural Skin Tightening $59.95":
        upDatedSpaName = "Chantel Beauty Spa";
        upDatedSpaAddress = "12285 Scripps Poway Pkwy, Poway, CA 92064"+"<br>"+"(STE103 - Front store in the plaza between 2 dentist)";
        upDatedSpaLINK = "https://forms.gle/x5fSwJsBi3388VxT8";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/wJs4VNoeJWwweu3s7";
        upDatedSpaWebLINK = "https://chantelbeauty.firstouchbeauty.com/natural-skin-tight-59-95-book-page";
        upDatedSpaPhone = "(858) 746-7200";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = " - 15 minutes Cleansing";
        upDatedDurationTwo = " - 30 minutes of Natural Skin Tightening Treatment and 15 minutes Consultation";
        promoPrice = "59.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (619) 673-8219";
        treatmentSelected = "Natural Skin Tightening Treatment";
        newSpaPhoneNumberSelected = "(619) 673-8219";
        insteadOfSpa = "$377"
        break;

        case "Chantel Beauty Spa Neck and Jawline $59.95":
        upDatedSpaName = "Chantel Beauty Spa";
        upDatedSpaAddress = "12285 Scripps Poway Pkwy, Poway, CA 92064"+"<br>"+"(STE103 - Front store in the plaza between 2 dentist)";
        upDatedSpaLINK = "https://forms.gle/x5fSwJsBi3388VxT8";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/wJs4VNoeJWwweu3s7";
        upDatedSpaWebLINK = "https://chantelbeauty.firstouchbeauty.com/booking-neck-and-jawline-59-95-ltb";
        upDatedSpaPhone = "(858) 746-7200";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = " - 15 minutes Cleansing";
        upDatedDurationTwo = " - 30 minutes of Neck and Jawline Treatment and 15 minutes Consultation";
        promoPrice = "59.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (619) 673-8219";
        treatmentSelected = "Neck and Jawline Treatment";
        newSpaPhoneNumberSelected = "(619) 673-8219";
        insteadOfSpa = "$377"
        break;
            
        case "Dermalogy Med Spa Body Treatment $49.95":
        upDatedSpaName = "Dermalogy Med Spa";
        upDatedSpaAddress = "9330 W Broadway St #410 Pearland, TX 77584 "+"<br>"+"(Next door to Wild Pear, in the same shopping center on the ground floor by Floor & Living)";
        upDatedSpaLINK = "https://forms.gle/JktVGKmUCs8eFcqW7";
        upDatedSpaMapLINK = "hhttps://maps.app.goo.gl/p6jXfdaazG5YKMt59";
        upDatedSpaWebLINK = "https://dermalogy.noneedleneeded.com/body-treatment-49-95-booking-page";
        upDatedSpaPhone = "(281) 697-6978";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = " - 45 minutes Body Treatment";
        upDatedDurationTwo = " - 15 minutes Consultation";
        promoPrice = "49.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (281) 818-2149";
        treatmentSelected = "Body Treatment";
        newSpaPhoneNumberSelected = "(281) 818-2149";
        insteadOfSpa = "$377"
        break;

        case "Dermalogy Med Spa Natural Facelift $49.95":
        upDatedSpaName = "Dermalogy Med Spa";
        upDatedSpaAddress = "9330 W Broadway St #410 Pearland, TX 77584 "+"<br>"+"(Next door to Wild Pear, in the same shopping center on the ground floor by Floor & Living)";
        upDatedSpaLINK = "https://forms.gle/JktVGKmUCs8eFcqW7";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/p6jXfdaazG5YKMt59";
        upDatedSpaWebLINK = "https://dermalogy.noneedleneeded.com/natural-facelift-49-95-book-page";
        upDatedSpaPhone = "(281) 697-6978";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = " - 15 minutes Cleansing";
        upDatedDurationTwo = " - 30 minutes of Natural Facelift Treatment and 15 minutes Consultation";
        promoPrice = "49.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (281) 818-2149";
        treatmentSelected = "Natural Facelift Treatment";
        newSpaPhoneNumberSelected = "(281) 818-2149";
        insteadOfSpa = "$377"
        break;

        case "Dermalogy Med Spa Skin Tightening $49.95":
        upDatedSpaName = "Dermalogy Med Spa";
        upDatedSpaAddress = "9330 W Broadway St #410 Pearland, TX 77584 "+"<br>"+"(Next door to Wild Pear, in the same shopping center on the ground floor by Floor & Living)";
        upDatedSpaLINK = "https://forms.gle/JktVGKmUCs8eFcqW7";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/p6jXfdaazG5YKMt59";
        upDatedSpaWebLINK = "https://dermalogy.noneedleneeded.com/skin-tightening-49-95-book-page";
        upDatedSpaPhone = "(281) 697-6978";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = " - 15 minutes Cleansing";
        upDatedDurationTwo = " - 30 minutes of Skin Tightening Treatment and 15 minutes Consultation";
        promoPrice = "49.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (281) 818-2149";
        treatmentSelected = "Skin Tightening Treatment";
        newSpaPhoneNumberSelected = "(281) 818-2149";
        insteadOfSpa = "$377"
        break;

        case "Donna Ella Med Spa Natural Facelift $59.95":
        upDatedSpaName = "Donna Ella Med Spa";
        upDatedSpaAddress = "Westin Oak Hotel,"+"<br>"+"5015 Westheimer Rd, Houston, TX 77056"+"<br>"+"(Between Cheesecake Factory and Salvador Ferragamo)";
        upDatedSpaLINK = "https://forms.gle/ea2x5kgKJoP1mtsSA";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/DuFDxd7ayUA2WCch6";
        upDatedSpaWebLINK = "https://www.advancedbeautytreatments.com/pages/donna-ella-natural-facelift-59-95";
        upDatedSpaPhone = "(346) 214-9823";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 minutes Cleansing";
        upDatedDurationTwo = "- 45 minutes Natural Facelift Treatment and Consultation";
        promoPrice = "59.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (713) 960-1313";
        treatmentSelected = "Natural Facelift Treatment";
        newSpaPhoneNumberSelected = "(713) 960-1313";
        insteadOfSpa = "$377"
        break;

        case "Donna Ella Med Spa Natural Facelift $79.95":
        upDatedSpaName = "Donna Ella Med Spa";
        upDatedSpaAddress = "Westin Oak Hotel,"+"<br>"+"5015 Westheimer Rd, Houston, TX 77056"+"<br>"+"(Between Cheesecake Factory and Salvador Ferragamo)";
        upDatedSpaLINK = "https://forms.gle/ea2x5kgKJoP1mtsSA";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/DuFDxd7ayUA2WCch6";
        upDatedSpaWebLINK = "https://www.advancedbeautytreatments.com/pages/donna-ella-natural-facelift-79-95";
        upDatedSpaPhone = "(346) 214-9823";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 minutes Cleansing";
        upDatedDurationTwo = "- 45 minutes Natural Facelift Treatment and Consultation";
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (713) 960-1313";
        treatmentSelected = "Natural Facelift Treatment";
        newSpaPhoneNumberSelected = "(713) 960-1313";
        insteadOfSpa = "$377"
        break;

        case "Donna Ella Med Spa Neck and Jawline $59.95":
        upDatedSpaName = "Donna Ella Med Spa";
        upDatedSpaAddress = "Westin Oak Hotel,"+"<br>"+"5015 Westheimer Rd, Houston, TX 77056"+"<br>"+"(Between Cheesecake Factory and Salvador Ferragamo)";
        upDatedSpaLINK = "https://forms.gle/ea2x5kgKJoP1mtsSA";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/DuFDxd7ayUA2WCch6";
        upDatedSpaWebLINK = "https://www.advancedbeautytreatments.com/pages/donna-ella-neck-and-jawline-59-95";
        upDatedSpaPhone = "(346) 214-9823";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 minutes Cleansing";
        upDatedDurationTwo = "- 45 minutes Neck and Jawline Treatment and Consultation";
        promoPrice = "59.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (713) 960-1313";
        treatmentSelected = "Neck and Jawline Treatment";
        newSpaPhoneNumberSelected = "(713) 960-1313";
        insteadOfSpa = "$377"
        break;

        case "Donna Ella Spa LED":
        upDatedSpaName = "Donna Ella Spa";
        upDatedSpaAddress = "Westin Oak Hotel,"+"<br>"+"5015 Westheimer Rd, Houston, TX 77056"+"<br>"+"(Main entrance, first floor next door to Cheesecake Factory)";
        upDatedSpaLINK = "https://forms.gle/XHLsxffpnMpoKiUm6";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/donna-ella-led-promo";
        upDatedSpaPhone = "(346) 980-4152";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15-Cleansing and Steamer";
        upDatedDurationTwo = "- 45-minutes LED Anti-aging Treatment and Consultation"
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (346) 648-6648";
        treatmentSelected = "LED Treatment";
        newSpaPhoneNumberSelected = "(346) 648-6648";
        insteadOfSpa = "$299";
        break;


        case "Elevatione 3 in 1 Skin Lifting Treatment $69.95":
        upDatedSpaName = "Elevatione Spa & Beauty";
        upDatedSpaAddress = "Flagler Waterview building,"+"<br>"+"1515 North Flagler Drive, West Palm Beach, FL 33401"+"<br>"+"(First Floor, STE 100)";
        upDatedSpaLINK = "https://forms.gle/TcPjSkWja3QxSPWb7";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/dEeZzuiPSDNhjzhs8";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/elevatione-3-in-1-skin-lifting-treatment-69-95";
        upDatedSpaPhone = "(561) 406-8045";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 45 minutes of 3 in 1 Skin Lifting Treatment";
        upDatedDurationTwo = "- 15 minutes of Consultation";
        promoPrice = "69.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (561) 469-6135 ";
        treatmentSelected = "Skin Lifting Treatment";
        newSpaPhoneNumberSelected = "(561) 469-6135";
        insteadOfSpa = "$377"
        break;

        case "Elysium Cosmetic Clinics Body Contouring 79.95":
        upDatedSpaName = "Elysium Cosmetic Clinics";
        upDatedSpaAddress = "163 Palencia Village Drive, St Augustine, FL 32095"+"<br>"+"(Unit 110, Near Starbucks and Cleaners)";
        upDatedSpaLINK = "https://forms.gle/uqWKcfmgbPZ1Ej17A";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/yduPRKaVAP7qGztR7";
        upDatedSpaWebLINK = "https://elysium.noneedleneeded.com/body-contouring-79-95-book-page";
        upDatedSpaPhone = "(904) 799-2965";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15-minute Body Analysis";
        upDatedDurationTwo = "- 45-minutes Body Contouring Treatment and 15 minutes post-care and consultation"
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (904) 342-2870";
        treatmentSelected = "Body Contouring Treatment";
        newSpaPhoneNumberSelected = "(904) 342-2870";
        insteadOfSpa = "$399";
        break;

        case "Elysium Cosmetic Clinics Lift and Hydrate 69.95":
        upDatedSpaName = "Elysium Cosmetic Clinics";
        upDatedSpaAddress = "163 Palencia Village Drive, St Augustine, FL 32095"+"<br>"+"(Unit 110, Near Starbucks and Cleaners)";
        upDatedSpaLINK = "https://forms.gle/RsNbu4Di2qzZaFZu6";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/yduPRKaVAP7qGztR7";
        upDatedSpaWebLINK = "https://elysium.noneedleneeded.com/lift-and-hydrate-book";
        upDatedSpaPhone = "(904) 799-2965";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15-minute Consultation";
        upDatedDurationTwo = "- 45-minutes Lift and Hydrate Treatment"
        promoPrice = "69.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (904) 342-2870";
        treatmentSelected = "Lift and Hydrate";
        newSpaPhoneNumberSelected = "(904) 342-2870";
        insteadOfSpa = "$377";
        break;

        case "Elysium Cosmetic Clinics Natural Facelift 69.95":
        upDatedSpaName = "Elysium Cosmetic Clinics";
        upDatedSpaAddress = "163 Palencia Village Drive, St Augustine, FL 32095"+"<br>"+"(Unit 110, Near Starbucks and Cleaners)";
        upDatedSpaLINK = "https://forms.gle/RsNbu4Di2qzZaFZu6";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/yduPRKaVAP7qGztR7";
        upDatedSpaWebLINK = "https://elysium.noneedleneeded.com/natural-facelift-69-95-book-page";
        upDatedSpaPhone = "(904) 799-2965";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15-minute Consultation";
        upDatedDurationTwo = "- 45-minutes Natural Facelift Treatment"
        promoPrice = "69.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (904) 342-2870";
        treatmentSelected = "Natural Facelift";
        newSpaPhoneNumberSelected = "(904) 342-2870";
        insteadOfSpa = "$377";
        break;

        case "Elysium Cosmetic Clinics Neck and Jawline 69.95":
        upDatedSpaName = "Elysium Cosmetic Clinics";
        upDatedSpaAddress = "163 Palencia Village Drive, St Augustine, FL 32095"+"<br>"+"(Unit 110, Near Starbucks and Cleaners)";
        upDatedSpaLINK = "https://forms.gle/RsNbu4Di2qzZaFZu6";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/yduPRKaVAP7qGztR7";
        upDatedSpaWebLINK = "https://elysium.noneedleneeded.com/neck-and-jawline-69-95-book-page";
        upDatedSpaPhone = "(904) 799-2965";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15-minute Consultation";
        upDatedDurationTwo = "- 45-minutes Neck and Jawline Treatment"
        promoPrice = "69.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (904) 342-2870";
        treatmentSelected = "Neck and Jawline";
        newSpaPhoneNumberSelected = "(904) 342-2870";
        insteadOfSpa = "$377";
        break;

        case "Equanimity 3 in 1 Skin Tightening Treatment $59.95":
        upDatedSpaName = "Equanimity Wellness";
        upDatedSpaAddress = "11661 Preston Rd #170, Dallas, TX 75230"+"<br>"+"(Located on the 2nd floor of the shopping plaza, right above Renny's Restaurant)";
        upDatedSpaLINK = "https://forms.gle/AT1eTXYFy4phJGaB8";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/xA4XghVZvdQ5TDiZA";
        upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/equanimity-3-in-1-skin-tightening-promo-59-95";
        upDatedSpaPhone = "(469) 436-2824";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 minutes Cleansing and 30 minutes 3 in 1 Skin Tightening Treatment";
        upDatedDurationTwo = "- 15 minutes Consultation";
        promoPrice = "59.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (214) 238-6896";
        treatmentSelected = "3 in 1 Skin Tightening Treatment";
        newSpaPhoneNumberSelected = "(214) 238-6896";
        insteadOfSpa = "$377"
        break;

        case "Equanimity Anti-Aging Facial $59.95":
        upDatedSpaName = "Equanimity Wellness";
        upDatedSpaAddress = "11661 Preston Rd #170, Dallas, TX 75230"+"<br>"+"(Located on the 2nd floor of the shopping plaza, right above Renny's Restaurant)";
        upDatedSpaLINK = "https://forms.gle/AT1eTXYFy4phJGaB8";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/xA4XghVZvdQ5TDiZA";
        upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/equanimity-wellness-anti-aging-facial-promo";
        upDatedSpaPhone = "(469) 436-2824";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 minutes Cleansing and 30 minutes Anti-Aging Treatment";
        upDatedDurationTwo = "- 15 minutes Consultation";
        promoPrice = "59.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (214) 238-6896";
        treatmentSelected = "Anti-Aging Treatment";
        newSpaPhoneNumberSelected = "(214) 238-6896";
        insteadOfSpa = "$377"
        break;

        case "Equanimity Bye Bye Muffin Top $89.95":
        upDatedSpaName = "Equanimity Wellness";
        upDatedSpaAddress = "11661 Preston Rd #170, Dallas, TX 75230"+"<br>"+"(Located on the 2nd floor of the shopping plaza, right above Renny's Restaurant)";
        upDatedSpaLINK = "https://forms.gle/AT1eTXYFy4phJGaB8";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/xA4XghVZvdQ5TDiZA";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/equanimity-bye-bye-muffin-top-89-95";
        upDatedSpaPhone = "(469) 436-2824";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 45 minutes of Bye Bye Muffin Top Treatment";
        upDatedDurationTwo = "- 15 minutes Skin Assestment";
        promoPrice = "89.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (214) 238-6896";
        treatmentSelected = "Bye Bye Muffin Top";
        newSpaPhoneNumberSelected = "(214) 238-6896";
        insteadOfSpa = "$499"
        break;

        case "Equanimity Bye Bye Saggy Arms $89.95":
        upDatedSpaName = "Equanimity Wellness";
        upDatedSpaAddress = "11661 Preston Rd #170, Dallas, TX 75230"+"<br>"+"(Located on the 2nd floor of the shopping plaza, right above Renny's Restaurant)";
        upDatedSpaLINK = "https://forms.gle/AT1eTXYFy4phJGaB8";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/xA4XghVZvdQ5TDiZA";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/equanimity-bye-bye-saggy-arms-89-95";
        upDatedSpaPhone = "(469) 436-2824";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 45 minutes of Bye Bye Saggy Arms Treatment";
        upDatedDurationTwo = "- 15 minutes Skin Assestment";
        promoPrice = "89.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (214) 238-6896";
        treatmentSelected = "Bye Bye Saggy Arms";
        newSpaPhoneNumberSelected = "(214) 238-6896";
        insteadOfSpa = "$499"
        break;

        case "Equanimity Bye Bye Saggy Eyes $59.95":
        upDatedSpaName = "Equanimity Wellness";
        upDatedSpaAddress = "11661 Preston Rd #170, Dallas, TX 75230"+"<br>"+"(Located on the 2nd floor of the shopping plaza, right above Renny's Restaurant)";
        upDatedSpaLINK = "https://forms.gle/AT1eTXYFy4phJGaB8";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/xA4XghVZvdQ5TDiZA";
        upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/equanimity-bye-bye-saggy-eyes-59-95";
        upDatedSpaPhone = "(469) 436-2824";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 45 minutes of the LED & Hyaluronic Acid Treatment";
        upDatedDurationTwo = "- 15 minutes Consultation";
        promoPrice = "59.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (214) 238-6896";
        treatmentSelected = "Bye Bye Saggy Eye";
        newSpaPhoneNumberSelected = "(214) 238-6896";
        insteadOfSpa = "$377"
        break;

        case "Equanimity Collagen Enhancing $69.95":
        upDatedSpaName = "Equanimity Wellness";
        upDatedSpaAddress = "11661 Preston Rd #170, Dallas, TX 75230"+"<br>"+"(Located on the 2nd floor of the shopping plaza, right above Renny's Restaurant)";
        upDatedSpaLINK = "https://forms.gle/AT1eTXYFy4phJGaB8";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/xA4XghVZvdQ5TDiZA";
        upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/equanimity-collagen-enhancing-promo-69-95";
        upDatedSpaPhone = "(469) 436-2824";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 minutes Cleansing and 30 minutes Collagen Enhancing Treatment";
        upDatedDurationTwo = "- 15 minutes Consultation";
        promoPrice = "69.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (214) 238-6896";
        treatmentSelected = "Collagen Enhancing Treatment";
        newSpaPhoneNumberSelected = "(214) 238-6896";
        insteadOfSpa = "$377"
        break;

        case "Equanimity DTB Bye Bye Saggy Eyes $59.95":
        upDatedSpaName = "Equanimity Wellness";
        upDatedSpaAddress = "11661 Preston Rd #170, Dallas, TX 75230"+"<br>"+"(Located on the 2nd floor of the shopping plaza, right above Renny's Restaurant)";
        upDatedSpaLINK = "https://forms.gle/AT1eTXYFy4phJGaB8";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/xA4XghVZvdQ5TDiZA";
        upDatedSpaWebLINK = "https://www.advancedbeautytreatments.com/pages/dtb-p2-equanimity-bye-bye-saggy-eyes-59-95-377";
        upDatedSpaPhone = "(469) 436-2824";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 45 minutes of the LED & Hyaluronic Acid Treatment";
        upDatedDurationTwo = "- 15 minutes Consultation";
        promoPrice = "59.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (214) 238-6896";
        treatmentSelected = "Bye Bye Saggy Eye";
        newSpaPhoneNumberSelected = "(214) 238-6896";
        insteadOfSpa = "$377"
        break;

        case "Equanimity DTB Collagen Enhancing $69.95":
        upDatedSpaName = "Equanimity Wellness";
        upDatedSpaAddress = "11661 Preston Rd #170, Dallas, TX 75230"+"<br>"+"(Located on the 2nd floor of the shopping plaza, right above Renny's Restaurant)";
        upDatedSpaLINK = "https://forms.gle/AT1eTXYFy4phJGaB8";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/xA4XghVZvdQ5TDiZA";
        upDatedSpaWebLINK = "https://www.advancedbeautytreatments.com/pages/dtb-p2-equanimity-collagen-enhancing-69-95-377";
        upDatedSpaPhone = "(469) 436-2824";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 minutes Cleansing and 30 minutes Collagen Enhancing Treatment";
        upDatedDurationTwo = "- 15 minutes Consultation";
        promoPrice = "69.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (214) 238-6896";
        treatmentSelected = "Collagen Enhancing Treatment";
        newSpaPhoneNumberSelected = "(214) 238-6896";
        insteadOfSpa = "$377"
        break;

        case "Equanimity EMS Body $79.95":
        upDatedSpaName = "Equanimity Wellness";
        upDatedSpaAddress = "11661 Preston Rd #170, Dallas, TX 75230"+"<br>"+"(Located on the 2nd floor of the shopping plaza, right above Renny's Restaurant)";
        upDatedSpaLINK = "https://forms.gle/AT1eTXYFy4phJGaB8";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/xA4XghVZvdQ5TDiZA";
        upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/equanimity-wellness-ems-body-promo";
        upDatedSpaPhone = "(469) 436-2824";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 45 minutes EMS Body Treatment";
        upDatedDurationTwo = "- 15 minutes Consultation";
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (214) 238-6896";
        treatmentSelected = "EMS Body Treatment";
        newSpaPhoneNumberSelected = "(214) 238-6896";
        insteadOfSpa = "$377"
        break;

        case "Equanimity Facelifting Treatment $69.95":
        upDatedSpaName = "Equanimity Wellness";
        upDatedSpaAddress = "11661 Preston Rd #170, Dallas, TX 75230"+"<br>"+"(Located on the 2nd floor of the shopping plaza, right above Renny's Restaurant)";
        upDatedSpaLINK = "https://forms.gle/AT1eTXYFy4phJGaB8";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/xA4XghVZvdQ5TDiZA";
        upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/equanimity-facelifting-treatment-69-95-survey";
        upDatedSpaPhone = "(469) 436-2824";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 minutes Cleansing and 30 minutes Facelifting Treatment";
        upDatedDurationTwo = "- 15 minutes Consultation";
        promoPrice = "69.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (214) 238-6896";
        treatmentSelected = "Facelifting Treatment";
        newSpaPhoneNumberSelected = "(214) 238-6896";
        insteadOfSpa = "$377"
        break;

        case "Equanimity Freezing Facelift $69.95":
        upDatedSpaName = "Equanimity Wellness";
        upDatedSpaAddress = "11661 Preston Rd #170, Dallas, TX 75230"+"<br>"+"(Located on the 2nd floor of the shopping plaza, right above Renny's Restaurant)";
        upDatedSpaLINK = "https://forms.gle/AT1eTXYFy4phJGaB8";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/xA4XghVZvdQ5TDiZA";
        upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/equanimity-freezing-facelift-69-95";
        upDatedSpaPhone = "(469) 436-2824";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 minutes Cleansing and 30 minutes Freezing Facelift Treatment";
        upDatedDurationTwo = "- 15 minutes Consultation";
        promoPrice = "69.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (214) 238-6896";
        treatmentSelected = "Freezing Facelift Treatment";
        newSpaPhoneNumberSelected = "(214) 238-6896";
        insteadOfSpa = "$377"
        break;

        case "Equanimity Glow Infusion Facial $89.95":
        upDatedSpaName = "Equanimity Wellness";
        upDatedSpaAddress = "11661 Preston Rd #170, Dallas, TX 75230"+"<br>"+"(Located on the 2nd floor of the shopping plaza, right above Renny's Restaurant)";
        upDatedSpaLINK = "https://forms.gle/AT1eTXYFy4phJGaB8";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/xA4XghVZvdQ5TDiZA";
        upDatedSpaWebLINK = "https://equanimity.noneedleneeded.com/glow-infusion-facial-89-95-booking-page";
        upDatedSpaPhone = "(469) 436-2824";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 45 minutes of Glow Infusion Facial Treatment";
        upDatedDurationTwo = "- 15 minutes Skin Assestment";
        promoPrice = "89.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (214) 238-6896";
        treatmentSelected = "Glow Infusion Facial";
        newSpaPhoneNumberSelected = "(214) 238-6896";
        insteadOfSpa = "$377"
        break;

        
        case "Equanimity Skin Tightening Treatment $65":
        upDatedSpaName = "Equanimity Wellness";
        upDatedSpaAddress = "11661 Preston Rd #170, Dallas, TX 75230"+"<br>"+"(Located on the 2nd floor of the shopping plaza, right above Renny's Restaurant)";
        upDatedSpaLINK = "https://forms.gle/AT1eTXYFy4phJGaB8";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/xA4XghVZvdQ5TDiZA";
        upDatedSpaWebLINK = "https://equanimity.noneedleneeded.com/skin-tightening-65-booking";
        upDatedSpaPhone = "(469) 436-2824";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 minutes Cleansing and 30 minutes Skin Tightening Treatment";
        upDatedDurationTwo = "- 15 minutes Consultation";
        promoPrice = "65";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (214) 238-6896";
        treatmentSelected = "Skin Tightening Treatment";
        newSpaPhoneNumberSelected = "(214) 238-6896";
        insteadOfSpa = "$377"
        break;

        
        case "Esthetix Raleigh":
        upDatedSpaName = "Esthetix Spa";
        upDatedSpaAddress = "Crabtree Valley Mall,"+"<br>"+"4325 Glenwood Ave, Raleigh NC 27612" +"<br>"+"(STE 2106, 2nd floor, in front J. Jill and Sunglass Hut)";
        upDatedSpaLINK = "https://forms.gle/WHjM6Js3yYA6w6Y59";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/6hkznAPu98192D1y7";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/esthetix-nc-promo";
        upDatedSpaPhone = "(919) 670-0716";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 30 Minutes Light Cleaning";
        upDatedDurationTwo = "- 30 Minutes LED Light Session & Consultation"+"<br><br>"+"Dont Forget! You are eligible for a 25% off your next purchase at our spa :)";
        promoPrice = "79.95"
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (919) 900-8271";
        treatmentSelected = "LED Treatment";
        newSpaPhoneNumberSelected = "(919) 900-8271";
        insteadOfSpa = "$350"
        break;

        case "Esthetix Raleigh 3 in 1 Skin Tightening $79.95":
        upDatedSpaName = "Esthetix Spa";
        upDatedSpaAddress = "Crabtree Valley Mall,"+"<br>"+"4325 Glenwood Ave, Raleigh NC 27612" +"<br>"+"(STE 2106, 2nd floor, in front J. Jill and Sunglass Hut)";
        upDatedSpaLINK = "https://forms.gle/WHjM6Js3yYA6w6Y59";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/6hkznAPu98192D1y7";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/esthetix-raleigh-3-in-1-skin-tightening-promo-79-95";
        upDatedSpaPhone = "(919) 670-0716";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 Minutes Light Cleaning";
        upDatedDurationTwo = "- 45 Minutes 3 in 1 Skin Tightening Treatment & Consultation"+"<br><br>"+"Dont Forget! You are eligible for a 25% off your next purchase at our spa :)";
        promoPrice = "79.95"
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (919) 900-8271";
        treatmentSelected = "3 in 1 Skin Tightening Treatment";
        newSpaPhoneNumberSelected = "(919) 900-8271";
        insteadOfSpa = "$377"
        break;

        case "Esthetix Raleigh Natural Facelift":
        upDatedSpaName = "Esthetix Spa";
        upDatedSpaAddress = "Crabtree Valley Mall,"+"<br>"+"4325 Glenwood Ave, Raleigh NC 27612" +"<br>"+"(STE 2106, 2nd floor, in front J. Jill and Sunglass Hut)";
        upDatedSpaLINK = "https://forms.gle/WHjM6Js3yYA6w6Y59";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/6hkznAPu98192D1y7";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/esthetix-raleigh-natural-face-lift-promo-79-95";
        upDatedSpaPhone = "(919) 670-0716";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 Minutes Light Cleaning";
        upDatedDurationTwo = "- 45 Minutes Natural Facelift Treatment & Consultation"+"<br><br>"+"Dont Forget! You are eligible for a 25% off your next purchase at our spa :)";
        promoPrice = "79.95"
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (919) 900-8271";
        treatmentSelected = "Natural Facelift Treatment";
        newSpaPhoneNumberSelected = "(919) 900-8271";
        insteadOfSpa = "$350"
        break;

        case "Esthetix Raleigh Natural Facelift $69.95":
        upDatedSpaName = "Esthetix Spa";
        upDatedSpaAddress = "Crabtree Valley Mall,"+"<br>"+"4325 Glenwood Ave, Raleigh NC 27612" +"<br>"+"(STE 2106, 2nd floor, in front J. Jill and Sunglass Hut)";
        upDatedSpaLINK = "https://forms.gle/WHjM6Js3yYA6w6Y59";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/6hkznAPu98192D1y7";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/esthetix-raleigh-natural-facelift-page-69-95";
        upDatedSpaPhone = "(919) 670-0716";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 Minutes Light Cleaning";
        upDatedDurationTwo = "- 45 Minutes Natural Facelift Treatment & Consultation"+"<br><br>"+"Dont Forget! You are eligible for a 25% off your next purchase at our spa :)";
        promoPrice = "69.95"
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (919) 900-8271";
        treatmentSelected = "Natural Facelift Treatment";
        newSpaPhoneNumberSelected = "(919) 900-8271";
        insteadOfSpa = "$350"
        break;

        case "Esthetix Raleigh Natural Facelift $89.95":
        upDatedSpaName = "Esthetix Spa";
        upDatedSpaAddress = "Crabtree Valley Mall,"+"<br>"+"4325 Glenwood Ave, Raleigh NC 27612" +"<br>"+"(STE 2106, 2nd floor, in front J. Jill and Sunglass Hut)";
        upDatedSpaLINK = "https://forms.gle/WHjM6Js3yYA6w6Y59";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/6hkznAPu98192D1y7";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/esthetix-raleigh-natural-facelift-page-89-95";
        upDatedSpaPhone = "(919) 670-0716";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 Minutes Light Cleaning";
        upDatedDurationTwo = "- 45 Minutes Natural Facelift Treatment & Consultation"+"<br><br>"+"Dont Forget! You are eligible for a 25% off your next purchase at our spa :)";
        promoPrice = "89.95"
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (919) 900-8271";
        treatmentSelected = "Natural Facelift Treatment";
        newSpaPhoneNumberSelected = "(919) 900-8271";
        insteadOfSpa = "$350"
        break;

        case "Esthetix Raleigh Skin Tightening $69.95":
        upDatedSpaName = "Esthetix Spa";
        upDatedSpaAddress = "Crabtree Valley Mall,"+"<br>"+"4325 Glenwood Ave, Raleigh NC 27612" +"<br>"+"(STE 2106, 2nd floor, in front J. Jill and Sunglass Hut)";
        upDatedSpaLINK = "https://forms.gle/WHjM6Js3yYA6w6Y59";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/6hkznAPu98192D1y7";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/esthetix-raleigh-skin-tightening-promo";
        upDatedSpaPhone = "(919) 670-0716";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 Minutes Light Cleaning";
        upDatedDurationTwo = "- 45 Minutes Skin Tightening Treatment & Consultation"+"<br><br>"+"Dont Forget! You are eligible for a 25% off your next purchase at our spa :)";
        promoPrice = "69.95"
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (919) 900-8271";
        treatmentSelected = "Skin Tightening Treatment";
        newSpaPhoneNumberSelected = "(919) 900-8271";
        insteadOfSpa = "$377"
        break;

        case "Florentine Skincare and Cosmetics Mommy Tummy Rescue $99.95":
        upDatedSpaName = "Florentine Skincare and Cosmetics";
        upDatedSpaAddress = "25 The West Mall, Etobicoke, ON M9C 1B8, Canadá"+"<br>"+"From Entrance 4 (next to Starbucks), turn left and you’ll find the store on your right-hand side.";
        upDatedSpaLINK = "https://forms.gle/E8975rmoLv4NpuAy8";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/9VTTUe4Hi8nNWocv8";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/florentine-skincare-and-cosmetics-mommy-tummy-rescue-99-95";
        upDatedSpaPhone = "(437) 291-3104";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 45 minutes Mommy Tummy Rescue Treatment";
        upDatedDurationTwo = "- 15 minutes Consultation";
        promoPrice = "99.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (416) 622-4464";
        treatmentSelected = "Mommy Tummy Rescue Treatment";
        newSpaPhoneNumberSelected = "(416) 622-4464";
        insteadOfSpa = "$377"
        break;

        case "Florentine Skincare and Cosmetics Natural Facelift $79.95":
        upDatedSpaName = "Florentine Skincare and Cosmetics";
        upDatedSpaAddress = "25 The West Mall, Etobicoke, ON M9C 1B8, Canadá"+"<br>"+"From Entrance 4 (next to Starbucks), turn left and you’ll find the store on your right-hand side.";
        upDatedSpaLINK = "https://forms.gle/E8975rmoLv4NpuAy8";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/9VTTUe4Hi8nNWocv8";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/florentine-skincare-amp-cosmetics-natural-facelift-79-95";
        upDatedSpaPhone = "(437) 291-3104";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 minutes Cleansing and 30 minutes of Natural Facelift Treatment";
        upDatedDurationTwo = "- 15 minutes Consultation";
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (416) 622-4464";
        treatmentSelected = "Natural Facelift Treatment";
        newSpaPhoneNumberSelected = "(416) 622-4464";
        insteadOfSpa = "$377"
        break;

        case "Florentine Skincare and Cosmetics Natural Facelift $99.95":
        upDatedSpaName = "Florentine Skincare and Cosmetics";
        upDatedSpaAddress = "25 The West Mall, Etobicoke, ON M9C 1B8, Canadá"+"<br>"+"From Entrance 4 (next to Starbucks), turn left and you’ll find the store on your right-hand side.";
        upDatedSpaLINK = "https://forms.gle/E8975rmoLv4NpuAy8";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/9VTTUe4Hi8nNWocv8";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/florentine-skincare-and-cosmetics-natural-facelift-99-95";
        upDatedSpaPhone = "(437) 291-3104";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 minutes Cleansing and 30 minutes of Natural Facelift Treatment";
        upDatedDurationTwo = "- 15 minutes Consultation";
        promoPrice = "99.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (416) 622-4464";
        treatmentSelected = "Natural Facelift Treatment";
        newSpaPhoneNumberSelected = "(416) 622-4464";
        insteadOfSpa = "$377"
        break;

        case "Florentine Skincare and Cosmetics Neck and Jawline $79.95":
        upDatedSpaName = "Florentine Skincare and Cosmetics";
        upDatedSpaAddress = "25 The West Mall, Etobicoke, ON M9C 1B8, Canadá"+"<br>"+"From Entrance 4 (next to Starbucks), turn left and you’ll find the store on your right-hand side.";
        upDatedSpaLINK = "https://forms.gle/E8975rmoLv4NpuAy8";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/9VTTUe4Hi8nNWocv8";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/florentine-skincare-and-cosmetics-neck-amp-jawline-79-95";
        upDatedSpaPhone = "(437) 291-3104";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 minutes Cleansing and 30 minutes of Neck and Jawline Treatment";
        upDatedDurationTwo = "- 15 minutes Consultation";
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (416) 622-4464";
        treatmentSelected = "Neck and Jawline Treatment";
        newSpaPhoneNumberSelected = "(416) 622-4464";
        insteadOfSpa = "$377"
        break;

        case "Forest Hill Cosmetic Clinic Mommy Tummy Rescue $69.95":
        upDatedSpaName = "Forest Hill Cosmetic Clinic";
        upDatedSpaAddress = "446 Spadina Rd, Toronto, ON M5P 2W4, Canada"+"<br>"+"(Next to Starbucks)";
        upDatedSpaLINK = "https://forms.gle/FYRNhaUTmx5AVs476";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/1zX6R5X3GkvfxCpE7";
        upDatedSpaParkLINK = "https://maps.app.goo.gl/wmKSTxGytV3HD9ii7";
        upDatedSpaWebLINK = "https://foresthillclinic.firstouchbeauty.com/mommy-tummy-69-95-book-page";
        upDatedSpaPhone = "(437) 290-1194";
        upDatedDurationTotal = "75 Minutes";
        upDatedDurationOne = "- 60 minutes of the Mommy Tummy Treatment";
        upDatedDurationTwo = "- 15 minutes Consultation and a customized treatment plan";
        promoPrice = "69.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (416) 595-9788";
        treatmentSelected = "Mommy Tummy Treatment";
        newSpaPhoneNumberSelected = "(416) 595-9788";
        insteadOfSpa = "$377"
        break;

        case "Forest Hill Cosmetic Clinic Instant Shape and Sculpt Treatment $69.95":
        upDatedSpaName = "Forest Hill Cosmetic Clinic";
        upDatedSpaAddress = "446 Spadina Rd, Toronto, ON M5P 2W4, Canada"+"<br>"+"(Next to Starbucks)";
        upDatedSpaLINK = "https://forms.gle/FYRNhaUTmx5AVs476";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/1zX6R5X3GkvfxCpE7";
        upDatedSpaParkLINK = "https://maps.app.goo.gl/wmKSTxGytV3HD9ii7";
        upDatedSpaWebLINK = "https://foresthillclinic.firstouchbeauty.com/instant-shape-and-sculpt-treatment-69-95-book-page";
        upDatedSpaPhone = "(437) 290-1194";
        upDatedDurationTotal = "75 Minutes";
        upDatedDurationOne = "- 60 minutes of the Instant Shape and Sculpt Treatment";
        upDatedDurationTwo = "- 15 minutes Consultation and a customized treatment plan";
        promoPrice = "69.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (416) 595-9788";
        treatmentSelected = "Instant Shape and Sculpt Treatment";
        newSpaPhoneNumberSelected = "(416) 595-9788";
        insteadOfSpa = "$377"
        break;

        case "Gentle Touch Beauty":
        upDatedSpaName = "Gentle Touch Beauty";
        upDatedSpaAddress = "Historic Downtown Venice FL Shops,"+"<br>"+"241 W Venice Ave, Venice, FL 34285"+"<br>"+"(Between Captain's Landing & St Marco Boutique)";
        upDatedSpaLINK = "https://forms.gle/PVLf5eCmvnyUHL1i6";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/RNDibJBb8mMaDftN7";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/gentle-touch-beauty-promo-page" ;
        upDatedSpaPhone = "(941) 280-0407";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "30 minute Cleansing";
        upDatedDurationTwo = "30 minute LED Experience and Consultation";
        promoPrice = "79.95"
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (941) 244-0044";
        treatmentSelected = "LED Treatment";
        newSpaPhoneNumberSelected = "(941) 244-0044";
        insteadOfSpa = "$350";
        break;

        case "Gentle Touch Beauty 3 in 1 Skin Tightening Treatment $99.95":
        upDatedSpaName = "Gentle Touch Beauty";
        upDatedSpaAddress = "Historic Downtown Venice FL Shops,"+"<br>"+"241 W Venice Ave, Venice, FL 34285"+"<br>"+"(Between Captain's Landing & St Marco Boutique)";
        upDatedSpaLINK = "https://forms.gle/PVLf5eCmvnyUHL1i6";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/RNDibJBb8mMaDftN7";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/gentle-touch-beauty-3-in-1-skin-tightening-promo-99-95" ;
        upDatedSpaPhone = "(941) 280-0407";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "15 minute Cleansing";
        upDatedDurationTwo = "45 minute 3 in 1 Skin Tightening Treatment";
        promoPrice = "99.95"
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (941) 244-0044";
        treatmentSelected = "3 in 1 Skin Tightening Treatment Treatment";
        newSpaPhoneNumberSelected = "(941) 244-0044";
        insteadOfSpa = "$377";
        break;

        case "Gentle Touch Beauty Bye Bye Saggy Eyes $79.95":
        upDatedSpaName = "Gentle Touch Beauty";
        upDatedSpaAddress = "Historic Downtown Venice FL Shops,"+"<br>"+"241 W Venice Ave, Venice, FL 34285"+"<br>"+"(Between Captain's Landing & St Marco Boutique)";
        upDatedSpaLINK = "https://forms.gle/PVLf5eCmvnyUHL1i6";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/RNDibJBb8mMaDftN7";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/gentle-touch-beauty-bye-bye-saggy-eyes-79-95" ;
        upDatedSpaPhone = "(941) 280-0407";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "15 minute Cleansing";
        upDatedDurationTwo = "45 minute Beauty Bye Bye Saggy Eyes and Consultation";
        promoPrice = "79.95"
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (941) 244-0044";
        treatmentSelected = "Beauty Bye Bye Saggy Eyes Treatment";
        newSpaPhoneNumberSelected = "(941) 244-0044";
        insteadOfSpa = "$377";
        break;

        case "Gentle Touch Beauty Bye Bye Saggy Eyes $99.95":
        upDatedSpaName = "Gentle Touch Beauty";
        upDatedSpaAddress = "Historic Downtown Venice FL Shops,"+"<br>"+"241 W Venice Ave, Venice, FL 34285"+"<br>"+"(Between Captain's Landing & St Marco Boutique)";
        upDatedSpaLINK = "https://forms.gle/PVLf5eCmvnyUHL1i6";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/RNDibJBb8mMaDftN7";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/gentle-touch-beauty-bye-bye-saggy-eyes-99-95" ;
        upDatedSpaPhone = "(941) 280-0407";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "15 minute Cleansing";
        upDatedDurationTwo = "45 minute Beauty Bye Bye Saggy Eyes and Consultation";
        promoPrice = "99.95"
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (941) 244-0044";
        treatmentSelected = "Beauty Bye Bye Saggy Eyes Treatment";
        newSpaPhoneNumberSelected = "(941) 244-0044";
        insteadOfSpa = "$377";
        break;

        case "Gentle Touch Beauty LED 99.95":
        upDatedSpaName = "Gentle Touch Beauty";
        upDatedSpaAddress = "Historic Downtown Venice FL Shops,"+"<br>"+"241 W Venice Ave, Venice, FL 34285"+"<br>"+"(Between Captain's Landing & St Marco Boutique)";
        upDatedSpaLINK = "https://forms.gle/PVLf5eCmvnyUHL1i6";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/RNDibJBb8mMaDftN7";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/gentle-touch-beauty-new-promo-page" ;
        upDatedSpaPhone = "(941) 280-0407";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "30 minute Cleansing";
        upDatedDurationTwo = "30 minute LED Experience and Consultation";
        promoPrice = "99.95"
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (941) 244-0044";
        treatmentSelected = "LED Treatment";
        newSpaPhoneNumberSelected = "(941) 244-0044";
        insteadOfSpa = "$350";
        break;

        case "Gentle Touch Beauty Natural Facelift $69.95":
        upDatedSpaName = "Gentle Touch Beauty";
        upDatedSpaAddress = "Historic Downtown Venice FL Shops,"+"<br>"+"241 W Venice Ave, Venice, FL 34285"+"<br>"+"(Between Captain's Landing & St Marco Boutique)";
        upDatedSpaLINK = "https://forms.gle/PVLf5eCmvnyUHL1i6";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/RNDibJBb8mMaDftN7";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/gentle-touch-beauty-natural-facelift-treatment-69-95" ;
        upDatedSpaPhone = "(941) 280-0407";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "15 minute Cleansing";
        upDatedDurationTwo = "45 minute Natural Facelift Treatment";
        promoPrice = "69.95"
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (941) 244-0044";
        treatmentSelected = "Natural Facelift Treatment";
        newSpaPhoneNumberSelected = "(941) 244-0044";
        insteadOfSpa = "$377";
        break;

        case "Gentle Touch Beauty Natural Facelift $89.95":
        upDatedSpaName = "Gentle Touch Beauty";
        upDatedSpaAddress = "Historic Downtown Venice FL Shops,"+"<br>"+"241 W Venice Ave, Venice, FL 34285"+"<br>"+"(Between Captain's Landing & St Marco Boutique)";
        upDatedSpaLINK = "https://forms.gle/PVLf5eCmvnyUHL1i6";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/RNDibJBb8mMaDftN7";
        upDatedSpaWebLINK = "https://gentletouch.noneedleneeded.com/natural-facelift-89-95-form" ;
        upDatedSpaPhone = "(941) 280-0407";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "15 minute Cleansing";
        upDatedDurationTwo = "45 minute Natural Facelift Treatment";
        promoPrice = "89.95"
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (941) 244-0044";
        treatmentSelected = "Natural Facelift Treatment";
        newSpaPhoneNumberSelected = "(941) 244-0044";
        insteadOfSpa = "$377";
        break;

        case "Gentle Touch Beauty Natural Facelift $99.95":
        upDatedSpaName = "Gentle Touch Beauty";
        upDatedSpaAddress = "Historic Downtown Venice FL Shops,"+"<br>"+"241 W Venice Ave, Venice, FL 34285"+"<br>"+"(Between Captain's Landing & St Marco Boutique)";
        upDatedSpaLINK = "https://forms.gle/PVLf5eCmvnyUHL1i6";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/RNDibJBb8mMaDftN7";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/gentle-touch-beauty-natural-facelift-treatment-99-95" ;
        upDatedSpaPhone = "(941) 280-0407";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "15 minute Cleansing";
        upDatedDurationTwo = "45 minute Natural Facelift Treatment";
        promoPrice = "99.95"
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (941) 244-0044";
        treatmentSelected = "Natural Facelift Treatment";
        newSpaPhoneNumberSelected = "(941) 244-0044";
        insteadOfSpa = "$377";
        break;

        case "Gentle Touch Beauty Natural Skin Tightening $59.95":
        upDatedSpaName = "Gentle Touch Beauty";
        upDatedSpaAddress = "Historic Downtown Venice FL Shops,"+"<br>"+"241 W Venice Ave, Venice, FL 34285"+"<br>"+"(Between Captain's Landing & St Marco Boutique)";
        upDatedSpaLINK = "https://forms.gle/PVLf5eCmvnyUHL1i6";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/RNDibJBb8mMaDftN7";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/gentle-touch-beauty-natural-skin-tightening-59-95" ;
        upDatedSpaPhone = "(941) 280-0407";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "15 minute Cleansing";
        upDatedDurationTwo = "45 minute Natural Skin Tightening Treatment";
        promoPrice = "59.95"
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (941) 244-0044";
        treatmentSelected = "Natural Skin Tightening Treatment";
        newSpaPhoneNumberSelected = "(941) 244-0044";
        insteadOfSpa = "$377";
        break;

        case "Gentle Touch Beauty Neck and Jawline Treatment $79.95":
        upDatedSpaName = "Gentle Touch Beauty";
        upDatedSpaAddress = "Historic Downtown Venice FL Shops,"+"<br>"+"241 W Venice Ave, Venice, FL 34285"+"<br>"+"(Between Captain's Landing & St Marco Boutique)";
        upDatedSpaLINK = "https://forms.gle/PVLf5eCmvnyUHL1i6";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/RNDibJBb8mMaDftN7";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/gentle-touch-beauty-neck-amp-jawline-treatment-79-95" ;
        upDatedSpaPhone = "(941) 280-0407";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "15 minute Cleansing";
        upDatedDurationTwo = "45 minute Neck and Jawline Treatment";
        promoPrice = "79.95"
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (941) 244-0044";
        treatmentSelected = "Neck and Jawline Treatment";
        newSpaPhoneNumberSelected = "(941) 244-0044";
        insteadOfSpa = "$377";
        break;

        case "Gentle Touch Beauty Triple Lift $89.95":
        upDatedSpaName = "Gentle Touch Beauty";
        upDatedSpaAddress = "Historic Downtown Venice FL Shops,"+"<br>"+"241 W Venice Ave, Venice, FL 34285"+"<br>"+"(Between Captain's Landing & St Marco Boutique)";
        upDatedSpaLINK = "https://forms.gle/PVLf5eCmvnyUHL1i6";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/RNDibJBb8mMaDftN7";
        upDatedSpaWebLINK = "https://gentletouch.noneedleneeded.com/triple-lift-booking" ;
        upDatedSpaPhone = "(941) 280-0407";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "15 minute Cleansing";
        upDatedDurationTwo = "45 minute Triple Lift Treatment";
        promoPrice = "89.95"
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (941) 244-0044";
        treatmentSelected = "Triple Lift Treatment";
        newSpaPhoneNumberSelected = "(941) 244-0044";
        insteadOfSpa = "$377";
        break;

        case "Gentle Touch Beauty Turkey Neck Rescue Treatment $59.95":
        upDatedSpaName = "Gentle Touch Beauty";
        upDatedSpaAddress = "Historic Downtown Venice FL Shops,"+"<br>"+"241 W Venice Ave, Venice, FL 34285"+"<br>"+"(Between Captain's Landing & St Marco Boutique)";
        upDatedSpaLINK = "https://forms.gle/PVLf5eCmvnyUHL1i6";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/RNDibJBb8mMaDftN7";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/gentle-touch-beauty-turkey-neck-rescue-59-95" ;
        upDatedSpaPhone = "(941) 280-0407";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "15 minute Cleansing";
        upDatedDurationTwo = "45 minute Turkey Neck Rescue Treatment";
        promoPrice = "59.95"
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (941) 244-0044";
        treatmentSelected = "Turkey Neck Rescue Treatment";
        newSpaPhoneNumberSelected = "(941) 244-0044";
        insteadOfSpa = "$377";
        break;

        case "Gentle Touch Beauty Turkey Neck Rescue Treatment $69.95":
        upDatedSpaName = "Gentle Touch Beauty";
        upDatedSpaAddress = "Historic Downtown Venice FL Shops,"+"<br>"+"241 W Venice Ave, Venice, FL 34285"+"<br>"+"(Between Captain's Landing & St Marco Boutique)";
        upDatedSpaLINK = "https://forms.gle/PVLf5eCmvnyUHL1i6";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/RNDibJBb8mMaDftN7";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/gentle-touch-beauty-turkey-neck-rescue-69-95" ;
        upDatedSpaPhone = "(941) 280-0407";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "15 minute Cleansing";
        upDatedDurationTwo = "45 minute Turkey Neck Rescue Treatment";
        promoPrice = "69.95"
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (941) 244-0044";
        treatmentSelected = "Turkey Neck Rescue Treatment";
        newSpaPhoneNumberSelected = "(941) 244-0044";
        insteadOfSpa = "$377";
        break;

        case "Gentle Touch Beauty Turkey Neck Rescue Treatment $79.95":
        upDatedSpaName = "Gentle Touch Beauty";
        upDatedSpaAddress = "Historic Downtown Venice FL Shops,"+"<br>"+"241 W Venice Ave, Venice, FL 34285"+"<br>"+"(Between Captain's Landing & St Marco Boutique)";
        upDatedSpaLINK = "https://forms.gle/PVLf5eCmvnyUHL1i6";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/RNDibJBb8mMaDftN7";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/gentle-touch-beauty-turkey-neck-rescue-79-95" ;
        upDatedSpaPhone = "(941) 280-0407";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "15 minute Cleansing";
        upDatedDurationTwo = "45 minute Turkey Neck Rescue Treatment";
        promoPrice = "79.95"
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (941) 244-0044";
        treatmentSelected = "Turkey Neck Rescue Treatment";
        newSpaPhoneNumberSelected = "(941) 244-0044";
        insteadOfSpa = "$377";
        break;

        case "Gentle Touch Beauty Turkey Neck Rescue Treatment $99.95":
        upDatedSpaName = "Gentle Touch Beauty";
        upDatedSpaAddress = "Historic Downtown Venice FL Shops,"+"<br>"+"241 W Venice Ave, Venice, FL 34285"+"<br>"+"(Between Captain's Landing & St Marco Boutique)";
        upDatedSpaLINK = "https://forms.gle/PVLf5eCmvnyUHL1i6";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/RNDibJBb8mMaDftN7";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/gentle-touch-beauty-turkey-neck-rescue-99-95" ;
        upDatedSpaPhone = "(941) 280-0407";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "15 minute Cleansing";
        upDatedDurationTwo = "45 minute Turkey Neck Rescue Treatment";
        promoPrice = "99.95"
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (941) 244-0044";
        treatmentSelected = "Turkey Neck Rescue Treatment";
        newSpaPhoneNumberSelected = "(941) 244-0044";
        insteadOfSpa = "$377";
        break;

        case "Glameria Natural Facelift $79.95":
        upDatedSpaName = "Glameria";
        upDatedSpaAddress = "Market Mall, 3625 Shaganappi Trail NW, Calgary, AB T3A 0E2"+"<br>"+"(Main Floor between Pandora and Nespresso. The best Entrance is the East Entrance)";
        upDatedSpaLINK = "https://forms.gle/iFJBnUqSxK1xVUMo6";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/yJ66ucuhSm5UUZYj9";
        upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/glameria-natural-facelift-promo";
        upDatedSpaPhone = "(587) 200-7971";
        upDatedDurationTotal = "45 Minutes";
        upDatedDurationOne = "- 15 minutes Consultation and Cleansing";
        upDatedDurationTwo = "- 30 minutes Natural Facelift Treatment";
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (587) 800-1699";
        treatmentSelected = "Natural Facelift Treatment";
        newSpaPhoneNumberSelected = "(587) 800-1699";
        insteadOfSpa = "$377"
        break;

        case "Glameria Triple Lift $79.95":
        upDatedSpaName = "Glameria";
        upDatedSpaAddress = "Market Mall, 3625 Shaganappi Trail NW, Calgary, AB T3A 0E2"+"<br>"+"(Main Floor between Pandora and Nespresso. The best Entrance is the East Entrance)";
        upDatedSpaLINK = "https://forms.gle/iFJBnUqSxK1xVUMo6";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/yJ66ucuhSm5UUZYj9";
        upDatedSpaWebLINK = "https://glameria.firstouchbeauty.com/triple-lift-booking";
        upDatedSpaPhone = "(587) 200-7971";
        upDatedDurationTotal = "45 Minutes";
        upDatedDurationOne = "- 15 minutes Consultation and Cleansing";
        upDatedDurationTwo = "- 30 minutes Triple Lift Treatment";
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (587) 800-1699";
        treatmentSelected = "Triple Lift Treatment";
        newSpaPhoneNumberSelected = "(587) 800-1699";
        insteadOfSpa = "$377"
        break;

        case "Glamour Spa Turkey Neck Tightening 79.95":
        upDatedSpaName = "Glamour Spa";
        upDatedSpaAddress = "Pheasant Lane Mall, 310 Daniel Webster Hwy, Nashua NH 03060"+"<br>"+"(Second Floor, near the elevator, next to Ann Taylor)"+"<br>"+"(Park near target)";
        upDatedSpaLINK = "https://forms.gle/LRBGgjLb759EGy9EA";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/glamour-turkey-neck-tightening-treatment-promo";
        upDatedSpaPhone = "(603) 600-8357";
        upDatedDurationTotal = "45 Minutes";
        upDatedDurationOne = "- 15 minutes Consultation";
        upDatedDurationTwo = "- 45-Turkey Neck Tightening Treatment"
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (603) 943-1805";
        treatmentSelected = "Turkey Neck Tightening Treatment";
        newSpaPhoneNumberSelected = "(603) 943-1805";
        insteadOfSpa = "$377";
        break;

        case "Gold Beauty Sacramento":
        upDatedSpaName = "Gold Beauty Spa";
        upDatedSpaAddress = "Arden Fair Mall," + "<br>" + "1689 Arden Way, Sacramento, CA 95815" + "<br>" + "(Across from Forever 21)";
        upDatedSpaLINK = "https://forms.gle/wJbvy77r3MWKKLGc6";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/goldbeauty-spa-sacramento-led-promo";
        upDatedSpaPhone = "(916) 459-4966";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 10 Minnutes Cleansing";
        upDatedDurationTwo = "- 50 Minutes LED Experience & Consultation";
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (916) 920-3388";
        treatmentSelected = "LED Treatment";
        newSpaPhoneNumberSelected = "(916) 920-3388";
        insteadOfSpa = "$350";
        break;

        case "Good Life Spa Lift and Hydrate 69.95":
        upDatedSpaName = "Good Life Spa";
        upDatedSpaAddress = "Volusia Mall,"+"<br>"+"1700 W International Speedway Blvd, Daytona Beach, FL 32114"+"<br>"+"(Across From T-Mobile)";
        upDatedSpaLINK = "https://forms.gle/UGhfQHRkfdPqvcdU7";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/U3D5qhvffFRXSVAd9";
        upDatedSpaWebLINK = "https://goodlife.firstouchbeauty.com/lift-and-hydrate-book";
        upDatedSpaPhone = "(386) 319-1236";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15-minutes of light cleansing";
        upDatedDurationTwo = "- 30 minutes of the Lift and Hydrate and 15 minutes Consultation"
        promoPrice = "69.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (386) 888-0765";
        treatmentSelected = "Lift and Hydrate Treatment";
        newSpaPhoneNumberSelected = "(386) 888-0765";
        insteadOfSpa = "$377";
        break;

        case "Good Life Spa Natural Facelift 69.95":
        upDatedSpaName = "Good Life Spa";
        upDatedSpaAddress = "Volusia Mall,"+"<br>"+"1700 W International Speedway Blvd, Daytona Beach, FL 32114"+"<br>"+"(Across From T-Mobile)";
        upDatedSpaLINK = "https://forms.gle/UGhfQHRkfdPqvcdU7";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/U3D5qhvffFRXSVAd9";
        upDatedSpaWebLINK = "https://goodlife.firstouchbeauty.com/natural-facelift-69-95-book-page";
        upDatedSpaPhone = "(386) 319-1236";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15-minutes of light cleansing";
        upDatedDurationTwo = "- 30 minutes of the Natural Facelift and 15 minutes Consultation"
        promoPrice = "69.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (386) 888-0765";
        treatmentSelected = "Natural Facelift Treatment";
        newSpaPhoneNumberSelected = "(386) 888-0765";
        insteadOfSpa = "$377";
        break;

        case "Good Life Spa Neck and Jawline 69.95":
        upDatedSpaName = "Good Life Spa";
        upDatedSpaAddress = "Volusia Mall,"+"<br>"+"1700 W International Speedway Blvd, Daytona Beach, FL 32114"+"<br>"+"(Across From T-Mobile)";
        upDatedSpaLINK = "https://forms.gle/UGhfQHRkfdPqvcdU7";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/U3D5qhvffFRXSVAd9";
        upDatedSpaWebLINK = "https://goodlife.firstouchbeauty.com/booking-neck-and-jawline-69-95-ltb";
        upDatedSpaPhone = "(386) 319-1236";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15-minutes of light cleansing";
        upDatedDurationTwo = "- 45 minutes of the Neck and Jawline Treatment and Consultation"
        promoPrice = "69.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (386) 888-0765";
        treatmentSelected = "Neck and Jawline Treatment";
        newSpaPhoneNumberSelected = "(386) 888-0765";
        insteadOfSpa = "$377";
        break;

        case "GreenBiotics Barton Creek Men's LED":
        upDatedSpaName = "GreenBiotics";
        upDatedSpaAddress = "Barton Creek Square,"+"<br>"+"2901 S Capital of Texas Hwy. Austin, TX 78746"+"<br>"+"(In front of Sephora)";
        upDatedSpaLINK = "https://forms.gle/i5TUHvLgMZa7nuVJ7";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/greenbiotics-barton-creek-mens-led-promo-page";
        upDatedSpaPhone = "(512) 354-2417";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15-minutes of Cleansing";
        upDatedDurationTwo = "- 45-minutes Men's LED Anti-Aging Treatment & Consultation"
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (614) 592-9909";
        treatmentSelected = "LED Treatment";
        newSpaPhoneNumberSelected = "(614) 592-9909";
        insteadOfSpa = "$300";
        break;

        case "GreenBiotics Pentagon Neck and Jawline":
        upDatedSpaName = "GreenBiotics";
        upDatedSpaAddress = "Pentagon Mall,"+"<br>"+"1100 S Hayes St. Arlington, VA 22202"+"<br>"+"(In front of the Apple Store, Between Armani & Pandora)";
        upDatedSpaLINK = "https://forms.gle/FAS5vjGwbH7hWuJq5";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/D3yReWf2D6XabvhXA";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/greenbiotics-pentagon-neck-and-jaw-line-tightening-treatment-promo";
        upDatedSpaPhone = "(571) 695-2525";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15-minutes of Consultation";
        upDatedDurationTwo = "- 45-minutes Neck and Jawline Treatment"
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (571) 695-2525";
        treatmentSelected = "Neck and Jawline Tightening Treatment";
        newSpaPhoneNumberSelected = "(571) 695-2525";
        insteadOfSpa = "$377";
        break;

        case "GreenBiotics Ross Park Mall Natural Facelift $79.95":
        upDatedSpaName = "GreenBiotics";
        upDatedSpaAddress = "Ross Park Mall,"+"<br>"+"1000 Ross Park Mall Dr. Pittsburgh PA 15237"+"<br>"+"(Unit K14, Second floor near Macy’s, right across Auntie Anne's)";
        upDatedSpaLINK = " ";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/PA56BDhD9Kogmfk77";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/greenbiotics-ross-park-mall-natural-facelift-treatment";
        upDatedSpaPhone = "(412) 212-3520";
        upDatedDurationTotal = "45 Minutes";
        upDatedDurationOne = "- 15 minutes light cleansing";
        upDatedDurationTwo = "- 30 minutes Natural Facelift Treatment and Post Care and Consultation"
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (661) 516-0618";
        treatmentSelected = "Natural Facelift Treatment";
        newSpaPhoneNumberSelected = "(661) 516-0618";
        insteadOfSpa = "$377";
        break;

        case "GreenBiotics Sherway Gardens":
        upDatedSpaName = "GreenBiotics";
        upDatedSpaAddress = "CF Sherway Gardens,"+"<br>"+"25 The West Mall, Etobicoke, ON M9C 1B8" +"<br>"+"(First floor, next to Sephora)";
        upDatedSpaLINK = "https://forms.gle/Lu4idBaYGDGdLYwt6";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/greenbiotics-sherwaygardens-led-promo" ;
        upDatedSpaPhone = "(647) 259-6810";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 20 Minutes Light Cleaning";
        upDatedDurationTwo = "- 40 Minutes LED Experience & Consultation";
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (647) 370-8733";
        treatmentSelected = "LED Treatment";
        newSpaPhoneNumberSelected = "(647) 370-8733";
        insteadOfSpa = "$350"
        break;

        case "GreenBiotics Woodfield Turkey Neck Tightening $69.95":
        upDatedSpaName = "GreenBiotics";
        upDatedSpaAddress = "Woodfield Mall,"+"<br>"+"5 Woodfield Mall Room F328 Schaumburg, IL 60173"+"<br>"+"(Park near the Cheesecake Factory Entrance/Parking lot, Spa is in front of Akira)";
        upDatedSpaLINK = "https://forms.gle/vMMqiYYrMBjwzimp6";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/EhwsKvD8TFwiYvUT7";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/greenbiotics-woodfield-turkey-neck-tightening-treatment-promo";
        upDatedSpaPhone = "(847) 792-1710";
        upDatedDurationTotal = "45 Minutes";
        upDatedDurationOne = "- 10 minutes cleansing";
        upDatedDurationTwo = "- 20 minutes Turkey Neck Tightening Treatment and 15 minutes Consultation";
        promoPrice = "69.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (614) 592-9909";
        treatmentSelected = "Turkey Neck Tightening Treatment";
        newSpaPhoneNumberSelected = "(614) 592-9909";
        insteadOfSpa = "$377";
        break;

        case "Hempire Spa Natural Facelift $79.95":
        upDatedSpaName = "Hempire Spa";
        upDatedSpaAddress = "8888 SW 136th St. Miami, FL 33176"+"<br>"+"(The Falls Shopping Center, Near 'Brooks Brothers' between 'One Piece At A Time' and 'Madison Reed Hair Salon')";
        upDatedSpaLINK = "https://forms.gle/859EEwg6pKw98fp99";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/iDDT9THFmCx6T5Tg9";
        upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/hempire-naturalfacelift-79";
        upDatedSpaPhone = "(786) 310-1273";
        upDatedDurationTotal = "45 Minutes";
        upDatedDurationOne = "- 30 minutes Natural Facelift Treatment";
        upDatedDurationTwo = "- 15 minutes Consultation";
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (443) 969-5704";
        treatmentSelected = "Natural Facelift Treatment";
        newSpaPhoneNumberSelected = "(443) 969-5704";
        insteadOfSpa = "$377"
        break;

        case "Her Hair Story Natural Facelift $79.95":
        upDatedSpaName = "Her Hair Story";
        upDatedSpaAddress = "5422 Factory Shops Blvd, Ellenton, FL 34222 USA"+"<br>"+"(Ellenton Premium Outlets Main Entrance after bath and body in front of Starbucks)";
        upDatedSpaLINK = "https://forms.gle/8ZHpHABsTNEYKcRt5";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/PnTqPnFWEdkAaR4v9";
        upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/her-hair-story-natural-facelift-promo-79-95";
        upDatedSpaPhone = "(941) 280-5852";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 minutes Cleansing and 30 minutes of Natural Facelift Treatment";
        upDatedDurationTwo = "- 15 minutes Consultation";
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (941) 723-2402";
        treatmentSelected = "Natural Facelift Treatment";
        newSpaPhoneNumberSelected = "(941) 723-2402";
        insteadOfSpa = "$377"
        break;

        case "Hermetise Fayetteville":
        upDatedSpaName = "Hermetise Spa";
        upDatedSpaAddress = "Cross Creek Mall, 419 cross creek mall, Fayetteville, NC 28303" + "<br>" + "(1st floor, in the center of the mall next to Zales)";
        upDatedSpaLINK = "https://forms.gle/shfBVwkqTzsskWTH7";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/hermetise-fayetteville-led-promo";
        upDatedSpaPhone = "(984) 263-2191";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 60 Minutes LED Experience & Consultation";
        upDatedDurationTwo = " ";
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (910) 867-4100";
        treatmentSelected = "LED Treatment";
        newSpaPhoneNumberSelected = "(910) 867-4100";
        insteadOfSpa = "$350";
        break;

        case "Hermetise Fayetteville Natural Facelift $79.95":
        upDatedSpaName = "Hermetise Spa";
        upDatedSpaAddress = "Cross Creek Mall, 419 Cross Creek Mall, Fayetteville, NC 28303" + "<br>" + "(Center of the Mall , Across Aldo, Next to Zales)";
        upDatedSpaLINK = "https://forms.gle/shfBVwkqTzsskWTH7";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/5YarDpsVL7XxrrNL9";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/hermetise-fayetteville-natural-facelift-promo";
        upDatedSpaPhone = "(910) 635-0707";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 minutes Cleansing and 30 minutes Natural Facelift Treatment";
        upDatedDurationTwo = "- 15 minutes Consultation";
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (910) 867-4100";
        treatmentSelected = "Natural Facelift Treatment";
        newSpaPhoneNumberSelected = "(910) 867-4100";
        insteadOfSpa = "$377";
        break;

        case "Hydrasphere LED 79.95":
        upDatedSpaName = "Hydrasphere";
        upDatedSpaAddress = "Orland Square,"+"<br>"+"228 Orland Square Dr, Orland Park, IL 60462"+"<br>"+"(In front of the Apple Store)"+"<br>"+"(Park next to the Apple Store)";
        upDatedSpaLINK = "https://forms.gle/TxYr4b33gUcrgy7E9";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/hydrasphere-skin-tightening";
        upDatedSpaPhone = "(708) 323-2488";
        upDatedDurationTotal = "45 Minutes";
        upDatedDurationOne = "- 15 minutes light cleansing";
        upDatedDurationTwo = "- 15 minutes LED Anti-Aging Treatment and 15 minutes Consultation"
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (971) 716-2510";
        treatmentSelected = "LED Treatment";
        newSpaPhoneNumberSelected = "(971) 716-2510";
        insteadOfSpa = "$299";
        break;

        case "Hydrasphere Natural Facelift 99.95":
        upDatedSpaName = "Hydrasphere";
        upDatedSpaAddress = "Orland Square,"+"<br>"+"228 Orland Square Dr, Orland Park, IL 60462"+"<br>"+"(In front of the Apple Store)"+"<br>"+"(Park next to the Apple Store)";
        upDatedSpaLINK = "https://forms.gle/TxYr4b33gUcrgy7E9";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/hydrasphere-natural-facelift-treatment-99-95";
        upDatedSpaPhone = "(708) 323-2488";
        upDatedDurationTotal = "45 Minutes";
        upDatedDurationOne = "- 15 minutes light cleansing and facial massage";
        upDatedDurationTwo = "- 15 minutes Natural Facelift Treatment and 15 minutes Consultation"
        promoPrice = "99.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (971) 716-2510";
        treatmentSelected = "Natural Facelift Treatment";
        newSpaPhoneNumberSelected = "(971) 716-2510";
        insteadOfSpa = "$377";
        break;

        case "Hydrasphere Non-Surgical Facelift 79.95":
        upDatedSpaName = "Hydrasphere";
        upDatedSpaAddress = "Orland Square,"+"<br>"+"228 Orland Square Dr, Orland Park, IL 60462"+"<br>"+"(In front of the Apple Store)"+"<br>"+"(Park next to the Apple Store)";
        upDatedSpaLINK = "https://forms.gle/TxYr4b33gUcrgy7E9";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/hydrasphere-non-surgical-facelift-79-95";
        upDatedSpaPhone = "(708) 323-2488";
        upDatedDurationTotal = "45 Minutes";
        upDatedDurationOne = "- 15 minutes light cleansing";
        upDatedDurationTwo = "- 15 minutes Non-Surgical Facelift and 15 minutes Consultation"
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (971) 716-2510";
        treatmentSelected = "Non-Surgical Facelift Treatment";
        newSpaPhoneNumberSelected = "(971) 716-2510";
        insteadOfSpa = "$377";
        break;

        case "Hydrasphere Skin Tightening 99.95":
        upDatedSpaName = "Hydrasphere";
        upDatedSpaAddress = "Orland Square,"+"<br>"+"228 Orland Square Dr, Orland Park, IL 60462"+"<br>"+"(In front of the Apple Store)"+"<br>"+"(Park next to the Apple Store)";
        upDatedSpaLINK = "https://forms.gle/TxYr4b33gUcrgy7E9";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/hydrasphere-skin-tightening-99-95";
        upDatedSpaPhone = "(708) 323-2488";
        upDatedDurationTotal = "45 Minutes";
        upDatedDurationOne = "- 15 minutes light cleansing";
        upDatedDurationTwo = "- 15 minutes LED Anti-Aging Treatment and 15 minutes Consultation"
        promoPrice = "99.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (971) 716-2510";
        treatmentSelected = "Skin Tightening Treatment";
        newSpaPhoneNumberSelected = "(971) 716-2510";
        insteadOfSpa = "$299";
        break;

        case "Hydrasphere Toledo Natural Facelift 69.95":
        upDatedSpaName = "Hydrasphere";
        upDatedSpaAddress = "Franklin Park Mall,"+"<br>"+"5001 Monroe St, Toledo, OH 43623"+"<br>"+"(first floor, across Victoria's secret)";
        upDatedSpaLINK = "https://forms.gle/pAgjcKAJJEuSLJgKA";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/oxUFHyAa7n2cUa9m6";
        upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/hydrasphere-toledo-natural-facelift-69-95";
        upDatedSpaPhone = "(567) 698-8074";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15-minute Cleansing";
        upDatedDurationTwo = "- 30-minutes Natural Facelift Treatment and 15 minutes Consultation"
        promoPrice = "69.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (971) 380-9085";
        treatmentSelected = "Natural Facelift Treatment";
        newSpaPhoneNumberSelected = "(971) 380-9085";
        insteadOfSpa = "$377";
        break;

        case "Hydrasphere Toledo Natural Facelift 69.95":
        upDatedSpaName = "Hydrasphere Cosmetics";
        upDatedSpaAddress = "Franklin Park Mall, 5001 Monroe St, Toledo, OH 43623"+"<br>"+"(First floor, across Victoria's secret)";
        upDatedSpaLINK = "https://forms.gle/o2S43wbLekVFC81x9";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/EHegyvy6BTWwqdBDA";
        upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/hydrasphere-toledo-natural-facelift-69-95";
        upDatedSpaPhone = "(567) 666-4053";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 minutes light cleansing";
        upDatedDurationTwo = "- 30 minutes Natural Facelift and 15 minutes Consultation"
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (971) 380-9085";
        treatmentSelected = "Natural Facelift Treatment";
        newSpaPhoneNumberSelected = "(971) 380-9085";
        insteadOfSpa = "$377";
        break;

        case "Hydrasphere Toledo Natural Facelift 79.95":
        upDatedSpaName = "Hydrasphere";
        upDatedSpaAddress = "Franklin Park Mall,"+"<br>"+"5001 Monroe St, Toledo, OH 43623"+"<br>"+"(first floor, across Victoria's secret)";
        upDatedSpaLINK = "https://forms.gle/pAgjcKAJJEuSLJgKA";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/oxUFHyAa7n2cUa9m6";
        upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/hydrasphere-toledo-natural-facelift-79-95";
        upDatedSpaPhone = "(567) 698-8074";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15-minute Cleansing";
        upDatedDurationTwo = "- 30-minutes Natural Facelift Treatment and 15 minutes Consultation"
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (971) 380-9085";
        treatmentSelected = "Natural Facelift Treatment";
        newSpaPhoneNumberSelected = "(971) 380-9085";
        insteadOfSpa = "$377";
        break;

        case "ICE 21":
        upDatedSpaName = "ICE 21 Spa";
        upDatedSpaAddress = "563 Lakeshore Rd E Mississauga ON L5G 0A8"+"<br>"+"(Unit 4 Next to Denture Clinic)";
        upDatedSpaLINK = "https://forms.gle/L5JT9kcHLZXWke417";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/ice-21-spa-led-promo";
        upDatedSpaPhone = "(647) 255-6989";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 20 minutes Cleansing and Collagen Mask";
        upDatedDurationTwo = "- 40 minutes LED Anti-aging treatment & Consultation";
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at 1-888-4242321";
        treatmentSelected = "LED Treatment";
        newSpaPhoneNumberSelected = "1-888-4242321";
        insteadOfSpa = "$350";
        break;

        case "Infinity Pompano Beach":
        upDatedSpaName = "Infinity Pompano Beach";
        upDatedSpaAddress = "Festival Marketplace,"+"<br>"+"2900  W Sample Rd, Pompano Beach, FL 33073"+"<br>"+"(Enter through the main entrance, food court turn left, and it's the fourth store on the right, near Flash)";
        upDatedSpaLINK = "https://forms.gle/q7cKRPakisyJWXRk8";
        upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/infinity-spa-pompano-beach-led-promo";
        upDatedSpaPhone = "(786) 206-8296";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 10 minutes Cleansing";
        upDatedDurationTwo = "- 30 minutes LED Anti-aging treatment"+"<br>"+"20 minute Consultation";
        promoPrice = "59.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (786) 348-6250";
        treatmentSelected = "LED Treatment";
        newSpaPhoneNumberSelected = "(954) 247-5328";
        insteadOfSpa = "$350";
        break;

        case "Infinity Spa Non-Surgical Collagen Treatment":
        upDatedSpaName = "Infinity Pompano Beach";
        upDatedSpaAddress = "Festival Marketplace,"+"<br>"+"2900  W Sample Rd, Pompano Beach, FL 33073"+"<br>"+"(Enter through the main entrance, food court turn left, and it's the fourth store on the right, near Flash)";
        upDatedSpaLINK = "https://forms.gle/q7cKRPakisyJWXRk8";
        upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/infinity-spa-non-surgical-collagen-treatment";
        upDatedSpaPhone = "(786) 206-8296";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 10 minutes Cleansing";
        upDatedDurationTwo = "- 30 minutes Non-Surgical Collagen Treatment"+"<br>"+"20 minute Consultation";
        promoPrice = "49.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (786) 348-6250";
        treatmentSelected = "LED Treatment";
        newSpaPhoneNumberSelected = "(954) 247-5328";
        insteadOfSpa = "$299";
        break;

        case "INGLOT Charlotte":
        upDatedSpaName = "INGLOT Spa";
        upDatedSpaAddress = "SouthPark Mall," + "<br>" + "4400 Sharon rd. Charlotte, NC 28211"+"<br>"+"(Cheesecake Factory entrance, Between Pandora & Rolex)";
        upDatedSpaLINK = "https://forms.gle/XKED2xx9G3cF8SP87";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/inglot-charlotte-spa-led-promo";
        upDatedSpaPhone = "(980) 306-4655";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 20 minutes Cleansing";
        upDatedDurationTwo = "- 40 minutes LED Anti-aging treatment & Consultation";
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (443) 449-4761";
        treatmentSelected = "LED Treatment";
        newSpaPhoneNumberSelected = "(443) 449-4761";
        insteadOfSpa = "$350";
        break;

        case "Introstem Alderwood LED 99.95":
        upDatedSpaName = "Introstem Spa";
        upDatedSpaAddress = "Alderwood Mall,"+"<br>"+"3000 184th St SW, Lynnwood, WA. 98037"+"<br>"+"(Space #976, OUTSIDE Section between Purple and Lovesac, right outside the entrance of Sephora)"+"<br>"+"(Nearest Landmark Apple store or Sephora)"+"<br>"+"NOTE: You may also use mall directions";
        upDatedSpaLINK = "https://forms.gle/Xd7zenHToR2ga51c7";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/new-introstem-alderwood-promo-page";
        upDatedSpaPhone = "(425) 546-0417";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15-minute Cleansing";
        upDatedDurationTwo = "- 30-minutes LED Anti-aging Treatment and 15-minutes Consultation"
        promoPrice = "99.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (509) 986-3222";
        treatmentSelected = "LED Treatment";
        newSpaPhoneNumberSelected = "(509) 986-3222";
        insteadOfSpa = "$299";
        break;

        case "Introstem Carlsbad Skin Tightening Treatment $59.95":
        upDatedSpaName = "Introstem Spa";
        upDatedSpaAddress = "The Shoppes at Carlsbad,"+"<br>"+"2525 El Camino real Carlsbad, CA. 92008"+"<br>"+"(Second floor, front of Macy's Women)";
        upDatedSpaLINK = "https://forms.gle/WuKSMaAcUSzaoATW8";
        upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/introstem-carlsbad-skin-tightening-59-95";
        upDatedSpaPhone = "(760) 621-0800";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15-minute Cleansing";
        upDatedDurationTwo = "- 30-minutes Skin Tightening Treatment and 15 minutes Consultation"
        promoPrice = "59.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (760) 421-4454";
        treatmentSelected = "Skin Tightening Treatment";
        newSpaPhoneNumberSelected = "(760) 421-4454";
        insteadOfSpa = "$299";
        break;

        case "Introstem Chicago Ridge LED":
        upDatedSpaName = "Introstem";
        upDatedSpaAddress = "Chicago Ridge Mall"+"<br>"+"444 Chicago Ridge Mall Drive, Chicago Ridge, IL. 60415"+"<br>"+"(Unit C-13, First Floor near Bath & Body Works)";
        upDatedSpaLINK = "https://forms.gle/wRbUHTgEqHGzxZ6P9";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/introstem-chicago-promo-page";
        upDatedSpaPhone = "(708) 773-0218";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15-minute Cleansing";
        upDatedDurationTwo = "- 45-minutes LED Anti-aging Treatment and Consultation"
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (614) 592-9909";
        treatmentSelected = "LED Treatment";
        newSpaPhoneNumberSelected = "(614) 592-9909";
        insteadOfSpa = "$350";
        break;

        case "Introstem Santa Rosa Skin Tightening $99.95":
        upDatedSpaName = "Introstem";
        upDatedSpaAddress = "1071 Santa Rosa Plaza, Santa Rosa, CA 95401"+"<br>"+"(First floor, in front of Lids, Space Number 1011)";
        upDatedSpaLINK = "https://forms.gle/wcLEBrB6K1hpduNB6";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/aws7jSaiqWcz4bbp6";
        upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/introstem-santa-rosa-skin-tightening-treatment";
        upDatedSpaPhone = "(707) 387-4443";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 minutes Cleansing";
        upDatedDurationTwo = "- 30 minutes Skin Tightening Treatment and 15 minutes Consultation";
        promoPrice = "99.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (707) 889-1472";
        treatmentSelected = "Skin Tightening Treatment";
        newSpaPhoneNumberSelected = "(707) 889-1472";
        insteadOfSpa = "$377"
        break;

        case "Introstem Tyler Natural Facelift $79.95":
        upDatedSpaName = "Introstem";
        upDatedSpaAddress = "Broad Way Square,"+"<br>"+"4601 S Broadway Ave. Tyler, TX 75703"+"<br>"+"(Unit C12, In front of Victoria's Secret)";
        upDatedSpaLINK = "https://forms.gle/REouLcpGxFGhpsQC9";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/9E3SqVv3fZeoiDaH9";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/introstem-tyler-natural-facelift-treatment-79-95";
        upDatedSpaPhone = "(430) 562-9946";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 10-minute Cleansing";
        upDatedDurationTwo = "- 35-minutes Natural Facelift Treatment and 15-minutes Consultation"
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (928) 399-9243";
        treatmentSelected = "Natural Facelift Treatment";
        newSpaPhoneNumberSelected = "(928) 399-9243";
        insteadOfSpa = "$377";
        break;

        case "Iridescent Wellness and Medical Spa Sagging Neck Recue $99.95":
        upDatedSpaName = "Iridescent Wellness and Medical Spa";
        upDatedSpaAddress = "River Oaks Suites,"+"<br>"+"42855 Garfield Rd. Clinton Twp, MI 48038"+"<br>"+"(STE 105, Located near 19 Mile/Garfield. Right off of Garfield Rd in River Oaks Office Complex)";
        upDatedSpaLINK = "https://forms.gle/c66G44jKBffGC9Q69";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/UVRaZSvzY1UwPXAL7";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/iridescent-med-spa-sagging-neck-rescue-treatment-promo";
        upDatedSpaPhone = "(586) 248-4419";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15-minute Consultation";
        upDatedDurationTwo = "- 45-minutes Sagging Neck Recue Treatment"
        promoPrice = "99.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (586)690-8693";
        treatmentSelected = "Sagging Neck Recue Treatment";
        newSpaPhoneNumberSelected = "(586)690-8693";
        insteadOfSpa = "$377";
        break;

        case "ISHA Collagen Enhancing":
        upDatedSpaName = "ISHA Beauty & Wellness";
        upDatedSpaAddress = "31 Almeria Ave, Coral Gables, FL 33134"+"<br>"+"(Douglas & Almeria Ave, Next to Bellami hair salon)";
        upDatedSpaLINK = "https://forms.gle/anBN3G7GuuKCydG1A";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/isha-beauty-amp-wellness-collagen-enhancing-promo-page";
        upDatedSpaPhone = "(786) 744-5319";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 20-minute Cleansing";
        upDatedDurationTwo = "- 25-minutes Collagen Enhancing Treatment and 15-minutes Consultation"
        promoPrice = "69.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at 305-603-7536";
        treatmentSelected = "Collagen Enhancing Treatment";
        newSpaPhoneNumberSelected = "305-603-7536";
        insteadOfSpa = "$299";
        break;

        case "Jevoute Spa":
        upDatedSpaName = "Jevoute Spa";
        upDatedSpaAddress = "Emporium Melbourne,"+"<br>"+"Shop 18, 287 Lonsdale St, Melbourne VIC 3000"+"<br>"+"(Level 1, next to Replay)";
        upDatedSpaLINK = "https://forms.gle/Zc6Henp3wU25Lxaz6";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/jevoute-spa-promo-page";
        upDatedSpaPhone = "(04) 85 857 060";
        upDatedDurationTotal = "45 Minutes";
        upDatedDurationOne = "- 10 Minutes Cleansing";
        upDatedDurationTwo = "- 35 Minutes of LED Anti-Aging Treatment and Consultation"
        promoPrice = "129.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at +61481768980";
        treatmentSelected = "LED Treatment";
        newSpaPhoneNumberSelected = "0481768980";
        insteadOfSpa = "$350";
        break;

        case "Joli Visage DTB Neck and Jawline 69.95":
        upDatedSpaName = "Joli Visage";
        upDatedSpaAddress = "640 5th ave S, Naples, FL 34102"+"<br>"+"(Next to Aldo Gallery)";
        upDatedSpaLINK = "https://forms.gle/shiD2ANFHFpmizjp6";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/qbJwip72KuATDVwG7";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/joli-visage-neck-and-jawline-69-95-dtb-2";
        upDatedSpaPhone = "(239) 438-3252";
        upDatedDurationTotal = "45 Minutes";
        upDatedDurationOne = "- 10-minute Cleansing";
        upDatedDurationTwo = "- 20 minutes Neck and Jawline with 15 minutes Consultation"
        promoPrice = "69.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (239) 234-6855";
        treatmentSelected = "Neck and Jawline Treatment";
        newSpaPhoneNumberSelected = "(239) 234-6855";
        insteadOfSpa = "$377";
        break;

        case "Joli Visage Triple Lift 69.95":
        upDatedSpaName = "Joli Visage";
        upDatedSpaAddress = "640 5th ave S, Naples, FL 34102"+"<br>"+"(Next to Aldo Gallery)";
        upDatedSpaLINK = "https://forms.gle/shiD2ANFHFpmizjp6";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/qbJwip72KuATDVwG7";
        upDatedSpaWebLINK = "https://jolivisage.noneedleneeded.com/triple-lift-booking";
        upDatedSpaPhone = "(239) 438-3252";
        upDatedDurationTotal = "45 Minutes";
        upDatedDurationOne = "- 10-minute Cleansing";
        upDatedDurationTwo = "- 20 minutes Triple Lift with 15 minutes Consultation"
        promoPrice = "69.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (239) 234-6855";
        treatmentSelected = "Triple Lift";
        newSpaPhoneNumberSelected = "(239) 234-6855";
        insteadOfSpa = "$377";
        break;

        case "Joli Visage Natural Facelift 69.95":
        upDatedSpaName = "Joli Visage";
        upDatedSpaAddress = "640 5th ave S, Naples, FL 34102"+"<br>"+"(Next to Aldo Gallery)";
        upDatedSpaLINK = "https://forms.gle/shiD2ANFHFpmizjp6";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/qbJwip72KuATDVwG7";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/joli-visage-natural-facelift-69-95";
        upDatedSpaPhone = "(239) 438-3252";
        upDatedDurationTotal = "45 Minutes";
        upDatedDurationOne = "- 10-minute Cleansing";
        upDatedDurationTwo = "- 20 minutes Natural Facelift with 15 minutes Consultation"
        promoPrice = "69.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (239) 234-6855";
        treatmentSelected = "Natural Facelift";
        newSpaPhoneNumberSelected = "(239) 234-6855";
        insteadOfSpa = "$377";
        break;

        case "Joli Visage Natural Skin Tightening 69.95":
        upDatedSpaName = "Joli Visage Spa";
        upDatedSpaAddress = "640 5th ave S, Naples, FL 34102"+"<br>"+"(Next to Aldo Gallery)";
        upDatedSpaLINK = "https://forms.gle/shiD2ANFHFpmizjp6";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/qbJwip72KuATDVwG7";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/joli-visage-natural-skin-tightening-promo";
        upDatedSpaPhone = "(239) 799-4212";
        upDatedDurationTotal = "45 Minutes";
        upDatedDurationOne = "- 10-minute Cleansing";
        upDatedDurationTwo = "- 35 minutes Natural Skin Tightening with Consultation"
        promoPrice = "69.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (239) 234-6855";
        treatmentSelected = "Natural Skin Tightening";
        newSpaPhoneNumberSelected = "(239) 234-6855";
        insteadOfSpa = "$377";
        break;

        case "Joli Visage Spa LED":
        upDatedSpaName = "Joli Visage Spa";
        upDatedSpaAddress = "640 5th ave S, Naples, FL 34102"+"<br>"+"(Next to Aldo Gallery)";
        upDatedSpaLINK = "https://forms.gle/shiD2ANFHFpmizjp6";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/qbJwip72KuATDVwG7";
        upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/joli-visage-spa-led-promo";
        upDatedSpaPhone = "(239) 963-4469";
        upDatedDurationTotal = "45 Minutes";
        upDatedDurationOne = "- 10-minute Cleansing";
        upDatedDurationTwo = "- 35 minutes LED session with Consultation"
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (239) 234-6855";
        treatmentSelected = "LED Treatment";
        newSpaPhoneNumberSelected = "(239) 234-6855";
        insteadOfSpa = "$350";
        break;

        case "Joli Visage Spa LED 69.95":
        upDatedSpaName = "Joli Visage Spa";
        upDatedSpaAddress = "640 5th ave S, Naples, FL 34102"+"<br>"+"(Next to Aldo Gallery)";
        upDatedSpaLINK = "https://forms.gle/shiD2ANFHFpmizjp6";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/qbJwip72KuATDVwG7";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/joli-visage-spa-new-promo-page";
        upDatedSpaPhone = "(239) 963-4469";
        upDatedDurationTotal = "45 Minutes";
        upDatedDurationOne = "- 10-minute Cleansing";
        upDatedDurationTwo = "- 35 minutes LED session with Consultation"
        promoPrice = "69.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (239) 234-6855";
        treatmentSelected = "LED Treatment";
        newSpaPhoneNumberSelected = "(239) 234-6855";
        insteadOfSpa = "$299";
        break;

        case "Kristals Barrie":
        upDatedSpaName = "Kristals Barrie Spa";
        upDatedSpaAddress = "Georgian Mall,"+"<br>"+"500 Bayfield St, Barrie, ON L4M 4Z8" +"<br>"+"(Main entrance lower level, next to Victoria's Secret)";
        upDatedSpaLINK = "https://forms.gle/WyFD3HQApwUDL7hH6";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/k3qKy7ULKwgBkFA37";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/kristals-barrie-spa-led-promo-page" ;
        upDatedSpaPhone = "(705) 413-3910";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 20 Minutes Light Cleaning";
        upDatedDurationTwo = "- 40 Minutes LED Light Experience & Consultation";
        promoPrice = "79.95"
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (647) 787-7105";
        treatmentSelected = "LED Treatment";
        newSpaPhoneNumberSelected = "(647) 787-7105";
        insteadOfSpa = "$350"
        break;

        case "Kristals Barrie Bye Bye Saggy Eyes $69.95":
        upDatedSpaName = "Kristals Barrie Spa";
        upDatedSpaAddress = "Georgian Mall,"+"<br>"+"500 Bayfield St, Barrie, ON L4M 4Z8" +"<br>"+"(Main entrance lower level, next to Victoria's Secret)";
        upDatedSpaLINK = "https://forms.gle/WyFD3HQApwUDL7hH6";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/k3qKy7ULKwgBkFA37";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/kristals-barrie-bye-bye-saggy-eyes-69-95" ;
        upDatedSpaPhone = "(705) 413-3910";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 45-minute Cleansing and the Bye Bye Saggy Eyes treatment";
        upDatedDurationTwo = "- 15-minute Consultation";
        promoPrice = "69.95"
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (647) 787-7105";
        treatmentSelected = "Bye Bye Saggy Eyes Treatment";
        newSpaPhoneNumberSelected = "(647) 787-7105";
        insteadOfSpa = "$299"
        break;

        case "Kristals Barrie Men Skin Tightening $89.95":
        upDatedSpaName = "Kristals Barrie Spa";
        upDatedSpaAddress = "Georgian Mall,"+"<br>"+"500 Bayfield St, Barrie, ON L4M 4Z8" +"<br>"+"(Main entrance lower level, next to Victoria's Secret)";
        upDatedSpaLINK = "https://forms.gle/WyFD3HQApwUDL7hH6";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/k3qKy7ULKwgBkFA37";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/kristals-barrie-mens-skin-tightening-promo-89-95" ;
        upDatedSpaPhone = "(705) 413-3910";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 20 Minutes Light Cleaning";
        upDatedDurationTwo = "- 40 Minutes Skin Tightening Treatment & Consultation";
        promoPrice = "89.95"
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (647) 787-7105";
        treatmentSelected = "Skin Tightening Treatment";
        newSpaPhoneNumberSelected = "(647) 787-7105";
        insteadOfSpa = "$299"
        break;

        case "Kristals Barrie Natural Facelift 79.95":
        upDatedSpaName = "Kristals Barrie Spa";
        upDatedSpaAddress = "Georgian Mall,"+"<br>"+"500 Bayfield St, Barrie, ON L4M 4Z8" +"<br>"+"(Main entrance lower level, next to Victoria's Secret)";
        upDatedSpaLINK = "https://forms.gle/WyFD3HQApwUDL7hH6";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/k3qKy7ULKwgBkFA37";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/barrie-natural-face-lift-promo-79-95" ;
        upDatedSpaPhone = "(705) 413-3910";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 20 Minutes Light Cleaning";
        upDatedDurationTwo = "- 40 Minutes Natural Facelift Treatment & Consultation";
        promoPrice = "79.95"
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (647) 787-7105";
        treatmentSelected = "Natural Facelift Treatment";
        newSpaPhoneNumberSelected = "(647) 787-7105";
        insteadOfSpa = "$377"
        break;

        case "Kristals Barrie Neck and Jawline 69.95":
        upDatedSpaName = "Kristals Barrie Spa";
        upDatedSpaAddress = "Georgian Mall,"+"<br>"+"500 Bayfield St, Barrie, ON L4M 4Z8" +"<br>"+"(Main entrance lower level, next to Victoria's Secret)";
        upDatedSpaLINK = "https://forms.gle/WyFD3HQApwUDL7hH6";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/k3qKy7ULKwgBkFA37";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/kristals-barrie-neck-and-jaw-line-tightening-treatment-promo" ;
        upDatedSpaPhone = "(705) 413-3910";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 Minutes Light Cleaning";
        upDatedDurationTwo = "- 45 Minutes Neck and Jawline Treatment & Consultation";
        promoPrice = "69.95"
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (647) 787-7105";
        treatmentSelected = "Neck and Jawline Tightening Treatment";
        newSpaPhoneNumberSelected = "(647) 787-7105";
        insteadOfSpa = "$377"
        break;

        case "Kristals Barrie Non-Surgical Facelift":
        upDatedSpaName = "Kristals Barrie Spa";
        upDatedSpaAddress = "Georgian Mall,"+"<br>"+"500 Bayfield St, Barrie, ON L4M 4Z8" +"<br>"+"(Main entrance lower level, next to Victoria's Secret)";
        upDatedSpaLINK = "https://forms.gle/WyFD3HQApwUDL7hH6";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/k3qKy7ULKwgBkFA37";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/kristals-barrie-non-surgical-facelift" ;
        upDatedSpaPhone = "(705) 413-3910";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 45-minute Cleansing and the Non-Surgical Face Lift treatment";
        upDatedDurationTwo = "- 15-minute Consultation";
        promoPrice = "79.95"
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (647) 787-7105";
        treatmentSelected = "Non-Surgical Facelift Treatment";
        newSpaPhoneNumberSelected = "(647) 787-7105";
        insteadOfSpa = "$350"
        break;

        case "Kristals Barrie Skin Tightening 69.95":
        upDatedSpaName = "Kristals Barrie Spa";
        upDatedSpaAddress = "Georgian Mall,"+"<br>"+"500 Bayfield St, Barrie, ON L4M 4Z8" +"<br>"+"(Main entrance lower level, next to Victoria's Secret)";
        upDatedSpaLINK = "https://forms.gle/WyFD3HQApwUDL7hH6";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/k3qKy7ULKwgBkFA37";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/kristals-barrie-skin-tightening-promo-page" ;
        upDatedSpaPhone = "(705) 413-3910";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 Minutes Light Cleaning";
        upDatedDurationTwo = "- 45 Minutes Skin Tightening Treatment & Consultation";
        promoPrice = "69.95"
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (647) 787-7105";
        treatmentSelected = "Skin Tightening Treatment";
        newSpaPhoneNumberSelected = "(647) 787-7105";
        insteadOfSpa = "$299"
        break;

        case "Kristals Burlington Hyperpigmentation Treatment $79.95":
        upDatedSpaName = "Kristals Burlington Spa";
        upDatedSpaAddress = "Burlington Mall,"+"<br>"+"777 Guelph Line, Burlington,ON L7R 3N2" + "<br>"+"(Please enter through entrance #3 and look for PETSMART & 'Marks')"+"<br>"+"(When you're in the mall, just pass Marks, and the spa will be on the left-hand side.)";
        upDatedSpaLINK = "https://forms.gle/JQoAioVQEG9gZH197";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/5BWid7i6vP9tFWx2A";
        upDatedSpaWebLINK = "https://kristals-burlington.noneedleneeded.com/hyperpigmentation-79-95-book";
        upDatedSpaPhone = "(647) 749-7406";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 Minutes Light Cleansing";
        upDatedDurationTwo = "- 45 Minutes Hyperpigmentation Treatment and Consultation";
        promoPrice = "79.95"
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (647) 277-5122";
        treatmentSelected = "Hyperpigmentation Treatment";
        newSpaPhoneNumberSelected = "(647) 277-5122";
        insteadOfSpa = "$377"
        break;

        case "Kristals Burlington Triple Lift $79.95":
        upDatedSpaName = "Kristals Burlington Spa";
        upDatedSpaAddress = "Burlington Mall,"+"<br>"+"777 Guelph Line, Burlington,ON L7R 3N2" + "<br>"+"(Please enter through entrance #3 and look for PETSMART & 'Marks')"+"<br>"+"(When you're in the mall, just pass Marks, and the spa will be on the left-hand side.)";
        upDatedSpaLINK = "https://forms.gle/JQoAioVQEG9gZH197";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/5BWid7i6vP9tFWx2A";
        upDatedSpaWebLINK = "https://kristals-burlington.noneedleneeded.com/triple-lift-booking";
        upDatedSpaPhone = "(647) 749-7406";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 Minutes Light Cleansing";
        upDatedDurationTwo = "- 45 Minutes Triple Lift and Consultation";
        promoPrice = "79.95"
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (647) 277-5122";
        treatmentSelected = "Triple Lift Treatment";
        newSpaPhoneNumberSelected = "(647) 277-5122";
        insteadOfSpa = "$377"
        break;

        case "Kristals Burlington Natural Facelift $79.95":
        upDatedSpaName = "Kristals Burlington Spa";
        upDatedSpaAddress = "Burlington Mall,"+"<br>"+"777 Guelph Line, Burlington,ON L7R 3N2" + "<br>"+"(Please enter through entrance #3 and look for PETSMART & 'Marks')"+"<br>"+"(When you're in the mall, just pass Marks, and the spa will be on the left-hand side.)";
        upDatedSpaLINK = "https://forms.gle/JQoAioVQEG9gZH197";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/5BWid7i6vP9tFWx2A";
        upDatedSpaWebLINK = "https://kristals-burlington.noneedleneeded.com/natural-facelift-79-95-book-page";
        upDatedSpaPhone = "(647) 749-7406";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 Minutes Light Cleansing";
        upDatedDurationTwo = "- 45 Minutes Natural Facelift Treatment and Consultation";
        promoPrice = "79.95"
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (647) 277-5122";
        treatmentSelected = "Natural Facelift Treatment";
        newSpaPhoneNumberSelected = "(647) 277-5122";
        insteadOfSpa = "$377"
        break;

        case "Kristals Burlington Neck and Jawline $79.95":
        upDatedSpaName = "Kristals Burlington Spa";
        upDatedSpaAddress = "Burlington Mall,"+"<br>"+"777 Guelph Line, Burlington,ON L7R 3N2" + "<br>"+"(Please enter through entrance #3 and look for PETSMART & 'Marks')"+"<br>"+"(When you're in the mall, just pass Marks, and the spa will be on the left-hand side.)";
        upDatedSpaLINK = "https://forms.gle/JQoAioVQEG9gZH197";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/5BWid7i6vP9tFWx2A";
        upDatedSpaWebLINK = "https://kristals-burlington.noneedleneeded.com/neck-and-jawline-79-95-book-page" ;
        upDatedSpaPhone = "(647) 749-7406";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 Minutes Light Cleansing";
        upDatedDurationTwo = "- 45 Minutes Neck & Jawline Treatment and Consultation";
        promoPrice = "79.95"
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (647) 277-5122";
        treatmentSelected = "Neck and Jawline Tightening Treatment";
        newSpaPhoneNumberSelected = "(647) 277-5122";
        insteadOfSpa = "$377"
        break;

        case "Kristals Burlington Turkey Neck Tightening $79.95":
        upDatedSpaName = "Kristals Burlington Spa";
        upDatedSpaAddress = "Burlington Mall,"+"<br>"+"777 Guelph Line, Burlington,ON L7R 3N2" + "<br>"+"(Please enter through entrance #3 and look for PETSMART & 'Marks')"+"<br>"+"(When you're in the mall, just pass Marks, and the spa will be on the left-hand side.)";
        upDatedSpaLINK = "https://forms.gle/JQoAioVQEG9gZH197";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/5BWid7i6vP9tFWx2A";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/kristals-burlington-turkey-neck-tightening-treatment-promo" ;
        upDatedSpaPhone = "(647) 749-7406 ";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 Minutes Consultation";
        upDatedDurationTwo = "- 45 Minutes Turkey Neck Tightening Treatment and Consultation";
        promoPrice = "79.95"
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (647) 277-5122";
        treatmentSelected = "Turkey Neck Tightening Treatment";
        newSpaPhoneNumberSelected = "(647) 277-5122";
        insteadOfSpa = "$377"
        break;

        case "Kristals Erin Mills AquaPure":
        upDatedSpaName = "Kristals Erin Mills spa";
        upDatedSpaAddress = "Erin Mills Centre,"+"<br>"+"5100 Erin Mills Pkwy, Mississauga, ON L5M 4Z5" +"<br>"+"(1st floor, between Erin Mills Photo & Bluenotes)";
        upDatedSpaLINK = "https://forms.gle/WYLHZFb4fk3s3J4e9";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/1PfEpQdQRpzTr8g18";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/kristals-erin-mills-anti-aging-aquapure-experience-promo-page" ;
        upDatedSpaPhone = "(647) 846-9838";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 60 Minutes AquaPure Experience & Consultation";
        upDatedDurationTwo = " ";
        promoPrice = "99.95"
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (647) 277-5122";
        treatmentSelected = "AquaPure Treatment";
        newSpaPhoneNumberSelected = "(647) 277-5122";
        insteadOfSpa = "$350"
        break;

        case "Kristals Erin Mills LED":
        upDatedSpaName = "Kristals Erin Mills spa";
        upDatedSpaAddress = "Erin Mills Centre,"+"<br>"+"5100 Erin Mills Pkwy, Mississauga, ON L5M 4Z5" +"<br>"+"(Get in through Entrance A (near 'Turtle Jack restaurant'), Once you arrive to the center’s intersection make a “U-turn” to the LEFT side (left side aisle)";
        upDatedSpaLINK = "https://forms.gle/WYLHZFb4fk3s3J4e9";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/1PfEpQdQRpzTr8g18";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/kristals-erinmills-spa-led-promo-page" ;
        upDatedSpaPhone = "(647) 846-9838";
        upDatedDurationTotal = "50 Minutes";
        upDatedDurationOne = "- 10 Minutes Light Cleansing";
        upDatedDurationTwo = "- 40 Minutes LED Light Experience & Consultation";
        promoPrice = "79.95"
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (647) 277-5122";
        treatmentSelected = "LED Treatment";
        newSpaPhoneNumberSelected = "(647) 277-5122";
        insteadOfSpa = "$350"
        break;

        case "Kristals Erin Mills Men Skin Tightening $89.95":
        upDatedSpaName = "Kristals Erin Mills spa";
        upDatedSpaAddress = "Erin Mills Centre,"+"<br>"+"5100 Erin Mills Pkwy, Mississauga, ON L5M 4Z5" +"<br>"+"(Get in through Entrance A (near 'Turtle Jack restaurant'), Once you arrive to the center’s intersection make a “U-turn” to the LEFT side (left side aisle)";
        upDatedSpaLINK = "https://forms.gle/WYLHZFb4fk3s3J4e9";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/1PfEpQdQRpzTr8g18";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/kristals-erin-mills-mens-skin-tightening-promo-89-95" ;
        upDatedSpaPhone = "(647) 846-9838";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 Minutes Consultation";
        upDatedDurationTwo = "- 45 Minutes Skin Tightening Treatment and Consultation";
        promoPrice = "89.95"
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (647) 277-5122";
        treatmentSelected = "Men's Skin Tightening Treatment";
        newSpaPhoneNumberSelected = "(647) 277-5122";
        insteadOfSpa = "$399"
        break;

        case "Kristals Erin Mills Men Skin Tightening $89.95-399":
        upDatedSpaName = "Kristals Erin Mills spa";
        upDatedSpaAddress = "Erin Mills Centre,"+"<br>"+"5100 Erin Mills Pkwy, Mississauga, ON L5M 4Z5" +"<br>"+"(Get in through Entrance A (near 'Turtle Jack restaurant'), Once you arrive to the center’s intersection make a “U-turn” to the LEFT side (left side aisle)";
        upDatedSpaLINK = "https://forms.gle/WYLHZFb4fk3s3J4e9";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/1PfEpQdQRpzTr8g18";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/kristals-erin-mills-mens-skin-tightening-promo-89-95-399" ;
        upDatedSpaPhone = "(647) 846-9838";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 Minutes Consultation";
        upDatedDurationTwo = "- 45 Minutes Skin Tightening Treatment and Consultation";
        promoPrice = "89.95"
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (647) 277-5122";
        treatmentSelected = "Men's Skin Tightening Treatment";
        newSpaPhoneNumberSelected = "(647) 277-5122";
        insteadOfSpa = "$399"
        break;

        case "Kristals Erin Mills Natural Facelift $69.95":
        upDatedSpaName = "Kristals Erin Mills spa";
        upDatedSpaAddress = "Erin Mills Centre,"+"<br>"+"5100 Erin Mills Pkwy, Mississauga, ON L5M 4Z5" +"<br>"+"(Get in through Entrance A (near 'Turtle Jack restaurant'), Once you arrive to the center’s intersection make a “U-turn” to the LEFT side (left side aisle)";
        upDatedSpaLINK = "https://forms.gle/WYLHZFb4fk3s3J4e9";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/1PfEpQdQRpzTr8g18";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/kristals-erin-mills-natural-facelift-69-95" ;
        upDatedSpaPhone = "(647) 846-9838";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 Minutes Consultation";
        upDatedDurationTwo = "- 45 Minutes Natural Facelift Treatment and Consultation";
        promoPrice = "69.95"
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (647) 277-5122";
        treatmentSelected = "Natural Facelift Treatment";
        newSpaPhoneNumberSelected = "(647) 277-5122";
        insteadOfSpa = "$377"
        break;

        case "Kristals Erin Mills Natural Facelift $79.95":
        upDatedSpaName = "Kristals Erin Mills spa";
        upDatedSpaAddress = "Erin Mills Centre,"+"<br>"+"5100 Erin Mills Pkwy, Mississauga, ON L5M 4Z5" +"<br>"+"(Get in through Entrance A (near 'Turtle Jack restaurant'), Once you arrive to the center’s intersection make a “U-turn” to the LEFT side (left side aisle)";
        upDatedSpaLINK = "https://forms.gle/WYLHZFb4fk3s3J4e9";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/1PfEpQdQRpzTr8g18";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/kristals-erin-mills-natural-facelift-page-79-95" ;
        upDatedSpaPhone = "(647) 846-9838";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 Minutes Consultation";
        upDatedDurationTwo = "- 45 Minutes Natural Facelift Treatment and Consultation";
        promoPrice = "79.95"
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (647) 277-5122";
        treatmentSelected = "Natural Facelift Treatment";
        newSpaPhoneNumberSelected = "(647) 277-5122";
        insteadOfSpa = "$377"
        break;

        case "Kristals Erin Mills Natural Facelift $79.95-399":
        upDatedSpaName = "Kristals Erin Mills spa";
        upDatedSpaAddress = "Erin Mills Centre,"+"<br>"+"5100 Erin Mills Pkwy, Mississauga, ON L5M 4Z5" +"<br>"+"(Get in through Entrance A (near 'Turtle Jack restaurant'), Once you arrive to the center’s intersection make a “U-turn” to the LEFT side (left side aisle)";
        upDatedSpaLINK = "https://forms.gle/WYLHZFb4fk3s3J4e9";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/1PfEpQdQRpzTr8g18";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/kristals-erin-mills-natural-facelift-page-79-95-399" ;
        upDatedSpaPhone = "(647) 846-9838";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 Minutes Consultation";
        upDatedDurationTwo = "- 45 Minutes Natural Facelift Treatment and Consultation";
        promoPrice = "79.95"
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (647) 277-5122";
        treatmentSelected = "Natural Facelift Treatment";
        newSpaPhoneNumberSelected = "(647) 277-5122";
        insteadOfSpa = "$399"
        break;

        case "Kristals Erin Mills Natural Facelift $99.95":
        upDatedSpaName = "Kristals Erin Mills spa";
        upDatedSpaAddress = "Erin Mills Centre,"+"<br>"+"5100 Erin Mills Pkwy, Mississauga, ON L5M 4Z5" +"<br>"+"(Get in through Entrance A (near 'Turtle Jack restaurant'), Once you arrive to the center’s intersection make a “U-turn” to the LEFT side (left side aisle)";
        upDatedSpaLINK = "https://forms.gle/WYLHZFb4fk3s3J4e9";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/1PfEpQdQRpzTr8g18";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/kristals-erin-mills-natural-facelift-page-99-95-399" ;
        upDatedSpaPhone = "(647) 846-9838";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 Minutes Consultation";
        upDatedDurationTwo = "- 45 Minutes Natural Facelift Treatment and Consultation";
        promoPrice = "99.95"
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (647) 277-5122";
        treatmentSelected = "Natural Facelift Treatment";
        newSpaPhoneNumberSelected = "(647) 277-5122";
        insteadOfSpa = "$399"
        break;

        case "Kristals Erin Mills Neck and Jawline":
        upDatedSpaName = "Kristals Erin Mills spa";
        upDatedSpaAddress = "Erin Mills Centre,"+"<br>"+"5100 Erin Mills Pkwy, Mississauga, ON L5M 4Z5" +"<br>"+"(Get in through Entrance A (near 'Turtle Jack restaurant'), Once you arrive to the center’s intersection make a “U-turn” to the LEFT side (left side aisle)";
        upDatedSpaLINK = "https://forms.gle/WYLHZFb4fk3s3J4e9";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/1PfEpQdQRpzTr8g18";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/kristals-erin-mills-neck-and-jaw-line-tightening-treatment-promo" ;
        upDatedSpaPhone = "(647) 846-9838";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 Minutes Consultation";
        upDatedDurationTwo = "- 45 Minutes Neck & Jawline Treatment and Consultation";
        promoPrice = "79.95"
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (647) 277-5122";
        treatmentSelected = "Neck and Jawline Tightening Treatment";
        newSpaPhoneNumberSelected = "(647) 277-5122";
        insteadOfSpa = "$377"
        break;

        case "Kristals Erin Mills Turkey Neck Tightening $79.95":
        upDatedSpaName = "Kristals Erin Mills spa";
        upDatedSpaAddress = "Erin Mills Centre,"+"<br>"+"5100 Erin Mills Pkwy, Mississauga, ON L5M 4Z5" +"<br>"+"(Get in through Entrance A (near 'Turtle Jack restaurant'), Once you arrive to the center’s intersection make a “U-turn” to the LEFT side (left side aisle)";
        upDatedSpaLINK = "https://forms.gle/WYLHZFb4fk3s3J4e9";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/1PfEpQdQRpzTr8g18";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/kristals-erin-mills-turkey-neck-tightening-treatment-promo" ;
        upDatedSpaPhone = "(647) 846-9838";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 Minutes Consultation";
        upDatedDurationTwo = "- 45 Minutes Turkey Neck Tightening Treatment and Consultation";
        promoPrice = "79.95"
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (647) 277-5122";
        treatmentSelected = "Turkey Neck Tightening Treatment";
        newSpaPhoneNumberSelected = "(647) 277-5122";
        insteadOfSpa = "$377"
        break;

        case "La Reve Skin Tightening 69.95":
        upDatedSpaName = "La Reve";
        upDatedSpaAddress = "Woodfield Mall,"+"<br>"+"5 Woodfield Mall Room F328 Schaumburg, IL 60173"+"<br>"+"(Second Floor, Near Sephora)"+"<br>"+"(Park near main entrance)";
        upDatedSpaLINK = "https://forms.gle/koSZjR9n17v9PQqV8";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/lareve-led-69-95-promo";
        upDatedSpaPhone = "(847) 779-6577";
        upDatedDurationTotal = "45 Minutes";
        upDatedDurationOne = "- 10 minutes light cleansing";
        upDatedDurationTwo = "- 20 minutes Skin Tightening Treatment and 15 minutes Consultation"
        promoPrice = "69.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (848) 219-0593";
        treatmentSelected = "Skin Tightening Treatment";
        newSpaPhoneNumberSelected = "(848) 219-0593";
        insteadOfSpa = "$377";
        break;

        case "Laconico Spa Neck and Jawline 69.95":
        upDatedSpaName = "Laconico";
        upDatedSpaAddress = "15805 Biscayne Blvd. North Miami Beach, FL 33160"+"<br>"+"(First Floor, Unit 102 of 15805 Building)";
        upDatedSpaLINK = "https://forms.gle/wEj6wz45i8V4fr898";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/laconico-neck-and-jaw-line-tightening-treatment-promo";
        upDatedSpaPhone = "(786) 522-2327";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 minutes cleansing";
        upDatedDurationTwo = "- 45-minute Neck and Jawline Treatment and Consultation"
        promoPrice = "69.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (747) 333-1979";
        treatmentSelected = "Neck and Jawline Tightening Treatment";
        newSpaPhoneNumberSelected = "(747) 333-1979";
        insteadOfSpa = "$377";
        break;

        case "Latoua Mille Natural Facelift $79.95":
        upDatedSpaName = "Latoua Mille";
        upDatedSpaAddress = "117 S Main Street, Galena, IL 61036"+"<br>"+"(Galena Main Street downtown, across from champagne on main, next to the bakery)";
        upDatedSpaLINK = "https://forms.gle/3KEFCiT1GJHu6HrU7";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/HbQW8S9Lw68eHr1Z9";
        upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/latoua-mille-natural-facelift-79-95";
        upDatedSpaPhone = "(815) 649-1719";
        upDatedDurationTotal = "45 Minutes";
        upDatedDurationOne = " - 15 minutes Cleansing";
        upDatedDurationTwo = " - 30 minutes Skin Tightening Treatment & Consultation";
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (561) 317-9878";
        treatmentSelected = "Natural Facelift";
        newSpaPhoneNumberSelected = "(561) 317-9878";
        insteadOfSpa = "$377"
        break;

        case "Lavan Med Spa Turkey Neck Rescue 59.95":
        upDatedSpaName = "Lavan Med Spa";
        upDatedSpaAddress = "3301 N. Miller Rd. Scottsdale AZ 85251"+"<br>"+"(STE 115, Inside the Medical Building)"+"<br>"+"(Free parking in front of the building)";
        upDatedSpaLINK = "https://forms.gle/qmfihMGsNn9jrNyK8";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/bFE3dnaK8yzHdNcD7";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/lavan-med-spa-turkey-neck-rescue-59-95-377";
        upDatedSpaPhone = "(480) 535-1117";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- ";
        upDatedDurationTwo = "- 45 minutes Turkey Neck Rescue Treatment and 15 minutes Consultation"
        promoPrice = "59.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (480) 408-4170";
        treatmentSelected = "Turkey Neck Rescue Treatment";
        newSpaPhoneNumberSelected = "(480) 408-4170";
        insteadOfSpa = "$377";
        break;

        case "Lavelier Grand Junction Reverse Turkey Neck 79.95":
        upDatedSpaName = "Lavelier";
        upDatedSpaAddress = "Mesa Mall, 2424 US-6, Grand Junction, CO 81505"+"<br>"+"(in the aisle of Target next to Verizon)"+"<br>"+"(The entrance by Target is the closest)";
        upDatedSpaLINK = "https://forms.gle/EoTh4TZAKX8K1AP67";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/lavelier-grand-junction-reverse-turkey-neck-treatment-promo";
        upDatedSpaPhone = "(970) 398-8569";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 minutes Consultation";
        upDatedDurationTwo = "- 45 minutes Reverse Turkey Neck Treatment"
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (720) 404-3885";
        treatmentSelected = "Reverse Turkey Neck Treatment";
        newSpaPhoneNumberSelected = "(720) 404-3885";
        insteadOfSpa = "$350";
        break;

        case "Lavelier Longview Neck and Jawline":
        upDatedSpaName = "Lavelier";
        upDatedSpaAddress = "Longview Mall,"+"<br>"+"3500 McCann Rd, Longview, TX 75605"+"<br>"+"(STE F01, First floor next to JCPenney)";
        upDatedSpaLINK = "https://forms.gle/R9fcAUEfE5MJciwz5";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/NraJMdEWhV2oxN1t8";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/lavelier-longview-neck-and-jaw-line-tightening-treatment-promo";
        upDatedSpaPhone = "(430) 288-5519";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15-minute Cleansing";
        upDatedDurationTwo = "- 45-minutes Neck and Jawline and Consultation"
        promoPrice = "69.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (928) 399-9242";
        treatmentSelected = "Neck and Jawline Tightening Treatment";
        newSpaPhoneNumberSelected = "(928) 399-9242";
        insteadOfSpa = "$377";
        break;

        case "Lavelier Orange Park":
        upDatedSpaName = "Lavelier spa";
        upDatedSpaAddress = "Orange Park Mall," + "<br>" + "1910 Wells Rd, Orange Park, FL 32073"+"<br>"+"(Next to 'Helzberg Diamonds')";
        upDatedSpaLINK = "https://forms.gle/kWcQs5a8tgAPpaqe6";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/lavelier-orange-park-spa-led-promo-page" ;
        upDatedSpaPhone = "(904) 458-7896";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 30 Minutes Light Cleaning";
        upDatedDurationTwo = "- 30 Minutes LED Light Experience & Consultation";
        promoPrice = "79.95"
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (904) 592-7266";
        treatmentSelected = "LED Treatment";
        newSpaPhoneNumberSelected = "(904) 592-7266";
        insteadOfSpa = "$350"
        break;

        case "FIL Fall In Love Natural Facelift $59.95":
        upDatedSpaName = "FIL Fall In Love Spa";
        upDatedSpaAddress = "200 W Metro Dr, Suite 410, Leander, TX 78641"+"<br>"+"(If you coming from US Hwy 183 Road We are located behind the building of Whataburger and Panda Express Chinese restaurant.)";
        upDatedSpaLINK = "https://forms.gle/cpgsKXAFgNchNqLP6";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/9XjN144tWe2TAjo8A";
        upDatedSpaWebLINK = "https://lavelier-roundrock.noneedleneeded.com/natural-facelift-89-95-book-page";
        upDatedSpaPhone = "(512) 566-3975";
        upDatedDurationTotal = "45 Minutes";
        upDatedDurationOne = "- 15-minutes Cleansing";
        upDatedDurationTwo = "- 30 minutes Natural Facelift Treatment and Consultation"
        promoPrice = "59.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (512) 953-8818";
        treatmentSelected = "Natural Facelift Treatment";
        newSpaPhoneNumberSelected = "(512) 953-8818";
        insteadOfSpa = "$299";
        break;

        case "Lavelier Spokane Natural Faecelift":
        upDatedSpaName = "Lavelier";
        upDatedSpaAddress = "Spokane Valley Mall,"+"<br>"+"14700 E Indiana Ave, Spokane, WA. 99216"+"<br>"+"(Unit 1150, First Floor, next to Victoria Secret)";
        upDatedSpaLINK = "https://forms.gle/4g8M9UygaSjWZVkd9";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/AaJE2QjENvPuZ6p46";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/lavelier-spokane-natural-facelift-treatment-79-95";
        upDatedSpaPhone = "(509) 508-4214";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 10-minute Cleansing";
        upDatedDurationTwo = "- 35-minutes Natural Faecelift Treatment and 15-minutes Consultation"
        promoPrice = "79.95";
        upDatedActualSpaPhone = " ";
        treatmentSelected = "Natural Faecelift Treatment";
        newSpaPhoneNumberSelected = " ";
        insteadOfSpa = "$350";
        break;

        case "Lift and Revive Med Spa Natural Facelift $79.95":
        upDatedSpaName = "Lift and Revive Med Spa";
        upDatedSpaAddress = "Residences At La Cantera"+"<br>"+"6215 Via La Cantera San Antonio, TX 78256"+"<br>"+"(STE 0121 - Our Storefront is at the Residents At La Cantera)";
        upDatedSpaLINK = "https://forms.gle/5N6x5tGFyvQJ6TNe7";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/1FwGATeREUUWLXUJ8";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/lift-n-revive-med-spa-natural-facelift-79-95";
        upDatedSpaPhone = "(210) 740-0738";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 10 minutes light cleansing and 35 minutes of the Natural Facelift Treatment";
        upDatedDurationTwo = "- 15 minutes Post Care and Consultation"
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (210) 951-5045";
        treatmentSelected = "Natural Facelift Treatment";
        newSpaPhoneNumberSelected = "(210) 951-5045";
        insteadOfSpa = "$377";
        break;

        case "Liv Med Spa Turkey Neck Rescue $59.95":
        upDatedSpaName = "Liv Med Spa";
        upDatedSpaAddress = "16742 Champion Forest Dr. Spring TX, 77379"+"<br>"+"(Champion Forest Shopping Center, next to Marco’s Pizza)";
        upDatedSpaLINK = "https://forms.gle/efHYwBrU4fm9QC2c9";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/J7jaRoWTUmvcGJxR7";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/liv-med-spa-turkey-neck-rescue-promo-59-95";
        upDatedSpaPhone = "(281) 410-2798";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 10 minutes Cleansing";
        upDatedDurationTwo = "- 35 minutes of Turkey Neck Rescue Treatment and 15 minutes post-care and consultation";
        promoPrice = "59.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (346) 395-8095";
        treatmentSelected = "Liv Med Spa Turkey Neck Rescue $59.95";
        newSpaPhoneNumberSelected = "(346) 395-8095";
        insteadOfSpa = "$377"
        break;

        case "Lola Beauty Tanger":
        upDatedSpaName = "Lola Beauty spa";
        upDatedSpaAddress = "Tanger Outlets," + "<br>" + "4840 Tanger outlet Blvd , North Charleston SC 29418"+"<br>"+"(In front of 'The North Face')";
        upDatedSpaLINK = "https://forms.gle/5EoAxgvLh111YhVcA";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/lola-beauty-spa-tanger-led-promo-page" ;
        upDatedSpaPhone = "(843) 277-9518";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 20 Minutes Light Cleaning";
        upDatedDurationTwo = "- 40 Minutes LED Light Experience & Consultation";
        promoPrice = "79.95"
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (843) 818-4617";
        treatmentSelected = "LED Treatment";
        newSpaPhoneNumberSelected = "(843) 818-4617";
        insteadOfSpa = "$350"
        break;

        case "Lumera Skin Clinics Hair Removal $99.95":
        upDatedSpaName = "Lumera Skin Clinics";
        upDatedSpaAddress = "1216 Rue Stanley, Montréal, QC H3B 2S7"+"<br>"+"(Inside the building on the second floor)";
        upDatedSpaLINK = "https://forms.gle/u9QW8E8ExtwsFChG7";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/cD6CpCBq26UBwCvi6";
        upDatedSpaWebLINK = "https://lumera.advancedbeautytreatments.com/hair-removal-booking-page";
        upDatedSpaPhone = "(438) 230-4017";
        upDatedDurationTotal = "50 Minutes";
        upDatedDurationOne = "- 35 minutes of Hair Removal Treatment and 15 minutes Consultation";
        upDatedDurationTwo = "- 15 minutes Consultation";
        promoPrice = "299.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (514) 208‑0226";
        treatmentSelected = "Hair Removal Treatment";
        newSpaPhoneNumberSelected = "(514) 208‑0226";
        insteadOfSpa = "$499"
        break;

        case "Lumera Skin Clinics Natural Facelift $129.95":
        upDatedSpaName = "Lumera Skin Clinics";
        upDatedSpaAddress = "1216 Rue Stanley, Montréal, QC H3B 2S7"+"<br>"+"(Inside the building on the second floor)";
        upDatedSpaLINK = "https://forms.gle/u9QW8E8ExtwsFChG7";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/cD6CpCBq26UBwCvi6";
        upDatedSpaWebLINK = "https://www.advancedbeautytreatments.com/pages/lumera-skin-clinics-natural-facelift-129-95";
        upDatedSpaPhone = "(438) 230-4017";
        upDatedDurationTotal = "50 Minutes";
        upDatedDurationOne = "- 15 minutes Cleansing and 35 minutes of Natural Facelift Treatment";
        upDatedDurationTwo = "- 15 minutes Consultation";
        promoPrice = "129.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (514) 208‑0226";
        treatmentSelected = "Natural Facelift Treatment";
        newSpaPhoneNumberSelected = "(514) 208‑0226";
        insteadOfSpa = "$377"
        break;

        case "Lumera Skin Clinics Natural Facelift $99.95":
        upDatedSpaName = "Lumera Skin Clinics";
        upDatedSpaAddress = "1216 Rue Stanley, Montréal, QC H3B 2S7"+"<br>"+"(Inside the building on the second floor)";
        upDatedSpaLINK = "https://forms.gle/u9QW8E8ExtwsFChG7";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/cD6CpCBq26UBwCvi6";
        upDatedSpaWebLINK = "https://lumera.advancedbeautytreatments.com/natural-facelift-99-95-booking";
        upDatedSpaPhone = "(438) 230-4017";
        upDatedDurationTotal = "50 Minutes";
        upDatedDurationOne = "- 15 minutes Cleansing and 35 minutes of Natural Facelift Treatment";
        upDatedDurationTwo = "- 15 minutes Consultation";
        promoPrice = "99.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (514) 208‑0226";
        treatmentSelected = "Natural Facelift Treatment";
        newSpaPhoneNumberSelected = "(514) 208‑0226";
        insteadOfSpa = "$377"
        break;

        case "Lumera Skin Clinics Neck and Jawline $99.95":
        upDatedSpaName = "Lumera Skin Clinics";
        upDatedSpaAddress = "1216 Rue Stanley, Montréal, QC H3B 2S7"+"<br>"+"(Inside the building on the second floor)";
        upDatedSpaLINK = "https://forms.gle/u9QW8E8ExtwsFChG7";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/cD6CpCBq26UBwCvi6";
        upDatedSpaWebLINK = "https://lumera.advancedbeautytreatments.com/neck-and-jawline-99-95-booking";
        upDatedSpaPhone = "(438) 230-4017";
        upDatedDurationTotal = "50 Minutes";
        upDatedDurationOne = "- 15 minutes Cleansing and 35 minutes of Neck and Jawline Treatment";
        upDatedDurationTwo = "- 15 minutes Consultation";
        promoPrice = "99.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (514) 208‑0226";
        treatmentSelected = "Neck and Jawline Treatment";
        newSpaPhoneNumberSelected = "(514) 208‑0226";
        insteadOfSpa = "$377"
        break;

        case "Lumiere By Adriana Sagging Neck Rescue $69.95":
        upDatedSpaName = "Lumiere By Adriana";
        upDatedSpaAddress = "2434 E Las Olas Blvd, Fort Lauderdale, FL  33301"+"<br>"+"(Next to Chima Steakhouse)";
        upDatedSpaLINK = "https://forms.gle/VwV9xhaFEQtL8LqN8";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/lumiere-sagging-neck-rescue-treatment-promo";
        upDatedSpaPhone = "(754) 799-8010";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15-minutes of Consultation";
        upDatedDurationTwo = "- 45 minutes of Sagging Neck Rescue Treatment"
        promoPrice = "69.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (954) 777-6770";
        treatmentSelected = "Sagging Neck Rescue Treatment";
        newSpaPhoneNumberSelected = "(954) 777-6770";
        insteadOfSpa = "$399";
        break;

        case "Luminous Skin-Tech Skin Tightening 79.95":
        upDatedSpaName = "Luminous Skin-Tech Spa";
        upDatedSpaAddress = "La Palmera Mall," + "<br>" + "5488 S Padre island, Corpus Christi, TX 78411"+"<br>"+"(Second floor, next to H&M)";
        upDatedSpaLINK = "https://forms.gle/Yaa4AmATGwwPAAVW7";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/doj9iskm211iZyjT8";
        upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/luminous-skin-tech-skin-tightening-promo-79-95";
        upDatedSpaPhone = "(361) 371-0530";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 minutes Cleansing";
        upDatedDurationTwo = "- 30 minutes Non-Surgical Facelift and 15 minutes post care and consultation";
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (361) 462-4319";
        treatmentSelected = "Skin Tightening Treatment";
        newSpaPhoneNumberSelected = "(361) 462-4319";
        insteadOfSpa = "$377";
        break;

        case "Malka Med Spa Turkey Neck Rescue $79.95":
        upDatedSpaName = "Malka Med Spa";
        upDatedSpaAddress = "2601 Little Elm Parkway, Little Elm, TX, 75068"+"<br>"+"(Unit 1801, Building 18)"+"<br>"+"(Parking is available just in front of the spa)";
        upDatedSpaLINK = " ";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/Nv4x7HUjHc6g38Jq6";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/malka-med-spa-turkey-neck-rescue-promo-79-95";
        upDatedSpaPhone = "(469) 884-0553";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 45 minutes light cleansing and Turkey Neck Rescue treatment";
        upDatedDurationTwo = "- 15 minutes Consultation"
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (469) 888-6616";
        treatmentSelected = "Turkey Neck Rescue Treatment";
        newSpaPhoneNumberSelected = "(469) 888-6616";
        insteadOfSpa = "$299";
        break;

        case "Meital Studios Beauty 3 in 1 Skin Lifting $69.95":
        upDatedSpaName = "Meital Studios Beauty";
        upDatedSpaAddress = "4401 Bathurst St. North York, ON M3H3R9"+"<br>"+"(Intersection of Bathurst & Sheppard inside RBC building, 3rd floor, Unit #300 glass door)";
        upDatedSpaLINK = "https://forms.gle/Db58xPVxiEkjbtMQ6";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/2kCEmxCr2YTyvch96";
        upDatedSpaWebLINK = "https://meital-studio.firstouchbeauty.com/booking-page-3-in-1-skin-lifting-69-95";
        upDatedSpaPhone = "(437) 290-4169";
        upDatedDurationTotal = "70 Minutes";
        upDatedDurationOne = "- 15 minutes Cleansing and 45 minutes 3 in 1 Skin Lifting Treatment";
        upDatedDurationTwo = "- 10 minutes Consultation";
        promoPrice = "69.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (647) 243-4780";
        treatmentSelected = "3 in 1 Skin Lifting Treatment";
        newSpaPhoneNumberSelected = "(647) 243-4780";
        insteadOfSpa = "$377"
        break;

        case "Meital Studios Beauty 3 in 1 Skin Lifting $79.95":
        upDatedSpaName = "Meital Studios Beauty";
        upDatedSpaAddress = "4401 Bathurst St. North York, ON M3H3R9"+"<br>"+"(Intersection of Bathurst & Sheppard inside RBC building, 3rd floor, Unit #300 glass door)";
        upDatedSpaLINK = "https://forms.gle/Db58xPVxiEkjbtMQ6";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/2kCEmxCr2YTyvch96";
        upDatedSpaWebLINK = "https://meital-studio.firstouchbeauty.com/booking-page-3-in-1-skin-lifting-79-95";
        upDatedSpaPhone = "(437) 290-4169";
        upDatedDurationTotal = "70 Minutes";
        upDatedDurationOne = "- 15 minutes Cleansing and 45 minutes 3 in 1 Skin Lifting Treatment";
        upDatedDurationTwo = "- 10 minutes Consultation";
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (647) 243-4780";
        treatmentSelected = "3 in 1 Skin Lifting Treatment";
        newSpaPhoneNumberSelected = "(647) 243-4780";
        insteadOfSpa = "$377"
        break;

        case "Meital Studios Beauty Lift and Sculpt $79.95":
        upDatedSpaName = "Meital Studios Beauty";
        upDatedSpaAddress = "4401 Bathurst St. North York, ON M3H3R9"+"<br>"+"(Intersection of Bathurst & Sheppard inside RBC building, 3rd floor, Unit #300 glass door)";
        upDatedSpaLINK = "https://forms.gle/Db58xPVxiEkjbtMQ6";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/2kCEmxCr2YTyvch96";
        upDatedSpaWebLINK = "https://meital-studio.firstouchbeauty.com/booking-page-lift-and-sculpt";
        upDatedSpaPhone = "(437) 290-4169";
        upDatedDurationTotal = "70 Minutes";
        upDatedDurationOne = "- 15 minutes Cleansing and 45 minutes Lift and Sculpt Treatment";
        upDatedDurationTwo = "- 10 minutes Consultation";
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (647) 243-4780";
        treatmentSelected = "Lift and Sculpt Treatment";
        newSpaPhoneNumberSelected = "(647) 243-4780";
        insteadOfSpa = "$377"
        break;

        case "Meital Studios Beauty Hydraglow $79.95":
        upDatedSpaName = "Meital Studios Beauty";
        upDatedSpaAddress = "4401 Bathurst St. North York, ON M3H3R9"+"<br>"+"(Intersection of Bathurst & Sheppard inside RBC building, 3rd floor, Unit #300 glass door)";
        upDatedSpaLINK = "https://forms.gle/Db58xPVxiEkjbtMQ6";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/2kCEmxCr2YTyvch96";
        upDatedSpaWebLINK = "https://meital-studio.firstouchbeauty.com/hydraglow-79-95-book";
        upDatedSpaPhone = "(437) 290-4169";
        upDatedDurationTotal = "70 Minutes";
        upDatedDurationOne = "- 15 minutes Cleansing and 45 minutes Hydraglow Treatment";
        upDatedDurationTwo = "- 10 minutes Consultation";
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (647) 243-4780";
        treatmentSelected = "Hydraglow Treatment";
        newSpaPhoneNumberSelected = "(647) 243-4780";
        insteadOfSpa = "$377"
        break;

        case "Meital Studios Beauty Hyperpigmentation Treatment $79.95":
        upDatedSpaName = "Meital Studios Beauty";
        upDatedSpaAddress = "4401 Bathurst St. North York, ON M3H3R9"+"<br>"+"(Intersection of Bathurst & Sheppard inside RBC building, 3rd floor, Unit #300 glass door)";
        upDatedSpaLINK = "https://forms.gle/Db58xPVxiEkjbtMQ6";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/2kCEmxCr2YTyvch96";
        upDatedSpaWebLINK = "https://meital-studio.firstouchbeauty.com/hyperpigmentation-79-95-book";
        upDatedSpaPhone = "(437) 290-4169";
        upDatedDurationTotal = "70 Minutes";
        upDatedDurationOne = "- 15 minutes Cleansing and 45 minutes Hyperpigmentation Treatment";
        upDatedDurationTwo = "- 10 minutes Consultation";
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (647) 243-4780";
        treatmentSelected = "Hyperpigmentation Treatment";
        newSpaPhoneNumberSelected = "(647) 243-4780";
        insteadOfSpa = "$377"
        break;

        case "Meital Studios Beauty Lift and Hydrate $79.95":
        upDatedSpaName = "Meital Studios Beauty";
        upDatedSpaAddress = "4401 Bathurst St. North York, ON M3H3R9"+"<br>"+"(Intersection of Bathurst & Sheppard inside RBC building, 3rd floor, Unit #300 glass door)";
        upDatedSpaLINK = "https://forms.gle/Db58xPVxiEkjbtMQ6";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/2kCEmxCr2YTyvch96";
        upDatedSpaWebLINK = "https://meital-studio.firstouchbeauty.com/lift-and-hydrate-book";
        upDatedSpaPhone = "(437) 290-4169";
        upDatedDurationTotal = "70 Minutes";
        upDatedDurationOne = "- 15 minutes Cleansing and 45 minutes Lift and Hydrate";
        upDatedDurationTwo = "- 10 minutes Consultation";
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (647) 243-4780";
        treatmentSelected = "Lift and Hydrate";
        newSpaPhoneNumberSelected = "(647) 243-4780";
        insteadOfSpa = "$377"
        break;

        case "Meital Studios Beauty Neck and Jawline $69.95":
        upDatedSpaName = "Meital Studios Beauty";
        upDatedSpaAddress = "4401 Bathurst St. North York, ON M3H3R9"+"<br>"+"(Intersection of Bathurst & Sheppard inside RBC building, 3rd floor, Unit #300 glass door)";
        upDatedSpaLINK = "https://forms.gle/Db58xPVxiEkjbtMQ6";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/2kCEmxCr2YTyvch96";
        upDatedSpaWebLINK = "https://meital-studio.firstouchbeauty.com/neck-and-jawline-69-95-book-page";
        upDatedSpaPhone = "(437) 290-4169";
        upDatedDurationTotal = "70 Minutes";
        upDatedDurationOne = "- 15 minutes Cleansing and 45 minutes Neck and Jawline Treatment";
        upDatedDurationTwo = "- 10 minutes Consultation";
        promoPrice = "69.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (647) 243-4780";
        treatmentSelected = "Neck and Jawline Treatment";
        newSpaPhoneNumberSelected = "(647) 243-4780";
        insteadOfSpa = "$377"
        break;

        case "Meital Studios Beauty Triple Lift $79.95":
        upDatedSpaName = "Meital Studios Beauty";
        upDatedSpaAddress = "4401 Bathurst St. North York, ON M3H3R9"+"<br>"+"(Intersection of Bathurst & Sheppard inside RBC building, 3rd floor, Unit #300 glass door)";
        upDatedSpaLINK = "https://forms.gle/Db58xPVxiEkjbtMQ6";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/2kCEmxCr2YTyvch96";
        upDatedSpaWebLINK = "https://meital-studio.firstouchbeauty.com/triple-lift-booking";
        upDatedSpaPhone = "(437) 290-4169";
        upDatedDurationTotal = "70 Minutes";
        upDatedDurationOne = "- 15 minutes Cleansing and 45 minutes Triple Lift Treatment";
        upDatedDurationTwo = "- 10 minutes Consultation";
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (647) 243-4780";
        treatmentSelected = "Triple Lift Treatment";
        newSpaPhoneNumberSelected = "(647) 243-4780";
        insteadOfSpa = "$377"
        break;

        case "Miliv Med Spa Neck and Jawline $59.95":
        upDatedSpaName = "Miliv Med Spa";
        upDatedSpaAddress = "524 Waugh Dr. Houston TX 77019"+"<br>"+"(2nd Floor, Above Bayou Liquor)";
        upDatedSpaLINK = "https://forms.gle/qdqKRqaEMCmfn8md9";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/NoWqwHuFVHnmEsMW9";
        upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/miliv-med-spa-neck-amp-jawline-promo-59-95";
        upDatedSpaPhone = "(713) 347-2676";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 minutes Cleansing";
        upDatedDurationTwo = "- 30 minutes Neck & Jawline Treatment and 15 minutes post-care and consultation";
        promoPrice = "59.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (713) 585-0715";
        treatmentSelected = "Neck & Jawline Treatment";
        newSpaPhoneNumberSelected = "(713) 585-0715";
        insteadOfSpa = "$377"
        break;

        case "Minarelle DTB Natural Facelift $79.95":
        upDatedSpaName = "Minarelle";
        upDatedSpaAddress = "1100 S Hayes St. f328, Arlington, VA 22202"+"<br>"+"(Pentagon Mall, Second floor next to Pandora)";
        upDatedSpaLINK = "https://forms.gle/srUntBXNVRsXVjkGA";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/v4paSTKSuVYv1kqw5";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/minarelle-natural-facelift-79-95-dtb-2";
        upDatedSpaPhone = "(703) 570-5548";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 minutes Cleansing and 30 minutes of  Natural Facelift Treatment";
        upDatedDurationTwo = "- 15 minutes Consultation";
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (845) 907-9158";
        treatmentSelected = "Natural Facelift Treatment";
        newSpaPhoneNumberSelected = "(845) 907-9158";
        insteadOfSpa = "$377"
        break;

        case "Minarelle Skin Tightening $79.95":
        upDatedSpaName = "Minarelle";
        upDatedSpaAddress = "1100 S Hayes St. f328, Arlington, VA 22202"+"<br>"+"(Pentagon Mall, Second floor next to Pandora)";
        upDatedSpaLINK = "https://forms.gle/srUntBXNVRsXVjkGA";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/v4paSTKSuVYv1kqw5";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/minarelle-skin-tightening-treatment-79-95";
        upDatedSpaPhone = "(703) 570-5548";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 minutes Cleansing and 30 minutes of  Skin Tightening Treatment";
        upDatedDurationTwo = "- 15 minutes Consultation";
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (845) 907-9158";
        treatmentSelected = "Skin Tightening Treatment";
        newSpaPhoneNumberSelected = "(845) 907-9158";
        insteadOfSpa = "$377"
        break;

        case "Mize Med Spa and Wellness Center Men Skin Tightening $99.95":
        upDatedSpaName = "Mize Med Spa and Wellness Center";
        upDatedSpaAddress = "3728 Davie Road Davie, FL 33314"+"<br>"+"(Varsity Square, Next to Blend Beauty Lounge)";
        upDatedSpaLINK = "https://forms.gle/ozE4ecnYeJ7z5uXt6";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/T4xqTTf78tAdCzEk8?g_st=ipc"+"<br>"+"https://maps.apple.com/place?address=3728%20Davie%20Rd,%20Davie,%20FL%20%2033314,%20United%20States&coordinate=26.075670,-80.231447&name=%C3%89l%C3%A9vatione&place-id=IBD25F1CA58484CE4&map=h";
        upDatedSpaWebLINK = "https://mizemedspa.firstouchbeauty.com/men-skin-tightening-promo" ;
        upDatedSpaPhone = "(954) 694-6452";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 minutes Cleansing";
        upDatedDurationTwo = "- 30 minutes Men Skin Tightening Treatment and 15 minutes post-care and consultation";
        promoPrice = "99.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (954) 765-6091";
        treatmentSelected = "Skin Tightening Treatment";
        newSpaPhoneNumberSelected = "(954) 765-6091";
        insteadOfSpa = "$377"
        break;

        case "Mize Med Spa and Wellness Center Skin Tightening $99.95":
        upDatedSpaName = "Mize Med Spa and Wellness Center";
        upDatedSpaAddress = "3728 Davie Road Davie, FL 33314"+"<br>"+"(Varsity Square, Next to Blend Beauty Lounge)";
        upDatedSpaLINK = "https://forms.gle/ozE4ecnYeJ7z5uXt6";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/T4xqTTf78tAdCzEk8?g_st=ipc"+"<br>"+"https://maps.apple.com/place?address=3728%20Davie%20Rd,%20Davie,%20FL%20%2033314,%20United%20States&coordinate=26.075670,-80.231447&name=%C3%89l%C3%A9vatione&place-id=IBD25F1CA58484CE4&map=h";
        upDatedSpaWebLINK = "https://mizemedspa.firstouchbeauty.com/skin-tightening-form" ;
        upDatedSpaPhone = "(954) 694-6452";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 minutes Cleansing";
        upDatedDurationTwo = "- 30 minutes Skin Tightening Treatment and 15 minutes post-care and consultation";
        promoPrice = "99.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (954) 765-6091";
        treatmentSelected = "Skin Tightening Treatment";
        newSpaPhoneNumberSelected = "(954) 765-6091";
        insteadOfSpa = "$377"
        break;

        case "Moana Crystals Hydraglow Treatment $59.95":
        upDatedSpaName = "Moana Crystals";
        upDatedSpaAddress = "2250 Kalakaua Ave. Honolulu, HI 96815"+"<br>"+"(Waikiki shopping plaza, 2nd floor next to the elevator, Room 217)";
        upDatedSpaLINK = "https://forms.gle/17kGFgn6KXJcs3xY7";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/fFYEqgHUbmanrLiR6";
        upDatedSpaWebLINK = "https://moana.advancedbeautytreatments.com/hydraglow-59-95-book";
        upDatedSpaPhone = "(808) 764-3367";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 10 minutes Cleansing";
        upDatedDurationTwo = "- 40 minutes Hydraglow Treatment and 10 minutes post-care and consultation";
        promoPrice = "59.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (808) 779-8279";
        treatmentSelected = "Hydraglow Treatment";
        newSpaPhoneNumberSelected = "(808) 779-8279";
        insteadOfSpa = "$377"
        break;

        case "Moana Crystals Men Skin Tightening $79.95":
        upDatedSpaName = "Moana Crystals";
        upDatedSpaAddress = "2250 Kalakaua Ave. Honolulu, HI 96815"+"<br>"+"(Waikiki shopping plaza, 2nd floor next to the elevator, Room 217)";
        upDatedSpaLINK = "https://forms.gle/17kGFgn6KXJcs3xY7";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/fFYEqgHUbmanrLiR6";
        upDatedSpaWebLINK = "https://moana.advancedbeautytreatments.com/men-skin-tightening-79-95-booking";
        upDatedSpaPhone = "(808) 764-3367";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 10 minutes Cleansing";
        upDatedDurationTwo = "- 40 minutes Men Skin Tightening Treatment and 10 minutes post-care and consultation";
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (808) 779-8279";
        treatmentSelected = "Men Skin Tightening Treatment";
        newSpaPhoneNumberSelected = "(808) 779-8279";
        insteadOfSpa = "$377"
        break;

        case "Moana Crystals Natural Skin Tightening $59.95":
        upDatedSpaName = "Moana Crystals";
        upDatedSpaAddress = "2250 Kalakaua Ave. Honolulu, HI 96815"+"<br>"+"(Waikiki shopping plaza, 2nd floor next to the elevator, Room 217)";
        upDatedSpaLINK = "https://forms.gle/17kGFgn6KXJcs3xY7";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/fFYEqgHUbmanrLiR6";
        upDatedSpaWebLINK = "https://moana.advancedbeautytreatments.com/natural-skin-tightening-59-95-book-page";
        upDatedSpaPhone = "(808) 764-3367";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 10 minutes Cleansing";
        upDatedDurationTwo = "- 40 minutes Natural Skin Tightening Treatment and 10 minutes post-care and consultation";
        promoPrice = "59.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (808) 779-8279";
        treatmentSelected = "Natural Skin Tightening Treatment";
        newSpaPhoneNumberSelected = "(808) 779-8279";
        insteadOfSpa = "$377"
        break;

        case "Moana Crystals Lift and Sculpt $59.95":
        upDatedSpaName = "Moana Crystals";
        upDatedSpaAddress = "2250 Kalakaua Ave. Honolulu, HI 96815"+"<br>"+"(Waikiki shopping plaza, 2nd floor next to the elevator, Room 217)";
        upDatedSpaLINK = "https://forms.gle/17kGFgn6KXJcs3xY7";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/fFYEqgHUbmanrLiR6";
        upDatedSpaWebLINK = "https://moana.advancedbeautytreatments.com/lift-and-sculpt-59-95-book-page";
        upDatedSpaPhone = "(808) 764-3367";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 10 minutes Cleansing";
        upDatedDurationTwo = "- 40 minutes Lift and Sculpt Treatment and 10 minutes post-care and consultation";
        promoPrice = "59.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (808) 779-8279";
        treatmentSelected = "Lift and Sculpt Treatment";
        newSpaPhoneNumberSelected = "(808) 779-8279";
        insteadOfSpa = "$377"
        break;

        case "Moana Crystals Natural Skin Tightening $69.95":
        upDatedSpaName = "Moana Crystals";
        upDatedSpaAddress = "2250 Kalakaua Ave. Honolulu, HI 96815"+"<br>"+"(Waikiki shopping plaza, 2nd floor next to the elevator, Room 217)";
        upDatedSpaLINK = "https://forms.gle/17kGFgn6KXJcs3xY7";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/fFYEqgHUbmanrLiR6";
        upDatedSpaWebLINK = "https://moana.advancedbeautytreatments.com/natural-skin-tightening-69-95-book-page";
        upDatedSpaPhone = "(808) 764-3367";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 10 minutes Cleansing";
        upDatedDurationTwo = "- 40 minutes Natural Skin Tightening Treatment and 10 minutes post-care and consultation";
        promoPrice = "69.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (808) 779-8279";
        treatmentSelected = "Natural Skin Tightening Treatment";
        newSpaPhoneNumberSelected = "(808) 779-8279";
        insteadOfSpa = "$377"
        break;

        case "Moana Crystals Neck and Jawline $59.95":
        upDatedSpaName = "Moana Crystals";
        upDatedSpaAddress = "2250 Kalakaua Ave. Honolulu, HI 96815"+"<br>"+"(Waikiki shopping plaza, 2nd floor next to the elevator, Room 217)";
        upDatedSpaLINK = "https://forms.gle/17kGFgn6KXJcs3xY7";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/fFYEqgHUbmanrLiR6";
        upDatedSpaWebLINK = "https://moana.advancedbeautytreatments.com/neck-and-jawline-59-95-book-page";
        upDatedSpaPhone = "(808) 764-3367";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 10 minutes Cleansing";
        upDatedDurationTwo = "- 40 minutes Neck and Jawline Treatment and 10 minutes post-care and consultation";
        promoPrice = "59.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (808) 779-8279";
        treatmentSelected = "Neck and Jawline Treatment";
        newSpaPhoneNumberSelected = "(808) 779-8279";
        insteadOfSpa = "$377"
        break;

        case "Moana Crystals Triple Lift $59.95":
        upDatedSpaName = "Moana Crystals";
        upDatedSpaAddress = "2250 Kalakaua Ave. Honolulu, HI 96815"+"<br>"+"(Waikiki shopping plaza, 2nd floor next to the elevator, Room 217)";
        upDatedSpaLINK = "https://forms.gle/17kGFgn6KXJcs3xY7";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/fFYEqgHUbmanrLiR6";
        upDatedSpaWebLINK = "https://moana.advancedbeautytreatments.com/triple-lift-booking";
        upDatedSpaPhone = "(808) 764-3367";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 10 minutes Cleansing";
        upDatedDurationTwo = "- 40 minutes Triple Lift Treatment and 10 minutes post-care and consultation";
        promoPrice = "59.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (808) 779-8279";
        treatmentSelected = "Triple Lift Treatment";
        newSpaPhoneNumberSelected = "(808) 779-8279";
        insteadOfSpa = "$377"
        break;

        case "Natural Blossom by Adore Natural Facelift $69.95":
        upDatedSpaName = "Natural Blossom by Adore";
        upDatedSpaAddress = "Outlet Collection Way,"+"<br>"+"Edmonton, AB T9E 1J5, Canada"+"<br>"+"(Shopping mall, right next to entrance 4)";
        upDatedSpaLINK = "https://forms.gle/t5PE58hv1M3gzFbx8";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/zyeTcS8EHcR9EiUcA";
        upDatedSpaWebLINK = "https://naturalblossom.noneedleneeded.com/natural-facelift-69-95-book-page";
        upDatedSpaPhone = "(780) 900-4210";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15-minute Cleansing";
        upDatedDurationTwo = "- 45-minutes Natural Facelift Treatment Consultation"
        promoPrice = "69.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (780) 890-0008";
        treatmentSelected = "Natural Facelift Treatment";
        newSpaPhoneNumberSelected = "(780) 890-0008";
        insteadOfSpa = "$377";
        break;

      
        case "Nova Aesthetic Bye Bye Mommy Tummy $79.95":
        upDatedSpaName = "Nova Aesthetic";
        upDatedSpaAddress = "225 McRae Dr. East York ON M4G1T5"+"<br>"+"(Next to the fire station)";
        upDatedSpaLINK = "https://forms.gle/NR29HzZTmaivLJLYA";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/hdjG6t9w2Y88oiuJA";
        upDatedSpaWebLINK = "https://novaaesthetic.firstouchbeauty.com/triple-lift-booking";
        upDatedSpaPhone = "(437) 290-4174";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = " - ";
        upDatedDurationTwo = " - 45 minutes Bye Bye Mommy Tummy Treatment and 15 minutes Consultation";
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (437) 410-9788";
        treatmentSelected = "Bye Bye Mommy Tummy Treatment";
        newSpaPhoneNumberSelected = "(437) 410-9788";
        insteadOfSpa = "$377"
        break;

        case "Nova Aesthetic Natural Facelift $79.95":
        upDatedSpaName = "Nova Aesthetic";
        upDatedSpaAddress = "225 McRae Dr. East York ON M4G1T5"+"<br>"+"(Next to the fire station)";
        upDatedSpaLINK = "https://forms.gle/NR29HzZTmaivLJLYA";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/hdjG6t9w2Y88oiuJA";
        upDatedSpaWebLINK = "https://novaaesthetic.firstouchbeauty.com/natural-facelift-79-95-form";
        upDatedSpaPhone = "(437) 290-4174";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = " - 15 minutes Cleansing";
        upDatedDurationTwo = " - 30 minutes Natural Facelift Treatment and 15 minutes Consultation";
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (437) 410-9788";
        treatmentSelected = "Natural Facelift Treatment";
        newSpaPhoneNumberSelected = "(437) 410-9788";
        insteadOfSpa = "$377"
        break;

        case "Nova Aesthetic Neck and Jawline $79.95":
        upDatedSpaName = "Nova Aesthetic";
        upDatedSpaAddress = "225 McRae Dr. East York ON M4G1T5"+"<br>"+"(Next to the fire station)";
        upDatedSpaLINK = "https://forms.gle/NR29HzZTmaivLJLYA";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/hdjG6t9w2Y88oiuJA";
        upDatedSpaWebLINK = "https://novaaesthetic.firstouchbeauty.com/neck-and-jawline-79-95-form";
        upDatedSpaPhone = "(437) 290-4174";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = " - 15 minutes Cleansing";
        upDatedDurationTwo = " - 30 minutes Neck and Jawline Treatment and 15 minutes Consultation";
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (437) 410-9788";
        treatmentSelected = "Neck and Jawline Treatment";
        newSpaPhoneNumberSelected = "(437) 410-9788";
        insteadOfSpa = "$377"
        break;

        case "Nova Aesthetic Oakville Mommy Tummy Rescue $69.95":
        upDatedSpaName = "Nova Aesthetic";
        upDatedSpaAddress = "303 Robinson St, Oakville, ON L6J 1G7"+"<br>"+"(Main Floor)";
        upDatedSpaLINK = "https://forms.gle/tScsqFzk9VsVketz9";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/k3RC8SRbo6nKPpj49";
        upDatedSpaWebLINK = "https://novaaesthetics-oak.firstouchbeauty.com/mommy-tummy-69-95-book";
        upDatedSpaPhone = "(289) 216-8383";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = " - ";
        upDatedDurationTwo = " - 45 minutes Mommy Tummy Rescue Treatment and 15 minutes Consultation";
        promoPrice = "69.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (289) 837-0335";
        treatmentSelected = "Mommy Tummy Rescue Treatment";
        newSpaPhoneNumberSelected = "(289) 837-0335";
        insteadOfSpa = "$377"
        break;

        case "Nova Aesthetic Triple Lift $79.95":
        upDatedSpaName = "Nova Aesthetic";
        upDatedSpaAddress = "225 McRae Dr. East York ON M4G1T5"+"<br>"+"(Next to the fire station)";
        upDatedSpaLINK = "https://forms.gle/NR29HzZTmaivLJLYA";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/hdjG6t9w2Y88oiuJA";
        upDatedSpaWebLINK = "https://novaaesthetic.firstouchbeauty.com/triple-lift-booking";
        upDatedSpaPhone = "(437) 290-4174";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = " - 15 minutes Cleansing";
        upDatedDurationTwo = " - 30 minutes Triple Lift Treatment and 15 minutes Consultation";
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (437) 410-9788";
        treatmentSelected = "Triple Lift Treatment";
        newSpaPhoneNumberSelected = "(437) 410-9788";
        insteadOfSpa = "$377"
        break;

        case "Nova Med Spa Skin Tightening $99.95":
        upDatedSpaName = "Nova Med Spa";
        upDatedSpaAddress = "1451 Old Country Rd, Plainview, NY 11803"+"<br>"+"(Country Pointe Shops, Store front has a sign)";
        upDatedSpaLINK = "https://forms.gle/mqGV6S7jFqKnDLaV8";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/z5JXm4ohmr8gAgwE8";
        upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/nova-med-spa-skin-tightening-promo-99-95";
        upDatedSpaPhone = "(772) 210-4257";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = " - 15 minutes Cleansing";
        upDatedDurationTwo = " - 30 minutes Skin Tightening Treatment and 15 minutes Consultation";
        promoPrice = "99.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (516) 543-3940";
        treatmentSelected = "Skin Tightening Treatment";
        newSpaPhoneNumberSelected = "(516) 543-3940";
        insteadOfSpa = "$377"
        break;

        case "Oasis Aesthetics 3 in 1 Skin Lifting 59.95":
        upDatedSpaName = "Oasis Aesthetics";
        upDatedSpaAddress = "3073 Ness Ave, Winnipeg, MB R2Y 2G3"+"<br>"+"(Winnipeg - Ness Avenue)"+"<br>"+"(Parking is available just in front of the spa)";
        upDatedSpaLINK = "https://forms.gle/X8CkCCRLLaFTSzqZ9";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/vhEJaMCk6aiYtvQm6";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/oasis-ness-3-in-1-skin-lifting-treatment-59-95";
        upDatedSpaPhone = "(204) 819-4554";
        upDatedDurationTotal = "75 Minutes";
        upDatedDurationOne = "- 60 minutes 3 in 1 Skin Lifting Treatment";
        upDatedDurationTwo = "- 15 minutes Post Care and Consultation"
        promoPrice = "59.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (204) 306-7627";
        treatmentSelected = "3 in 1 Skin Lifting Treatment";
        newSpaPhoneNumberSelected = "(204) 306-7627";
        insteadOfSpa = "$350";
        break;

        case "Oasis Aesthetics Anti-Aging 49.95":
        upDatedSpaName = "Oasis Aesthetics";
        upDatedSpaAddress = "3073 Ness Ave, Winnipeg, MB R2Y 2G3"+"<br>"+"(Winnipeg - Ness Avenue)"+"<br>"+"(Parking is available just in front of the spa)";
        upDatedSpaLINK = "https://forms.gle/X8CkCCRLLaFTSzqZ9";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/vhEJaMCk6aiYtvQm6";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/oasis-aesthetics-ness-anti-aging-facial-49-95";
        upDatedSpaPhone = "(204) 819-4554";
        upDatedDurationTotal = "75 Minutes";
        upDatedDurationOne = "- 60 minutes cleansing and LED Anti-Aging Treatment";
        upDatedDurationTwo = "- 15 minutes Consultation"
        promoPrice = "49.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (204) 306-7627";
        treatmentSelected = "Anti-Aging Treatment";
        newSpaPhoneNumberSelected = "(204) 306-7627";
        insteadOfSpa = "$377";
        break;

        case "Oasis Aesthetics Anti-Aging 59.99":
        upDatedSpaName = "Oasis Aesthetics";
        upDatedSpaAddress = "3073 Ness Ave, Winnipeg, MB R2Y 2G3"+"<br>"+"(Winnipeg - Ness Avenue)"+"<br>"+"(Parking is available just in front of the spa)";
        upDatedSpaLINK = "https://forms.gle/X8CkCCRLLaFTSzqZ9";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/vhEJaMCk6aiYtvQm6";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/oasis-aesthetics-ness-anti-aging-facial";
        upDatedSpaPhone = "(204) 819-4554";
        upDatedDurationTotal = "75 Minutes";
        upDatedDurationOne = "- 60 minutes cleansing and LED Anti-Aging Treatment";
        upDatedDurationTwo = "- 15 minutes Consultation"
        promoPrice = "59.99";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (204) 306-7627";
        treatmentSelected = "Anti-Aging Treatment";
        newSpaPhoneNumberSelected = "(204) 306-7627";
        insteadOfSpa = "$377";
        break;

        case "Oasis Aesthetics Anti-Aging 69.95":
        upDatedSpaName = "Oasis Aesthetics";
        upDatedSpaAddress = "3073 Ness Ave, Winnipeg, MB R2Y 2G3"+"<br>"+"(Winnipeg - Ness Avenue)"+"<br>"+"(Parking is available just in front of the spa)";
        upDatedSpaLINK = "https://forms.gle/X8CkCCRLLaFTSzqZ9";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/vhEJaMCk6aiYtvQm6";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/oasis-aesthetics-ness-anti-aging-facial-69-95";
        upDatedSpaPhone = "(204) 819-4554";
        upDatedDurationTotal = "75 Minutes";
        upDatedDurationOne = "- 60 minutes cleansing and LED Anti-Aging Treatment";
        upDatedDurationTwo = "- 15 minutes Consultation"
        promoPrice = "69.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (204) 306-7627";
        treatmentSelected = "Anti-Aging Treatment";
        newSpaPhoneNumberSelected = "(204) 306-7627";
        insteadOfSpa = "$377";
        break;

        case "Oasis Aesthetics Body Contouring 59.95":
        upDatedSpaName = "Oasis Aesthetics";
        upDatedSpaAddress = "3073 Ness Ave, Winnipeg, MB R2Y 2G3"+"<br>"+"(Winnipeg - Ness Avenue)"+"<br>"+"(Parking is available just in front of the spa)";
        upDatedSpaLINK = "https://forms.gle/X8CkCCRLLaFTSzqZ9";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/vhEJaMCk6aiYtvQm6";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/oasis-ness-body-contouring-59-95";
        upDatedSpaPhone = "(204) 819-4554";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 45 minutes Body Contouring Treatment";
        upDatedDurationTwo = "- 15 minutes Post Care and Consultation"
        promoPrice = "59.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (204) 306-7627";
        treatmentSelected = "Body Contouring Treatment";
        newSpaPhoneNumberSelected = "(204) 306-7627";
        insteadOfSpa = "$350";
        break;

        case "Oasis Aesthetics Body Contouring 69.95":
        upDatedSpaName = "Oasis Aesthetics";
        upDatedSpaAddress = "3073 Ness Ave, Winnipeg, MB R2Y 2G3"+"<br>"+"(Winnipeg - Ness Avenue)"+"<br>"+"(Parking is available just in front of the spa)";
        upDatedSpaLINK = "https://forms.gle/X8CkCCRLLaFTSzqZ9";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/vhEJaMCk6aiYtvQm6";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/oasis-ness-body-contouring-69-95";
        upDatedSpaPhone = "(204) 819-4554";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 45 minutes Body Contouring Treatment";
        upDatedDurationTwo = "- 15 minutes Post Care and Consultation"
        promoPrice = "69.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (204) 306-7627";
        treatmentSelected = "Body Contouring Treatment";
        newSpaPhoneNumberSelected = "(204) 306-7627";
        insteadOfSpa = "$377";
        break;

        case "Oasis Aesthetics Body Contouring 69.99":
        upDatedSpaName = "Oasis Aesthetics";
        upDatedSpaAddress = "3073 Ness Ave, Winnipeg, MB R2Y 2G3"+"<br>"+"(Winnipeg - Ness Avenue)"+"<br>"+"(Parking is available just in front of the spa)";
        upDatedSpaLINK = "https://forms.gle/X8CkCCRLLaFTSzqZ9";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/vhEJaMCk6aiYtvQm6";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/oasis-aesthetics-ness-body-contouring-promo";
        upDatedSpaPhone = "(204) 819-4554";
        upDatedDurationTotal = "75 Minutes";
        upDatedDurationOne = "- 60 minutes Body Contouring Treatment";
        upDatedDurationTwo = "- 15 minutes Post Care and Consultation"
        promoPrice = "69.99";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (204) 306-7627";
        treatmentSelected = "Body Contouring Treatment";
        newSpaPhoneNumberSelected = "(204) 306-7627";
        insteadOfSpa = "$350";
        break;

        case "Oasis Aesthetics Body Contouring 79.95":
        upDatedSpaName = "Oasis Aesthetics";
        upDatedSpaAddress = "3073 Ness Ave, Winnipeg, MB R2Y 2G3"+"<br>"+"(Winnipeg - Ness Avenue)"+"<br>"+"(Parking is available just in front of the spa)";
        upDatedSpaLINK = "https://forms.gle/X8CkCCRLLaFTSzqZ9";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/vhEJaMCk6aiYtvQm6";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/oasis-ness-mommy-tummy-79-95";
        upDatedSpaPhone = "(204) 819-4554";
        upDatedDurationTotal = "75 Minutes";
        upDatedDurationOne = "- 60 minutes Body Contouring Treatment";
        upDatedDurationTwo = "- 15 minutes Post Care and Consultation"
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (204) 306-7627";
        treatmentSelected = "Body Contouring Treatment";
        newSpaPhoneNumberSelected = "(204) 306-7627";
        insteadOfSpa = "$377";
        break;

        case "Oasis Aesthetics Bye Bye Saggy Eyes 49.95":
        upDatedSpaName = "Oasis Aesthetics";
        upDatedSpaAddress = "3073 Ness Ave, Winnipeg, MB R2Y 2G3"+"<br>"+"(Winnipeg - Ness Avenue)"+"<br>"+"(Parking is available just in front of the spa)";
        upDatedSpaLINK = "https://forms.gle/X8CkCCRLLaFTSzqZ9";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/vhEJaMCk6aiYtvQm6";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/oasis-aesthetics-ness-bye-bye-saggy-eyes-49-95";
        upDatedSpaPhone = "(204) 819-4554";
        upDatedDurationTotal = "75 Minutes";
        upDatedDurationOne = "- 60 minutes cleansing and Bye Bye Saggy Eyes Treatment";
        upDatedDurationTwo = "- 15 minutes post-care and consultation"
        promoPrice = "49.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (204) 306-7627";
        treatmentSelected = "Bye Bye Saggy Eyes Treatment";
        newSpaPhoneNumberSelected = "(204) 306-7627";
        insteadOfSpa = "$377";
        break;

        case "Oasis Aesthetics Bye Bye Saggy Eyes 59.95":
        upDatedSpaName = "Oasis Aesthetics";
        upDatedSpaAddress = "3073 Ness Ave, Winnipeg, MB R2Y 2G3"+"<br>"+"(Winnipeg - Ness Avenue)"+"<br>"+"(Parking is available just in front of the spa)";
        upDatedSpaLINK = "https://forms.gle/X8CkCCRLLaFTSzqZ9";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/vhEJaMCk6aiYtvQm6";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/oasis-aesthetics-ness-bye-bye-saggy-eyes-59-95";
        upDatedSpaPhone = "(204) 819-4554";
        upDatedDurationTotal = "75 Minutes";
        upDatedDurationOne = "- 60 minutes cleansing and Bye Bye Saggy Eyes Treatment";
        upDatedDurationTwo = "- 15 minutes post-care and consultation"
        promoPrice = "59.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (204) 306-7627";
        treatmentSelected = "Bye Bye Saggy Eyes Treatment";
        newSpaPhoneNumberSelected = "(204) 306-7627";
        insteadOfSpa = "$377";
        break;

        case "Oasis Aesthetics Bye Bye Saggy Eyes 69.95":
        upDatedSpaName = "Oasis Aesthetics";
        upDatedSpaAddress = "3073 Ness Ave, Winnipeg, MB R2Y 2G3"+"<br>"+"(Winnipeg - Ness Avenue)"+"<br>"+"(Parking is available just in front of the spa)";
        upDatedSpaLINK = "https://forms.gle/X8CkCCRLLaFTSzqZ9";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/vhEJaMCk6aiYtvQm6";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/oasis-aesthetics-ness-bye-bye-saggy-eyes-69-95";
        upDatedSpaPhone = "(204) 819-4554";
        upDatedDurationTotal = "75 Minutes";
        upDatedDurationOne = "- 60 minutes cleansing and Bye Bye Saggy Eyes Treatment";
        upDatedDurationTwo = "- 15 minutes post-care and consultation"
        promoPrice = "69.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (204) 306-7627";
        treatmentSelected = "Bye Bye Saggy Eyes Treatment";
        newSpaPhoneNumberSelected = "(204) 306-7627";
        insteadOfSpa = "$377";
        break;

        case "Oasis Aesthetics Collagen Enhancing 59.95":
        upDatedSpaName = "Oasis Aesthetics";
        upDatedSpaAddress = "3073 Ness Ave, Winnipeg, MB R2Y 2G3"+"<br>"+"(Winnipeg - Ness Avenue)"+"<br>"+"(Parking is available just in front of the spa)";
        upDatedSpaLINK = "https://forms.gle/X8CkCCRLLaFTSzqZ9";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/vhEJaMCk6aiYtvQm6";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/oasis-ness-collagen-enhancing-promo";
        upDatedSpaPhone = "(204) 819-4554";
        upDatedDurationTotal = "75 Minutes";
        upDatedDurationOne = "- 60 minutes cleansing and Collagen Enhancing Treatment";
        upDatedDurationTwo = "- 15 minutes Consultation"
        promoPrice = "59.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (204) 306-7627";
        treatmentSelected = "Collagen Enhancing Treatment";
        newSpaPhoneNumberSelected = "(204) 306-7627";
        insteadOfSpa = "$350";
        break;

        case "Oasis Aesthetics Collagen Enhancing 69.95":
        upDatedSpaName = "Oasis Aesthetics";
        upDatedSpaAddress = "3073 Ness Ave, Winnipeg, MB R2Y 2G3"+"<br>"+"(Winnipeg - Ness Avenue)"+"<br>"+"(Parking is available just in front of the spa)";
        upDatedSpaLINK = "https://forms.gle/X8CkCCRLLaFTSzqZ9";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/vhEJaMCk6aiYtvQm6";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/oasis-ness-collagen-enhancing";
        upDatedSpaPhone = "(204) 819-4554";
        upDatedDurationTotal = "75 Minutes";
        upDatedDurationOne = "- 60 minutes cleansing and Collagen Enhancing Treatment";
        upDatedDurationTwo = "- 15 minutes Consultation"
        promoPrice = "69.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (204) 306-7627";
        treatmentSelected = "Collagen Enhancing Treatment";
        newSpaPhoneNumberSelected = "(204) 306-7627";
        insteadOfSpa = "$350";
        break;

        case "Oasis Aesthetics Henderson Anti-Aging 49.95":
        upDatedSpaName = "Oasis Aesthetics";
        upDatedSpaAddress = "1919 Henderson Hwy, Winnipeg MB, R2G1P4"+"<br>"+"(River East)"+"<br>"+"(Parking is available just in front of the spa)";
        upDatedSpaLINK = "https://forms.gle/X8CkCCRLLaFTSzqZ9";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/yAq2WXa65WyrFnnG6";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/oasis-aesthetics-henderson-anti-aging-facial-49-95";
        upDatedSpaPhone = "(204) 800-4409";
        upDatedDurationTotal = "75 Minutes";
        upDatedDurationOne = "- 60 minutes cleansing and Anti-Aging Treatment";
        upDatedDurationTwo = "- 15 minutes Consultation"
        promoPrice = "49.99";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (204) 691-1922";
        treatmentSelected = "Anti-Aging Treatment";
        newSpaPhoneNumberSelected = "(204) 691-1922";
        insteadOfSpa = "$350";
        break;

        case "Oasis Aesthetics Henderson Anti-Aging 59.99":
        upDatedSpaName = "Oasis Aesthetics";
        upDatedSpaAddress = "1919 Henderson Hwy, Winnipeg MB, R2G1P4"+"<br>"+"(River East)"+"<br>"+"(Parking is available just in front of the spa)";
        upDatedSpaLINK = "https://forms.gle/X8CkCCRLLaFTSzqZ9";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/yAq2WXa65WyrFnnG6";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/oasis-aesthetics-henderson-anti-aging-facial";
        upDatedSpaPhone = "(204) 800-4409";
        upDatedDurationTotal = "75 Minutes";
        upDatedDurationOne = "- 60 minutes cleansing and Anti-Aging Treatment";
        upDatedDurationTwo = "- 15 minutes Consultation"
        promoPrice = "59.99";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (204) 691-1922";
        treatmentSelected = "Anti-Aging Treatment";
        newSpaPhoneNumberSelected = "(204) 691-1922";
        insteadOfSpa = "$377";
        break;

        case "Oasis Aesthetics Henderson Anti-Aging 69.95":
        upDatedSpaName = "Oasis Aesthetics";
        upDatedSpaAddress = "1919 Henderson Hwy, Winnipeg MB, R2G1P4"+"<br>"+"(River East)"+"<br>"+"(Parking is available just in front of the spa)";
        upDatedSpaLINK = "https://forms.gle/X8CkCCRLLaFTSzqZ9";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/yAq2WXa65WyrFnnG6";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/oasis-aesthetics-henderson-anti-aging-facial-69-95";
        upDatedSpaPhone = "(204) 800-4409";
        upDatedDurationTotal = "75 Minutes";
        upDatedDurationOne = "- 60 minutes cleansing and Anti-Aging Treatment";
        upDatedDurationTwo = "- 15 minutes Consultation"
        promoPrice = "69.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (204) 691-1922";
        treatmentSelected = "Anti-Aging Treatment";
        newSpaPhoneNumberSelected = "(204) 691-1922";
        insteadOfSpa = "$377";
        break;

        case "Oasis Aesthetics Henderson Body Contouring 59.95":
        upDatedSpaName = "Oasis Aesthetics";
        upDatedSpaAddress = "1919 Henderson Hwy, Winnipeg MB, R2G1P4"+"<br>"+"(River East)"+"<br>"+"(Parking is available just in front of the spa)";
        upDatedSpaLINK = "https://forms.gle/X8CkCCRLLaFTSzqZ9";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/yAq2WXa65WyrFnnG6";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/oasis-aesthetics-henderson-body-contouring-59-95";
        upDatedSpaPhone = "(204) 800-4409";
        upDatedDurationTotal = "75 Minutes";
        upDatedDurationOne = "- 60 minutes Body Contouring Treatment";
        upDatedDurationTwo = "- 15 minutes Post Care and Consultation"
        promoPrice = "59.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (204) 691-1922";
        treatmentSelected = "Body Contouring Treatment";
        newSpaPhoneNumberSelected = "(204) 691-1922";
        insteadOfSpa = "$377";
        break;

        case "Oasis Aesthetics Henderson Body Contouring 69.95":
        upDatedSpaName = "Oasis Aesthetics";
        upDatedSpaAddress = "1919 Henderson Hwy, Winnipeg MB, R2G1P4"+"<br>"+"(River East)"+"<br>"+"(Parking is available just in front of the spa)";
        upDatedSpaLINK = "https://forms.gle/X8CkCCRLLaFTSzqZ9";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/yAq2WXa65WyrFnnG6";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/oasis-aesthetics-henderson-body-contouring-69-95";
        upDatedSpaPhone = "(204) 800-4409";
        upDatedDurationTotal = "75 Minutes";
        upDatedDurationOne = "- 60 minutes Body Contouring Treatment";
        upDatedDurationTwo = "- 15 minutes Post Care and Consultation"
        promoPrice = "69.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (204) 691-1922";
        treatmentSelected = "Body Contouring Treatment";
        newSpaPhoneNumberSelected = "(204) 691-1922";
        insteadOfSpa = "$377";
        break;

        case "Oasis Aesthetics Henderson Body Contouring 79.95":
        upDatedSpaName = "Oasis Aesthetics";
        upDatedSpaAddress = "1919 Henderson Hwy, Winnipeg MB, R2G1P4"+"<br>"+"(River East)"+"<br>"+"(Parking is available just in front of the spa)";
        upDatedSpaLINK = "https://forms.gle/X8CkCCRLLaFTSzqZ9";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/yAq2WXa65WyrFnnG6";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/oasis-aesthetics-henderson-mommy-tummy-79-95";
        upDatedSpaPhone = "(204) 800-4409";
        upDatedDurationTotal = "75 Minutes";
        upDatedDurationOne = "- 60 minutes Body Contouring Treatment";
        upDatedDurationTwo = "- 15 minutes Post Care and Consultation"
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (204) 691-1922";
        treatmentSelected = "Body Contouring Treatment";
        newSpaPhoneNumberSelected = "(204) 691-1922";
        insteadOfSpa = "$377";
        break;

        case "Oasis Aesthetics Henderson Bye Bye Saggy Eyes 49.95":
        upDatedSpaName = "Oasis Aesthetics";
        upDatedSpaAddress = "1919 Henderson Hwy, Winnipeg MB, R2G1P4"+"<br>"+"(River East)"+"<br>"+"(Parking is available just in front of the spa)";
        upDatedSpaLINK = "https://forms.gle/X8CkCCRLLaFTSzqZ9";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/yAq2WXa65WyrFnnG6";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/oasis-aesthetics-henderson-bye-bye-saggy-eyes-49-95";
        upDatedSpaPhone = "(204) 800-4409";
        upDatedDurationTotal = "75 Minutes";
        upDatedDurationOne = "- 60 minutes cleansing and Bye Bye Saggy Eyes Treatment";
        upDatedDurationTwo = "- 15 minutes Post Care and Consultation"
        promoPrice = "49.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (204) 691-1922";
        treatmentSelected = " Bye Bye Saggy Eyes Treatment";
        newSpaPhoneNumberSelected = "(204) 691-1922";
        insteadOfSpa = "$350";
        break;

        case "Oasis Aesthetics Henderson Bye Bye Saggy Eyes 59.95":
        upDatedSpaName = "Oasis Aesthetics";
        upDatedSpaAddress = "1919 Henderson Hwy, Winnipeg MB, R2G1P4"+"<br>"+"(River East)"+"<br>"+"(Parking is available just in front of the spa)";
        upDatedSpaLINK = "https://forms.gle/X8CkCCRLLaFTSzqZ9";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/yAq2WXa65WyrFnnG6";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/oasis-aesthetics-henderson-bye-bye-saggy-eyes-59-95";
        upDatedSpaPhone = "(204) 800-4409";
        upDatedDurationTotal = "75 Minutes";
        upDatedDurationOne = "- 60 minutes cleansing and Bye Bye Saggy Eyes Treatment";
        upDatedDurationTwo = "- 15 minutes Post Care and Consultation"
        promoPrice = "59.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (204) 691-1922";
        treatmentSelected = " Bye Bye Saggy Eyes Treatment";
        newSpaPhoneNumberSelected = "(204) 691-1922";
        insteadOfSpa = "$377";
        break;

        case "Oasis Aesthetics Henderson Bye Bye Saggy Eyes 69.95":
        upDatedSpaName = "Oasis Aesthetics";
        upDatedSpaAddress = "1919 Henderson Hwy, Winnipeg MB, R2G1P4"+"<br>"+"(River East)"+"<br>"+"(Parking is available just in front of the spa)";
        upDatedSpaLINK = "https://forms.gle/X8CkCCRLLaFTSzqZ9";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/yAq2WXa65WyrFnnG6";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/oasis-aesthetics-henderson-bye-bye-saggy-eyes-69-95";
        upDatedSpaPhone = "(204) 800-4409";
        upDatedDurationTotal = "75 Minutes";
        upDatedDurationOne = "- 60 minutes cleansing and Bye Bye Saggy Eyes Treatment";
        upDatedDurationTwo = "- 15 minutes Post Care and Consultation"
        promoPrice = "69.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (204) 691-1922";
        treatmentSelected = " Bye Bye Saggy Eyes Treatment";
        newSpaPhoneNumberSelected = "(204) 691-1922";
        insteadOfSpa = "$377";
        break;

        case "Oasis Aesthetics Henderson Collagen Enhancing 49.95":
        upDatedSpaName = "Oasis Aesthetics";
        upDatedSpaAddress = "1919 Henderson Hwy, Winnipeg MB, R2G1P4"+"<br>"+"(River East)"+"<br>"+"(Parking is available just in front of the spa)";
        upDatedSpaLINK = "https://forms.gle/X8CkCCRLLaFTSzqZ9";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/yAq2WXa65WyrFnnG6";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/oasis-aesthetics-henderson-collagen-enhancing-49-95";
        upDatedSpaPhone = "(204) 800-4409";
        upDatedDurationTotal = "75 Minutes";
        upDatedDurationOne = "- 60 minutes cleansing and Collagen Enhancing";
        upDatedDurationTwo = "- 15 minutes Consultation"
        promoPrice = "49.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (204) 691-1922";
        treatmentSelected = "Collagen Enhancing Treatment";
        newSpaPhoneNumberSelected = "(204) 691-1922";
        insteadOfSpa = "$350";
        break;

        case "Oasis Aesthetics Henderson Collagen Enhancing 59.95":
        upDatedSpaName = "Oasis Aesthetics";
        upDatedSpaAddress = "1919 Henderson Hwy, Winnipeg MB, R2G1P4"+"<br>"+"(River East)"+"<br>"+"(Parking is available just in front of the spa)";
        upDatedSpaLINK = "https://forms.gle/X8CkCCRLLaFTSzqZ9";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/yAq2WXa65WyrFnnG6";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/oasis-aesthetics-henderson-collagen-enhancing-promo";
        upDatedSpaPhone = "(204) 800-4409";
        upDatedDurationTotal = "75 Minutes";
        upDatedDurationOne = "- 60 minutes cleansing and Collagen Enhancing";
        upDatedDurationTwo = "- 15 minutes Consultation"
        promoPrice = "59.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (204) 691-1922";
        treatmentSelected = "Collagen Enhancing Treatment";
        newSpaPhoneNumberSelected = "(204) 691-1922";
        insteadOfSpa = "$350";
        break;

        case "Oasis Aesthetics Henderson Collagen Enhancing 69.95":
        upDatedSpaName = "Oasis Aesthetics";
        upDatedSpaAddress = "1919 Henderson Hwy, Winnipeg MB, R2G1P4"+"<br>"+"(River East)"+"<br>"+"(Parking is available just in front of the spa)";
        upDatedSpaLINK = "https://forms.gle/X8CkCCRLLaFTSzqZ9";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/yAq2WXa65WyrFnnG6";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/oasis-aesthetics-henderson-collagen-enhancing";
        upDatedSpaPhone = "(204) 800-4409";
        upDatedDurationTotal = "75 Minutes";
        upDatedDurationOne = "- 60 minutes cleansing and Collagen Enhancingg";
        upDatedDurationTwo = "- 15 minutes Consultation"
        promoPrice = "69.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (204) 691-1922";
        treatmentSelected = "Collagen Enhancing Treatment";
        newSpaPhoneNumberSelected = "(204) 691-1922";
        insteadOfSpa = "$350";
        break;

        case "Oasis Aesthetics Henderson DTB Anti-Aging 59.95":
        upDatedSpaName = "Oasis Aesthetics";
        upDatedSpaAddress = "1919 Henderson Hwy, Winnipeg MB, R2G1P4"+"<br>"+"(River East)"+"<br>"+"(Parking is available just in front of the spa)";
        upDatedSpaLINK = "https://forms.gle/X8CkCCRLLaFTSzqZ9";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/yAq2WXa65WyrFnnG6";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/oasis-aesthetics-henderson-anti-aging-facial-59-95-dtb-2";
        upDatedSpaPhone = "(204) 800-4409";
        upDatedDurationTotal = "75 Minutes";
        upDatedDurationOne = "- 60 minutes cleansing and Anti-Aging Treatment";
        upDatedDurationTwo = "- 15 minutes Consultation"
        promoPrice = "59.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (204) 691-1922";
        treatmentSelected = "Anti-Aging Treatment";
        newSpaPhoneNumberSelected = "(204) 691-1922";
        insteadOfSpa = "$377";
        break;

        case "Oasis Aesthetics Henderson Hydraglow 59.95":
        upDatedSpaName = "Oasis Aesthetics";
        upDatedSpaAddress = "1919 Henderson Hwy, Winnipeg MB, R2G1P4"+"<br>"+"(River East)"+"<br>"+"(Parking is available just in front of the spa)";
        upDatedSpaLINK = "https://forms.gle/X8CkCCRLLaFTSzqZ9";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/yAq2WXa65WyrFnnG6";
        upDatedSpaWebLINK = "https://oasishenderson.noneedleneeded.com/hydraglow-59-95-book";
        upDatedSpaPhone = "(204) 800-4409";
        upDatedDurationTotal = "75 Minutes";
        upDatedDurationOne = "- 60 minutes cleansing and Hydraglow Treatment";
        upDatedDurationTwo = "- 15 minutes Post Care and Consultation"
        promoPrice = "59.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (204) 691-1922";
        treatmentSelected = " Hydraglow Treatment";
        newSpaPhoneNumberSelected = "(204) 691-1922";
        insteadOfSpa = "$377";
        break;

        case "Oasis Aesthetics Henderson LED Non-Surgical Facelift 69.95":
        upDatedSpaName = "Oasis Aesthetics";
        upDatedSpaAddress = "1919 Henderson Hwy, Winnipeg MB, R2G1P4"+"<br>"+"(River East)"+"<br>"+"(Parking is available just in front of the spa)";
        upDatedSpaLINK = "https://forms.gle/X8CkCCRLLaFTSzqZ9";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/yAq2WXa65WyrFnnG6";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/oasis-aesthetics-henderson-led-non-surgical-facelift";
        upDatedSpaPhone = "(204) 800-4409";
        upDatedDurationTotal = "75 Minutes";
        upDatedDurationOne = "- 60 minutes cleansing and LED Non-Surgical Facelift Treatment";
        upDatedDurationTwo = "- 15 minutes Consultation"
        promoPrice = "69.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (204) 691-1922";
        treatmentSelected = "LED Non-Surgical Facelift Treatment";
        newSpaPhoneNumberSelected = "(204) 691-1922";
        insteadOfSpa = "$377";
        break;

        case "Oasis Aesthetics Henderson Men's Skin Tightening 89.95":
        upDatedSpaName = "Oasis Aesthetics";
        upDatedSpaAddress = "1919 Henderson Hwy, Winnipeg MB, R2G1P4"+"<br>"+"(River East)"+"<br>"+"(Parking is available just in front of the spa)";
        upDatedSpaLINK = "https://forms.gle/X8CkCCRLLaFTSzqZ9";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/yAq2WXa65WyrFnnG6";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/oasis-henderson-mens-skin-tightening-promo-89-95";
        upDatedSpaPhone = "(204) 800-4409";
        upDatedDurationTotal = "75 Minutes";
        upDatedDurationOne = "- 60 minutes cleansing and Skin Tightening";
        upDatedDurationTwo = "- 15 minutes Consultation"
        promoPrice = "89.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (204) 691-1922";
        treatmentSelected = "Skin Tightening Treatment";
        newSpaPhoneNumberSelected = "(204) 691-1922";
        insteadOfSpa = "$299";
        break;

        case "Oasis Aesthetics Henderson Neck and Jawline 69.95":
        upDatedSpaName = "Oasis Aesthetics";
        upDatedSpaAddress = "1919 Henderson Hwy, Winnipeg MB, R2G1P4"+"<br>"+"(River East)"+"<br>"+"(Parking is available just in front of the spa)";
        upDatedSpaLINK = "https://forms.gle/X8CkCCRLLaFTSzqZ9";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/yAq2WXa65WyrFnnG6";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/oasis-aesthetics-henderson-neck-and-jawline-69-95";
        upDatedSpaPhone = "(204) 800-4409";
        upDatedDurationTotal = "75 Minutes";
        upDatedDurationOne = "- 60 minutes cleansing and Neck and Jawline Treatment";
        upDatedDurationTwo = "- 15 minutes Consultation"
        promoPrice = "69.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (204) 691-1922";
        treatmentSelected = "Neck and Jawline Treatment";
        newSpaPhoneNumberSelected = "(204) 691-1922";
        insteadOfSpa = "$377";
        break;

        case "Oasis Aesthetics Henderson Oxygen Treatment 69.95":
        upDatedSpaName = "Oasis Aesthetics";
        upDatedSpaAddress = "1919 Henderson Hwy, Winnipeg MB, R2G1P4"+"<br>"+"(River East)"+"<br>"+"(Parking is available just in front of the spa)";
        upDatedSpaLINK = "https://forms.gle/X8CkCCRLLaFTSzqZ9";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/yAq2WXa65WyrFnnG6";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/oasis-henderson-oxygen-treatment";
        upDatedSpaPhone = "(204) 800-4409";
        upDatedDurationTotal = "75 Minutes";
        upDatedDurationOne = "- 60 minutes cleansing and Oxygen Treatment";
        upDatedDurationTwo = "- 15 minutes Consultation"
        promoPrice = "69.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (204) 691-1922";
        treatmentSelected = "Oxygen Treatment";
        newSpaPhoneNumberSelected = "(204) 691-1922";
        insteadOfSpa = "$299";
        break;

        case "Oasis Aesthetics Henderson Skin Tightening 49.95":
        upDatedSpaName = "Oasis Aesthetics";
        upDatedSpaAddress = "1919 Henderson Hwy, Winnipeg MB, R2G1P4"+"<br>"+"(River East)"+"<br>"+"(Parking is available just in front of the spa)";
        upDatedSpaLINK = "https://forms.gle/X8CkCCRLLaFTSzqZ9";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/yAq2WXa65WyrFnnG6";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/oasis-aesthetics-henderson-skin-tightening-49-95";
        upDatedSpaPhone = "(204) 800-4409";
        upDatedDurationTotal = "75 Minutes";
        upDatedDurationOne = "- 60 minutes cleansing and Skin Tightening";
        upDatedDurationTwo = "- 15 minutes Consultation"
        promoPrice = "49.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (204) 691-1922";
        treatmentSelected = "Skin Tightening Treatment";
        newSpaPhoneNumberSelected = "(204) 691-1922";
        insteadOfSpa = "$350";
        break;

        case "Oasis Aesthetics Henderson Skin Tightening 69.95":
        upDatedSpaName = "Oasis Aesthetics";
        upDatedSpaAddress = "1919 Henderson Hwy, Winnipeg MB, R2G1P4"+"<br>"+"(River East)"+"<br>"+"(Parking is available just in front of the spa)";
        upDatedSpaLINK = "https://forms.gle/X8CkCCRLLaFTSzqZ9";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/yAq2WXa65WyrFnnG6";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/oasis-aesthetics-henderson-skin-tightening-69-95";
        upDatedSpaPhone = "(204) 800-4409";
        upDatedDurationTotal = "75 Minutes";
        upDatedDurationOne = "- 60 minutes cleansing and Skin Tightening";
        upDatedDurationTwo = "- 15 minutes Consultation"
        promoPrice = "69.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (204) 691-1922";
        treatmentSelected = "Skin Tightening Treatment";
        newSpaPhoneNumberSelected = "(204) 691-1922";
        insteadOfSpa = "$377";
        break;

        case "Oasis Aesthetics LED 69.95":
        upDatedSpaName = "Oasis Aesthetics";
        upDatedSpaAddress = "3073 Ness Ave, Winnipeg, MB R2Y 2G3"+"<br>"+"(Winnipeg - Ness Avenue)"+"<br>"+"(Parking is available just in front of the spa)";
        upDatedSpaLINK = "https://forms.gle/X8CkCCRLLaFTSzqZ9";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/vhEJaMCk6aiYtvQm6";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/oasis-aesthetics-promo-page";
        upDatedSpaPhone = "(204) 819-4554";
        upDatedDurationTotal = "75 Minutes";
        upDatedDurationOne = "- 60 minutes cleansing and LED Anti-Aging Treatment";
        upDatedDurationTwo = "- 15 minutes Consultation"
        promoPrice = "69.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (204) 306-7627";
        treatmentSelected = "LED Treatment";
        newSpaPhoneNumberSelected = "(204) 306-7627";
        insteadOfSpa = "$377";
        break;

        case "Oasis Aesthetics LED Non-Surgical Facelift 69.95":
        upDatedSpaName = "Oasis Aesthetics";
        upDatedSpaAddress = "3073 Ness Ave, Winnipeg, MB R2Y 2G3"+"<br>"+"(Winnipeg - Ness Avenue)"+"<br>"+"(Parking is available just in front of the spa)";
        upDatedSpaLINK = "https://forms.gle/X8CkCCRLLaFTSzqZ9";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/vhEJaMCk6aiYtvQm6";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/oasis-aesthetics-led-non-surgical-facelift-promo";
        upDatedSpaPhone = "(204) 819-4554";
        upDatedDurationTotal = "75 Minutes";
        upDatedDurationOne = "- 60 minutes cleansing and LED Non-Surgical Facelift";
        upDatedDurationTwo = "- 15 minutes Consultation"
        promoPrice = "69.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (204) 306-7627";
        treatmentSelected = "LED Non-Surgical Facelift";
        newSpaPhoneNumberSelected = "(204) 306-7627";
        insteadOfSpa = "$377";
        break;

        case "Oasis Aesthetics Marine Anti-Aging 59.95":
        upDatedSpaName = "Oasis Aesthetics";
        upDatedSpaAddress = "1555 Marine drive West #210, West Vancouver, BC V7V 1H9"+"<br>"+"(Located on Marine Drive, between 15th St and 16th St)";
        upDatedSpaLINK = "https://forms.gle/Cz4ZWu2S7yqBizrQA";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/MSfrNJNquZhmnqPu5?g_st=iw";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/oasis-aesthetics-marine-anti-aging-facial-59-95";
        upDatedSpaPhone = "(236) 200-5069";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 45 minutes cleansing and LED Anti-Aging Treatment";
        upDatedDurationTwo = "- 15 minutes Consultation"
        promoPrice = "59.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (236) 323-2232";
        treatmentSelected = "Anti-Aging Treatment";
        newSpaPhoneNumberSelected = "(236) 323-2232";
        insteadOfSpa = "$350";
        break;

        case "Oasis Aesthetics Marine Anti-Aging 69.95":
        upDatedSpaName = "Oasis Aesthetics";
        upDatedSpaAddress = "1555 Marine drive West #210, West Vancouver, BC V7V 1H9"+"<br>"+"(Located on Marine Drive, between 15th St and 16th St)";
        upDatedSpaLINK = "https://forms.gle/Cz4ZWu2S7yqBizrQA";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/MSfrNJNquZhmnqPu5?g_st=iw";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/oasis-aesthetics-marine-anti-aging-facial-69-99";
        upDatedSpaPhone = "(236) 200-5069";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 45 minutes cleansing and LED Anti-Aging Treatment";
        upDatedDurationTwo = "- 15 minutes Consultation"
        promoPrice = "69.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (236) 323-2232";
        treatmentSelected = "Anti-Aging Treatment";
        newSpaPhoneNumberSelected = "(236) 323-2232";
        insteadOfSpa = "$350";
        break;

        case "Oasis Aesthetics Marine Body Contouring 69.99":
        upDatedSpaName = "Oasis Aesthetics";
        upDatedSpaAddress = "1555 Marine drive West #210, West Vancouver, BC V7V 1H9"+"<br>"+"(Located on Marine Drive, between 15th St and 16th St)";
        upDatedSpaLINK = "https://forms.gle/Cz4ZWu2S7yqBizrQA";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/MSfrNJNquZhmnqPu5?g_st=iw";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/oasis-aesthetics-marine-body-contouring-69-99";
        upDatedSpaPhone = "(236) 200-5069";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 45 minutes cleansing and Body Contouring Treatment";
        upDatedDurationTwo = "- 15 minutes Consultation"
        promoPrice = "69.99";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (236) 323-2232";
        treatmentSelected = "Body Contouring  Treatment";
        newSpaPhoneNumberSelected = "(236) 323-2232";
        insteadOfSpa = "$350";
        break;

        case "Oasis Aesthetics Marine Neck and Jawline 69.95":
        upDatedSpaName = "Oasis Aesthetics";
        upDatedSpaAddress = "1555 Marine drive West #210, West Vancouver, BC V7V 1H9"+"<br>"+"(Located on Marine Drive, between 15th St and 16th St)";
        upDatedSpaLINK = "https://forms.gle/Cz4ZWu2S7yqBizrQA";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/MSfrNJNquZhmnqPu5?g_st=iw";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/oasis-aesthetics-marine-neck-and-jawline-69-95";
        upDatedSpaPhone = "(236) 200-5069";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 45 minutes cleansing and Neck and Jawline Treatment";
        upDatedDurationTwo = "- 15 minutes Consultation"
        promoPrice = "69.99";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (236) 323-2232";
        treatmentSelected = "Neck and Jawline Treatment";
        newSpaPhoneNumberSelected = "(236) 323-2232";
        insteadOfSpa = "$350";
        break;

        case "Oasis Aesthetics Men's Skin Tightening 89.95":
        upDatedSpaName = "Oasis Aesthetics";
        upDatedSpaAddress = "3073 Ness Ave, Winnipeg, MB R2Y 2G3"+"<br>"+"(Winnipeg - Ness Avenue)"+"<br>"+"(Parking is available just in front of the spa)";
        upDatedSpaLINK = "https://forms.gle/X8CkCCRLLaFTSzqZ9";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/vhEJaMCk6aiYtvQm6";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/oasis-ness-mens-skin-tightening-promo-89-95";
        upDatedSpaPhone = "(204) 819-4554";
        upDatedDurationTotal = "75 Minutes";
        upDatedDurationOne = "- 60 minutes cleansing and Men's Skin Tightening Treatment";
        upDatedDurationTwo = "- 15 minutes Consultation"
        promoPrice = "89.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (204) 306-7627";
        treatmentSelected = "Skin Tightening Treatment";
        newSpaPhoneNumberSelected = "(204) 306-7627";
        insteadOfSpa = "$299";
        break;

        case "Oasis Aesthetics Mommy Tummy Rescue 59.95":
        upDatedSpaName = "Oasis Aesthetics";
        upDatedSpaAddress = "3073 Ness Ave, Winnipeg, MB R2Y 2G3"+"<br>"+"(Winnipeg - Ness Avenue)"+"<br>"+"(Parking is available just in front of the spa)";
        upDatedSpaLINK = "https://forms.gle/X8CkCCRLLaFTSzqZ9";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/vhEJaMCk6aiYtvQm6";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/oasis-ness-mommy-tummy-rescue-59-95";
        upDatedSpaPhone = "(204) 819-4554";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 45 minutes Mommy Tummy Rescue Treatment";
        upDatedDurationTwo = "- 15 minutes Post Care and Consultation"
        promoPrice = "59.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (204) 306-7627";
        treatmentSelected = "Mommy Tummy Rescue Treatment";
        newSpaPhoneNumberSelected = "(204) 306-7627";
        insteadOfSpa = "$350";
        break;

        case "Oasis Aesthetics Natural Facelift 69.95":
        upDatedSpaName = "Oasis Aesthetics";
        upDatedSpaAddress = "3073 Ness Ave, Winnipeg, MB R2Y 2G3"+"<br>"+"(Winnipeg - Ness Avenue)"+"<br>"+"(Parking is available just in front of the spa)";
        upDatedSpaLINK = "https://forms.gle/X8CkCCRLLaFTSzqZ9";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/vhEJaMCk6aiYtvQm6";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/oasis-aesthetics-natural-face-lift-promo-69-95";
        upDatedSpaPhone = "(204) 819-4554";
        upDatedDurationTotal = "75 Minutes";
        upDatedDurationOne = "- 60 minutes cleansing and Natural Facelift";
        upDatedDurationTwo = "- 15 minutes Consultation"
        promoPrice = "69.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (204) 306-7627";
        treatmentSelected = "Natural Facelift Treatment";
        newSpaPhoneNumberSelected = "(204) 306-7627";
        insteadOfSpa = "$377";
        break;

        case "Oasis Aesthetics Neck and Jawline 69.95":
        upDatedSpaName = "Oasis Aesthetics";
        upDatedSpaAddress = "3073 Ness Ave, Winnipeg, MB R2Y 2G3"+"<br>"+"(Winnipeg - Ness Avenue)"+"<br>"+"(Parking is available just in front of the spa)";
        upDatedSpaLINK = "https://forms.gle/X8CkCCRLLaFTSzqZ9";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/vhEJaMCk6aiYtvQm6";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/oasis-aesthetics-ness-neck-and-jawline-69-95";
        upDatedSpaPhone = "(204) 819-4554";
        upDatedDurationTotal = "75 Minutes";
        upDatedDurationOne = "- 60 minutes cleansing and Neck and Jawline Treatment";
        upDatedDurationTwo = "- 15 minutes Consultation"
        promoPrice = "69.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (204) 306-7627";
        treatmentSelected = "Neck and Jawline Treatment";
        newSpaPhoneNumberSelected = "(204) 306-7627";
        insteadOfSpa = "$377";
        break;

        case "Oasis Aesthetics Ness DTB-Anti-Aging 59.95":
        upDatedSpaName = "Oasis Aesthetics";
        upDatedSpaAddress = "3073 Ness Ave, Winnipeg, MB R2Y 2G3"+"<br>"+"(Winnipeg - Ness Avenue)"+"<br>"+"(Parking is available just in front of the spa)";
        upDatedSpaLINK = "https://forms.gle/X8CkCCRLLaFTSzqZ9";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/vhEJaMCk6aiYtvQm6";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/oasis-aesthetics-ness-anti-aging-facial-59-95-dtb-2";
        upDatedSpaPhone = "(204) 819-4554";
        upDatedDurationTotal = "75 Minutes";
        upDatedDurationOne = "- 60 minutes cleansing and LED Anti-Aging Treatment";
        upDatedDurationTwo = "- 15 minutes Consultation"
        promoPrice = "59.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (204) 306-7627";
        treatmentSelected = "Anti-Aging Treatment";
        newSpaPhoneNumberSelected = "(204) 306-7627";
        insteadOfSpa = "$377";
        break;

        case "Oasis Aesthetics Oxygen and LED 69.95":
        upDatedSpaName = "Oasis Aesthetics";
        upDatedSpaAddress = "3073 Ness Ave, Winnipeg, MB R2Y 2G3"+"<br>"+"(Winnipeg - Ness Avenue)"+"<br>"+"(Parking is available just in front of the spa)";
        upDatedSpaLINK = "https://forms.gle/X8CkCCRLLaFTSzqZ9";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/vhEJaMCk6aiYtvQm6";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/oxygen-treatment-oasis-med-spa";
        upDatedSpaPhone = "(204) 819-4554";
        upDatedDurationTotal = "75 Minutes";
        upDatedDurationOne = "- 60 minutes cleansing and the Oxygen and LED Treatment";
        upDatedDurationTwo = "- 15 minutes Consultation"
        promoPrice = "69.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (204) 306-7627";
        treatmentSelected = "Oxygen and LED Treatment";
        newSpaPhoneNumberSelected = "(204) 306-7627";
        insteadOfSpa = "$299";
        break;

        case "Oasis Aesthetics St. Mary's Anti-Aging 59.95":
        upDatedSpaName = "Oasis Aesthetics";
        upDatedSpaAddress = "1026 St Mary's Rd Unit A Winnipeg, MB R2M 3S6"+"<br>"+"(Unit A)";
        upDatedSpaLINK = "https://forms.gle/sSQUXR3kFgoN5vQc6";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/yJomamRPC2hTi7Tg8";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/oasis-aesthetics-st-mary-anti-aging-facial-59-95";
        upDatedSpaPhone = "(204) 819-5651";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 45 minutes cleansing and LED Anti-Aging Treatment";
        upDatedDurationTwo = "- 15 minutes Consultation"
        promoPrice = "59.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (431) 570-2004";
        treatmentSelected = "Anti-Aging Treatment";
        newSpaPhoneNumberSelected = "(431) 570-2004";
        insteadOfSpa = "$377";
        break;

        case "Oasis Aesthetics St. Mary's Anti-Aging 69.95":
        upDatedSpaName = "Oasis Aesthetics";
        upDatedSpaAddress = "1026 St Mary's Rd Unit A Winnipeg, MB R2M 3S6"+"<br>"+"(Unit A)";
        upDatedSpaLINK = "https://forms.gle/sSQUXR3kFgoN5vQc6";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/yJomamRPC2hTi7Tg8";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/oasis-aesthetics-st-mary-anti-aging-facial-69-95";
        upDatedSpaPhone = "(204) 819-5651";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 45 minutes cleansing and LED Anti-Aging Treatment";
        upDatedDurationTwo = "- 15 minutes Consultation"
        promoPrice = "69.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (431) 570-2004";
        treatmentSelected = "Anti-Aging Treatment";
        newSpaPhoneNumberSelected = "(431) 570-2004";
        insteadOfSpa = "$377";
        break;

        case "Oasis Aesthetics St. Mary's Men Skin Tightening 79.95":
        upDatedSpaName = "Oasis Aesthetics";
        upDatedSpaAddress = "1026 St Mary's Rd Unit A Winnipeg, MB R2M 3S6"+"<br>"+"(Unit A)";
        upDatedSpaLINK = "https://forms.gle/sSQUXR3kFgoN5vQc6";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/yJomamRPC2hTi7Tg8";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/oasis-aesthetics-st-mary-men-skin-tightening-79-95";
        upDatedSpaPhone = "(204) 819-5651";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 45 minutes cleansing and Skin Tightening Treatment";
        upDatedDurationTwo = "- 15 minutes Consultation"
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (431) 570-2004";
        treatmentSelected = "Skin Tightening Treatment";
        newSpaPhoneNumberSelected = "(431) 570-2004";
        insteadOfSpa = "$377";
        break;

        case "Oasis Aesthetics St. Mary's Neck and Jawline 59.95":
        upDatedSpaName = "Oasis Aesthetics";
        upDatedSpaAddress = "1026 St Mary's Rd Unit A Winnipeg, MB R2M 3S6"+"<br>"+"(Unit A)";
        upDatedSpaLINK = "https://forms.gle/sSQUXR3kFgoN5vQc6";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/yJomamRPC2hTi7Tg8";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/oasis-aesthetics-st-mary-neck-and-jawline-59-95";
        upDatedSpaPhone = "(204) 819-5651";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 45 minutes cleansing and Neck and Jawline Treatment";
        upDatedDurationTwo = "- 15 minutes Consultation"
        promoPrice = "59.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (431) 570-2004";
        treatmentSelected = "Neck and Jawline Treatment";
        newSpaPhoneNumberSelected = "(431) 570-2004";
        insteadOfSpa = "$377";
        break;

        case "Oasis Boutique Skin Tightening $99.95":
        upDatedSpaName = "Oasis Boutique";
        upDatedSpaAddress = "236 N. Park Ave. Winter Park, FL. 32789"+"<br>"+"(First floor on Park Avenue opposite side of the park with orange double doors)"+"<br>"+"(Parking is free on the street anywhere on Park Ave.)";
        upDatedSpaLINK = "https://forms.gle/4pPj1bZz4ExoYDjR6";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/5T4XkNM6Ev3MMAcw9";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/oasis-boutique-skin-tightening";
        upDatedSpaPhone = "(407) 990-1553";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 minutes Cleansing";
        upDatedDurationTwo = "- 30 minutes Skin Tightening Treatment and 15 minutes post-care and consultation";
        promoPrice = "99.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (407) 960-4489";
        treatmentSelected = "Skin Tightening Treatment";
        newSpaPhoneNumberSelected = "(407) 960-4489";
        insteadOfSpa = "$377"
        break;

        case "Ora Med Spa Natural Facelift $59.95":
        upDatedSpaName = "Ora Medical Spa";
        upDatedSpaAddress = "4400 Bayou Blvd, Pensacola FL 32504"+"<br>"+"(In Cordova Square Plaza, Suite #29A)";
        upDatedSpaLINK = "https://forms.gle/2cGVHU6ahcHVQCYM9";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/hzhtj8tyjfZwwM2F7";
        upDatedSpaWebLINK = "https://ora-med.firstouchbeauty.com/natural-facelift-59-95-book";
        upDatedSpaPhone = "(850) 988-9735";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 minutes Cleansing";
        upDatedDurationTwo = "- 30 minutes Natural Facelift Treatment and 15 minutes post-care and consultation";
        promoPrice = "59.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (850) 501-3350";
        treatmentSelected = "Natural Facelift Treatment";
        newSpaPhoneNumberSelected = "(850) 501-3350";
        insteadOfSpa = "$377"
        break;

        case "Ora Med Spa RF Body Treatment Treatment $69.95":
        upDatedSpaName = "Ora Medical Spa";
        upDatedSpaAddress = "4400 Bayou Blvd, Pensacola FL 32504"+"<br>"+"(In Cordova Square Plaza, Suite #29A)";
        upDatedSpaLINK = "https://forms.gle/2cGVHU6ahcHVQCYM9";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/hzhtj8tyjfZwwM2F7";
        upDatedSpaWebLINK = "https://ora-med.firstouchbeauty.com/body-treatment-69-95-form-page";
        upDatedSpaPhone = "(850) 988-9735";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 minutes assessment";
        upDatedDurationTwo = "- 30 minutes Body Treatment Treatment and 15 minutes post-care and consultation";
        promoPrice = "69.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (850) 501-3350";
        treatmentSelected = "RF Body Treatment Treatment";
        newSpaPhoneNumberSelected = "(850) 501-3350";
        insteadOfSpa = "$377"
        break;

        case "Ora Med Spa Triple Lift $59.95":
        upDatedSpaName = "Ora Medical Spa";
        upDatedSpaAddress = "4400 Bayou Blvd, Pensacola FL 32504"+"<br>"+"(In Cordova Square Plaza, Suite #29A)";
        upDatedSpaLINK = "https://forms.gle/2cGVHU6ahcHVQCYM9";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/hzhtj8tyjfZwwM2F7";
        upDatedSpaWebLINK = "https://ora-med.firstouchbeauty.com/triple-lift-booking";
        upDatedSpaPhone = "(850) 988-9735";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 minutes Cleansing";
        upDatedDurationTwo = "- 30 minutes Triple Lift Treatment and 15 minutes post-care and consultation";
        promoPrice = "59.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (850) 501-3350";
        treatmentSelected = "Triple Lift Treatment";
        newSpaPhoneNumberSelected = "(850) 501-3350";
        insteadOfSpa = "$377"
        break;

        case "Orogold Frisco":
        upDatedSpaName = "Orogold Spa";
        upDatedSpaAddress = "StoneBriar Mall," + "<br>" + "2601 Preston Rd, Frisco, TX 75034"+"<br>"+"Second floor near Macy's next to Windsor";
        upDatedSpaLINK = "https://forms.gle/VTQCZdFu3PsPWKhU8";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/orogold-spa-frisco-led-promo";
        upDatedSpaPhone = "(469) 353-6194";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 minutes Cleansing";
        upDatedDurationTwo = "- 30 minutes LED Anti-aging Treatment" + "<br>" + "- 15 minutes of Consultation";
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (469) 438-7564";
        treatmentSelected = "LED Treatment";
        newSpaPhoneNumberSelected = "(469) 438-7564";
        insteadOfSpa = "$350";
        break;

        case "Orogold Valencia FTB Skin Tightening 79.95":
        upDatedSpaName = "OROGOLD Spa";
        upDatedSpaAddress = "Valencia Town Center, 24201 Valencia Blvd, Valencia, CA 91355" + "<br>" + "(2nd floor near 'Kevin Jewelers')";
        upDatedSpaLINK = "https://forms.gle/sjLWKCSRm8531esHA";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/9xQWpT55f9ot3AkP9";
        upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/orogold-valencia-skin-tightening-treatment-79-95";
        upDatedSpaPhone = "(661) 863-9656";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 45 minutes Skin Tightening Treatment";
        upDatedDurationTwo = "- 15 minutes Consultation";
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (661) 383-9238";
        treatmentSelected = "Skin Tightening Treatment";
        newSpaPhoneNumberSelected = "(661) 383-9238";
        insteadOfSpa = "$377";
        break;

        case "Parie Med Spa  Weight Loss IV Treatment $79.95":
        upDatedSpaName = "Parie Med Spa";
        upDatedSpaAddress = "1725 Village Center Cir Las Vegas, NV 89134"+"<br>"+"(STE 150)";
        upDatedSpaLINK = " ";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/hAzkHHTaRr9x89GR9";
        upDatedSpaWebLINK = "https://pariemedspa.noneedleneeded.com/weigh-loss-iv-79-95" ;
        upDatedSpaPhone = "(702) 637-2259";
        upDatedDurationTotal = "50 Minutes";
        upDatedDurationOne = "- 10 minutes Injection of IV Treatment";
        upDatedDurationTwo = " 40 minutes IV infusion and 10 minutes post-care and consultation";
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (702) 930-6221";
        treatmentSelected = "Weight Loss IV Treatment";
        newSpaPhoneNumberSelected = "(702) 930-6221";
        insteadOfSpa = "$260"
        break;

        case "Parie Med Spa Anti-Aging Facial $69.95":
        upDatedSpaName = "Parie Med Spa";
        upDatedSpaAddress = "1725 Village Center Cir Las Vegas, NV 89134"+"<br>"+"(STE 150)";
        upDatedSpaLINK = " ";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/hAzkHHTaRr9x89GR9";
        upDatedSpaWebLINK = "https://pariemedspa.noneedleneeded.com/anti-aging-facial-69-95-form-book-page" ;
        upDatedSpaPhone = "(702) 637-2259";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 minutes Cleansing";
        upDatedDurationTwo = "- 30 minutes Anti-Aging Facial and 15 minutes post-care and consultation";
        promoPrice = "69.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (702) 930-6221";
        treatmentSelected = "LED Anti-Aging Treatment";
        newSpaPhoneNumberSelected = "(702) 930-6221";
        insteadOfSpa = "$377"
        break;

        case "Parie Med Spa Lift and Hydrate $69.95":
        upDatedSpaName = "Parie Med Spa";
        upDatedSpaAddress = "1725 Village Center Cir Las Vegas, NV 89134"+"<br>"+"(STE 150)";
        upDatedSpaLINK = " ";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/hAzkHHTaRr9x89GR9";
        upDatedSpaWebLINK = "https://pariemedspa.noneedleneeded.com/lift-and-hydrate-book" ;
        upDatedSpaPhone = "(702) 637-2259";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 minutes Cleansing";
        upDatedDurationTwo = "- 30 minutes Lift and Hydrate and 15 minutes post-care and consultation";
        promoPrice = "69.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (702) 930-6221";
        treatmentSelected = "Lift and Hydrate Treatment";
        newSpaPhoneNumberSelected = "(702) 930-6221";
        insteadOfSpa = "$377"
        break;

        case "Parie Med Spa Men Skin Tightening $79.95":
        upDatedSpaName = "Parie Med Spa";
        upDatedSpaAddress = "1725 Village Center Cir Las Vegas, NV 89134"+"<br>"+"(STE 150)";
        upDatedSpaLINK = " ";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/hAzkHHTaRr9x89GR9";
        upDatedSpaWebLINK = "https://pariemedspa.noneedleneeded.com/men-natural-facelift-59-95" ;
        upDatedSpaPhone = "(702) 637-2259";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 minutes Cleansing";
        upDatedDurationTwo = "- 30 minutes Skin Tightening Treatment and 15 minutes post-care and consultation";
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (702) 930-6221";
        treatmentSelected = "Skin Tightening Treatment";
        newSpaPhoneNumberSelected = "(702) 930-6221";
        insteadOfSpa = "$377"
        break;

        case "Parie Med Spa Natural Facelift $69.95":
        upDatedSpaName = "Parie Med Spa";
        upDatedSpaAddress = "1725 Village Center Cir Las Vegas, NV 89134"+"<br>"+"(STE 150)";
        upDatedSpaLINK = " ";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/hAzkHHTaRr9x89GR9";
        upDatedSpaWebLINK = "https://pariemedspa.noneedleneeded.com/natural-facelift-69-95-book-page" ;
        upDatedSpaPhone = "(702) 637-2259";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 minutes Cleansing";
        upDatedDurationTwo = "- 30 minutes Natural Facelift and 15 minutes post-care and consultation";
        promoPrice = "69.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (702) 930-6221";
        treatmentSelected = "Natural Facelift Treatment";
        newSpaPhoneNumberSelected = "(702) 930-6221";
        insteadOfSpa = "$377"
        break;

        case "Parie Med Spa Neck and Jawline $69.95":
        upDatedSpaName = "Parie Med Spa";
        upDatedSpaAddress = "1725 Village Center Cir Las Vegas, NV 89134"+"<br>"+"(STE 150)";
        upDatedSpaLINK = " ";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/hAzkHHTaRr9x89GR9";
        upDatedSpaWebLINK = "https://pariemedspa.noneedleneeded.com/neck-and-jawline-69-95-book-page" ;
        upDatedSpaPhone = "(702) 637-2259";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 minutes Cleansing";
        upDatedDurationTwo = "- 30 minutes Neck & Jawline Treatment and 15 minutes post-care and consultation";
        promoPrice = "69.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (702) 930-6221";
        treatmentSelected = "Neck & Jawline Treatment";
        newSpaPhoneNumberSelected = "(702) 930-6221";
        insteadOfSpa = "$377"
        break;

        case "Parie Med Spa Triple Lift $69.95":
        upDatedSpaName = "Parie Med Spa";
        upDatedSpaAddress = "1725 Village Center Cir Las Vegas, NV 89134"+"<br>"+"(STE 150)";
        upDatedSpaLINK = " ";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/hAzkHHTaRr9x89GR9";
        upDatedSpaWebLINK = "https://pariemedspa.noneedleneeded.com/triple-lift-booking" ;
        upDatedSpaPhone = "(702) 637-2259";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 minutes Cleansing";
        upDatedDurationTwo = "- 30 minutes Triple Lift Treatment and 15 minutes post-care and consultation";
        promoPrice = "69.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (702) 930-6221";
        treatmentSelected = "Triple Lift Treatment";
        newSpaPhoneNumberSelected = "(702) 930-6221";
        insteadOfSpa = "$377"
        break;

        case "Pearl De Flore Augusta Natural Skin Tightening $99.95":
        upDatedSpaName = "Pearl De Flore Spa";
        upDatedSpaAddress = "Augusta Mall," + "<br>" + "3450 Wrightsboro Rd, Augusta, GA 30909"+"<br>"+"(Please use the north entrance of Macy’s, 2nd floor, beside Lovisa and near the elevator in the middle of the mall)";
        upDatedSpaLINK = "https://forms.gle/ea7Mes4ARmJjo9fy7";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/E8c2G5bgbVf5J7Gr9";
        upDatedSpaWebLINK = "https://www.advancedbeautytreatments.com/pages/pearl-of-flore-natural-skin-tightening-99-95-377";
        upDatedSpaPhone = "(762) 200-3183";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 minutes Cleansing";
        upDatedDurationTwo = "- 30 minutes Natural Skin Tightening Treatment" + "<br>" + "- 15 minutes of Consultation";
        promoPrice = "99.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (762) 383-5302";
        treatmentSelected = "Natural Skin Tightening Treatment";
        newSpaPhoneNumberSelected = "(762) 383-5302";
        insteadOfSpa = "$377";
        break;

        case "Predire Prestige LED":
        upDatedSpaName = "Predire Prestige Spa";
        upDatedSpaAddress = "Tucson Mall,"+"<br>"+"4500 N Oracle Rd, Tucson, AZ 85705"+"<br>"+"(First Floor, Near Cinnabon)";
        upDatedSpaLINK = "https://forms.gle/MCWTC7rXeR7iRFHk7";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/predire-prestige-tucson-promo-page";
        upDatedSpaPhone = "(520) 467-6911";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15-minute Cleansing";
        upDatedDurationTwo = "- 30-minutes LED Anti-aging Treatment and 15-minutes Consultation"
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (480) 758-0541";
        treatmentSelected = "LED Treatment";
        newSpaPhoneNumberSelected = "(480) 758-0541";
        insteadOfSpa = "$350";
        break;

        case "Premier Naples Natural Facelift $69.95":
        upDatedSpaName = "Premier Naples";
        upDatedSpaAddress = "1900 Tamiami trail north, Naples 34102"+"<br>"+"(Coastland Center, across Zales)"+"<br>"+"Use Forge Athletics as a landmark for directions. The parking garage near Mall Entrance 4 is closest, and the spa is directly across from that entrance.";
        upDatedSpaLINK = "https://forms.gle/XnQ6aBHTiDS3bvXf9";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/LKAHwE1hiSrXvATx9";
        upDatedSpaParkLINK = "https://maps.app.goo.gl/cKQGjT5Gws4goAmN8";
        upDatedSpaWebLINK = "https://premier-naples.noneedleneeded.com/natural-facelift-69-95-book-page";
        upDatedSpaPhone = "(239) 330-6871";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = " - 4O minutes Cleansing+LED";
        upDatedDurationTwo = " - 20 min Consultation";
        promoPrice = "69.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (239) 963-6077";
        treatmentSelected = "Natural Facelift Treatment";
        newSpaPhoneNumberSelected = "(239) 963-6077";
        insteadOfSpa = "$377"
        break;

        case "Premier Naples Non Surgical Facelift $69.95":
        upDatedSpaName = "Premier Naples";
        upDatedSpaAddress = "1900 Tamiami trail north, Naples 34102"+"<br>"+"(Coastland Center, across Zales)"+"<br>"+"Use Forge Athletics as a landmark for directions. The parking garage near Mall Entrance 4 is closest, and the spa is directly across from that entrance.";
        upDatedSpaLINK = "https://forms.gle/XnQ6aBHTiDS3bvXf9";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/LKAHwE1hiSrXvATx9";
        upDatedSpaParkLINK = "https://maps.app.goo.gl/cKQGjT5Gws4goAmN8";
        upDatedSpaWebLINK = "https://premier-naples.noneedleneeded.com/non-surgical-facelift-book-page";
        upDatedSpaPhone = "(239) 330-6871";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = " - 4O minutes Cleansing+LED";
        upDatedDurationTwo = " - 20 min Consultation";;
        promoPrice = "69.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (239) 963-6077";
        treatmentSelected = "Non Surgical Facelift Treatment";
        newSpaPhoneNumberSelected = "(239) 963-6077";
        insteadOfSpa = "$377"
        break;

        case "Premier Naples Men Skin Tightening $89.95":
        upDatedSpaName = "Premier Naples";
        upDatedSpaAddress = "1900 Tamiami trail north, Naples 34102"+"<br>"+"(Coastland Center, across Zales)"+"<br>"+"Use Forge Athletics as a landmark for directions. The parking garage near Mall Entrance 4 is closest, and the spa is directly across from that entrance.";
        upDatedSpaLINK = "https://forms.gle/XnQ6aBHTiDS3bvXf9";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/LKAHwE1hiSrXvATx9";
        upDatedSpaParkLINK = "https://maps.app.goo.gl/cKQGjT5Gws4goAmN8";
        upDatedSpaWebLINK = "https://premier-naples.noneedleneeded.com/men-skin-tightening-89-95-booking";
        upDatedSpaPhone = "(239) 330-6871";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = " - 4O minutes Cleansing+LED";
        upDatedDurationTwo = " - 20 min Consultation";;
        promoPrice = "89.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (239) 963-6077";
        treatmentSelected = "Men Skin Tightening Treatment";
        newSpaPhoneNumberSelected = "(239) 963-6077";
        insteadOfSpa = "$377"
        break;    

        case "Premier Naples Men Skin Tightening $79.95":
        upDatedSpaName = "Premier Naples";
        upDatedSpaAddress = "1900 Tamiami trail north, Naples 34102"+"<br>"+"(Coastland Center, across Zales)"+"<br>"+"Use Forge Athletics as a landmark for directions. The parking garage near Mall Entrance 4 is closest, and the spa is directly across from that entrance.";
        upDatedSpaLINK = "https://forms.gle/XnQ6aBHTiDS3bvXf9";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/LKAHwE1hiSrXvATx9";
        upDatedSpaParkLINK = "https://maps.app.goo.gl/cKQGjT5Gws4goAmN8";
        upDatedSpaWebLINK = "https://premier-naples.noneedleneeded.com/men-skin-tightening-79-95-booking";
        upDatedSpaPhone = "(239) 330-6871";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = " - 4O minutes Cleansing+LED";
        upDatedDurationTwo = " - 20 min Consultation";;
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (239) 963-6077";
        treatmentSelected = "Men Skin Tightening Treatment";
        newSpaPhoneNumberSelected = "(239) 963-6077";
        insteadOfSpa = "$377"
        break;    

        case "Premier Pensacola":
        upDatedSpaName = "Premier Spa";
        upDatedSpaAddress = "Inside Cordova Mall," + "<br>" + "5100 N 9th Ave Pensacola, FL 32504"+"<br>"+"(Dick’s aisle, next to Buckle)";
        upDatedSpaLINK = "https://forms.gle/egLGFsf1jdBvVqpz5";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/iuVMVBTF2NhGtsDN7";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/premierpen-spa-ledpromo";
        upDatedSpaPhone = "(448) 400-2095";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 minutes Cleansing";
        upDatedDurationTwo = "- 30 minutes LED Anti-aging Treatment" + "<br>" + "- 15 minutes of Consultation";
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (850) 637-7637";
        treatmentSelected = "LED Treatment";
        newSpaPhoneNumberSelected = "(850) 637-7637";
        insteadOfSpa = "$350";
        break;

        case "Premier Pensacola Natural Facelift $79.95":
        upDatedSpaName = "Premier Spa";
        upDatedSpaAddress = "Inside Cordova Mall," + "<br>" + "5100 N 9th Ave Pensacola, FL 32504"+"<br>"+"(Dick’s aisle, next to Buckle)";
        upDatedSpaLINK = "https://forms.gle/egLGFsf1jdBvVqpz5";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/iuVMVBTF2NhGtsDN7";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/premier-pensacola-natural-facelift-treatment-promo";
        upDatedSpaPhone = "(448) 400-2095";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 minutes Consultation";
        upDatedDurationTwo = "- 45 Natural Facelift Treatment";
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (850) 637-7637";
        treatmentSelected = "Natural Facelift Treatment";
        newSpaPhoneNumberSelected = "(850) 637-7637";
        insteadOfSpa = "$399";
        break;

        case "Premier Pensacola Natural Skin Tightening 79.95":
        upDatedSpaName = "Premier Spa";
        upDatedSpaAddress = "Inside Cordova Mall," + "<br>" + "5100 N 9th Ave Pensacola, FL 32504"+"<br>"+"(Dick’s aisle, next to Buckle)";
        upDatedSpaLINK = "https://forms.gle/egLGFsf1jdBvVqpz5";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/iuVMVBTF2NhGtsDN7";
        upDatedSpaWebLINK = "https://www.advancedbeautytreatments.com/pages/premier-pensacola-natural-skin-tightening-79-95";
        upDatedSpaPhone = "(448) 400-2095";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 minutes Cleansing";
        upDatedDurationTwo = "- 45 minutes Natural Skin Tightening Treatment and Consultation";
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (850) 637-7637";
        treatmentSelected = "Natural Skin Tightening Treatment";
        newSpaPhoneNumberSelected = "(850) 637-7637";
        insteadOfSpa = "$377";
        break;

        case "Premier Pensacola Reverse Turkey Neck 79.95":
        upDatedSpaName = "Premier Spa";
        upDatedSpaAddress = "Inside Cordova Mall," + "<br>" + "5100 N 9th Ave Pensacola, FL 32504"+"<br>"+"(Dick’s aisle, next to Buckle)";
        upDatedSpaLINK = "https://forms.gle/egLGFsf1jdBvVqpz5";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/iuVMVBTF2NhGtsDN7";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/premier-pensacola-reverse-turkey-neck-treatment-promo ";
        upDatedSpaPhone = "(448) 400-2095";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 minutes Cleansing";
        upDatedDurationTwo = "- 30 minutes Reverse Turkey Neck Treatment";
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (850) 637-7637";
        treatmentSelected = "Reverse Turkey Neck Treatment";
        newSpaPhoneNumberSelected = "(850) 637-7637";
        insteadOfSpa = "$350";
        break;

        case "Prime Clinic 3 in 1 Skin Tightening $79.00":
        upDatedSpaName = "Prime Clinic";
        upDatedSpaAddress = "Lakeland Square Mall, 3800 US Hwy 98 N, Lakeland, FL 33809"+"<br>"+"(It's just three stores down to the left of Bath & Body Works)";
        upDatedSpaLINK = "https://forms.gle/bTMnJHRcm4qTCNYUA";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/9fNmjJfbUTSd1zB9A";
        upDatedSpaWebLINK = "https://primeclinic.advancedbeautytreatments.com/3-in-1-skin-tightening-79-book";
        upDatedSpaPhone = "(863) 278-3069";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 45 minutes Cleansing and 3 in 1 Skin Tightening Treatment";
        upDatedDurationTwo = "- 15 minutes Consultation";
        promoPrice = "79.00";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at 813-214-8046";
        treatmentSelected = "3 in 1 Skin Tightening Treatment";
        newSpaPhoneNumberSelected = "813-214-8046";
        insteadOfSpa = "$377"
        break;

        case "Prime Clinic Hydraglow $69.95":
        upDatedSpaName = "Prime Clinic";
        upDatedSpaAddress = "Lakeland Square Mall, 3800 US Hwy 98 N, Lakeland, FL 33809"+"<br>"+"(It's just three stores down to the left of Bath & Body Works)";
        upDatedSpaLINK = "https://forms.gle/bTMnJHRcm4qTCNYUA";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/9fNmjJfbUTSd1zB9A";
        upDatedSpaWebLINK = "https://primeclinic.advancedbeautytreatments.com/hydraglow-69-95-book";
        upDatedSpaPhone = "(863) 278-3069";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 45 minutes Cleansing and Hydraglow Treatment";
        upDatedDurationTwo = "- 15 minutes Consultation";
        promoPrice = "69.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at 813-214-8046";
        treatmentSelected = "Hydraglow Treatment";
        newSpaPhoneNumberSelected = "813-214-8046";
        insteadOfSpa = "$377"
        break;

        case "Prime Clinic Hydraglow $79.00":
        upDatedSpaName = "Prime Clinic";
        upDatedSpaAddress = "Lakeland Square Mall, 3800 US Hwy 98 N, Lakeland, FL 33809"+"<br>"+"(It's just three stores down to the left of Bath & Body Works)";
        upDatedSpaLINK = "https://forms.gle/bTMnJHRcm4qTCNYUA";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/9fNmjJfbUTSd1zB9A";
        upDatedSpaWebLINK = "https://primeclinic.advancedbeautytreatments.com/hydraglow-79-book";
        upDatedSpaPhone = "(863) 278-3069";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 45 minutes Cleansing and Hydraglow Treatment";
        upDatedDurationTwo = "- 15 minutes Consultation";
        promoPrice = "79.00";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at 813-214-8046";
        treatmentSelected = "Hydraglow Treatment";
        newSpaPhoneNumberSelected = "813-214-8046";
        insteadOfSpa = "$377"
        break;

        case "Prime Clinic Natural Facelift $69.95":
        upDatedSpaName = "Prime Clinic";
        upDatedSpaAddress = "Lakeland Square Mall, 3800 US Hwy 98 N, Lakeland, FL 33809"+"<br>"+"(It's just three stores down to the left of Bath & Body Works)";
        upDatedSpaLINK = "https://forms.gle/bTMnJHRcm4qTCNYUA";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/9fNmjJfbUTSd1zB9A";
        upDatedSpaWebLINK = "https://primeclinic.advancedbeautytreatments.com/natural-facelift-69-95-book-page";
        upDatedSpaPhone = "(863) 278-3069";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 45 minutes Cleansing and Natural Facelift Treatment";
        upDatedDurationTwo = "- 15 minutes Consultation";
        promoPrice = "69.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at 813-214-8046";
        treatmentSelected = "Natural Facelift Treatment";
        newSpaPhoneNumberSelected = "813-214-8046";
        insteadOfSpa = "$377"
        break;

        case "Prime Clinic Natural Facelift $79.00":
        upDatedSpaName = "Prime Clinic";
        upDatedSpaAddress = "Lakeland Square Mall, 3800 US Hwy 98 N, Lakeland, FL 33809"+"<br>"+"(It's just three stores down to the left of Bath & Body Works)";
        upDatedSpaLINK = "https://forms.gle/bTMnJHRcm4qTCNYUA";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/9fNmjJfbUTSd1zB9A";
        upDatedSpaWebLINK = "https://primeclinic.advancedbeautytreatments.com/natural-facelift-79-book-page";
        upDatedSpaPhone = "(863) 278-3069";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 45 minutes Cleansing and Natural Facelift Treatment";
        upDatedDurationTwo = "- 15 minutes Consultation";
        promoPrice = "79.00";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at 813-214-8046";
        treatmentSelected = "Natural Facelift Treatment";
        newSpaPhoneNumberSelected = "813-214-8046";
        insteadOfSpa = "$377"
        break;

        case "Prime Clinic Triple Lift $69.95":
        upDatedSpaName = "Prime Clinic";
        upDatedSpaAddress = "Lakeland Square Mall, 3800 US Hwy 98 N, Lakeland, FL 33809"+"<br>"+"(It's just three stores down to the left of Bath & Body Works)";
        upDatedSpaLINK = "https://forms.gle/bTMnJHRcm4qTCNYUA";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/9fNmjJfbUTSd1zB9A";
        upDatedSpaWebLINK = "https://primeclinic.advancedbeautytreatments.com/triple-lift-69-book";
        upDatedSpaPhone = "(863) 278-3069";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 45 minutes Cleansing and Triple Lift Treatment";
        upDatedDurationTwo = "- 15 minutes Consultation";
        promoPrice = "69.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at 813-214-8046";
        treatmentSelected = "Triple Lift Treatment";
        newSpaPhoneNumberSelected = "813-214-8046";
        insteadOfSpa = "$377"
        break;

        case "Prime Clinic Triple Lift $79.00":
        upDatedSpaName = "Prime Clinic";
        upDatedSpaAddress = "Lakeland Square Mall, 3800 US Hwy 98 N, Lakeland, FL 33809"+"<br>"+"(It's just three stores down to the left of Bath & Body Works)";
        upDatedSpaLINK = "https://forms.gle/bTMnJHRcm4qTCNYUA";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/9fNmjJfbUTSd1zB9A";
        upDatedSpaWebLINK = "https://primeclinic.advancedbeautytreatments.com/triple-lift-booking";
        upDatedSpaPhone = "(863) 278-3069";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 45 minutes Cleansing and Triple Lift Treatment";
        upDatedDurationTwo = "- 15 minutes Consultation";
        promoPrice = "79.00";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at 813-214-8046";
        treatmentSelected = "Triple Lift Treatment";
        newSpaPhoneNumberSelected = "813-214-8046";
        insteadOfSpa = "$377"
        break;

        case "Pura Vida AB":
        upDatedSpaName = "Pura Vida Spa";
        upDatedSpaAddress = "Southcentre Mall, 100 Anderson Rd SE, Calgary, AB T2J 3V1" + "<br>" + "(Ground Floor, across from Sport Check)";
        upDatedSpaLINK = "https://forms.gle/w7fRjryo9sTSq5p27";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/jBNQdzDcNS4N5GkY7";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/puravida-antiaging-led-promo";
        upDatedSpaPhone = "(825) 258-5779";
        upDatedDurationTotal = "45 Minutes";
        upDatedDurationOne = "- 15 Minutes Cleansing";
        upDatedDurationTwo = "- 30 Minutes LED Experience & Consultation";
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (587) 800-1699";
        treatmentSelected = "LED Treatment";
        newSpaPhoneNumberSelected = "(587) 800-1699";
        insteadOfSpa = "$350";
        break;

        case "Pura Vida AB Skin Tightening $79.95":
        upDatedSpaName = "Pura Vida Spa";
        upDatedSpaAddress = "Southcentre Mall, 100 Anderson Rd SE, Calgary, AB T2J 3V1" + "<br>" + "(Ground Floor, across from Sport Check)";
        upDatedSpaLINK = "https://forms.gle/w7fRjryo9sTSq5p27";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/jBNQdzDcNS4N5GkY7";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/pura-vida-skin-tightening-treatment-79-95";
        upDatedSpaPhone = "(587) 328-6478";
        upDatedDurationTotal = "45 Minutes";
        upDatedDurationOne = "- 15 Minutes Cleansing";
        upDatedDurationTwo = "- 30 Minutes Skin Tightening & Consultation";
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (587) 800-1699";
        treatmentSelected = "Skin Tightening Treatment";
        newSpaPhoneNumberSelected = "(587) 800-1699";
        insteadOfSpa = "$350";
        break;

        case "Pura Vida AB Triple Lift $79.95":
        upDatedSpaName = "Pura Vida Spa";
        upDatedSpaAddress = "Southcentre Mall, 100 Anderson Rd SE, Calgary, AB T2J 3V1" + "<br>" + "(Ground Floor, across from Sport Check)";
        upDatedSpaLINK = "https://forms.gle/w7fRjryo9sTSq5p27";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/jBNQdzDcNS4N5GkY7";
        upDatedSpaWebLINK = "https://puravida.noneedleneeded.com/triple-lift-booking";
        upDatedSpaPhone = "(587) 328-6478";
        upDatedDurationTotal = "45 Minutes";
        upDatedDurationOne = "- 15 Minutes Cleansing";
        upDatedDurationTwo = "- 30 Minutes Triple Lift & Consultation";
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (587) 800-1699";
        treatmentSelected = "Triple Lift Treatment";
        newSpaPhoneNumberSelected = "(587) 800-1699";
        insteadOfSpa = "$350";
        break;

        case "Queen Bee Greenwood Lift and Hydrate $79.95":
        upDatedSpaName = "Queen Bee";
        upDatedSpaAddress = "Queen Bee – Greenwood Park Mall, 1251 U.S. Highway 31 N, Unit 0F12A Greenwood, IN 46142"+"<br>"+"(Our spa is located inside Greenwood Park Mall, just past Pandora and directly across from Foot Locker Kids.)";
        upDatedSpaLINK = "https://forms.gle/6ykBeakQuACtfEiU7";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/MhmV1XnjUk5HA6tk8";
        upDatedSpaWebLINK = "https://queenbeegw.firstouchbeauty.com/lift-and-hydrate-book";
        upDatedSpaPhone = "(317) 518-1860";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 minutes light cleansing";
        upDatedDurationTwo = "- 45 minutes Lift and Hydrate Treatment and Consultation"
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (800) 699-6935";
        treatmentSelected = "Lift and Hydrate Treatment";
        newSpaPhoneNumberSelected = "(800) 699-6935";
        insteadOfSpa = "$377";
        break;

        case "Queen Bee Greenwood Natural Facelift $79.95":
        upDatedSpaName = "Queen Bee";
        upDatedSpaAddress = "Queen Bee – Greenwood Park Mall, 1251 U.S. Highway 31 N, Unit 0F12A Greenwood, IN 46142"+"<br>"+"(Our spa is located inside Greenwood Park Mall, just past Pandora and directly across from Foot Locker Kids.)";
        upDatedSpaLINK = "https://forms.gle/6ykBeakQuACtfEiU7";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/MhmV1XnjUk5HA6tk8";
        upDatedSpaWebLINK = "https://queenbeegw.firstouchbeauty.com/natural-facelift-79-95-booking";
        upDatedSpaPhone = "(317) 518-1860";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 minutes light cleansing";
        upDatedDurationTwo = "- 45 minutes Natural Facelift Treatment and Consultation"
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (800) 699-6935";
        treatmentSelected = "Natural Facelift Treatment";
        newSpaPhoneNumberSelected = "(800) 699-6935";
        insteadOfSpa = "$377";
        break;

        case "Queen Bee Limited Natural Facelift $69.95":
        upDatedSpaName = "Queen Bee Limited";
        upDatedSpaAddress = "322 E Front St. Traverse City, MI 49684"+"<br>"+"(Right next to the parking garage on Front Street)";
        upDatedSpaLINK = "https://forms.gle/6oNLW2Xq7Ui3DeT19";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/6wovvSRSL7kSt24e8";
        upDatedSpaWebLINK = "https://www.advancedbeautytreatments.com/pages/queen-bee-limited-natural-facelift-69-95";
        upDatedSpaPhone = "(231) 222-5239";
        upDatedDurationTotal = "50 Minutes";
        upDatedDurationOne = "- 20 minutes Cleansing";
        upDatedDurationTwo = "- 30 minutes Natural Facelift Treatment and Consultation";
        promoPrice = "69.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (231) 444-4183";
        treatmentSelected = "Natural Facelift Treatment";
        newSpaPhoneNumberSelected = "(231) 444-4183";
        insteadOfSpa = "$377"
        break;

        case "Queen Bee Natural Facelift $119":
        upDatedSpaName = "Queen Bee";
        upDatedSpaAddress = "156 N Palm Canyon Dr. Palm Springs,  CA. 92262 United States"+"<br>"+"(across the street of Tommy Bahama)";
        upDatedSpaLINK = "https://forms.gle/qvo1ebyuCpyd8xVcA";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/APwbgkvMwCt2fkc79";
        upDatedSpaWebLINK = "https://queenbee-ps.firstouchbeauty.com/natural-facelift-119-book-page";
        upDatedSpaPhone = "(760) 979-0516";
        upDatedDurationTotal = "45 Minutes";
        upDatedDurationOne = "- 10 minutes light cleansing";
        upDatedDurationTwo = "- 35 minutes Natural Facelif Treatment and Consultation"
        promoPrice = "119";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (760) 501-5800";
        treatmentSelected = "Natural Facelift Treatment";
        newSpaPhoneNumberSelected = "(760) 501-5800";
        insteadOfSpa = "$377";
        break;

        case "Queen Bee Natural Facelift $150":
        upDatedSpaName = "Queen Bee";
        upDatedSpaAddress = "156 N Palm Canyon Dr. Palm Springs,  CA. 92262 United States"+"<br>"+"(across the street of Tommy Bahama)";
        upDatedSpaLINK = "https://forms.gle/qvo1ebyuCpyd8xVcA";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/APwbgkvMwCt2fkc79";
        upDatedSpaWebLINK = "https://queenbee-ps.firstouchbeauty.com/natural-facelift-150-book-page";
        upDatedSpaPhone = "(760) 979-0516";
        upDatedDurationTotal = "45 Minutes";
        upDatedDurationOne = "- 10 minutes light cleansing";
        upDatedDurationTwo = "- 35 minutes Natural Facelif Treatment and Consultation"
        promoPrice = "150";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (760) 501-5800";
        treatmentSelected = "Natural Facelift Treatment";
        newSpaPhoneNumberSelected = "(760) 501-5800";
        insteadOfSpa = "$377";
        break;
 
        case "Rachels Beauty Scottsdale Neck and Jawline":
        upDatedSpaName = "Rachel’s Beauty Spa";
        upDatedSpaAddress = "Scottsdale Quarter,"+"<br>"+"15147 N Scottsdale Rd, Scottsdale, AZ 85254, STE 130"+"<br>"+"(When you arrive at Sephora, turn right onto South Street, across from Skin Laundry.)";
        upDatedSpaLINK = "https://forms.gle/QTfEEaaG3Y6RXNzV6";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/rachels-beauty-neck-and-jaw-line-tightening-treatment-promo" ;
        upDatedSpaPhone = "(480) 847-1841";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 Minutes Consultation";
        upDatedDurationTwo = "- 45 Minutes Neck and Jawline Treatment";
        promoPrice = "69.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (480) 808-9400";
        treatmentSelected = "Neck and Jawline Tightening Treatment";
        newSpaPhoneNumberSelected = "(480) 808-9400";
        insteadOfSpa = "$377"
        break;

        case "Remarkable Aesthetics Natural Facelift $79.95":
        upDatedSpaName = "Remarkable Aesthetics";
        upDatedSpaAddress = "43 S Stephanie St, Unit 150,Henderson, NV, 89012"+"<br>"+"(At Stephanie plaza )";
        upDatedSpaLINK = "https://forms.gle/33jHEToFW4MYMihNA";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/9s7kXJdYPJmMEPA57";
        upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/remarkable-aesthetics-natural-facelift-79-95";
        upDatedSpaPhone = "(725) 217-5345";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 20 minutes Cleansing and 30 minutes of  Natural Facelift Treatment";
        upDatedDurationTwo = "- 10 minutes Consultation";
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (702) 613-7529";
        treatmentSelected = "Natural Facelift Treatment";
        newSpaPhoneNumberSelected = "(702) 613-7529";
        insteadOfSpa = "$377"
        break;

        case "Renee Med Spa Natural Facelift $59.95":
        upDatedSpaName = "Renee Med Spa";
        upDatedSpaAddress = "8950 E Germann Rd. Mesa, AZ 85212"+"<br>"+"(Units 19 and 22, Lavish Studio Building)";
        upDatedSpaLINK = "https://forms.gle/tNu16fnzJqADAVWJ6";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/renee-med-spa-natural-facelift-treatment-59-95";
        upDatedSpaPhone = "(480) 613-7764";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 minutes light cleansing";
        upDatedDurationTwo = "- 30 minutes Natural Facelift Treatment and a 15 minute Post Care and Consultation"
        promoPrice = "59.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (602) 962-8551";
        treatmentSelected = "Natural Facelift Treatment";
        newSpaPhoneNumberSelected = "(602) 962-8551";
        insteadOfSpa = "$377";
        break;

        case "Renee Med Spa Natural Facelift $69.95":
        upDatedSpaName = "Renee Med Spa";
        upDatedSpaAddress = "8950 E Germann Rd. Mesa, AZ 85212"+"<br>"+"(Units 19 and 22, Lavish Studio Building)";
        upDatedSpaLINK = "https://forms.gle/tNu16fnzJqADAVWJ6";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/renee-med-spa-natural-facelift-treatment";
        upDatedSpaPhone = "(480) 613-7764";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 minutes light cleansing";
        upDatedDurationTwo = "- 30 minutes Natural Facelift Treatment and a 15 minute Post Care and Consultation"
        promoPrice = "69.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (602) 962-8551";
        treatmentSelected = "Natural Facelift Treatment";
        newSpaPhoneNumberSelected = "(602) 962-8551";
        insteadOfSpa = "$377";
        break;

        case "Renova Skin Med Spa Natural Facelift $69.95":
        upDatedSpaName = "Renova Skin Med Spa";
        upDatedSpaAddress = "561 Cranbury Rd. East Brunswick, NJ 08816 "+"<br>"+"(STE F, Medical Arts and Surgical Center Building on Cranbury Road)";
        upDatedSpaLINK = "https://forms.gle/9fQcFgTyx4rk8CXS9";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/bDFb6jQgBHV215YB6";
        upDatedSpaWebLINK = "https://renova.firstouchbeauty.com/natural-facelift-69-95-book-page";
        upDatedSpaPhone = "(732) 867-7896";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = " -15 minutes Cleansing and 30 minutes Natural Facelift";
        upDatedDurationTwo = " -15 minutes Consultation";
        promoPrice = "69.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (609) 422-9463";
        treatmentSelected = "Natural Facelift Treatment";
        newSpaPhoneNumberSelected = "(609) 422-9463";
        insteadOfSpa = "$377"
        break;

        case "Renova Skin Med Spa Natural Facelift $79.95":
        upDatedSpaName = "Renova Skin Med Spa";
        upDatedSpaAddress = "561 Cranbury Rd. East Brunswick, NJ 08816 "+"<br>"+"(STE F, Medical Arts and Surgical Center Building on Cranbury Road)";
        upDatedSpaLINK = "https://forms.gle/9fQcFgTyx4rk8CXS9";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/bDFb6jQgBHV215YB6";
        upDatedSpaWebLINK = "https://renova.firstouchbeauty.com/natural-facelift-79-95-book-page";
        upDatedSpaPhone = "(732) 867-7896";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = " -15 minutes Cleansing and 30 minutes Natural Facelift";
        upDatedDurationTwo = " -15 minutes Consultation";
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (609) 422-9463";
        treatmentSelected = "Natural Facelift Treatment";
        newSpaPhoneNumberSelected = "(609) 422-9463";
        insteadOfSpa = "$377"
        break;

        case "Resveratrol LED 59.95":
        upDatedSpaName = "Resveratrol Spa";
        upDatedSpaAddress = "Biltmore Fashion Park" +"<br>"+"2502 E Camelback Rd, Phoenix, AZ 85016"+"<br>"+"(Between Skin Laundry and Pottery Barn)";
        upDatedSpaLINK = "https://docs.google.com/forms/d/e/1FAIpQLSc-Cl2YrrLTk92ckfwdIqIt8J5lEtsG30UsOIsfyFriHlgybA/viewform?usp=sf_link";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/resveratrol-biltmore-led-new-promo-page";
        upDatedSpaPhone = "(602) 887-9960 ";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 Minutes Light Cleaning";
        upDatedDurationTwo = "- 45 Minutes LED Light Session & Consultation";
        promoPrice = "59.95"
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (602) 935-5655";
        treatmentSelected = "LED Treatment";
        newSpaPhoneNumberSelected = "(602) 935-5655";
        insteadOfSpa = "$350";
        break;

        case "Rilassare Spa LED":
        upDatedSpaName = "Rilassare Spa";
        upDatedSpaAddress = "Galleria at Sunset Mall,"+"<br>"+"1300 W Sunset Rd, Unit 1237, Henderson, NV 89014"+"<br>"+"(First floor next to Forever 21)";
        upDatedSpaLINK = "https://forms.gle/hcJkZsBfyxRL7Brg6";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/nu3yKQAzNnk4D8yX8";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/rilassare-spa-promo-page";
        upDatedSpaPhone = "(725) 710-2050";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 10-minute Cleansing";
        upDatedDurationTwo = "- 35-minutes LED Anti-aging Treatment and 15-minutes Consultation"
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (720) 589-1628";
        treatmentSelected = "LED Treatment";
        newSpaPhoneNumberSelected = "(720) 589-1628";
        insteadOfSpa = "$350";
        break;

        case "Rose Spa Skin Tightening LED":
        upDatedSpaName = "Rose Spa";
        upDatedSpaAddress = "635 SW Morrison St, Portland, OR 97205" + "<br>" + "(Inside of the Wells Fargo Building, across from Pioneer Courthouse Square)";
        upDatedSpaLINK = " https://forms.gle/zx1bo5MnuVnqwXYaA ";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/rose-beauty-skin-tightening-with-led-technology";
        upDatedSpaPhone = "(971) 350-7408";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 40-LED Skin Tightening treatment";
        upDatedDurationTwo = "- 20 minutes Consultation";
        promoPrice = "59.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (503) 206-6696";
        treatmentSelected = "LED Treatment";
        newSpaPhoneNumberSelected = "(503) 206-6696";
        insteadOfSpa = "$350";
        break;

        case "Royal Bee Rosemont Natural Facelift 59":
        upDatedSpaName = "Royal Bee";
        upDatedSpaAddress = "5220 Fashion Outlet Way"+"<br>"+"Rosemont, IL. 60118"+"<br>"+"(First floor, in front of Bath & Body works)";
        upDatedSpaLINK = "https://forms.gle/PrdnpxyQLnMTFwFE6";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/royal-bee-rosemont-natural-facelift-treatment-59-95";
        upDatedSpaPhone = "(847) 230-7546";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15-minute Light Cleansing";
        upDatedDurationTwo = "- 45-minutes LED Anti-aging Treatment and Consultation"
        promoPrice = "59.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (919) 420-4647";
        treatmentSelected = "Natural Facelift Treatment";
        newSpaPhoneNumberSelected = "(919) 420-4647";
        insteadOfSpa = "$299";
        break;

        case "Royal Bee Spa LED 69.95":
        upDatedSpaName = "Royal Bee";
        upDatedSpaAddress = "Katy Mills Mall,"+"<br>"+"5000 Katy Mills Cir. Katy, TX 77494"+"<br>"+"(Ground Flr. Between The Rainforest Cafe and Marshalls)";
        upDatedSpaLINK = "https://forms.gle/wPtz1bB63FmzDMHr8";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/new-royal-bee-spa-promo-page";
        upDatedSpaPhone = "(737) 910-4135";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 10-minute Cleansing";
        upDatedDurationTwo = "- 30-minutes LED Anti-aging Treatment and 20-minutes Consultation"
        promoPrice = "69.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (832)-715-4897";
        treatmentSelected = "LED Treatment";
        newSpaPhoneNumberSelected = "(832)-715-4897";
        insteadOfSpa = "$299";
        break;

        case "Salo Spa Neck and Jawline $79.95":
        upDatedSpaName = "Salo Spa";
        upDatedSpaAddress = "25 SW Osceola St, Stuart, FL 34994"+"<br>"+"(Stuart Shopping Center next to Argento Jewelry)";
        upDatedSpaLINK = "https://forms.gle/JYGLkByUiafrnTcG7";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/aBQPiZoojTU6wrCv7";
        upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/salo-spa-neck-amp-jawline-promo-79-95";
        upDatedSpaPhone = "(772) 210-4257";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = " - 15 minutes Cleansing";
        upDatedDurationTwo = " - 30 minutes Neck & Jawline Treatment and 15 minutes Consultation";
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (954) 205-5411";
        treatmentSelected = "Neck & Jawline Treatment";
        newSpaPhoneNumberSelected = "(954) 205-5411";
        insteadOfSpa = "$377"
        break;

        case "Senslife Boutique Skin Tightening 99.95":
        upDatedSpaName = "Senslife Boutique";
        upDatedSpaAddress = "1 SE Ocean Ave & Monteverde St., Carmel-By-The-Sea, CA 93921"+"<br>"+"(Next to Meuse Gallery By SIMON BULL)";
        upDatedSpaLINK = "https://forms.gle/QZ8RwTcdks9qZTJu8";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/nsM8FrnrDFHjbbhx8";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/senslife-boutique-skin-tightening-99-95";
        upDatedSpaPhone = "(831) 330-8002";
        upDatedDurationTotal = "75 Minutes";
        upDatedDurationOne = "- 15 minutes Cleansing";
        upDatedDurationTwo = "- 30 minutes Skin Tightening Treatment and 15 minutes Post Care and Consultation"
        promoPrice = "99.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (831) 889-2314";
        treatmentSelected = "Skin Tightening Treatment";
        newSpaPhoneNumberSelected = "(831) 889-2314";
        insteadOfSpa = "$377";
        break;

        case "Sinfulicious LED 99.95":
        upDatedSpaName = "Sinfulicious";
        upDatedSpaAddress = "114 N Palm Canyon Dr. Palm Springs,  CA. 92262 United States"+"<br>"+"(Between Balboa Candy and Peepa's)"+"<br>"+"(In Front of Store)";
        upDatedSpaLINK = "https://forms.gle/qvo1ebyuCpyd8xVcA";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/RFLZDKNDWpau1jAN9";
        upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/sinfulicious-led-promo-page";
        upDatedSpaPhone = "(760) 406-4407";
        upDatedDurationTotal = "45 Minutes";
        upDatedDurationOne = "- 10 minutes light cleansing";
        upDatedDurationTwo = "- 35 minutes LED Anti-Aging Treatment and Consultation"
        promoPrice = "99.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (760) 459-3426";
        treatmentSelected = "LED Treatment";
        newSpaPhoneNumberSelected = "(760) 459-3426";
        insteadOfSpa = "$377";
        break;

        case "Skin Analytics Natural Facelift 89.95":
        upDatedSpaName = "Skin Analytics Spa";
        upDatedSpaAddress = "6910 Fayetteville Rd, Durham, NC 27713" +"<br>"+"(Southpoint Mall, ground floor next to Macy's across from Forever 21)";
        upDatedSpaLINK = "https://forms.gle/1he49LWJJgKBtHQD8";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/womzh3dJjfYHQdiS9";
        upDatedSpaWebLINK = "https://skin-analytics.noneedleneeded.com/natural-facelift-89-95-book-page"
        upDatedSpaPhone = "(919) 695-9376";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 Minutes Cleaning";
        upDatedDurationTwo = "- 30 Minutes Natural Facelift Treatment & a 15 minute Consultation"+"<br><br>"+"Dont Forget! You are eligible for a 25% off your next purchase at our spa :)";
        promoPrice = "89.95"
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (919) 405-2586";
        treatmentSelected = "Natural Facelift Treatment";
        newSpaPhoneNumberSelected = "(919) 405-2586";
        insteadOfSpa = "$377"
        break;

    
        case "Skin Analytics Triple Lift 89.95":
        upDatedSpaName = "Skin Analytics Spa";
        upDatedSpaAddress = "6910 Fayetteville Rd, Durham, NC 27713" +"<br>"+"(Southpoint Mall, ground floor next to Macy's across from Forever 21)";
        upDatedSpaLINK = "https://forms.gle/1he49LWJJgKBtHQD8";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/womzh3dJjfYHQdiS9";
        upDatedSpaWebLINK = "https://skin-analytics.noneedleneeded.com/triple-lift-booking"
        upDatedSpaPhone = "(919) 695-9376";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 Minutes Light Cleaning";
        upDatedDurationTwo = "- 30 Minutes Triple Lift Treatment & a 15 minute Consultation"+"<br><br>"+"Dont Forget! You are eligible for a 25% off your next purchase at our spa :)";
        promoPrice = "89.95"
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (919) 405-2586";
        treatmentSelected = "Triple Lift Treatment";
        newSpaPhoneNumberSelected = "(919) 405-2586";
        insteadOfSpa = "$399"
        break;

        case "Skin So Sweet Skin Tightening $59.95":
        upDatedSpaName = "Skin So Sweet";
        upDatedSpaAddress = "16456 Bolsa Chica St. Huntington Beach CA. 92649"+"<br>"+"(In the small plaza)";
        upDatedSpaLINK = " ";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/1iBNdU6iFuYiFUFH6";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/skin-so-sweet-skin-tightening-59-95";
        upDatedSpaPhone = "(714) 886 6067";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 45 minutes Skin Analysis and Skin Tightening Treatment";
        upDatedDurationTwo = "- 15 minutes Post Care and Consultation"
        promoPrice = "59.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (714) 203-3527";
        treatmentSelected = "Skin Tightening Treatment";
        newSpaPhoneNumberSelected = "(714) 203-3527";
        insteadOfSpa = "$377";
        break;

        case "Skin Technology Natural Skin Tightening $99.95":
        upDatedSpaName = "Skin Technology";
        upDatedSpaAddress = "1465 Salisbury Ave. Port Coquitlam, BC V3B 6J3"+"<br>"+"(Unit 125, First Floor inside the Medical Centre)";
        upDatedSpaLINK = "https://forms.gle/JUptjPtsmEtkHNqj6";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/kibEm4uyvm2V3r6o6";
        upDatedSpaWebLINK = "https://www.advancedbeautytreatments.com/pages/skin-technology-natural-skin-tightening-99-95-377";
        upDatedSpaPhone = "(672) 202-1808";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 45 minutes Cleansing and Natural Skin Tightening Treatment";
        upDatedDurationTwo = "- 15 minutes Consultation";
        promoPrice = "99.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (236) 258-6757";
        treatmentSelected = "Natural Skin Tightening Treatment";
        newSpaPhoneNumberSelected = "(236) 258-6757";
        insteadOfSpa = "$377"
        break;

        case "Skin Totale Below Zero Facelift $59.95":
        upDatedSpaName = "Skin Totale";
        upDatedSpaAddress = "309 E Katella Avenue, Orange, CA 92867"+"<br>"+"(Inside Katella Shopping Center, behind Marie Callender's Restaurant & Bakery, near 'Train with Dave')";
        upDatedSpaLINK = " ";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/f11qLG86Ze123w1aA";
        upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/skin-totale-med-spa-below-zero-facelift-promo-59-95";
        upDatedSpaPhone = "(714) 450-6547";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 45 minutes Skin Analysis and Below Zero Facelift Treatment";
        upDatedDurationTwo = "- 15 minutes Post Care and Consultation"
        promoPrice = "59.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (714) 852-5300";
        treatmentSelected = "Below Zero Facelift Treatment";
        newSpaPhoneNumberSelected = "(714) 852-5300";
        insteadOfSpa = "$377";
        break;

        case "Skin Totale Bye Bye Saggy Eyes $59.95":
        upDatedSpaName = "Skin Totale";
        upDatedSpaAddress = "309 E Katella Avenue, Orange, CA 92867"+"<br>"+"(Inside Katella Shopping Center, behind Marie Callender's Restaurant & Bakery, near 'Train with Dave')";
        upDatedSpaLINK = " ";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/f11qLG86Ze123w1aA";
        upDatedSpaWebLINK = "https://skintotale.firstouchbeauty.com/bye-bye-saggy-eyes-book";
        upDatedSpaPhone = "(714) 450-6547";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 45 minutes Cleansing and Bye Bye Saggy Eyes Treatment";
        upDatedDurationTwo = "- 15 minutes Post Care and Consultation"
        promoPrice = "59.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (714) 852-5300";
        treatmentSelected = "Bye Bye Saggy Eyes Treatment";
        newSpaPhoneNumberSelected = "(714) 852-5300";
        insteadOfSpa = "$377";
        break;

        case "Skin Totale Hydraglow Treatment $59.95":
        upDatedSpaName = "Skin Totale";
        upDatedSpaAddress = "309 E Katella Avenue, Orange, CA 92867"+"<br>"+"(Inside Katella Shopping Center, behind Marie Callender's Restaurant & Bakery, near 'Train with Dave')";
        upDatedSpaLINK = " ";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/f11qLG86Ze123w1aA";
        upDatedSpaWebLINK = "https://skintotale.firstouchbeauty.com/hydraglow-59-95-book";
        upDatedSpaPhone = "(714) 450-6547";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 minutes Cleansing and 30 miuntes of the Hydraglow Treatment";
        upDatedDurationTwo = "- 15 minutes Post Care and Consultation"
        promoPrice = "59.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (714) 852-5300";
        treatmentSelected = "Hydraglow Treatment";
        newSpaPhoneNumberSelected = "(714) 852-5300";
        insteadOfSpa = "$377";
        break;

        case "Skin Totale MEN Skin Tightening $59.95":
        upDatedSpaName = "Skin Totale";
        upDatedSpaAddress = "309 E Katella Avenue, Orange, CA 92867"+"<br>"+"(Inside Katella Shopping Center, behind Marie Callender's Restaurant & Bakery, near 'Train with Dave')";
        upDatedSpaLINK = " ";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/f11qLG86Ze123w1aA";
        upDatedSpaWebLINK = "https://skintotale.firstouchbeauty.com/men-natural-facelift-59-95";
        upDatedSpaPhone = "(714) 450-6547";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 45 minutes Skin Analysis and Lifting Facial Treatment";
        upDatedDurationTwo = "- 15 minutes Post Care and Consultation"
        promoPrice = "59.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (714) 852-5300";
        treatmentSelected = "Skin Tightening";
        newSpaPhoneNumberSelected = "(714) 852-5300";
        insteadOfSpa = "$377";
        break;

        case "Skin Totale Natural Facelift $59.95":
        upDatedSpaName = "Skin Totale";
        upDatedSpaAddress = "309 E Katella Avenue, Orange, CA 92867"+"<br>"+"(Inside Katella Shopping Center, behind Marie Callender's Restaurant & Bakery, near 'Train with Dave')";
        upDatedSpaLINK = " ";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/f11qLG86Ze123w1aA";
        upDatedSpaWebLINK = "https://skintotale.firstouchbeauty.com/natural-facelift-59-95-book";
        upDatedSpaPhone = "(714) 450-6547";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 45 minutes Skin Analysis and Lifting Facial Treatment";
        upDatedDurationTwo = "- 15 minutes Post Care and Consultation"
        promoPrice = "59.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (714) 852-5300";
        treatmentSelected = "Natural Facelift";
        newSpaPhoneNumberSelected = "(714) 852-5300";
        insteadOfSpa = "$377";
        break;

        case "Skin Totale Neck and Jawline Lifting $59.95":
        upDatedSpaName = "Skin Totale";
        upDatedSpaAddress = "309 E Katella Avenue, Orange, CA 92867"+"<br>"+"(Inside Katella Shopping Center, behind Marie Callender's Restaurant & Bakery, near 'Train with Dave')";
        upDatedSpaLINK = " ";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/f11qLG86Ze123w1aA";
        upDatedSpaWebLINK = "https://skintotale.firstouchbeauty.com/neck-and-jawline-59-95-book";
        upDatedSpaPhone = "(714) 450-6547";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 45 minutes Skin Analysis and Neck and Jawline Lifting Treatment";
        upDatedDurationTwo = "- 15 minutes Post Care and Consultation"
        promoPrice = "59.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (714) 852-5300";
        treatmentSelected = "Neck and Jawline Lifting Treatment";
        newSpaPhoneNumberSelected = "(714) 852-5300";
        insteadOfSpa = "$377";
        break;

        case "Skin Totale Triple Lift $59.95":
        upDatedSpaName = "Skin Totale";
        upDatedSpaAddress = "309 E Katella Avenue, Orange, CA 92867"+"<br>"+"(Inside Katella Shopping Center, behind Marie Callender's Restaurant & Bakery, near 'Train with Dave')";
        upDatedSpaLINK = " ";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/f11qLG86Ze123w1aA";
        upDatedSpaWebLINK = "https://skintotale.firstouchbeauty.com/triple-lift-booking";
        upDatedSpaPhone = "(714) 450-6547";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 45 minutes Skin Analysis and Triple Lift Treatment";
        upDatedDurationTwo = "- 15 minutes Post Care and Consultation"
        promoPrice = "59.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (714) 852-5300";
        treatmentSelected = "Triple Lift Treatment";
        newSpaPhoneNumberSelected = "(714) 852-5300";
        insteadOfSpa = "$377";
        break;

        case "Skin Totale Lift and Hydrate $59.95":
        upDatedSpaName = "Skin Totale";
        upDatedSpaAddress = "309 E Katella Avenue, Orange, CA 92867"+"<br>"+"(Inside Katella Shopping Center, behind Marie Callender's Restaurant & Bakery, near 'Train with Dave')";
        upDatedSpaLINK = " ";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/f11qLG86Ze123w1aA";
        upDatedSpaWebLINK = "https://skintotale.firstouchbeauty.com/lift-and-hydrate-book";
        upDatedSpaPhone = "(714) 450-6547";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 45 minutes Skin Analysis and Lift and Hydrate Treatment";
        upDatedDurationTwo = "- 15 minutes Post Care and Consultation"
        promoPrice = "59.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (714) 852-5300";
        treatmentSelected = "Lift and Hydrate Treatment";
        newSpaPhoneNumberSelected = "(714) 852-5300";
        insteadOfSpa = "$377";
        break;

        case "Skin Totale San Juan 3 in 1 Skin Tightening $59.95":
        upDatedSpaName = "Skin Totale Med Spa";
        upDatedSpaAddress = "31878 Del Obispo Street, Suite 108, San Juan Capistrano, California 92675"+"<br>"+"(Inside of Plaza Del Obispo next to Thai Juan On restaurant)";
        upDatedSpaLINK = "https://forms.gle/2hnUPuVpmGVKzPSEA";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/3Qs7nBrjtQ25gJwh7";
        upDatedSpaWebLINK = "https://skintotalesj.noneedleneeded.com/3-in-1-skin-tightening-59-95-book";
        upDatedSpaPhone = "(949) 339-3541";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 45 minutes Skin Analysis, Cleansing and 3 in 1 Skin Tightening Treatment";
        upDatedDurationTwo = "- 15 minutes Post Care and Consultation"
        promoPrice = "59.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (949) 514-6192";
        treatmentSelected = "3 in 1 Skin Tightening Treatment";
        newSpaPhoneNumberSelected = "(949) 514-6192";
        insteadOfSpa = "$377";
        break;

        case "Skin Totale San Juan Anti-Aging Facial $59.95":
        upDatedSpaName = "Skin Totale Med Spa";
        upDatedSpaAddress = "31878 Del Obispo Street, Suite 108, San Juan Capistrano, California 92675"+"<br>"+"(Inside of Plaza Del Obispo next to Thai Juan On restaurant)";
        upDatedSpaLINK = "https://forms.gle/2hnUPuVpmGVKzPSEA";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/3Qs7nBrjtQ25gJwh7";
        upDatedSpaWebLINK = "https://skintotalesj.noneedleneeded.com/booking-anti-aging-facial-59-95-ltb";
        upDatedSpaPhone = "(949) 339-3541";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 45 minutes Skin Analysis, Deep Cleansing and Anti-Aging Facial Treatment";
        upDatedDurationTwo = "- 15 minutes Post Care and Consultation"
        promoPrice = "59.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (949) 514-6192";
        treatmentSelected = "Anti-Aging Facial Treatment";
        newSpaPhoneNumberSelected = "(949) 514-6192";
        insteadOfSpa = "$377";
        break;

        case "Skin Totale San Juan Bye Bye Saggy Eyes $59.95":
        upDatedSpaName = "Skin Totale Med Spa";
        upDatedSpaAddress = "31878 Del Obispo Street, Suite 108, San Juan Capistrano, California 92675"+"<br>"+"(Inside of Plaza Del Obispo next to Thai Juan On restaurant)";
        upDatedSpaLINK = "https://forms.gle/2hnUPuVpmGVKzPSEA";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/3Qs7nBrjtQ25gJwh7";
        upDatedSpaWebLINK = "https://skintotalesj.noneedleneeded.com/bye-bye-saggy-eyes-book";
        upDatedSpaPhone = "(949) 339-3541";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 45 minutes Skin Analysis, Cleansing and Bye Bye Saggy Eyes Treatment";
        upDatedDurationTwo = "- 15 minutes Post Care and Consultation"
        promoPrice = "59.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (949) 514-6192";
        treatmentSelected = "Bye Bye Saggy Eyes Treatment";
        newSpaPhoneNumberSelected = "(949) 514-6192";
        insteadOfSpa = "$377";
        break;

        case "Skin Totale San Juan Hydraglow $59.95":
        upDatedSpaName = "Skin Totale Med Spa";
        upDatedSpaAddress = "31878 Del Obispo Street, Suite 108, San Juan Capistrano, California 92675"+"<br>"+"(Inside of Plaza Del Obispo next to Thai Juan On restaurant)";
        upDatedSpaLINK = "https://forms.gle/2hnUPuVpmGVKzPSEA";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/3Qs7nBrjtQ25gJwh7";
        upDatedSpaWebLINK = "https://skintotalesj.noneedleneeded.com/hydraglow-59-95-book";
        upDatedSpaPhone = "(949) 339-3541";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 45 minutes Skin Analysis, Cleansing and Hydraglow Treatment";
        upDatedDurationTwo = "- 15 minutes Post Care and Consultation"
        promoPrice = "59.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (949) 514-6192";
        treatmentSelected = "Hydraglow Treatment";
        newSpaPhoneNumberSelected = "(949) 514-6192";
        insteadOfSpa = "$377";
        break;

        case "Skin Totale San Juan Lift and Hydrate $59.95":
        upDatedSpaName = "Skin Totale Med Spa";
        upDatedSpaAddress = "31878 Del Obispo Street, Suite 108, San Juan Capistrano, California 92675"+"<br>"+"(Inside of Plaza Del Obispo next to Thai Juan On restaurant)";
        upDatedSpaLINK = "https://forms.gle/2hnUPuVpmGVKzPSEA";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/3Qs7nBrjtQ25gJwh7";
        upDatedSpaWebLINK = "https://skintotalesj.noneedleneeded.com/lift-and-hydrate-book";
        upDatedSpaPhone = "(949) 339-3541";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 45 minutes Skin Analysis, Cleansing and Lift and Hydrate Treatment";
        upDatedDurationTwo = "- 15 minutes Post Care and Consultation"
        promoPrice = "59.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (949) 514-6192";
        treatmentSelected = "Lift and Hydrate Treatment";
        newSpaPhoneNumberSelected = "(949) 514-6192";
        insteadOfSpa = "$377";
        break;

        case "Skin Totale San Juan Men Skin Tightening $59.95":
        upDatedSpaName = "Skin Totale Med Spa";
        upDatedSpaAddress = "31878 Del Obispo Street, Suite 108, San Juan Capistrano, California 92675"+"<br>"+"(Inside of Plaza Del Obispo next to Thai Juan On restaurant)";
        upDatedSpaLINK = "https://forms.gle/2hnUPuVpmGVKzPSEA";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/3Qs7nBrjtQ25gJwh7";
        upDatedSpaWebLINK = "https://skintotalesj.noneedleneeded.com/men-natural-facelift-59-95";
        upDatedSpaPhone = "(949) 339-3541";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 45 minutes Skin Analysis, Deep Cleansing and Skin Tightening Treatment";
        upDatedDurationTwo = "- 15 minutes Post Care and Consultation"
        promoPrice = "59.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (949) 514-6192";
        treatmentSelected = "Men Skin Tightening Treatment";
        newSpaPhoneNumberSelected = "(949) 514-6192";
        insteadOfSpa = "$377";
        break;

        case "Skin Totale San Juan Natural Facelift $59.95":
        upDatedSpaName = "Skin Totale Med Spa";
        upDatedSpaAddress = "31878 Del Obispo Street, Suite 108, San Juan Capistrano, California 92675"+"<br>"+"(Inside of Plaza Del Obispo next to Thai Juan On restaurant)";
        upDatedSpaLINK = "https://forms.gle/2hnUPuVpmGVKzPSEA";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/3Qs7nBrjtQ25gJwh7";
        upDatedSpaWebLINK = "https://skintotalesj.noneedleneeded.com/booking-natural-facelift-59-n";
        upDatedSpaPhone = "(949) 339-3541";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 45 minutes Skin Analysis, Deep Cleansing and Natural Facelift Treatment";
        upDatedDurationTwo = "- 15 minutes Post Care and Consultation"
        promoPrice = "59.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (949) 514-6192";
        treatmentSelected = "Natural Facelift Treatment";
        newSpaPhoneNumberSelected = "(949) 514-6192";
        insteadOfSpa = "$377";
        break;

        case "Skin Totale San Juan Natural Skin Tightening $59.95":
        upDatedSpaName = "Skin Totale Med Spa";
        upDatedSpaAddress = "31878 Del Obispo Street, Suite 108, San Juan Capistrano, California 92675"+"<br>"+"(Inside of Plaza Del Obispo next to Thai Juan On restaurant)";
        upDatedSpaLINK = "https://forms.gle/2hnUPuVpmGVKzPSEA";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/3Qs7nBrjtQ25gJwh7";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/skin-totale-san-juan-natural-skin-tightening-59-95";
        upDatedSpaPhone = "(949) 339-3541";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 45 minutes Skin Analysis, Deep Cleansing and Natural Skin Tightening Treatment";
        upDatedDurationTwo = "- 15 minutes Post Care and Consultation"
        promoPrice = "59.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (949) 514-6192";
        treatmentSelected = "Natural Skin Tightening Treatment";
        newSpaPhoneNumberSelected = "(949) 514-6192";
        insteadOfSpa = "$377";
        break;

        case "Skin Totale San Juan Neck and Jawline $59.95":
        upDatedSpaName = "Skin Totale Med Spa";
        upDatedSpaAddress = "31878 Del Obispo Street, Suite 108, San Juan Capistrano, California 92675"+"<br>"+"(Inside of Plaza Del Obispo next to Thai Juan On restaurant)";
        upDatedSpaLINK = "https://forms.gle/2hnUPuVpmGVKzPSEA";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/3Qs7nBrjtQ25gJwh7";
        upDatedSpaWebLINK = "https://skintotalesj.noneedleneeded.com/neck-and-jawline-59-95-book";
        upDatedSpaPhone = "(949) 339-3541";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 45 minutes Skin Analysis, Deep Cleansing and Neck and Jawline Treatment";
        upDatedDurationTwo = "- 15 minutes Post Care and Consultation"
        promoPrice = "59.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (949) 514-6192";
        treatmentSelected = "Neck and Jawline Treatment";
        newSpaPhoneNumberSelected = "(949) 514-6192";
        insteadOfSpa = "$377";
        break;

        case "Skin Totale San Juan Triple Lift $59.95":
        upDatedSpaName = "Skin Totale Med Spa";
        upDatedSpaAddress = "31878 Del Obispo Street, Suite 108, San Juan Capistrano, California 92675"+"<br>"+"(Inside of Plaza Del Obispo next to Thai Juan On restaurant)";
        upDatedSpaLINK = "https://forms.gle/2hnUPuVpmGVKzPSEA";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/3Qs7nBrjtQ25gJwh7";
        upDatedSpaWebLINK = "https://skintotalesj.noneedleneeded.com/triple-lift-booking";
        upDatedSpaPhone = "(949) 339-3541";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 45 minutes Skin Analysis, Deep Cleansing and Triple Lift Treatment";
        upDatedDurationTwo = "- 15 minutes Post Care and Consultation"
        promoPrice = "59.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (949) 514-6192";
        treatmentSelected = "Triple Lift Treatment";
        newSpaPhoneNumberSelected = "(949) 514-6192";
        insteadOfSpa = "$377";
        break;

        case "Skinetica Med Spa Turkey Neck Rescue 59.95":
        upDatedSpaName = "Skinetica Med Spa";
        upDatedSpaAddress = "4765 Carmel Mountain Rd. San Diego, CA 92130"+"<br>"+"(STE 201, Torry Hills Medical & Dental Plaza second floor)";
        upDatedSpaLINK = "https://forms.gle/MjzRnX4ezYiN6wSQ8";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/Vx2NYUntJdPdf5b56";
        upDatedSpaWebLINK = "https://www.advancedbeautytreatments.com/pages/skinetica-med-spa-turkey-neck-rescue-59-95" ;
        upDatedSpaPhone = "(619) 853-2025";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 45 Minutes Turkey Neck Rescue Treatment ";
        upDatedDurationTwo = "- 15 minutes Consultation";
        promoPrice = "59.95"
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (858) 261-0082";
        treatmentSelected = "Turkey Neck Rescue Treatment";
        newSpaPhoneNumberSelected = "(858) 261-0082";
        insteadOfSpa = "$377"
        break;

        case "SkinTech Spa Men's LED $59.95":
        upDatedSpaName = "SkinTech Spa";
        upDatedSpaAddress = "Mira Vista Office Building,"+"<br>"+"6100 Southwest Blvd #100 Benbrook, TX 76109, USA"+"<br>"+"(First Floor)";
        upDatedSpaLINK = "https://forms.zohopublic.com/skintechspa/form/SKINTECHSPAFACIALFORMANDHIPPAFORM/formperma/QP2srStVFR-iWxO1_eeJ9S24S89sZbawbL11BS2LjB0";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/skintech-mens-led-facial-promo-page";
        upDatedSpaPhone = "(682) 900-3832";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15-minute skin analysis"+"<br>"+"30 minutes of Cleansing & LED Anti-aging treatment";
        upDatedDurationTwo = "- 15 minute Post-Care Consultation";
        promoPrice = "59.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (214) 616-4827";
        treatmentSelected = "LED Treatment";
        newSpaPhoneNumberSelected = "(214) 616-4827";
        insteadOfSpa = "$299";
        break;

        case "SKT Med Spa Ultrasonic Facelift $79.95":
        upDatedSpaName = "SKT Med Spa";
        upDatedSpaAddress = "542 N El Camino Real, San Clemente, CA. 92672"+"<br>"+"(Right next to Pedro's Tacos.)";
        upDatedSpaLINK = "https://forms.gle/3JJAoYwPkEP4H5z57";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/n87RmEbqQApgLm5v8";
        upDatedSpaWebLINK = "https://www.advancedbeautytreatments.com/pages/skt-ultrasonic-facelift-79";
        upDatedSpaPhone = "(949) 629-4609";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 10 minuntes Cleansing and 30 minutes Ultrasonic Facelift";
        upDatedDurationTwo = "- 20 minutes Post Care and Consultation"
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (949) 545-7129";
        treatmentSelected = "Ultrasonic Facelift";
        newSpaPhoneNumberSelected = "(949) 545-7129";
        insteadOfSpa = "$350";
        break;

        case "Sky Med Spa Natural Facelift 59.95":
        upDatedSpaName = "Sky Med Spa";
        upDatedSpaAddress = "450 A St. San Diego, CA 92101"+"<br>"+"(4th Floor, Ste 400, just next to the Paul Mitchell School)"+"<br>"+"Park at 501 A St Premium Parking - P1080 (Foley Parking Complex)"+"<br>"+"Sunday: free street parking.";
        upDatedSpaLINK = "https://forms.gle/FyXERa9QLfAfDbEA6";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/ryGVrzx8At9Cw2ZD7";
        upDatedSpaWebLINK = "https://www.advancedbeautytreatments.com/pages/sky-med-spa-natural-facelift-59-95-377";
        upDatedSpaPhone = "(619) 413-0022";
        upDatedDurationTotal = "75 Minutes";
        upDatedDurationOne = "- 20-minute Light Cleansing";
        upDatedDurationTwo = "- 35-minutes Natural Facelift Treatment and 20 minutes Consultation"
        promoPrice = "59.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (619) 379-7301";
        treatmentSelected = "Natural Facelift Treatment";
        newSpaPhoneNumberSelected = "(619) 379-7301";
        insteadOfSpa = "$377";
        break;

        case "Soap Tree Grapevine Skin Tightening $69.95":
        upDatedSpaName = "Soap Tree";
        upDatedSpaAddress = "Grapevine Mills,"+"<br>"+"3000 Grapevine Mills Pkwy. Grapevine, TX 76051"+"<br>"+"(Unit 302B, Inside the mall, Located across from Meow Wolf, Next to Peppa Pig World of Play)"+"<br>"+"(Park near ENTRANCE 3, it's the closest entrance to the spa.)"+"<br>"+"(Alternatively from the parking lot, enter through Meow Wolf. Once you’re inside the mall, you’ll see the spa just across and a little to the right.)";;
        upDatedSpaLINK = "https://forms.gle/Q9TV432wjtbToHKW9";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/5DnJ7a5f1ydRe5x49";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/soap-tree-grapevine-skin-tightening-promo" ;
        upDatedSpaPhone = "(214) 831-9397";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 minutes Cleansing";
        upDatedDurationTwo = "- 30 minutes Skin Tightening Treatment and 15 minutes post-care and consultation";
        promoPrice = "69.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (214) 713-8689";
        treatmentSelected = "Skin Tightening Treatment";
        newSpaPhoneNumberSelected = "(214) 713-8689";
        insteadOfSpa = "$377"
        break;

        case "Solei Beauty Lounge Natural Facelift $69.95":
        upDatedSpaName = "Solei Beauty Lounge";
        upDatedSpaAddress = "1660 S Albion St Denver CO 80222"+"<br>"+"(Office building, floor number 10, unit number 1020)";
        upDatedSpaLINK = "https://forms.gle/JjPxBTu86e3Ad7bf8";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/c8f7ZYLgdqKxkRKe7";
        upDatedSpaWebLINK = "https://soleibeautylounge.firstouchbeauty.com/natural-facelift-69-95-book-page";
        upDatedSpaPhone = "(720) 542-6696";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 minutes Cleansing";
        upDatedDurationTwo = "- 30 minutes Natural Facelift Treatment and 15 minutes Consultation";
        promoPrice = "69.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (303) 284-5624";
        treatmentSelected = "Natural Facelift Treatment";
        newSpaPhoneNumberSelected = "(303) 284-5624";
        insteadOfSpa = "$377"
        break;

        case "Solei Beauty Lounge Triple Lift $69.95":
        upDatedSpaName = "Solei Beauty Lounge";
        upDatedSpaAddress = "1660 S Albion St Denver CO 80222"+"<br>"+"(Office building, floor number 10, unit number 1020)";
        upDatedSpaLINK = "https://forms.gle/JjPxBTu86e3Ad7bf8";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/c8f7ZYLgdqKxkRKe7";
        upDatedSpaWebLINK = "https://soleibeautylounge.firstouchbeauty.com/triple-lift-69-book";
        upDatedSpaPhone = "(720) 542-6696";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 minutes Cleansing";
        upDatedDurationTwo = "- 30 minutes Triple Lift Treatment and 15 minutes Consultation";
        promoPrice = "69.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (303) 284-5624";
        treatmentSelected = "Triple Lift Treatment";
        newSpaPhoneNumberSelected = "(303) 284-5624";
        insteadOfSpa = "$377"
        break;

        case "Spa and Co Fernandina Beach Skin Tightening $99.95":
        upDatedSpaName = "Spa and Co";
        upDatedSpaAddress = "103 Centre St. Fernandina Beach, FL 32034"+"<br>"+"(Main Street)";
        upDatedSpaLINK = "https://forms.gle/vWLHTxE8UqcEmTqm6";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/RxpgdzaXjN58qH2E7";
        upDatedSpaWebLINK = "https://www.advancedbeautytreatments.com/pages/spa-and-co-skin-tightening-99-95-377";
        upDatedSpaPhone = "(904) 452-8539";
        upDatedDurationTotal = "45 Minutes";
        upDatedDurationOne = " - 15 minutes Cleansing";
        upDatedDurationTwo = " - 30 minutes Skin Tightening Treatment and Post Care and Consultation";
        promoPrice = "99.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (904) 432-7364";
        treatmentSelected = "Skin Tightening Treatment";
        newSpaPhoneNumberSelected = "(904) 432-7364";
        insteadOfSpa = "$377"
        break;

        case "Spa De Solei LED":
        upDatedSpaName = "Spa De Solei";
        upDatedSpaAddress = "1026 N Fairfax Ave. West Hollywood, CA 90046"+"<br>"+"(Rio Beauty Lounge Street Store)";
        upDatedSpaLINK = "https://forms.gle/zb8L36aK2hCgHm366";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/spa-de-solei-promo-page";
        upDatedSpaPhone = "(323) 484-5791";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 45-minute LED Anti-aging Treatment";
        upDatedDurationTwo = "- 15-minutes Consultation"
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (808) 630-9245";
        treatmentSelected = "LED Treatment";
        newSpaPhoneNumberSelected = "(808) 630-9245";
        insteadOfSpa = "$300";
        break;

        case "Spa De Solei LED 69.95":
        upDatedSpaName = "Spa De Solei";
        upDatedSpaAddress = "1026 N Fairfax Ave. West Hollywood, CA 90046"+"<br>"+"(Rio Beauty Lounge Street Store)";
        upDatedSpaLINK = "https://forms.gle/zb8L36aK2hCgHm366";
        upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/new-spa-de-solei-led-promo";
        upDatedSpaPhone = "(323) 484-5791";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 45-minute LED Anti-aging Treatment";
        upDatedDurationTwo = "- 15-minutes Consultation"
        promoPrice = "69.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (808) 630-9245";
        treatmentSelected = "LED Treatment";
        newSpaPhoneNumberSelected = "(808) 630-9245";
        insteadOfSpa = "$377";
        break;

        case "Spa De Solei Neck and Jawline 69.95":
        upDatedSpaName = "Spa De Solei";
        upDatedSpaAddress = "1026 N Fairfax Ave. West Hollywood, CA 90046"+"<br>"+"(Rio Beauty Lounge Street Store)";
        upDatedSpaLINK = "https://forms.gle/zb8L36aK2hCgHm366";
        upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/spa-de-soleil-neck-and-jawline-treatment-page";
        upDatedSpaPhone = "(323) 484-5791";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15-minute light cleansing";
        upDatedDurationTwo = "- 45-minute Neck and Jawline Treatment and Consultation"
        promoPrice = "69.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (808) 630-9245";
        treatmentSelected = "Neck and Jawline Tightening Treatment";
        newSpaPhoneNumberSelected = "(808) 630-9245";
        insteadOfSpa = "$377";
        break;

        case "Stem Spa Redding Skin Tightening $89.95":
        upDatedSpaName = "Introstem";
        upDatedSpaAddress = "900 Dana Dr Redding, CA 96003"+"<br>"+"(Mt. Shasta Mall, next to Auntie Anne's)";
        upDatedSpaLINK = "https://forms.gle/Eqg9xCBYDHTLCcz16";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/hcevL11qy71asiiD6";
        upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/introstem-redding-skin-tightening-89-95";
        upDatedSpaPhone = "(530) 250-4950";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 minutes Cleansing";
        upDatedDurationTwo = "- 30 minutes Skin Tightening treatment & 15 minutes Consultation";
        promoPrice = "89.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (530) 768-1056";
        treatmentSelected = "Skin Tightening Treatment";
        newSpaPhoneNumberSelected = "(530) 768-1056";
        insteadOfSpa = "$377";
        break;

        case "Sthetics Med Spa Turkey Neck Tightening $69.95":
        upDatedSpaName = "Sthetics Med Spa";
        upDatedSpaAddress = "450 A St. San Diego, CA 92101"+"<br>"+"(4th Floor, Ste 400, just next to the Paul Mitchell School)"+"<br>"+"Park at 501 A St Premium Parking - P1080 (Foley Parking Complex)"+"<br>"+"Sunday: free street parking.";
        upDatedSpaLINK = "https://forms.gle/FyXERa9QLfAfDbEA6";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/ryGVrzx8At9Cw2ZD7";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/sthetics-med-spa-turkey-neck-tightening-treatment-promo";
        upDatedSpaPhone = "(619) 413-0022";
        upDatedDurationTotal = "75 Minutes";
        upDatedDurationOne = "- 15-minute Consultation";
        upDatedDurationTwo = "- 60-minutes Turkey Neck Tightening Treatment"
        promoPrice = "69.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (619) 379-7301";
        treatmentSelected = "Turkey Neck Tightening Treatment";
        newSpaPhoneNumberSelected = "(619) 379-7301";
        insteadOfSpa = "$377";
        break;

        case "Supreme Brea Natural Facelift $79.95":
        upDatedSpaName = "Supreme Spa";
        upDatedSpaAddress = "910 E birch st. suite #200, Brea, CA 92821"+"<br>"+"[Embassy court near embassy hotel Ground floor (#2 in the elevator)] Please use underground parking of the Embassy Hotel";
        upDatedSpaLINK = "https://forms.gle/4x1BvF7zdW75rkCg8";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/UN6PLvikjEUKiJEV6";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/supreme-brea-natural-face-lift-promo-79-95" ;
        upDatedSpaPhone = "(714) 988-2959";
        upDatedDurationTotal = "90 Minutes";
        upDatedDurationOne = "- 30 Minutes Cleaning";
        upDatedDurationTwo = "- 60 Minutes Natural Facelift Treatment & Consultation";
        promoPrice = "79.95"
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (714) 784-6884";
        treatmentSelected = "Natural Facelift Treatment";
        newSpaPhoneNumberSelected = "(714) 784-6884";
        insteadOfSpa = "$350"
        break;

        case "Tesoro Mio Spa Bye Bye Saggy Eyes $49.95":
        upDatedSpaName = "Tesoro Mio Spa";
        upDatedSpaAddress = "201 Central Ave. Whitefish, MT, 59937"+"<br>"+"(Downtown Whitefish)";
        upDatedSpaLINK = "https://forms.gle/vZThh2XQUKSwE6TP8";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/HgBKZ3Da6xHjFCx79";
        upDatedSpaWebLINK = "https://tesoro-mio.advancedbeautytreatments.com/bye-bye-saggy-eyes-book";
        upDatedSpaPhone = "(406) 919-7560";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15-minutes of Consultation";
        upDatedDurationTwo = "- 45-minutes Bye Bye Saggy Eyes Treatment"
        promoPrice = "49.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (406) 885-1321";
        treatmentSelected = "Bye Bye Saggy Eyes Treatment";
        newSpaPhoneNumberSelected = "(406) 885-1321";
        insteadOfSpa = "$199";
        break;

        case "Tesoro Mio Spa Lift and Hydrate $49.95":
        upDatedSpaName = "Tesoro Mio Spa";
        upDatedSpaAddress = "201 Central Ave. Whitefish, MT, 59937"+"<br>"+"(Downtown Whitefish)";
        upDatedSpaLINK = "https://forms.gle/vZThh2XQUKSwE6TP8";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/HgBKZ3Da6xHjFCx79";
        upDatedSpaWebLINK = "https://tesoro-mio.advancedbeautytreatments.com/lift-and-hydrate-book";
        upDatedSpaPhone = "(406) 919-7560";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15-minutes of Consultation";
        upDatedDurationTwo = "- 45-minutes Lift and Hydrate Treatment"
        promoPrice = "49.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (406) 885-1321";
        treatmentSelected = "Lift and Hydrate Treatment";
        newSpaPhoneNumberSelected = "(406) 885-1321";
        insteadOfSpa = "$199";
        break;

        case "Tesoro Mio Spa Natural Facelift $49.95":
        upDatedSpaName = "Tesoro Mio Spa";
        upDatedSpaAddress = "201 Central Ave. Whitefish, MT, 59937"+"<br>"+"(Downtown Whitefish)";
        upDatedSpaLINK = "https://forms.gle/vZThh2XQUKSwE6TP8";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/HgBKZ3Da6xHjFCx79";
        upDatedSpaWebLINK = "https://www.advancedbeautytreatments.com/pages/tesoro-mio-natural-facelift-49-95-199";
        upDatedSpaPhone = "(406) 919-7560";
        upDatedDurationTotal = "75 Minutes";
        upDatedDurationOne = "- 60 minutes of Natural Facelift Treatment";
        upDatedDurationTwo = "- 15 minutes of Consultation"
        promoPrice = "49.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (406) 885-1321";
        treatmentSelected = "Natural Facelift";
        newSpaPhoneNumberSelected = "(406) 885-1321";
        insteadOfSpa = "$199";
        break;

        case "Tesoro Mio Spa Neck and Jawline $49.95":
        upDatedSpaName = "Tesoro Mio Spa";
        upDatedSpaAddress = "201 Central Ave. Whitefish, MT, 59937"+"<br>"+"(Downtown Whitefish)";
        upDatedSpaLINK = "https://forms.gle/vZThh2XQUKSwE6TP8";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/HgBKZ3Da6xHjFCx79";
        upDatedSpaWebLINK = "https://tesoro-mio.advancedbeautytreatments.com/neck-and-jawline-49";
        upDatedSpaPhone = "(406) 919-7560";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15-minutes of Consultation";
        upDatedDurationTwo = "- 45-minutes Neck and Jawline Treatment"
        promoPrice = "49.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (406) 885-1321";
        treatmentSelected = "Neck and Jawline Treatment";
        newSpaPhoneNumberSelected = "(406) 885-1321";
        insteadOfSpa = "$199";
        break;

        case "TG - AVOLOGI Eneo Metrotown Natural Facelift $79.95":
        upDatedSpaName = "Avologi Eneo";
        upDatedSpaAddress = "Metrotown Mall, 4700 Kingsway #1170, Burnaby, BC V5H 4M5, Canada"+"<br>"+"(Ground level in the Indigo Books wing, at the bottom of the escalator)";
        upDatedSpaLINK = "https://forms.gle/c8TFXfwBMpLd3TcM6";
        upDatedSpaMapLINK = "https://www.metropolisatmetrotown.com/interactive-map/#/";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/tg-avologi-metrotown-natural-facelift-promo";
        upDatedSpaPhone = "(778) 910-1179";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 40 Minutes Cleansing and Natural Facelift Treatment";
        upDatedDurationTwo = "- 20 Minutes Consultation with Skin Specialist";
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (778) 910-1179";
        treatmentSelected = "Natural Facelift Treatment";
        newSpaPhoneNumberSelected = "(778) 910-1179";
        insteadOfSpa = "$377";
        break;

        case "The Beauty Lab Skin Tight 79.95":
        upDatedSpaName = "The Beauty Lab";
        upDatedSpaAddress = "West Edmonton Mall,"+"<br>"+"8882 170 St NW, Edmonton, AB T5T 4J2"+"<br>"+"Phase I, Ground Floor. Between Miniso and Angela's Hair Styling";
        upDatedSpaLINK = "https://forms.gle/v5UNtbD95MgyDfAa9";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/ndwdtmNsqH8FKRNf9";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/the-beauty-lab-natural-facelift-treatment";
        upDatedSpaPhone = "(587) 208-3432";
        upDatedDurationTotal = "45 Minutes";
        upDatedDurationOne = "- 15 minutes light cleansing";
        upDatedDurationTwo = "- 30 minutes Skin Tightening Treatment and Post Care and Consultation"
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (587) 800-1699";
        treatmentSelected = "Skin Tightening Treatment";
        newSpaPhoneNumberSelected = "(587) 800-1699";
        insteadOfSpa = "$377";
        break;

        case "The Glow Med Spa Skin Tightening 59.95":
        upDatedSpaName = "The Glow Med Spa";
        upDatedSpaAddress = "937 S Coast Hwy 101, Encinitas, CA 92024"+"<br>"+"(Unit 100, At the plaza between The doughnut shop and the barbershop)";
        upDatedSpaLINK = "https://forms.gle/u9CoVLbPmLxcHUNm7";
        upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/the-glow-med-spa-skin-tightening-59-95";
        upDatedSpaPhone = "(760) 683-2256";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 minutes Cleansing";
        upDatedDurationTwo = "- 30 minutes Skin Tightening Treatment and 15 minutes Consultation"
        promoPrice = "59.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (760) 452-6073";
        treatmentSelected = "Skin Tightening Treatment";
        newSpaPhoneNumberSelected = "(760) 452-6073";
        insteadOfSpa = "$299";
        break;


        case "The Soap Tree 69.95":
        upDatedSpaName = "The Soap Tree";
        upDatedSpaAddress = "The Mall at Tuttle Crossing"+"<br>"+"5043 Tuttle Crossing Blvd, Dublin, Ohio 43016"+"<br>"+"(First floor near sunglasses hut)";
        upDatedSpaLINK = "https://forms.gle/QZeUWwaHiUZESaHx6";
        upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/new-soap-tree-spa-led-promo";
        upDatedSpaPhone = "(614) 763-2688";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15-minutes of Cleansing";
        upDatedDurationTwo = "- 45-minutes LED Anti-Aging Treatment & Consultation"
        promoPrice = "69.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (614) 370-2401";
        treatmentSelected = "LED Treatment";
        newSpaPhoneNumberSelected = "(614) 370-2401";
        insteadOfSpa = "$350";
        break;

        case "The Soap Tree Branson":
        upDatedSpaName = "The Soap Tree";
        upDatedSpaAddress = "100 Branson Landing Blvd. Branson, Missouri 65616"+"<br>"+"(Unit 223, Next to Victoria's Secret)";
        upDatedSpaLINK = "https://forms.gle/2ZJCkLAfbswgUjNL9";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/the-soap-tree-spa-mo-led-promo-page";
        upDatedSpaPhone = "417) 708-0054";
        upDatedDurationTotal = "45 Minutes";
        upDatedDurationOne = "- 5-10 minutes of Cleansing";
        upDatedDurationTwo = "- 35-minutes LED Anti-Aging Treatment & Consultation"
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (786) 518-7433";
        treatmentSelected = "LED Treatment";
        newSpaPhoneNumberSelected = "(786) 518-7433";
        insteadOfSpa = "$350";
        break;

        case "The Soap Tree Omaha Collagen Enhancing Treatment $69.95":
        upDatedSpaName = "The Soap Tree";
        upDatedSpaAddress = "10000 California St. Omaha, NE 68114" + "<br>" + "(STE 1221, Westroads Mall, 1st Floor across Five Below)";
        upDatedSpaLINK = "https://forms.gle/yXFkQsA4PmN61qxT8";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/ptdDexcxmHAWC65Y6";
        upDatedSpaWebLINK = "https://www.advancedbeautytreatments.com/pages/the-soap-tree-omaha-collagen-enhancing-treatment-69-95";
        upDatedSpaPhone = "(402) 252-3842";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 minutes Cleansing and 30 minutes Collagen Enhancing Treatment";
        upDatedDurationTwo = "- 15 minutes Consultation";
        promoPrice = "69.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (928) 399-9242";
        treatmentSelected = "Collagen Enhancing Treatment";
        newSpaPhoneNumberSelected = "(928) 399-9242";
        insteadOfSpa = "$377";
        break;

        case "The Soap Tree Omaha Collagen Restoration $69.95":
        upDatedSpaName = "The Soap Tree";
        upDatedSpaAddress = "10000 California St. Omaha, NE 68114" + "<br>" + "(STE 1221, Westroads Mall, 1st Floor across Five Below)";
        upDatedSpaLINK = "https://forms.gle/yXFkQsA4PmN61qxT8";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/ptdDexcxmHAWC65Y6";
        upDatedSpaWebLINK = "https://www.advancedbeautytreatments.com/pages/soap-tree-omaha-collagen-restoration-treatment-69-95-377";
        upDatedSpaPhone = "(402) 509-2233";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 minutes Cleansing and 30 minutes Collagen Restoration Treatment";
        upDatedDurationTwo = "- 15 minutes Consultation";
        promoPrice = "69.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (928) 399-9242";
        treatmentSelected = "Collagen Restoration Treatment";
        newSpaPhoneNumberSelected = "(928) 399-9242";
        insteadOfSpa = "$377";
        break;

       
        case "The Soap Tree Omaha DTB Natural Facelift $69.95":
        upDatedSpaName = "The Soap Tree";
        upDatedSpaAddress = "10000 California St. Omaha, NE 68114" + "<br>" + "(STE 1221, Westroads Mall, 1st Floor across Five Below)";
        upDatedSpaLINK = "https://forms.gle/yXFkQsA4PmN61qxT8";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/ptdDexcxmHAWC65Y6";
        upDatedSpaWebLINK = "https://www.advancedbeautytreatments.com/pages/dtb-p2-soap-tree-omaha-69-95-377";
        upDatedSpaPhone = "(402) 252-3842";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 minutes Cleansing and 30 minutes Skin Natural Facelift Treatment";
        upDatedDurationTwo = "- 15 minutes Consultation";
        promoPrice = "69.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (928) 399-9242";
        treatmentSelected = "Natural Facelift Treatment";
        newSpaPhoneNumberSelected = "(928) 399-9242";
        insteadOfSpa = "$377";
        break;

        case "The Soap Tree Omaha Natural Facelift $69.95":
        upDatedSpaName = "The Soap Tree";
        upDatedSpaAddress = "10000 California St. Omaha, NE 68114" + "<br>" + "(STE 1221, Westroads Mall, 1st Floor across Five Below)";
        upDatedSpaLINK = "https://forms.gle/yXFkQsA4PmN61qxT8";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/ptdDexcxmHAWC65Y6";
        upDatedSpaWebLINK = "https://www.advancedbeautytreatments.com/pages/the-soap-tree-omaha-natural-facelift-treatment-69-95";
        upDatedSpaPhone = "(402) 252-3842";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 minutes Cleansing and 30 minutes Skin Natural Facelift Treatment";
        upDatedDurationTwo = "- 15 minutes Consultation";
        promoPrice = "69.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (928) 399-9242";
        treatmentSelected = "Natural Facelift Treatment";
        newSpaPhoneNumberSelected = "(928) 399-9242";
        insteadOfSpa = "$377";
        break;

        case "The Soap Tree Omaha Neck and Jawline $59.95":
        upDatedSpaName = "The Soap Tree";
        upDatedSpaAddress = "10000 California St. Omaha, NE 68114" + "<br>" + "(STE 1221, Westroads Mall, 1st Floor across Five Below)";
        upDatedSpaLINK = "https://forms.gle/yXFkQsA4PmN61qxT8";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/ptdDexcxmHAWC65Y6";
        upDatedSpaWebLINK = "https://www.advancedbeautytreatments.com/pages/soap-tree-omaha-neck-and-jawline-59-95";
        upDatedSpaPhone = "(402) 252-3842";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 minutes Cleansing and 30 minutes Neck and Jawline Treatment";
        upDatedDurationTwo = "- 15 minutes Consultation";
        promoPrice = "59.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (928) 399-9242";
        treatmentSelected = "Neck and Jawline Treatment";
        newSpaPhoneNumberSelected = "(928) 399-9242";
        insteadOfSpa = "$377";
        break;

        case "The Soap Tree Omaha Neck and Jawline $69.95":
        upDatedSpaName = "The Soap Tree";
        upDatedSpaAddress = "10000 California St. Omaha, NE 68114" + "<br>" + "(STE 1221, Westroads Mall, 1st Floor across Five Below)";
        upDatedSpaLINK = "https://forms.gle/yXFkQsA4PmN61qxT8";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/ptdDexcxmHAWC65Y6";
        upDatedSpaWebLINK = "https://www.advancedbeautytreatments.com/pages/the-soap-tree-omaha-neck-and-jawline-treatment-69-95";
        upDatedSpaPhone = "(402) 252-3842";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 minutes Cleansing and 30 minutes Neck and Jawline Treatment";
        upDatedDurationTwo = "- 15 minutes Consultation";
        promoPrice = "69.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (928) 399-9242";
        treatmentSelected = "Neck and Jawline Treatment";
        newSpaPhoneNumberSelected = "(928) 399-9242";
        insteadOfSpa = "$377";
        break;

        case "The Soap Tree Omaha Skin Tightening $79.95":
        upDatedSpaName = "The Soap Tree";
        upDatedSpaAddress = "10000 California St. Omaha, NE 68114" + "<br>" + "(STE 1221, Westroads Mall, 1st Floor across Five Below)";
        upDatedSpaLINK = "https://forms.gle/yXFkQsA4PmN61qxT8";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/ptdDexcxmHAWC65Y6";
        upDatedSpaWebLINK = "https://www.advancedbeautytreatments.com/pages/the-soap-tree-omaha-skin-tightening-treatment-79-95";
        upDatedSpaPhone = "(402) 252-3842";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 minutes Cleansing and 30 minutes Skin Tightening Treatment";
        upDatedDurationTwo = "- 15 minutes Consultation";
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (928) 399-9242";
        treatmentSelected = "Skin Tightening Treatment";
        newSpaPhoneNumberSelected = "(928) 399-9242";
        insteadOfSpa = "$377";
        break;

        case "Tierra Med Turkey Neck Tightening 69.95":
        upDatedSpaName = "Tierra Med Spa";
        upDatedSpaAddress = "The Beaches Toronto ," + "<br>" + "1912 Queen St. E. Toronto ON M4L1H5";
        upDatedSpaLINK = "https://forms.gle/JpNRkQvGJnqLgLrs6";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/TYQHegAAYfaqDzxT9";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/tierra-med-spa-turkey-neck-tightening-treatment-promo";
        upDatedSpaPhone = "(647) 799-6173";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 Minutes Consultation";
        upDatedDurationTwo = "- 45 Minutes Turkey Neck Tightening Treatment";
        promoPrice = "69.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (647) 277-5122";
        treatmentSelected = "Turkey Neck Tightening Treatment";
        newSpaPhoneNumberSelected = "(647) 277-5122";
        insteadOfSpa = "$377";
        break;

        case "TKO Beauty Tech LED":
        upDatedSpaName = "TKO Beauty Tech";
        upDatedSpaAddress = "Pleasant Grove Plaza,"+"<br>"+"1090 Pleasant Grove Blvd. Roseville, CA 95678"+"<br>"+"(Suite 140, Two stores next to Safeway)";
        upDatedSpaLINK = " ";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/CQKGipYdGaW2mBDs5";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/tko-beauty-tech-promo-page";
        upDatedSpaPhone = "(916) 790-3599";
        upDatedDurationTotal = "45 Minutes";
        upDatedDurationOne = "- 15-minute Cleansing";
        upDatedDurationTwo = "- 30-minutes LED Anti-aging Treatment and 15 minutes Consultation"
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (916) 781-0167";
        treatmentSelected = "LED Treatment";
        newSpaPhoneNumberSelected = "(916) 781-0167";
        insteadOfSpa = "$377";
        break;

        case "TKO Beauty Tech LED FTB 79.95":
        upDatedSpaName = "TKO Beauty Tech";
        upDatedSpaAddress = "Pleasant Grove Plaza,"+"<br>"+"1090 Pleasant Grove Blvd. Roseville, CA 95678"+"<br>"+"(Suite 140, Two stores next to Safeway)";
        upDatedSpaLINK = " ";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/CQKGipYdGaW2mBDs5";
        upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/tko-beauty-tech-led-promo";
        upDatedSpaPhone = "(916) 790-3599";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15-minute Cleansing";
        upDatedDurationTwo = "- 30-minutes LED Anti-aging Treatment and 15 minutes Consultation"
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (916) 781-0167";
        treatmentSelected = "LED Treatment";
        newSpaPhoneNumberSelected = "(916) 781-0167";
        insteadOfSpa = "$377";
        break;

        case "TKO Beauty Tech Men's Skin Tightening 89.95":
        upDatedSpaName = "TKO Beauty Tech";
        upDatedSpaAddress = "Pleasant Grove Plaza,"+"<br>"+"1090 Pleasant Grove Blvd. Roseville, CA 95678"+"<br>"+"(Suite 140, Two stores next to Safeway)";
        upDatedSpaLINK = " ";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/CQKGipYdGaW2mBDs5";
        upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/tko-mens-skin-tightening-89-95";
        upDatedSpaPhone = "(916) 790-3599";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 5-minutes Skin Analysis and 10 minutes of light cleansing";
        upDatedDurationTwo = "- 30-minutes Skin Tightening Treatment and 15 minutes Consultation"
        promoPrice = "89.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (916) 781-0167";
        treatmentSelected = "Skin Tightening Treatment";
        newSpaPhoneNumberSelected = "(916) 781-0167";
        insteadOfSpa = "$377";
        break;

        case "TKO Beauty Tech Natural Facelift FTB 79.95":
        upDatedSpaName = "TKO Beauty Tech";
        upDatedSpaAddress = "Pleasant Grove Plaza,"+"<br>"+"1090 Pleasant Grove Blvd. Roseville, CA 95678"+"<br>"+"(Suite 140, Two stores next to Safeway)";
        upDatedSpaLINK = " ";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/CQKGipYdGaW2mBDs5";
        upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/tko-beauty-tech-led-promo";
        upDatedSpaPhone = "(916) 790-3599";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 minutes of consultation and skin analysis and 10 minutes light cleaning and exfoliate";
        upDatedDurationTwo = "- 15 minutes anti aging booster (customized) and 20 minutes Natural face-lift treatment"
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (916) 781-0167";
        treatmentSelected = "Natural Facelift Treatment";
        newSpaPhoneNumberSelected = "(916) 781-0167";
        insteadOfSpa = "$377";
        break;

        case "TKO Beauty Tech Natural Facelift FTB 89.95":
        upDatedSpaName = "TKO Beauty Tech";
        upDatedSpaAddress = "Pleasant Grove Plaza,"+"<br>"+"1090 Pleasant Grove Blvd. Roseville, CA 95678"+"<br>"+"(Suite 140, Two stores next to Safeway)";
        upDatedSpaLINK = " ";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/CQKGipYdGaW2mBDs5";
        upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/tko-beauty-tech-natural-facelift-promo-89-95";
        upDatedSpaPhone = "(916) 790-3599";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 minutes of consultation and skin analysis and 10 minutes light cleaning and exfoliate.";
        upDatedDurationTwo = "- 15 minutes anti aging booster (customized) and 20 minutes Natural face-lift treatment."
        promoPrice = "89.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (916) 781-0167";
        treatmentSelected = "Natural Facelift Treatment";
        newSpaPhoneNumberSelected = "(916) 781-0167";
        insteadOfSpa = "$398";
        break;

        case "TKO Beauty Tech Natural Facelift FTB 99.95":
        upDatedSpaName = "TKO Beauty Tech";
        upDatedSpaAddress = "Pleasant Grove Plaza,"+"<br>"+"1090 Pleasant Grove Blvd. Roseville, CA 95678"+"<br>"+"(Suite 140, Two stores next to Safeway)";
        upDatedSpaLINK = " ";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/CQKGipYdGaW2mBDs5";
        upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/tko-beauty-tech-led-promo";
        upDatedSpaPhone = "(916) 790-3599";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 minutes of consultation and skin analysis and 10 minutes light cleaning and exfoliate";
        upDatedDurationTwo = "- 15 minutes anti aging booster (customized) and 20 minutes Natural face-lift treatment"
        promoPrice = "99.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (916) 781-0167";
        treatmentSelected = "Natural Facelift Treatment";
        newSpaPhoneNumberSelected = "(916) 781-0167";
        insteadOfSpa = "$398";
        break;

        case "TKO Beauty Tech Natural Skin Tightening 99.95":
        upDatedSpaName = "TKO Beauty Tech";
        upDatedSpaAddress = "Pleasant Grove Plaza,"+"<br>"+"1090 Pleasant Grove Blvd. Roseville, CA 95678"+"<br>"+"(Suite 140, Two stores next to Safeway)";
        upDatedSpaLINK = " ";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/CQKGipYdGaW2mBDs5";
        upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/tko-natural-skin-tightening-treatment-99-95";
        upDatedSpaPhone = "(916) 790-3599";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 5-minutes Skin Analysis and 10 minutes of light cleansing";
        upDatedDurationTwo = "- 30-minutes Natural Skin Tightening Treatment and 15 minutes Consultation"
        promoPrice = "99.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (916) 781-0167";
        treatmentSelected = "Skin Tightening Treatment";
        newSpaPhoneNumberSelected = "(916) 781-0167";
        insteadOfSpa = "$377";
        break;

        case "TKO Beauty Tech Reverse Turkey Neck Treatment 79.95":
        upDatedSpaName = "TKO Beauty Tech";
        upDatedSpaAddress = "Pleasant Grove Plaza,"+"<br>"+"1090 Pleasant Grove Blvd. Roseville, CA 95678"+"<br>"+"(Suite 140, Two stores next to Safeway)";
        upDatedSpaLINK = " ";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/CQKGipYdGaW2mBDs5";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/tko-beauty-tech-reverse-turkey-neck-tightening-treatment-promo";
        upDatedSpaPhone = "(916) 790-3599";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15-minute Consultation";
        upDatedDurationTwo = "- 45-minutes Reverse Turkey Neck Treatment"
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (916) 781-0167";
        treatmentSelected = "Reverse Turkey Neck Treatment";
        newSpaPhoneNumberSelected = "(916) 781-0167";
        insteadOfSpa = "$377";
        break;

        case "Tranquil Wellness and Spa Skin Tightening Facial $79.95":
        upDatedSpaName = "Tranquil Wellness and Spa";
        upDatedSpaAddress = "9633 Old St. Augustine Rd. Jacksonville FL. 32257"+"<br>"+"(Across from Starbucks)";
        upDatedSpaLINK = "https://forms.gle/d2zTiJTh54MQPNfM7";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/JAJ758GAAgvDiqmY9";
        upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/tranquil-wellness-and-spa-skin-tightening-promo-79-95";
        upDatedSpaPhone = "(904) 339-5671";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 minutes Cleansing and 30 minutes Skin Tightening Treatment";
        upDatedDurationTwo = "- 15 minutes Consultation";
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (904) 619-6064";
        treatmentSelected = "Skin Tightening Treatment";
        newSpaPhoneNumberSelected = "(904) 619-6064";
        insteadOfSpa = "$377"
        break;

        case "Treasure Rare Annapolis Skin Tightening $99.95":
        upDatedSpaName = "Treasure Rare";
        upDatedSpaAddress = "2002 Annapolis Mall Rd. Annapolis, MD 21401"+"<br>"+"(Annapolis Mall, near Michael Kors)";
        upDatedSpaLINK = "https://forms.gle/iuzeodyYmKX14uuE6";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/jTx9N7BExPWcjodu5";
        upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/treasure-rare-md-skin-tightening-promo-99-95";
        upDatedSpaPhone = "(410) 934-0469";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 15 minutes Cleansing";
        upDatedDurationTwo = "- 30 minutes Skin Tightening Treatment and 15 minutes post-care and consultation";
        promoPrice = "99.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (301) 201-6735";
        treatmentSelected = "Natural Facelift Treatment";
        newSpaPhoneNumberSelected = "(301) 201-6735";
        insteadOfSpa = "$377"
        break;

        case "Tresor Rare Las Olas":
        upDatedSpaName = "Tresor Rare Spa";
        upDatedSpaAddress = "617 east las Olas Blvd, Fort Lauderdale, FL 333011"+"<br>"+"(Next to Pan'e Dolci Italian Bakery)";
        upDatedSpaLINK = "https://forms.gle/ojW56idhkRSLmsCa9";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/tresor-rare-las-olas-spa-led-promo-page" ;
        upDatedSpaPhone = "(786) 206-8520";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 20 Minutes Light Cleaning";
        upDatedDurationTwo = "- 40 Minutes LED Light Experience & Consultation";
        promoPrice = "79.95"
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (754) 701-0937";
        treatmentSelected = "LED Treatment";
        newSpaPhoneNumberSelected = "(754) 701-0937";
        insteadOfSpa = "$350"
        break;

        case "Tresor Rare Tallahassee Natural Facelift $79.95":
        upDatedSpaName = "Tresor Rare";
        upDatedSpaAddress = "Governor Square Mall"+"<br>"+"1500 Apalachee Pkwy, Unit 2350, Tallahassee, FL 32301"+"<br>"+"(2nd floor, right above the Food Court, near Helzberg Jewelers and across Bath & Body Works)";
        upDatedSpaLINK = "https://forms.gle/d9bVoE3hSMELQ7a47";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/dHywqo21iYKv9GV16";
        upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/tresor-rare-natural-facelift-promo-79-95";
        upDatedSpaPhone = "(443)-972-0601";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = " - 15 minutes Cleansing";
        upDatedDurationTwo = " - 30 minutes Skin Tightening Treatment and 15 minutes Consultation";
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (443)-972-0601";
        treatmentSelected = "Natural Facelift Treatment";
        newSpaPhoneNumberSelected = "(571) 325-9317";
        insteadOfSpa = "$377"
        break;

        case "Truffoire LED":
        upDatedSpaName = "Truffoire";
        upDatedSpaAddress = "Parkway Place, 2801 Memorial Pkwy SW, Huntsville, AL 35801"+"<br>"+"(Unit R-146, First floor next to GNC)"+"<br>"+"(Best spot is to park near Dillards)";
        upDatedSpaLINK = "https://forms.gle/gPtr7z3YNX75bJwZ7";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/truffoire-led-promo-page";
        upDatedSpaPhone = "(938) 867-6022";
        upDatedDurationTotal = "60 Minutes";
        upDatedDurationOne = "- 45 minutes LED Anti-aging Treatment";
        upDatedDurationTwo = "- 15 minutes Consultation"
        promoPrice = "79.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (256) 517-8740";
        treatmentSelected = "LED Treatment";
        newSpaPhoneNumberSelected = "(256) 517-8740";
        insteadOfSpa = "$377";
        break;

        case "Trésure Rare Brea Skin Tightening $79.95":
        upDatedSpaName = "Trésure Rare Brea";
        upDatedSpaAddress = "910 E birch st. suite #200, Brea, CA 92821"+"<br>"+"[Embassy court near embassy hotel Ground floor (#2 in the elevator)] Please use underground parking of the Embassy Hotel";
        upDatedSpaLINK = "https://forms.gle/4x1BvF7zdW75rkCg8";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/UN6PLvikjEUKiJEV6";
        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/tresure-by-embassy-suites-brea-skin-tightening-promo-79-95" ;
        upDatedSpaPhone = "(714) 988-2959";
        upDatedDurationTotal = "90 Minutes";
        upDatedDurationOne = "- 30 Minutes Cleaning";
        upDatedDurationTwo = "- 60 Minutes Skin Tightening Treatment & Consultation";
        promoPrice = "79.95"
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (714) 784-6884";
        treatmentSelected = "Skin Tightening Treatment";
        newSpaPhoneNumberSelected = "(714) 784-6884";
        insteadOfSpa = "$377"
        break;

        case "Velora Med Spa Men's Skin Tightening $99.95":
        upDatedSpaName = "Velora Med Spa";
        upDatedSpaAddress = "108 N State St, Chicago, IL 60602, United States"+"<br>"+"(Block 37, First level)";
        upDatedSpaLINK = "https://forms.gle/m4QFVnRBasHH7UqS9";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/dV13uj69NZsR9zXZ9";
        upDatedSpaWebLINK = "https://velora.advancedbeautytreatments.com/men-skin-tightening-99-95-booking-page";
        upDatedSpaPhone = "(312) 625-1275";
        upDatedDurationTotal = "45 Minutes";
        upDatedDurationOne = " - 15 minutes Cleansing";
        upDatedDurationTwo = " - 30 minutes Skin Tightening & Consultation";
        promoPrice = "99.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (331) 600-2304";
        treatmentSelected = "Natural Facelift";
        newSpaPhoneNumberSelected = "(331) 600-2304";
        insteadOfSpa = "$377"
        break;

        case "Velora Med Spa Men's Skin Tightening $129.95":
        upDatedSpaName = "Velora Med Spa";
        upDatedSpaAddress = "108 N State St, Chicago, IL 60602, United States"+"<br>"+"(Block 37, First level)";
        upDatedSpaLINK = "https://forms.gle/m4QFVnRBasHH7UqS9";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/dV13uj69NZsR9zXZ9";
        upDatedSpaWebLINK = "https://velora.advancedbeautytreatments.com/men-skin-tightening-129-95-form-page";
        upDatedSpaPhone = "(312) 625-1275";
        upDatedDurationTotal = "45 Minutes";
        upDatedDurationOne = " - 15 minutes Cleansing";
        upDatedDurationTwo = " - 30 minutes Skin Tightening & Consultation";
        promoPrice = "129.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (331) 600-2304";
        treatmentSelected = "Natural Facelift";
        newSpaPhoneNumberSelected = "(331) 600-2304";
        insteadOfSpa = "$377"
        break;

        case "Velora Med Spa Natural Facelift $99.95":
        upDatedSpaName = "Velora Med Spa";
        upDatedSpaAddress = "108 N State St, Chicago, IL 60602, United States"+"<br>"+"(Block 37, First level)";
        upDatedSpaLINK = "https://forms.gle/m4QFVnRBasHH7UqS9";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/dV13uj69NZsR9zXZ9";
        upDatedSpaWebLINK = "https://velora.advancedbeautytreatments.com/natural-facelift-99-95-book-page";
        upDatedSpaPhone = "(312) 625-1275";
        upDatedDurationTotal = "45 Minutes";
        upDatedDurationOne = " - 15 minutes Cleansing";
        upDatedDurationTwo = " - 30 minutes Natural Facelift & Consultation";
        promoPrice = "99.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (331) 600-2304";
        treatmentSelected = "Natural Facelift";
        newSpaPhoneNumberSelected = "(331) 600-2304";
        insteadOfSpa = "$377"
        break;

        case "Velora Med Spa Triple Lift $99.95":
        upDatedSpaName = "Velora Med Spa";
        upDatedSpaAddress = "108 N State St, Chicago, IL 60602, United States"+"<br>"+"(Block 37, First level)";
        upDatedSpaLINK = "https://forms.gle/m4QFVnRBasHH7UqS9";
        upDatedSpaMapLINK = "https://maps.app.goo.gl/dV13uj69NZsR9zXZ9";
        upDatedSpaWebLINK = "https://velora.advancedbeautytreatments.com/triple-lift-booking";
        upDatedSpaPhone = "(312) 625-1275";
        upDatedDurationTotal = "45 Minutes";
        upDatedDurationOne = " - 15 minutes Cleansing";
        upDatedDurationTwo = " - 30 minutes Triple Lift & Consultation";
        promoPrice = "99.95";
        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (331) 600-2304";
        treatmentSelected = "Triple Lift";
        newSpaPhoneNumberSelected = "(331) 600-2304";
        insteadOfSpa = "$377"
        break;



       


                                


                                        

                                    
                                    
                                                            

                                                        
                                                            

                                                    
        default:
            break;
    }


    if (spaNameStatus.innerHTML.includes("Elevatione")) {
        let hideOne = document.getElementById("hideOne")
        let hideTwo = document.getElementById("hideTwo")
        let hideThree = document.getElementById("hideThree")
        let hideFour = document.getElementById("hideFour")
        // let hideFive = document.getElementById("hideFive")


        hideOne.classList.add("hide");
        hideTwo.classList.add("hide");
        hideThree.classList.add("hide");
        hideFour.classList.add("hide");
        // hideFive.classList.add("hide");


    } else {
        hideOne.classList.remove("hide");
        hideTwo.classList.remove("hide");
        hideThree.classList.remove("hide");
        hideFour.classList.remove("hide");
        // hideFive.classList.remove("hide");


    }

    // Variables in text
    let custNameArray = document.getElementsByClassName("varCustName");
    let repNameArray = document.getElementsByClassName("varRepName");
    let promoPriceArray = document.getElementsByClassName("varPromoPrice");
    let aptDateDayArray = document.getElementsByClassName("varAptDateDay");
    let aptDateMonthArray = document.getElementsByClassName("varAptDateMonth");
    let aptTimeArray = document.getElementsByClassName("varAptTime");
    let aptTimeAmPmArray = document.getElementsByClassName("varAptTimeAmPm");
    let aptTimeMinutesArray = document.getElementsByClassName("varMinutesOfTime");
    let treatmentSelectedArray = document.getElementsByClassName("varTreatmentSelected");
    let insteadOfArray = document.getElementsByClassName("insteadOf");


    // USER DATA ENTRY
    let customerName = document.getElementById("custName").value;
    let repName = document.getElementById("empName").value;
    //  let promoPrice = document.getElementById("promoPrice").value;
    let aptDateDay = document.getElementById("aptDateDay").value;
    let aptDateMonth = document.getElementById("aptDateMonth").value;
    let aptMinutesTime = document.getElementById("minutesOfTime").value;
    let aptTime = document.getElementById("aptTime").value;
    let aptTimeAmPm = document.getElementById("aptTimeAmPm").value;
    //  let treatmentSelected = document.getElementById("chooseTreatment").value;
  
    //GOOGLE MAP LINK
    let mapLinkArray = document.getElementsByClassName("varLocationMapLink");
    for (var i = 0; i < mapLinkArray.length; i++) {
    mapLinkArray[i].innerHTML = `<a href="${upDatedSpaMapLINK}" target="_blank">${upDatedSpaMapLINK}</a>`;
}

      //Parking LINK - only show for Premier Naples
    let parkLinkArray = document.getElementsByClassName("varLocationParkLink");
    for (var i = 0; i < parkLinkArray.length; i++) {
        parkLinkArray[i].innerHTML = `<a href="${upDatedSpaParkLINK}" target="_blank">${upDatedSpaParkLINK}</a>`;
    }
    let parkingLine = document.getElementById("parkingLine");
    if (parkingLine) {
        if (upDatedSpaName === "Premier Naples" || upDatedSpaName === "Forest Hill Cosmetic Clinic") {
            parkingLine.style.display = "inline";
        } else {
            parkingLine.style.display = "none";
        }
    }

 

    // CUSTOMER NAME LOOP
    for(var i = 0; i < custNameArray.length; i++){
    custNameArray[0].innerHTML = customerName;
    custNameArray[i].innerHTML = customerName;
}
    // REP NAME LOOP
    for(var i = 0; i < repNameArray.length; i++){
    repNameArray[0].innerHTML = repName;
    repNameArray[i].innerHTML = repName;
}
    // PROMO PRICE LOOP
    for(var i = 0; i < promoPriceArray.length; i++){
    promoPriceArray[0].innerHTML = promoPrice;
    promoPriceArray[i].innerHTML = promoPrice;
}
    // APT DATE Day LOOP
    for(var i = 0; i < aptDateDayArray.length; i++){
        aptDateDayArray[0].innerHTML = aptDateDay;
        aptDateDayArray[i].innerHTML = aptDateDay;
}
// APT DATE Month LOOP
    for(var i = 0; i < aptDateMonthArray.length; i++){
    aptDateMonthArray[0].innerHTML = aptDateMonth;
    aptDateMonthArray[i].innerHTML = aptDateMonth;
}
    // APT TIME LOOP
    for(var i = 0; i < aptTimeArray.length; i++){
        aptTimeArray[0].innerHTML = aptTime;
        aptTimeArray[i].innerHTML = aptTime;
}

// APT TIME AMPM LOOP
for(var i = 0; i < aptTimeAmPmArray.length; i++){
    aptTimeAmPmArray[0].innerHTML = aptTimeAmPm;
    aptTimeAmPmArray[i].innerHTML = aptTimeAmPm;
}

    // APT TIME Minutes LOOP
    for(var i = 0; i < aptTimeMinutesArray.length; i++){
        aptTimeMinutesArray[0].innerHTML = aptMinutesTime;
        aptTimeMinutesArray[i].innerHTML = aptMinutesTime;
}



// Selected Treatment LOOP
for(var i = 0; i < treatmentSelectedArray.length; i++){
    treatmentSelectedArray[0].innerHTML = treatmentSelected;
    treatmentSelectedArray[i].innerHTML = treatmentSelected;
}

    // insteadOf Loop
    for(var i = 0; i < insteadOfArray.length; i++){
        insteadOfArray[0].innerHTML = insteadOfSpa;
        insteadOfArray[i].innerHTML = insteadOfSpa;
    }

let newLink = document.getElementById("newSpaLink");
newLink.setAttribute('href', upDatedSpaWebLINK);

let newSpaPhoneNumber = document.getElementById("newSpaPhoneNumber");
newSpaPhoneNumber.innerHTML = newSpaPhoneNumberSelected;

}



//  COPY BOTTON
function copyEvent(id)
{
    var str = document.getElementById(id);
    window.getSelection().selectAllChildren(str);
    document.execCommand("Copy")
}

// SEARCH BARS

const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
const searchBox = document.querySelector(".search-box input");

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
    optionsContainer.classList.toggle("active");

    searchBox.value = "";
    filterList("");

    if(optionsContainer.classList.contains("active")) {
        searchBox.focus();
    }
});

optionsList.forEach( o => {
    o.addEventListener("click", () => {
        selected.innerHTML = o.querySelector("label").innerHTML;
        optionsContainer.classList.remove("active");
    });
});

searchBox.addEventListener("keyup", function(e){
filterList(e.target.value);
});

const filterList = searchTerm => {
    searchTerm = searchTerm.toLowerCase();
    optionsList.forEach( option => {
        let label = option.firstElementChild.nextElementSibling.innerText.toLowerCase();
        if (label.indexOf(searchTerm) != -1 ) {
            option.style.display = "block";
        } else {
            option.style.display = "none";
        }
    });
};
