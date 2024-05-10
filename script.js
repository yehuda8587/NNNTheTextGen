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
                upDatedSpaWebLINK = "No Spa Selected";
                upDatedSpaPhone = "No Spa Selected";
                upDatedDurationTotal = "No Spa Selected";
                upDatedDurationOne = "No Spa Selected";
                upDatedDurationTwo = "No Spa Selected";
                promoPrice = "No Spa Selected";
                newSpaPhoneNumberSelected = "No Spa Selected";
                insteadOfSpa = "No Spa Selected";
                break;

            case "Skin Analytics":
                upDatedSpaName = "Skin Analytics Spa";
                upDatedSpaAddress = "6910 Fayetteville Rd, Durham, NC 27713" +"<br>"+"(Southpoint Mall, ground floor next to Macy's across from Forever 21)";
                upDatedSpaLINK = "https://forms.gle/1he49LWJJgKBtHQD8";
                upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/skinanalytics-spa-led-promo"
                upDatedSpaPhone = "(919) 321-1008";
                upDatedDurationTotal = "60 Minutes";
                upDatedDurationOne = "- 15 Minutes Light Cleaning";
                upDatedDurationTwo = "- 30 Minutes LED Light Session & a 15 minutes Consultation"+"<br><br>"+"Dont Forget! You are eligible for a 25% off your next purchase at our spa :)";
                promoPrice = "79.95"
                upDatedActualSpaPhone = "Can't find our spa? Give us a call at (919) 405-2586";
                treatmentSelected = "LED Treatment";
                newSpaPhoneNumberSelected = "(919) 405-2586";
                insteadOfSpa = "$350"
                break;

                case "Skin Analytics Gold Treatment":
                upDatedSpaName = "Skin Analytics Spa";
                upDatedSpaAddress = "6910 Fayetteville Rd, Durham, NC 27713" +"<br>"+"(Southpoint Mall, ground floor next to Macy's across from Forever 21)";
                upDatedSpaLINK = "https://forms.gle/1he49LWJJgKBtHQD8";
                upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/skin-analytics-spa-gold-collagen-facial"
                upDatedSpaPhone = "(919) 321-1008";
                upDatedDurationTotal = "60 Minutes";
                upDatedDurationOne = "- 15 Minutes Light Cleaning";
                upDatedDurationTwo = "- 30 Minutes Gold Collagen Treatment & a 15 minute Consultation"
                promoPrice = "80"
                upDatedActualSpaPhone = "Can't find our spa? Give us a call at (919) 405-2586";
                treatmentSelected = "LED Treatment";
                newSpaPhoneNumberSelected = "(919) 405-2586";
                insteadOfSpa = "$299"
                break;

                case "Skin Analytics Collagen Enhancing Treatment":
                upDatedSpaName = "Skin Analytics Spa";
                upDatedSpaAddress = "6910 Fayetteville Rd, Durham, NC 27713" +"<br>"+"(Southpoint Mall, ground floor next to Macy's across from Forever 21)";
                upDatedSpaLINK = "https://forms.gle/1he49LWJJgKBtHQD8";
                upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/skin-analytics-spa-collagen-enhancing-facial-promo-page"
                upDatedSpaPhone = "(919) 321-1008";
                upDatedDurationTotal = "60 Minutes";
                upDatedDurationOne = "- 15 Minutes Light Cleaning";
                upDatedDurationTwo = "- 30 Minutes Collagen Enhancing Treatment & a 15 minute Consultation"
                promoPrice = "69.95"
                upDatedActualSpaPhone = "Can't find our spa? Give us a call at (919) 405-2586";
                treatmentSelected = "Collagen Enhancing Treatment";
                newSpaPhoneNumberSelected = "(919) 405-2586";
                insteadOfSpa = "$299"
                break;

                case "Skin Analytics Spa Skin Tightening Treatment":
                upDatedSpaName = "Skin Analytics Spa";
                upDatedSpaAddress = "6910 Fayetteville Rd, Durham, NC 27713" +"<br>"+"(Southpoint Mall, ground floor next to Macy's across from Forever 21)";
                upDatedSpaLINK = "https://forms.gle/1he49LWJJgKBtHQD8";
                upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/skin-analytics-spa-skin-tightening-treatment-with-hifu-led-page"
                upDatedSpaPhone = "(919) 321-1008";
                upDatedDurationTotal = "60 Minutes";
                upDatedDurationOne = "- 15 Minutes Light Cleaning";
                upDatedDurationTwo = "- 30 Minutes Skin Tightening w/ HIFU & LED Technology & a 15 minute Consultation"
                promoPrice = "79.95"
                upDatedActualSpaPhone = "Can't find our spa? Give us a call at (919) 405-2586";
                treatmentSelected = "Skin Tightening Treatment with HIFU & LED";
                newSpaPhoneNumberSelected = "(919) 405-2586";
                insteadOfSpa = "$399"
                break;

                case "Skin Analytics Male Non-Surgical Face Lift":
                upDatedSpaName = "Skin Analytics Spa";
                upDatedSpaAddress = "6910 Fayetteville Rd, Durham, NC 27713" +"<br>"+"(Southpoint Mall, ground floor next to Macy's across from Forever 21)";
                upDatedSpaLINK = "https://forms.gle/1he49LWJJgKBtHQD8";
                upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/skin-analytics-mens-non-surgical-facelift-promo-page"
                upDatedSpaPhone = "(919) 321-1008";
                upDatedDurationTotal = "60 Minutes";
                upDatedDurationOne = "- 15 Minutes Light Cleaning";
                upDatedDurationTwo = "- 30 Minutes Non-Surgical Face Lift & LED Technology & a 15 minute Consultation"
                promoPrice = "79.95"
                upDatedActualSpaPhone = "Can't find our spa? Give us a call at (919) 405-2586";
                treatmentSelected = "Non-Surgical Face Lift";
                newSpaPhoneNumberSelected = "(919) 405-2586";
                insteadOfSpa = "$377"
                break;

            case "Esthetix Raliegh":
                upDatedSpaName = "Esthetix Spa";
                upDatedSpaAddress = "4325 Glenwood Ave, Suit 2106, Raleigh NC 27612" +"<br>"+"(Crabtree Valley Mall, 2nd floor, next to Johnston & Murphy)";
                upDatedSpaLINK = "https://forms.gle/WHjM6Js3yYA6w6Y59";
                upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/esthetix-nc-promo";
                upDatedSpaPhone = "(984) 205-6033";
                upDatedDurationTotal = "60 Minutes";
                upDatedDurationOne = "- 30 Minutes Light Cleaning";
                upDatedDurationTwo = "- 30 Minutes LED Light Session & Consultation"+"<br><br>"+"Dont Forget! You are eligeble for a 25% off your next purchase at our spa :)";
                promoPrice = "79.95"
                upDatedActualSpaPhone = "Can't find our spa? Give us a call at (919) 900-8271";
                treatmentSelected = "LED Treatment";
                newSpaPhoneNumberSelected = "(919) 900-8271";
                insteadOfSpa = "$350"
                break;

                case "Beauty Frizz MD":
                upDatedSpaName = "BeautyFrizz Spa";
                upDatedSpaAddress = "7101 Democracy Blvd, Bethesda, MD 20817" +"<br>"+"(2nd Floor, Near Nordstrom, Directly left of California Pizza Kitchen)";
                upDatedSpaLINK = "https://forms.gle/srNaY1uJefDZFANW8";
                upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/beautyfrizz-led-promo";
                upDatedSpaPhone = "(301) 291-7543";
                upDatedDurationTotal = "60 Minutes";
                upDatedDurationOne = "- 15 Minutes Cleansing";
                upDatedDurationTwo = "- 45 Minutes LED Light Session & Consultation";
                promoPrice = "99.95"
                upDatedActualSpaPhone = "Can't find our spa? Give us a call at (301) 775-3494";
                treatmentSelected = "LED Treatment";
                newSpaPhoneNumberSelected = "(301) 775-3494";
                insteadOfSpa = "$377"
                break; 

                case "Beauty Frizz MD Body Sculpting":
                    upDatedSpaName = "BeautyFrizz Spa";
                    upDatedSpaAddress = "7101 Democracy Blvd, Bethesda, MD 20817" +"<br>"+"(2nd Floor, Near Nordstrom, Directly left of California Pizza Kitchen)";
                    upDatedSpaLINK = "https://forms.gle/srNaY1uJefDZFANW8";
                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/beautyfrizz-bodysculpting-promo";
                    upDatedSpaPhone = "(301) 291-7543";
                    upDatedDurationTotal = "60 Minutes";
                    upDatedDurationOne = "- 45 Minutes Body Sculpting";
                    upDatedDurationTwo = "- 15 Minutes Consultation ";
                    promoPrice = "120"
                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (301) 775-3494";
                    treatmentSelected = "Body Sculpting Treatment";
                    newSpaPhoneNumberSelected = "(301) 775-3494";
                    insteadOfSpa = "$500"
                    break; 

                    case "Beauty Frizz Ocala LED 79.95":
                        upDatedSpaName = "BeautyFrizz Spa";
                        upDatedSpaAddress = "Paddock Mall,"+"<br>"+"3100 SW College Rd Ocala FL 34474"+"<br>"+"(Unit 402, next to Belk Store)";
                        upDatedSpaLINK = "https://forms.gle/82TrFg5vLcFZQ4A37";
                        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/beauty-frizz-ocala-promo-page";
                        upDatedSpaPhone = "(352) 431-2111";
                        upDatedDurationTotal = "60 Minutes";
                        upDatedDurationOne = "- 15 Minutes Cleansing";
                        upDatedDurationTwo = "- 30 Minutes LED Anti-Aging Treatment & 15 minutes Consultation";
                        promoPrice = "79.95"
                        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (352) 216-4557";
                        treatmentSelected = "LED Treatment";
                        newSpaPhoneNumberSelected = "(352) 216-4557";
                        insteadOfSpa = "$377"
                        break;     

                case "Bee and Co":
                    upDatedSpaName = "Bee and Co";
                    upDatedSpaAddress = "14006 Riverside Dr #213a, Sherman Oaks, CA 91423" +"<br>"+"(Second floor near Express Clothing in front Cotton On Clothing)";
                    upDatedSpaLINK = "https://forms.gle/KZ9C1f4gNPuLVKLEA";
                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/bee-co-spa-led" ;
                    upDatedSpaPhone = "(301)887-5495";
                    upDatedDurationTotal = "60 Minutes";
                    upDatedDurationOne = "- 30 Minutes Light Cleaning";
                    upDatedDurationTwo = "- 30 Minutes LED Light Experience & Consultation";
                    promoPrice = "79.95"
                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (747) 247-2204";
                    treatmentSelected = "LED Treatment";
                    newSpaPhoneNumberSelected = "(747) 247-2204";
                    insteadOfSpa = "$350"
                    break; 

                    case "Bee and Co 69.95":
                    upDatedSpaName = "Bee and Co";
                    upDatedSpaAddress = "14006 Riverside Dr #213a, Sherman Oaks, CA 91423" +"<br>"+"(Second floor near Express Clothing in front Cotton On Clothing)";
                    upDatedSpaLINK = "https://forms.gle/KZ9C1f4gNPuLVKLEA";
                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/new-bee-amp-co-spa-led-promo" ;
                    upDatedSpaPhone = "(301)887-5495";
                    upDatedDurationTotal = "60 Minutes";
                    upDatedDurationOne = "- 30 Minutes Light Cleaning";
                    upDatedDurationTwo = "- 30 Minutes LED Light Experience & Consultation";
                    promoPrice = "69.95"
                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (747) 247-2204";
                    treatmentSelected = "LED Treatment";
                    newSpaPhoneNumberSelected = "(747) 247-2204";
                    insteadOfSpa = "$350"
                    break;

                    case "Bee and Co FTB LED 69.95":
                    upDatedSpaName = "Bee and Co";
                    upDatedSpaAddress = "14006 Riverside Dr #213a, Sherman Oaks, CA 91423" +"<br>"+"(Second floor near Express Clothing in front Cotton On Clothing)";
                    upDatedSpaLINK = "https://forms.gle/KZ9C1f4gNPuLVKLEA";
                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/bee-amp-co-spa-led-promo" ;
                    upDatedSpaPhone = "(301)887-5495";
                    upDatedDurationTotal = "60 Minutes";
                    upDatedDurationOne = "- 30 Minutes Light Cleaning";
                    upDatedDurationTwo = "- 30 Minutes LED Light Experience & Consultation";
                    promoPrice = "69.95"
                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (747) 247-2204";
                    treatmentSelected = "LED Treatment";
                    newSpaPhoneNumberSelected = "(747) 247-2204";
                    insteadOfSpa = "$350"
                    break;

                        case "Kristals Burlington LED":
                            upDatedSpaName = "Kristals Burlington Spa";
                            upDatedSpaAddress = "Burlington Mall,"+"<br>"+"777 Guelph Line, Burlington,ON L7R 3N2" + "<br>"+"(Please enter through entrance #3 and look for PETSMART & 'Marks')"+"<br>"+"(When you're in the mall, just pass Marks, and the spa will be on the left-hand side.)"; 
                            upDatedSpaLINK = "https://forms.gle/JQoAioVQEG9gZH197";
                            upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/kristals-burlington-led-promo-page" ;
                            upDatedSpaPhone = "(289) 293-9711";
                            upDatedDurationTotal = "50 Minutes";
                            upDatedDurationOne = "- 10 Minutes Light Cleansing";
                            upDatedDurationTwo = "- 40 Minutes LED Light Experience & Consultation";
                            promoPrice = "79.95"
                            upDatedActualSpaPhone = "Can't find our spa? Give us a call at (647) 293-1112";
                            treatmentSelected = "LED Treatment";
                            newSpaPhoneNumberSelected = "(647) 293-1112";
                            insteadOfSpa = "$350"
                            break; 

                            case "Kristals Burlington AquaPure":
                                upDatedSpaName = "Kristals Burlington Spa";
                                upDatedSpaAddress = "Burlington Mall,"+"<br>"+"777 Guelph Line, Burlington,ON L7R 3N2" + "<br>"+"(Please enter through entrance #3 and look for PETSMART & 'Marks')"+"<br>"+"(When you're in the mall, just pass Marks, and the spa will be on the left-hand side.)"; 
                                upDatedSpaLINK = "https://forms.gle/JQoAioVQEG9gZH197";
                                upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/kristals-burlington-quapure-promo" ;
                                upDatedSpaPhone = "(289) 293-9711";
                                upDatedDurationTotal = "50 Minutes";
                                upDatedDurationOne = " 50 Minutes Aquapure Treatment & Consultation";
                                upDatedDurationTwo = " ";
                                promoPrice = "99.95"
                                upDatedActualSpaPhone = "Can't find our spa? Give us a call at (647) 293-1112";
                                treatmentSelected = "AquaPure";
                                newSpaPhoneNumberSelected = "(647) 293-1112";
                                insteadOfSpa = "$350"
                                break; 

                                case "Kristals Burlington Neck and Jawline":
                            upDatedSpaName = "Kristals Burlington Spa";
                            upDatedSpaAddress = "Burlington Mall,"+"<br>"+"777 Guelph Line, Burlington,ON L7R 3N2" + "<br>"+"(Please enter through entrance #3 and look for PETSMART & 'Marks')"+"<br>"+"(When you're in the mall, just pass Marks, and the spa will be on the left-hand side.)"; 
                            upDatedSpaLINK = "https://forms.gle/JQoAioVQEG9gZH197";
                            upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/kristals-burlington-neck-and-jaw-line-tightening-treatment-promo" ;
                            upDatedSpaPhone = "(289) 293-9711";
                            upDatedDurationTotal = "60 Minutes";
                            upDatedDurationOne = "- 15 Minutes Light Consultation";
                            upDatedDurationTwo = "- 45 Minutes Neck & Jawline Treatment";
                            promoPrice = "79.95"
                            upDatedActualSpaPhone = "Can't find our spa? Give us a call at (647) 293-1112";
                            treatmentSelected = "Neck and Jawline Tightening Treatment";
                            newSpaPhoneNumberSelected = "(647) 293-1112";
                            insteadOfSpa = "$377"
                            break; 

                            case "Kristals Barrie":
                                upDatedSpaName = "Kristals Barrie Spa";
                                upDatedSpaAddress = "Georgian Mall,"+"<br>"+"500 Bayfield St, Barrie, ON L4M 4Z8" +"<br>"+"(Main entrance lower level, next to Victoria's Secret)";
                                upDatedSpaLINK = "https://forms.gle/WyFD3HQApwUDL7hH6";
                                upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/kristals-barrie-spa-led-promo-page" ;
                                upDatedSpaPhone = "(705) 408-2815";
                                upDatedDurationTotal = "60 Minutes";
                                upDatedDurationOne = "- 20 Minutes Light Cleaning";
                                upDatedDurationTwo = "- 40 Minutes LED Light Experience & Consultation";
                                promoPrice = "79.95"
                                upDatedActualSpaPhone = "Can't find our spa? Give us a call at (647) 787-7105";
                                treatmentSelected = "LED Treatment";
                                newSpaPhoneNumberSelected = "(647) 787-7105";
                                insteadOfSpa = "$350"
                                break; 

                                case "Kristals Barrie Non-Surgical Facelift":
                                upDatedSpaName = "Kristals Barrie Spa";
                                upDatedSpaAddress = "Georgian Mall,"+"<br>"+"500 Bayfield St, Barrie, ON L4M 4Z8" +"<br>"+"(Main entrance lower level, next to Victoria's Secret)";
                                upDatedSpaLINK = "https://forms.gle/WyFD3HQApwUDL7hH6";
                                upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/kristals-barrie-non-surgical-facelift" ;
                                upDatedSpaPhone = "(705) 408-2815";
                                upDatedDurationTotal = "60 Minutes";
                                upDatedDurationOne = "- 45-minute Cleansing and the Non-Surgical Face Lift treatment";
                                upDatedDurationTwo = "- 15-minute Consultation";
                                promoPrice = "79.95"
                                upDatedActualSpaPhone = "Can't find our spa? Give us a call at (647) 787-7105";
                                treatmentSelected = "Non-Surgical Facelift Treatment";
                                newSpaPhoneNumberSelected = "(647) 787-7105";
                                insteadOfSpa = "$350"
                                break; 

                                case "Kristals Burlington Turkey Neck Tightening $79.95":
                            upDatedSpaName = "Kristals Burlington Spa";
                            upDatedSpaAddress = "Burlington Mall,"+"<br>"+"777 Guelph Line, Burlington,ON L7R 3N2" + "<br>"+"(Please enter through entrance #3 and look for PETSMART & 'Marks')"+"<br>"+"(When you're in the mall, just pass Marks, and the spa will be on the left-hand side.)"; 
                            upDatedSpaLINK = "https://forms.gle/JQoAioVQEG9gZH197";
                            upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/kristals-burlington-turkey-neck-tightening-treatment-promo" ;
                            upDatedSpaPhone = "(289) 293-9711";
                            upDatedDurationTotal = "60 Minutes";
                            upDatedDurationOne = "- 15 Minutes Consultation";
                            upDatedDurationTwo = "- 45 Minutes Turkey Neck Tightening Treatment";
                            promoPrice = "79.95"
                            upDatedActualSpaPhone = "Can't find our spa? Give us a call at (647) 293-1112";
                            treatmentSelected = "Turkey Neck Tightening Treatment";
                            newSpaPhoneNumberSelected = "(647) 293-1112";
                            insteadOfSpa = "$377"
                            break; 

                                case "Kristals Barrie Neck and Jawline 69.95":
                                upDatedSpaName = "Kristals Barrie Spa";
                                upDatedSpaAddress = "Georgian Mall,"+"<br>"+"500 Bayfield St, Barrie, ON L4M 4Z8" +"<br>"+"(Main entrance lower level, next to Victoria's Secret)";
                                upDatedSpaLINK = "https://forms.gle/WyFD3HQApwUDL7hH6";
                                upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/kristals-barrie-neck-and-jaw-line-tightening-treatment-promo" ;
                                upDatedSpaPhone = "(705) 408-2815";
                                upDatedDurationTotal = "60 Minutes";
                                upDatedDurationOne = "- 15 Minutes Light Cleaning";
                                upDatedDurationTwo = "- 45 Minutes Neck and Jawline Treatment & Consultation";
                                promoPrice = "69.95"
                                upDatedActualSpaPhone = "Can't find our spa? Give us a call at (647) 787-7105";
                                treatmentSelected = "Neck and Jawline Tightening Treatment";
                                newSpaPhoneNumberSelected = "(647) 787-7105";
                                insteadOfSpa = "$377"
                                break;

                                case "Kristals Barrie Skin Tightening 69.95":
                                upDatedSpaName = "Kristals Barrie Spa";
                                upDatedSpaAddress = "Georgian Mall,"+"<br>"+"500 Bayfield St, Barrie, ON L4M 4Z8" +"<br>"+"(Main entrance lower level, next to Victoria's Secret)";
                                upDatedSpaLINK = "https://forms.gle/WyFD3HQApwUDL7hH6";
                                upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/kristals-barrie-skin-tightening-promo-page" ;
                                upDatedSpaPhone = "(705) 408-2815";
                                upDatedDurationTotal = "60 Minutes";
                                upDatedDurationOne = "- 15 Minutes Light Cleaning";
                                upDatedDurationTwo = "- 45 Minutes Skin Tightening Treatment & Consultation";
                                promoPrice = "69.95"
                                upDatedActualSpaPhone = "Can't find our spa? Give us a call at (647) 787-7105";
                                treatmentSelected = "Skin Tightening Treatment";
                                newSpaPhoneNumberSelected = "(647) 787-7105";
                                insteadOfSpa = "$299"
                                break;

                                case "Adore Cookstown":
                                    upDatedSpaName = "Adore spa";
                                    upDatedSpaAddress = "Tanger Outlet,"+"<br>"+"3311 County Road 89, Cookstown, ON L0L 1L0" +"<br>"+"(Entrance #3, next to Sketchers)";
                                    upDatedSpaLINK = "https://forms.gle/wQhsDWzjTS6GM9ko7";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/adorecookstown-ledpromo" ;
                                    upDatedSpaPhone = "(705) 408-0758";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 20 Minutes Light Cleaning";
                                    upDatedDurationTwo = "- 40 Minutes LED Light Experience & Consultation";
                                    promoPrice = "79.95"
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (844) 377-7753";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(844) 377-7753";
                                    insteadOfSpa = "$350"
                                    break; 

                                    case "Adore Cookstown Non Surgical Facelift":
                                    upDatedSpaName = "Adore spa";
                                    upDatedSpaAddress = "Tanger Outlet,"+"<br>"+"3311 County Road 89, Cookstown, ON L0L 1L0" +"<br>"+"(Entrance #3, next to Sketchers)";
                                    upDatedSpaLINK = "https://forms.gle/wQhsDWzjTS6GM9ko7";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/adore-cookstown-non-surgical-facelift" ;
                                    upDatedSpaPhone = "(705) 408-0758";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 45-minute Cleansing and the Non-Surgical Face Lift treatment";
                                    upDatedDurationTwo = "- 15-minute Consultation";
                                    promoPrice = "79.95"
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (844) 377-7753";
                                    treatmentSelected = "Non-Surgical Facelift Treatment";
                                    newSpaPhoneNumberSelected = "(844) 377-7753";
                                    insteadOfSpa = "$350"
                                    break; 

                                    case "Adore Cookstown Neck and Jawline 69.95":
                                    upDatedSpaName = "Adore spa";
                                    upDatedSpaAddress = "Tanger Outlet,"+"<br>"+"3311 County Road 89, Cookstown, ON L0L 1L0" +"<br>"+"(Entrance #3, next to Sketchers)";
                                    upDatedSpaLINK = "https://forms.gle/wQhsDWzjTS6GM9ko7";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/adore-cookstown-neck-and-jaw-line-tightening-treatment-promo" ;
                                    upDatedSpaPhone = "(705) 408-0758";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 Minutes Light Cleaning";
                                    upDatedDurationTwo = "- 45 Minutes Neck and Jawline Treatment & Consultation";
                                    promoPrice = "69.95"
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (844) 377-7753";
                                    treatmentSelected = "Neck and Jawline Tightening Treatment";
                                    newSpaPhoneNumberSelected = "(844) 377-7753";
                                    insteadOfSpa = "$377"
                                    break; 

                                    case "Adore Cookstown Skin Tightening 69.95":
                                    upDatedSpaName = "Adore spa";
                                    upDatedSpaAddress = "Tanger Outlet,"+"<br>"+"3311 County Road 89, Cookstown, ON L0L 1L0" +"<br>"+"(Entrance #3, next to Sketchers)";
                                    upDatedSpaLINK = "https://forms.gle/wQhsDWzjTS6GM9ko7";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/adore-cookstown-skin-tightening-promo-page" ;
                                    upDatedSpaPhone = "(705) 408-0758";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 Minutes Light Cleaning";
                                    upDatedDurationTwo = "- 45 Minutes Skin Tightening Treatment & Consultation";
                                    promoPrice = "69.95"
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (844) 377-7753";
                                    treatmentSelected = "Skin Tightening";
                                    newSpaPhoneNumberSelected = "(844) 377-7753";
                                    insteadOfSpa = "$299"
                                    break;

                                    case "Kristals Erin Mills LED":
                                    upDatedSpaName = "Kristals Erin Mills spa";
                                    upDatedSpaAddress = "Erin Mills Centre,"+"<br>"+"5100 Erin Mills Pkwy, Mississauga, ON L5M 4Z5" +"<br>"+"(Get in through Entrance A (near 'Turtle Jack restaurant'), Once you arrive to the center’s intersection make a “U-turn” to the LEFT side (left side aisle)";
                                    upDatedSpaLINK = "https://forms.gle/WYLHZFb4fk3s3J4e9";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/kristals-erinmills-spa-led-promo-page" ;
                                    upDatedSpaPhone = "(437) 253-8259";
                                    upDatedDurationTotal = "50 Minutes";
                                    upDatedDurationOne = "- 10 Minutes Light Cleansing";
                                    upDatedDurationTwo = "- 40 Minutes LED Light Experience & Consultation";
                                    promoPrice = "79.95"
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (647) 293-1112";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(647) 293-1112";
                                    insteadOfSpa = "$350"
                                    break;       
                                    
                                    case "Kristals Erin Mills AquaPure":
                                    upDatedSpaName = "Kristals Erin Mills spa";
                                    upDatedSpaAddress = "Erin Mills Centre,"+"<br>"+"5100 Erin Mills Pkwy, Mississauga, ON L5M 4Z5" +"<br>"+"(1st floor, between Erin Mills Photo & Bluenotes)";
                                    upDatedSpaLINK = "https://forms.gle/WYLHZFb4fk3s3J4e9";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/kristals-erin-mills-anti-aging-aquapure-experience-promo-page" ;
                                    upDatedSpaPhone = "(437) 253-8259";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 60 Minutes AquaPure Experience & Consultation";
                                    upDatedDurationTwo = " ";
                                    promoPrice = "99.95"
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (647) 293-1112";
                                    treatmentSelected = "AquaPure Treatment";
                                    newSpaPhoneNumberSelected = "(647) 293-1112";
                                    insteadOfSpa = "$350"
                                    break;       

                                    case "Kristals Erin Mills Neck and Jawline":
                                    upDatedSpaName = "Kristals Erin Mills spa";
                                    upDatedSpaAddress = "Erin Mills Centre,"+"<br>"+"5100 Erin Mills Pkwy, Mississauga, ON L5M 4Z5" +"<br>"+"(Get in through Entrance A (near 'Turtle Jack restaurant'), Once you arrive to the center’s intersection make a “U-turn” to the LEFT side (left side aisle)";
                                    upDatedSpaLINK = "https://forms.gle/WYLHZFb4fk3s3J4e9";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/kristals-erin-mills-neck-and-jaw-line-tightening-treatment-promo" ;
                                    upDatedSpaPhone = "(437) 253-8259";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 Minutes Consultation";
                                    upDatedDurationTwo = "- 45 Minutes Neck & Jawline Treatment";
                                    promoPrice = "79.95"
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (647) 293-1112";
                                    treatmentSelected = "Neck and Jawline Tightening Treatment";
                                    newSpaPhoneNumberSelected = "(647) 293-1112";
                                    insteadOfSpa = "$377"
                                    break;    

                                    case "Kristals Erin Mills Turkey Neck Tightening $79.95":
                                    upDatedSpaName = "Kristals Erin Mills spa";
                                    upDatedSpaAddress = "Erin Mills Centre,"+"<br>"+"5100 Erin Mills Pkwy, Mississauga, ON L5M 4Z5" +"<br>"+"(Get in through Entrance A (near 'Turtle Jack restaurant'), Once you arrive to the center’s intersection make a “U-turn” to the LEFT side (left side aisle)";
                                    upDatedSpaLINK = "https://forms.gle/WYLHZFb4fk3s3J4e9";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/kristals-erin-mills-turkey-neck-tightening-treatment-promo" ;
                                    upDatedSpaPhone = "(437) 253-8259";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 Minutes Consultation";
                                    upDatedDurationTwo = "- 45 Minutes Turkey Neck Tightening Treatment";
                                    promoPrice = "79.95"
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (647) 293-1112";
                                    treatmentSelected = "Turkey Neck Tightening Treatment";
                                    newSpaPhoneNumberSelected = "(647) 293-1112";
                                    insteadOfSpa = "$377"
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
                                                

                                                    case "Rachels Beauty Scottsdale LED":
                                                        upDatedSpaName = "Rachel’s Beauty Spa";
                                                        upDatedSpaAddress = "Scottsdale Quarter,"+"<br>"+"15147 N Scottsdale Rd, Scottsdale, AZ 85254, STE 130"+"<br>"+"(When you arrive at Sephora, turn right onto South Street, across from Skin Laundry.)";
                                                        upDatedSpaLINK = "https://forms.gle/QTfEEaaG3Y6RXNzV6";
                                                        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/rachel-beauty-scottsdale-spa-led-promo-page" ;
                                                        upDatedSpaPhone = "(480) 847-1841";
                                                        upDatedDurationTotal = "60 Minutes";
                                                        upDatedDurationOne = "- 10 Minutes Light Cleansing";
                                                        upDatedDurationTwo = "- 30 Minutes LED Light Experience & 20 Minutes Consultation";
                                                        promoPrice = "59.95";
                                                        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (480) 808-9400";
                                                        treatmentSelected = "LED Treatment";
                                                        newSpaPhoneNumberSelected = "(480) 808-9400";
                                                        insteadOfSpa = "$350"
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

                                                                case "Lola Beauty Mesa":
                                                                    upDatedSpaName = "Lola Beauty Spa";
                                                                    upDatedSpaAddress = "Superstition Mall" + "<br>" + "6555 E Southern Ave Mesa, AZ 85206"+"<br>"+"(First floor, Next to Cinnabon)";
                                                                    upDatedSpaLINK = "https://forms.gle/peiS9dvWHZdg9aE26";
                                                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/lolabeauty-mesa-led-promo" ;
                                                                    upDatedSpaPhone = "(480) 716-5545";
                                                                    upDatedDurationTotal = "60 Minutes";
                                                                    upDatedDurationOne = "- 15 Minutes Skin Cleaning";
                                                                    upDatedDurationTwo = "- 30 Minutes LED Light Experience Consultation" + "<br>" + "- 15 Minutes of Consultation";
                                                                    promoPrice = "79.95"
                                                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (480) 742-6682";
                                                                    treatmentSelected = "LED Treatment";
                                                                    newSpaPhoneNumberSelected = "(480) 742-6682";
                                                                    insteadOfSpa = "$350"
                                                                    break;  

                                                                    case "Lola Beauty Mesa 59":
                                                                        upDatedSpaName = "Lola Beauty Spa";
                                                                        upDatedSpaAddress = "Superstition Mall" + "<br>" + "6555 E Southern Ave Mesa, AZ 85206"+"<br>"+"(First floor, Next to Cinnabon)";
                                                                        upDatedSpaLINK = "https://forms.gle/peiS9dvWHZdg9aE26";
                                                                        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/lola-beauty-mesa-led-promo-59" ;
                                                                        upDatedSpaPhone = "(480) 716-5545";
                                                                        upDatedDurationTotal = "60 Minutes";
                                                                        upDatedDurationOne = "- 15 Minutes Skin Cleaning";
                                                                        upDatedDurationTwo = "- 30 Minutes LED Light Experience Consultation" + "<br>" + "- 15 Minutes of Consultation";
                                                                        promoPrice = "59.95"
                                                                        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (480) 742-6682";
                                                                        treatmentSelected = "LED Treatment";
                                                                        newSpaPhoneNumberSelected = "(480) 742-6682";
                                                                        insteadOfSpa = "$350"
                                                                        break;  
                                                                    
                                                                case "Supreme Brea":
                                                                    upDatedSpaName = "Supreme Spa";
                                                                    upDatedSpaAddress = "910 E birch st. suite #200, Brea, CA 92821"+"<br>"+"[Embassy court near embassy hotel Ground floor (#2 in the elevator)] Please use underground parking of the Embassy Hotel";
                                                                    upDatedSpaLINK = "https://forms.gle/4x1BvF7zdW75rkCg8";
                                                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/supreme-spa-brea-led-promo-page" ;
                                                                    upDatedSpaPhone = "(714) 592-0373";
                                                                    upDatedDurationTotal = "90 Minutes";
                                                                    upDatedDurationOne = "- 30 Minutes Cleaning";
                                                                    upDatedDurationTwo = "- 60 Minutes LED Light Experience & Consultation";
                                                                    promoPrice = "79.95"
                                                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (714) 784-6884";
                                                                    treatmentSelected = "LED Treatment";
                                                                    newSpaPhoneNumberSelected = "(714) 784-6884";
                                                                    insteadOfSpa = "$350"
                                                                    break;  

                                                                    case "Supreme Brea FTB LED 79.95":
                                                                    upDatedSpaName = "Supreme Spa";
                                                                    upDatedSpaAddress = "910 E birch st. suite #200, Brea, CA 92821"+"<br>"+"[Embassy court near embassy hotel Ground floor (#2 in the elevator)] Please use underground parking of the Embassy Hotel";
                                                                    upDatedSpaLINK = "https://forms.gle/4x1BvF7zdW75rkCg8";
                                                                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/supreme-spa-brea-led-promo" ;
                                                                    upDatedSpaPhone = "(714) 592-0373";
                                                                    upDatedDurationTotal = "90 Minutes";
                                                                    upDatedDurationOne = "- 30 Minutes Cleaning";
                                                                    upDatedDurationTwo = "- 60 Minutes LED Light Experience & Consultation";
                                                                    promoPrice = "79.95"
                                                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (714) 784-6884";
                                                                    treatmentSelected = "LED Treatment";
                                                                    newSpaPhoneNumberSelected = "(714) 784-6884";
                                                                    insteadOfSpa = "$350"
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


                                    case "Elevatione Spa Beauty Skin Tightening":
                                        upDatedSpaName = "Elevatione Spa & Beauty";
                                    upDatedSpaAddress = "Flagler Waterview building,"+"<br>"+"1515 North Flagler Drive, West Palm Beach, FL 33401"+"<br>"+"(First Floor, STE 100)";
                                    upDatedSpaLINK = "https://forms.gle/TcPjSkWja3QxSPWb7";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/elevatione-spa-amp-beauty-skin-tightening-promo-page" ;
                                    upDatedSpaPhone = "(561) 337-1669";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = " ";
                                    upDatedDurationTwo = " ";
                                    promoPrice = "59.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (561) 469-6135";
                                    treatmentSelected = "Skin Tightening Treatment";
                                    newSpaPhoneNumberSelected = "(561) 469-6135";
                                    insteadOfSpa = "$350"
                                    break; 

                                    case "Elevatione Spa Beauty Collagen Lifting":
                                        upDatedSpaName = "Elevatione Spa & Beauty";
                                    upDatedSpaAddress = "Flagler Waterview building,"+"<br>"+"1515 North Flagler Drive, West Palm Beach, FL 33401"+"<br>"+"(First Floor, STE 100)";
                                    upDatedSpaLINK = "https://forms.gle/TcPjSkWja3QxSPWb7";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/elevatione-spa-amp-collagen-lifting-experience-promo-page";
                                    upDatedSpaPhone = "(561) 337-1669";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = " ";
                                    upDatedDurationTwo = " ";
                                    promoPrice = "59.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (561) 469-6135 ";
                                    treatmentSelected = "Collagen Lifting Treatment";
                                    newSpaPhoneNumberSelected = "(561) 469-6135";
                                    insteadOfSpa = "$350"
                                    break; 

                                    case "Elevatione Spa Beauty Non-surgical Face Lift":
                                        upDatedSpaName = "Elevatione Spa & Beauty";
                                    upDatedSpaAddress = "Flagler Waterview building,"+"<br>"+"1515 North Flagler Drive, West Palm Beach, FL 33401"+"<br>"+"(First Floor, STE 100)";
                                    upDatedSpaLINK = "https://forms.gle/TcPjSkWja3QxSPWb7";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/elevatione-spa-non-surgical-face-lift-promo-page";
                                    upDatedSpaPhone = "(561) 337-1669";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = " ";
                                    upDatedDurationTwo = " ";
                                    promoPrice = "59.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (561) 469-6135 ";
                                    treatmentSelected = "Non-surgical Face Lift Treatment";
                                    newSpaPhoneNumberSelected = "(561) 469-6135";
                                    insteadOfSpa = "$350"
                                    break; 

                                    case "Elevatione Spa Beauty LED":
                                        upDatedSpaName = "Elevatione Spa & Beauty";
                                    upDatedSpaAddress = "Flagler Waterview building,"+"<br>"+"1515 North Flagler Drive, West Palm Beach, FL 33401"+"<br>"+"(First Floor, STE 100)";
                                    upDatedSpaLINK = "https://forms.gle/TcPjSkWja3QxSPWb7";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/elevatione-spa-amp-beauty-anti-aging-led-promo-page";
                                    upDatedSpaPhone = "(561) 337-1669";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = " ";
                                    upDatedDurationTwo = " ";
                                    promoPrice = "59.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (561) 469-6135 ";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(561) 469-6135";
                                    insteadOfSpa = "$350"
                                    break; 

                                    case "Elevatione Spa Beauty Collagen Enhancing 79.95":
                                        upDatedSpaName = "Elevatione Spa & Beauty";
                                    upDatedSpaAddress = "Flagler Waterview building,"+"<br>"+"1515 North Flagler Drive, West Palm Beach, FL 33401"+"<br>"+"(First Floor, STE 100)";
                                    upDatedSpaLINK = "https://forms.gle/TcPjSkWja3QxSPWb7";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/elevatione-spa-collagen-enhancing-promo";
                                    upDatedSpaPhone = "(561) 337-1669";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = " ";
                                    upDatedDurationTwo = " ";
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (561) 469-6135 ";
                                    treatmentSelected = "Collagen Enhancing Treatment";
                                    newSpaPhoneNumberSelected = "(561) 469-6135";
                                    insteadOfSpa = "$350"
                                    break; 

                                    case "Elevatione Spa Beauty Body Sculpting 99.95":
                                        upDatedSpaName = "Elevatione Spa & Beauty";
                                    upDatedSpaAddress = "Flagler Waterview building,"+"<br>"+"1515 North Flagler Drive, West Palm Beach, FL 33401"+"<br>"+"(First Floor, STE 100)";
                                    upDatedSpaLINK = "https://forms.gle/TcPjSkWja3QxSPWb7";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/elevetione-bodysculpting-promo";
                                    upDatedSpaPhone = "(561) 337-1669";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = " ";
                                    upDatedDurationTwo = " ";
                                    promoPrice = "99.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (561) 469-6135 ";
                                    treatmentSelected = "Body Sculpting Treatment";
                                    newSpaPhoneNumberSelected = "(561) 469-6135";
                                    insteadOfSpa = "$500"
                                    break; 

                                    case "Elevatione Spa Beauty Non-surgical Face Lift And Microdermabrasion":
                                        upDatedSpaName = "Elevatione Spa & Beauty";
                                    upDatedSpaAddress = "Flagler Waterview building,"+"<br>"+"1515 North Flagler Drive, West Palm Beach, FL 33401"+"<br>"+"(First Floor, STE 100)";
                                    upDatedSpaLINK = "https://forms.gle/TcPjSkWja3QxSPWb7";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/elevatione-spa-amp-non-surgical-face-lift-experience-promo-page";
                                    upDatedSpaPhone = "(561) 337-1669";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = " ";
                                    upDatedDurationTwo = " ";
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (561) 469-6135";
                                    treatmentSelected = "Non-surgical Face Lift & Microdermabrasion Treatment";
                                    newSpaPhoneNumberSelected = "(561) 469-6135";
                                    insteadOfSpa = "$350"
                                    break; 

                                    case "Elevatione Spa Beauty Microdermabrasion":
                                        upDatedSpaName = "Elevatione Spa & Beauty";
                                    upDatedSpaAddress = "Flagler Waterview building,"+"<br>"+"1515 North Flagler Drive, West Palm Beach, FL 33401"+"<br>"+"(First Floor, STE 100)";
                                    upDatedSpaLINK = "https://forms.gle/TcPjSkWja3QxSPWb7";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/elevationespa-microdermabrasion-promo";
                                    upDatedSpaPhone = "(561) 337-1669";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = " ";
                                    upDatedDurationTwo = " ";
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (561) 469-6135";
                                    treatmentSelected = "Microdermabrasion Treatment";
                                    newSpaPhoneNumberSelected = "(561) 469-6135";
                                    insteadOfSpa = "$350"
                                    break; 

                                    case "Elevatione Spa Beauty RF Treatment":
                                        upDatedSpaName = "Elevatione Spa & Beauty";
                                    upDatedSpaAddress = "Flagler Waterview building,"+"<br>"+"1515 North Flagler Drive, West Palm Beach, FL 33401"+"<br>"+"(First Floor, STE 100)";
                                    upDatedSpaLINK = "https://forms.gle/TcPjSkWja3QxSPWb7";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/elevatione-rf-facial-promo";
                                    upDatedSpaPhone = "(561) 337-1669";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = " ";
                                    upDatedDurationTwo = " ";
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (561) 469-6135";
                                    treatmentSelected = "RF Treatment";
                                    newSpaPhoneNumberSelected = "(561) 469-6135";
                                    insteadOfSpa = "$350"
                                    break; 

                                    case "Elevatione Spa Beauty Non-Surgical Lifting With Mesotherapy Treatment":
                                        upDatedSpaName = "Elevatione Spa & Beauty";
                                    upDatedSpaAddress = "Flagler Waterview building,"+"<br>"+"1515 North Flagler Drive, West Palm Beach, FL 33401"+"<br>"+"(First Floor, STE 100)";
                                    upDatedSpaLINK = "https://forms.gle/TcPjSkWja3QxSPWb7";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/elevatione-antiaging-mesotherapy-promo";
                                    upDatedSpaPhone = "(561) 337-1669";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = " ";
                                    upDatedDurationTwo = " ";
                                    promoPrice = "80";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (561) 469-6135";
                                    treatmentSelected = "Non-Surgical Lifting With Mesotherapy Treatment";
                                    newSpaPhoneNumberSelected = "(561) 469-6135";
                                    insteadOfSpa = "$350"
                                    break; 

                                    case "Elevatione Spa Beauty HYDRAGLOW":
                                    upDatedSpaName = "Elevatione Spa & Beauty";
                                    upDatedSpaAddress = "Flagler Waterview building,"+"<br>"+"1515 North Flagler Drive, West Palm Beach, FL 33401"+"<br>"+"(First Floor, STE 100)";
                                    upDatedSpaLINK = "https://forms.gle/TcPjSkWja3QxSPWb7";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/elevationespa-hydraglow-promo";
                                    upDatedSpaPhone = "(561) 337-1669";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = " ";
                                    upDatedDurationTwo = " ";
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (561) 469-6135";
                                    treatmentSelected = "HYDRAGLOW Treatment";
                                    newSpaPhoneNumberSelected = "(561) 469-6135";
                                    insteadOfSpa = "$350"
                                    break; 
                                    
                                    case "Elevatione Spa Beauty Collagen Boosting 69.95":
                                    upDatedSpaName = "Elevatione Spa & Beauty";
                                    upDatedSpaAddress = "Flagler Waterview building,"+"<br>"+"1515 North Flagler Drive, West Palm Beach, FL 33401"+"<br>"+"(First Floor, STE 100)";
                                    upDatedSpaLINK = "https://forms.gle/TcPjSkWja3QxSPWb7";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/elevatione-spa-collagen-boosting-promo";
                                    upDatedSpaPhone = "(561) 337-1669";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "45 minutes of Cleansing and Collagen Boosting Treatment";
                                    upDatedDurationTwo = "15 minutes Consultation";
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (561) 469-6135 ";
                                    treatmentSelected = "Collagen Boosting Treatment";
                                    newSpaPhoneNumberSelected = "(561) 469-6135";
                                    insteadOfSpa = "$350"
                                    break;

                                    case "Elevatione Spa Beauty Collagen Enhancing Treatment":
                                    upDatedSpaName = "Elevatione Spa & Beauty";
                                    upDatedSpaAddress = "Flagler Waterview building,"+"<br>"+"1515 North Flagler Drive, West Palm Beach, FL 33401"+"<br>"+"(First Floor, STE 100)";
                                    upDatedSpaLINK = "https://forms.gle/TcPjSkWja3QxSPWb7";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/elevatione-spa-collagen-enhancing-promo";
                                    upDatedSpaPhone = "(561) 337-1669";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "45 minutes of Cleansing and Collagen Boosting Treatment";
                                    upDatedDurationTwo = "15 minutes Consultation";
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (561) 469-6135 ";
                                    treatmentSelected = "Collagen Enhancing Treatment";
                                    newSpaPhoneNumberSelected = "(561) 469-6135";
                                    insteadOfSpa = "$350"
                                    break;

                                    case "Elevatione Spa Beauty Gold Collagen Treatment":
                                    upDatedSpaName = "Elevatione Spa & Beauty";
                                    upDatedSpaAddress = "Flagler Waterview building,"+"<br>"+"1515 North Flagler Drive, West Palm Beach, FL 33401"+"<br>"+"(First Floor, STE 100)";
                                    upDatedSpaLINK = "https://forms.gle/TcPjSkWja3QxSPWb7";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/elevatione-gold-collagen-facial-page";
                                    upDatedSpaPhone = "(561) 337-1669";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "15 minutes of Cleansing and 30 minutes of Gold Collagen Treatment";
                                    upDatedDurationTwo = "15 minutes Consultation";
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (561) 469-6135 ";
                                    treatmentSelected = "Collagen Enhancing Treatment";
                                    newSpaPhoneNumberSelected = "(561) 469-6135";
                                    insteadOfSpa = "$250"
                                    break;

                                    case "Elevatione Spa Beauty Microneedling":
                                    upDatedSpaName = "Elevatione Spa & Beauty";
                                    upDatedSpaAddress = "Flagler Waterview building,"+"<br>"+"1515 North Flagler Drive, West Palm Beach, FL 33401"+"<br>"+"(First Floor, STE 100)";
                                    upDatedSpaLINK = "https://forms.gle/TcPjSkWja3QxSPWb7";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/elevatione-spa-microneedling-treatment-promo-page";
                                    upDatedSpaPhone = "(561) 337-1669";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "45 minutes of Microneedling Treatment";
                                    upDatedDurationTwo = "15 minutes Consultation";
                                    promoPrice = "99";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (561) 469-6135 ";
                                    treatmentSelected = "Collagen Enhancing Treatment";
                                    newSpaPhoneNumberSelected = "(561) 469-6135";
                                    insteadOfSpa = "$299"
                                    break;

                                    case "Elevatione Spa Beauty Body Sculpting 79.95":
                                        upDatedSpaName = "Elevatione Spa & Beauty";
                                    upDatedSpaAddress = "Flagler Waterview building,"+"<br>"+"1515 North Flagler Drive, West Palm Beach, FL 33401"+"<br>"+"(First Floor, STE 100)";
                                    upDatedSpaLINK = "https://forms.gle/TcPjSkWja3QxSPWb7";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/elevatione-body-sculpting";
                                    upDatedSpaPhone = "(561) 337-1669";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = " ";
                                    upDatedDurationTwo = " ";
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (561) 469-6135 ";
                                    treatmentSelected = "Body Sculpting Treatment";
                                    newSpaPhoneNumberSelected = "(561) 469-6135";
                                    insteadOfSpa = "$399"
                                    break; 

                                    case "Elevatione Spa Beauty Body Sculpting 69.95":
                                        upDatedSpaName = "Elevatione Spa & Beauty";
                                    upDatedSpaAddress = "Flagler Waterview building,"+"<br>"+"1515 North Flagler Drive, West Palm Beach, FL 33401"+"<br>"+"(First Floor, STE 100)";
                                    upDatedSpaLINK = "https://forms.gle/TcPjSkWja3QxSPWb7";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/new-elevatione-body-sculpting-promo";
                                    upDatedSpaPhone = "(561) 337-1669";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = " ";
                                    upDatedDurationTwo = " ";
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (561) 469-6135 ";
                                    treatmentSelected = "Body Sculpting Treatment";
                                    newSpaPhoneNumberSelected = "(561) 469-6135";
                                    insteadOfSpa = "$399"
                                    break;

                                    case "Elevatione Spa Beauty H2O Oxygen Treatment 69":
                                        upDatedSpaName = "Elevatione Spa & Beauty";
                                    upDatedSpaAddress = "Flagler Waterview building,"+"<br>"+"1515 North Flagler Drive, West Palm Beach, FL 33401"+"<br>"+"(First Floor, STE 100)";
                                    upDatedSpaLINK = "https://forms.gle/TcPjSkWja3QxSPWb7";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/elevatione-spa-h2o-oxygen-facial-promo-page";
                                    upDatedSpaPhone = "(561) 337-1669";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "45-minutes of Cleansing and H2O Oxygen Treatment";
                                    upDatedDurationTwo = "15-minutes of Consultation";
                                    promoPrice = "69";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (561) 469-6135 ";
                                    treatmentSelected = "Oxygen Treatment";
                                    newSpaPhoneNumberSelected = "(561) 469-6135";
                                    insteadOfSpa = "$200"
                                    break;

                                    case "Elevatione Spa Beauty Collagen Mesotherapy Treatment":
                                        upDatedSpaName = "Elevatione Spa & Beauty";
                                    upDatedSpaAddress = "Flagler Waterview building,"+"<br>"+"1515 North Flagler Drive, West Palm Beach, FL 33401"+"<br>"+"(First Floor, STE 100)";
                                    upDatedSpaLINK = "https://forms.gle/TcPjSkWja3QxSPWb7";
                                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/elevatione-mesotherapy-facial-promo-page";
                                    upDatedSpaPhone = "(561) 337-1669";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "45-minutes of Cleansing and Collagen Mesotherapy Treatment";
                                    upDatedDurationTwo = "15-minutes Consultation ";
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (561) 469-6135 ";
                                    treatmentSelected = "Collagen Boosting Treatment";
                                    newSpaPhoneNumberSelected = "(561) 469-6135";
                                    insteadOfSpa = "$299"
                                    break;

                                    case "Elevatione Spa LED 59.95":
                                        upDatedSpaName = "Elevatione Spa & Beauty";
                                    upDatedSpaAddress = "Flagler Waterview building,"+"<br>"+"1515 North Flagler Drive, West Palm Beach, FL 33401"+"<br>"+"(First Floor, STE 100)";
                                    upDatedSpaLINK = "https://forms.gle/TcPjSkWja3QxSPWb7";
                                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/new-elevatione-spa-led-promo";
                                    upDatedSpaPhone = "(561) 337-1669";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "15-minutes of Cleansing";
                                    upDatedDurationTwo = "30-minutes LED Treatment and 15 minutes consultation";
                                    promoPrice = "59.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (561) 469-6135 ";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(561) 469-6135";
                                    insteadOfSpa = "$350"
                                    break;

                                    case "Elevatione Spa Men's LED 69.95":
                                        upDatedSpaName = "Elevatione Spa & Beauty";
                                    upDatedSpaAddress = "Flagler Waterview building,"+"<br>"+"1515 North Flagler Drive, West Palm Beach, FL 33401"+"<br>"+"(First Floor, STE 100)";
                                    upDatedSpaLINK = "https://forms.gle/TcPjSkWja3QxSPWb7";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/elevatione-spa-mens-led-treatment-promo-page";
                                    upDatedSpaPhone = "(561) 337-1669";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "15-minutes of Cleansing";
                                    upDatedDurationTwo = "45-minutes LED Treatment and Consultation";
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (561) 469-6135 ";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(561) 469-6135";
                                    insteadOfSpa = "$350"
                                    break;

                                    case "Elevatione Spa Men's LED 89.95":
                                        upDatedSpaName = "Elevatione Spa & Beauty";
                                    upDatedSpaAddress = "Flagler Waterview building,"+"<br>"+"1515 North Flagler Drive, West Palm Beach, FL 33401"+"<br>"+"(First Floor, STE 100)";
                                    upDatedSpaLINK = "https://forms.gle/TcPjSkWja3QxSPWb7";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/elevatione-spa-mens-led-treatment-new-promo-page";
                                    upDatedSpaPhone = "(561) 337-1669";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "15-minutes of Cleansing";
                                    upDatedDurationTwo = "45-minutes LED Treatment and Consultation";
                                    promoPrice = "89.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (561) 469-6135 ";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(561) 469-6135";
                                    insteadOfSpa = "$299"
                                    break;

                                    case "Elevatione Spa Men's Body Sculpting 69.95":
                                        upDatedSpaName = "Elevatione Spa & Beauty";
                                    upDatedSpaAddress = "Flagler Waterview building,"+"<br>"+"1515 North Flagler Drive, West Palm Beach, FL 33401"+"<br>"+"(First Floor, STE 100)";
                                    upDatedSpaLINK = "https://forms.gle/TcPjSkWja3QxSPWb7";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/elevatione-mens-body-sculpting-promo";
                                    upDatedSpaPhone = "(561) 337-1669";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = " ";
                                    upDatedDurationTwo = " ";
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (561) 469-6135 ";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(561) 469-6135";
                                    insteadOfSpa = "$350"
                                    break;

                                    case "Elevatione Neck and Jawline Tightening":
                                        upDatedSpaName = "Elevatione Spa & Beauty";
                                    upDatedSpaAddress = "Flagler Waterview building,"+"<br>"+"1515 North Flagler Drive, West Palm Beach, FL 33401"+"<br>"+"(First Floor, STE 100)";
                                    upDatedSpaLINK = "https://forms.gle/TcPjSkWja3QxSPWb7";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/elevatione-neck-and-jaw-line-tightening-treatment-promo";
                                    upDatedSpaPhone = "(561) 337-1669";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 minutes of Consultation";
                                    upDatedDurationTwo = "- 45 minutes of Neck & Jawline Treatment";
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (561) 469-6135 ";
                                    treatmentSelected = "Neck and Jawline Tightening Treatment";
                                    newSpaPhoneNumberSelected = "(561) 469-6135";
                                    insteadOfSpa = "$299"
                                    break;

                                    case "Elevatione Turkey Neck Tightening $79.95":
                                        upDatedSpaName = "Elevatione Spa & Beauty";
                                    upDatedSpaAddress = "Flagler Waterview building,"+"<br>"+"1515 North Flagler Drive, West Palm Beach, FL 33401"+"<br>"+"(First Floor, STE 100)";
                                    upDatedSpaLINK = "https://forms.gle/TcPjSkWja3QxSPWb7";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/elevatione-turkey-neck-tightening-treatment-promo";
                                    upDatedSpaPhone = "(561) 337-1669";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 minutes of Consultation";
                                    upDatedDurationTwo = "- 45 minutes of Turkey Neck Tightening Treatment";
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (561) 469-6135 ";
                                    treatmentSelected = "Turkey Neck Tightening Treatment";
                                    newSpaPhoneNumberSelected = "(561) 469-6135";
                                    insteadOfSpa = "$377"
                                    break;

                                    case "Elevatione Sagging Neck Rescue $79.95":
                                        upDatedSpaName = "Elevatione Spa & Beauty";
                                    upDatedSpaAddress = "Flagler Waterview building,"+"<br>"+"1515 North Flagler Drive, West Palm Beach, FL 33401"+"<br>"+"(First Floor, STE 100)";
                                    upDatedSpaLINK = "https://forms.gle/TcPjSkWja3QxSPWb7";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/elevatione-sagging-neck-rescue-treatment-promo";
                                    upDatedSpaPhone = "(561) 337-1669";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 minutes of Consultation";
                                    upDatedDurationTwo = "- 45 minutes of Sagging Neck Rescue Treatment";
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (561) 469-6135 ";
                                    treatmentSelected = "Sagging Neck Rescue Treatment";
                                    newSpaPhoneNumberSelected = "(561) 469-6135";
                                    insteadOfSpa = "$377"
                                    break;

                                    case "Elevatione Pumpkin Mask Treatment $79.95":
                                        upDatedSpaName = "Elevatione Spa & Beauty";
                                    upDatedSpaAddress = "Flagler Waterview building,"+"<br>"+"1515 North Flagler Drive, West Palm Beach, FL 33401"+"<br>"+"(First Floor, STE 100)";
                                    upDatedSpaLINK = "https://forms.gle/TcPjSkWja3QxSPWb7";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/elevatione-pumpkin-mask-treatment";
                                    upDatedSpaPhone = "(561) 337-1669";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 minutes of Cleansing";
                                    upDatedDurationTwo = "- 45 minutes of Pumpkin Mask Treatment and Consultation";
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (561) 469-6135 ";
                                    treatmentSelected = "Pumpkin Mask Treatment";
                                    newSpaPhoneNumberSelected = "(561) 469-6135";
                                    insteadOfSpa = "$377"
                                    break;


                                    case "Adore Estero":
                                        upDatedSpaName = "Adore Spa";
                                    upDatedSpaAddress = "Miromar Outlets,"+"<br>"+"10801 Corkscrew Rd Estero, FL 33928"+"<br>"+"(Between Ford's Garage & Aerie)"+"<br>"+"Before arriving please fill out our new customer form by using this link https://form.jotform.com/220505197859060";
                                    upDatedSpaLINK = "https://form.jotform.com/220505197859060";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/adore-estero-ledpromo";
                                    upDatedSpaPhone = "(239) 444-8790";
                                    upDatedDurationTotal = "45 Minutes";
                                    upDatedDurationOne = "- 10 Minutes Cleansing & Steam ";
                                    upDatedDurationTwo = "- 35 Minutes LED Tightening Treatment and Consultation";
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (239) 301-4943";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(239) 301-4943";
                                    insteadOfSpa = "$350"
                                    break; 

                                    case "Adore Estero LED 79.95 NEW":
                                        upDatedSpaName = "Adore Spa";
                                    upDatedSpaAddress = "Miromar Outlets,"+"<br>"+"10801 Corkscrew Rd Estero, FL 33928"+"<br>"+"(Between Ford's Garage & Aerie)"+"<br>"+"Before arriving please fill out our new customer form by using this link https://form.jotform.com/220505197859060";
                                    upDatedSpaLINK = "https://form.jotform.com/220505197859060";
                                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/adore-estero-led-anti-aging-promo-page";
                                    upDatedSpaPhone = "(239) 444-8790";
                                    upDatedDurationTotal = "45 Minutes";
                                    upDatedDurationOne = "- 10 Minutes Cleansing & Steam ";
                                    upDatedDurationTwo = "- 35 Minutes LED Tightening Treatment and Consultation";
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (239) 301-4943";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(239) 301-4943";
                                    insteadOfSpa = "$350"
                                    break; 

                                    case "Adore Estero LED Skin Tightening":
                                        upDatedSpaName = "Adore Spa";
                                    upDatedSpaAddress = "Miromar Outlets,"+"<br>"+"10801 Corkscrew Rd Estero, FL 33928"+"<br>"+"(Between Ford's Garage & Aerie)"+"<br>"+"Before arriving please fill out our new customer form by using this link https://form.jotform.com/220505197859060";
                                    upDatedSpaLINK = "https://form.jotform.com/220505197859060";
                                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/adore-estero-led-skin-tightening-promo";
                                    upDatedSpaPhone = "(239) 444-8790";
                                    upDatedDurationTotal = "45 Minutes";
                                    upDatedDurationOne = "- 10 Minutes light cleansing ";
                                    upDatedDurationTwo = "- 35 Minutes LED Skin Tightening Treatment and Consultation";
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (239) 301-4943";
                                    treatmentSelected = "Skin Tightening";
                                    newSpaPhoneNumberSelected = "(239) 301-4943";
                                    insteadOfSpa = "$377"
                                    break; 

                                    case "Adore Estero Neck and Jawline":
                                        upDatedSpaName = "Adore Spa";
                                    upDatedSpaAddress = "Miromar Outlets,"+"<br>"+"10801 Corkscrew Rd Estero, FL 33928"+"<br>"+"(Between Ford's Garage & Aerie)"+"<br>"+"Before arriving please fill out our new customer form by using this link https://form.jotform.com/220505197859060";
                                    upDatedSpaLINK = "https://form.jotform.com/220505197859060";
                                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/adore-estero-neck-and-jawline-treatment-page";
                                    upDatedSpaPhone = "(239) 444-8790";
                                    upDatedDurationTotal = "45 Minutes";
                                    upDatedDurationOne = "- 10 Minutes light cleansing ";
                                    upDatedDurationTwo = "- 35 Minutes Neck & Jawline Treatment and Consultation";
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (239) 301-4943";
                                    treatmentSelected = "Neck and Jawline Tightening Treatment";
                                    newSpaPhoneNumberSelected = "(239) 301-4943";
                                    insteadOfSpa = "$377"
                                    break; 

                                    case "Flawless Wayne":
                                        upDatedSpaName = "Flawless Beauty";
                                    upDatedSpaAddress = "Willowbrook Mall,"+"<br>"+"1355 Willowbrook Mall, Wayne NJ 07470"+"<br>"+"(Outside Willowbrook Mall, Near LensCrafters)";
                                    upDatedSpaLINK = "https://forms.gle/YoeMzRUD9YLtpxjs9";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/flawlessbeauty-wayne-led-promo";
                                    upDatedSpaPhone = "(973) 200-3530 ";
                                    upDatedDurationTotal = "75 Minutes";
                                    upDatedDurationOne = "- 50 Minutes LED Treatment";
                                    upDatedDurationTwo = "- 25 Minutes of Consultation"
                                    promoPrice = "79.95";   
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (973) 406-6160";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(973) 406-6160";
                                    insteadOfSpa = "$500";
                                    break; 

                                    case "Flawless Wayne $99.95 PROMO":
                                        upDatedSpaName = "Flawless Beauty";
                                    upDatedSpaAddress = "Willowbrook Mall,"+"<br>"+"1355 Willowbrook Mall, Wayne NJ 07470"+"<br>"+"(Outside Willowbrook Mall, Near LensCrafters)";
                                    upDatedSpaLINK = "https://forms.gle/YoeMzRUD9YLtpxjs9";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/flawless-beauty-wayne-spa-led-promo-99";
                                    upDatedSpaPhone = "(973) 200-3530 ";
                                    upDatedDurationTotal = "75 Minutes";
                                    upDatedDurationOne = "- 50 Minutes LED Treatment";
                                    upDatedDurationTwo = "- 25 Minutes of Consultation";
                                    promoPrice = "99.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (973) 406-6160";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(973) 406-6160";
                                    insteadOfSpa = "$500";
                                    break; 

                                    case "Flawless Wayne $69.95 PROMO":
                                        upDatedSpaName = "Flawless Beauty";
                                    upDatedSpaAddress = "Willowbrook Mall,"+"<br>"+"1355 Willowbrook Mall, Wayne NJ 07470"+"<br>"+"(Outside Willowbrook Mall, Near LensCrafters)";
                                    upDatedSpaLINK = "https://forms.gle/YoeMzRUD9YLtpxjs9";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/flawless-beauty-wayne-spa-promo";
                                    upDatedSpaPhone = "(973) 200-3530 ";
                                    upDatedDurationTotal = "75 Minutes";
                                    upDatedDurationOne = "- 50 Minutes LED Treatment";
                                    upDatedDurationTwo = "- 25 Minutes of Consultation";
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (973) 406-6160";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(973) 406-6160";
                                    insteadOfSpa = "$500";
                                    break; 

                                    case "Be Pretty Spa":
                                        upDatedSpaName = "Be Pretty";
                                    upDatedSpaAddress = "309 S Main Street Breckenridge, Colorado 80424"+"<br>"+"(Next to the Crepes Cart)";
                                    upDatedSpaLINK = "https://forms.gle/GMzxAcKuDiCsdVue8";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/be-pretty-led-promo";
                                    upDatedSpaPhone = "(970) 236-1162";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 25 Minutes Cleansing";
                                    upDatedDurationTwo = "- 35 Minutes LED Treatment and Consultation";
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (970) 423-6268";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(970) 423-6268";
                                    insteadOfSpa = "$350";
                                    break; 

                                    case "Pred Beauty St. Petersburg":
                                        upDatedSpaName = "Pred Beauty Spa";
                                    upDatedSpaAddress = "6901 22nd Ave N St. Petersburg, FL 33710"+"<br>"+"(Inside of Tyrone mall, Macys entrance. Across from the Pandora Store)";
                                    upDatedSpaLINK = "https://forms.gle/K3YLkvdsaQTvWMRL8";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/predire-st-pete-led-promo";
                                    upDatedSpaPhone = "(727) 350-1087";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 5-10 Minutes Cleansing";
                                    upDatedDurationTwo = "- 50-55 Minutes LED Treatment and Consultation";
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (727) 341-0110";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(727) 341-0110";
                                    insteadOfSpa = "$350";
                                    break; 

                                    case "AVOLOGI Eneo Victoria Non-Surgical Facelift":
                                        upDatedSpaName = "Avologi Eneo";
                                    upDatedSpaAddress = "3147 Douglas Street Victoria, BC V8Z 6E3"+"<br>"+"(Unit 361, Mayfair Shopping Centre Beside People's Jewelers Store and the Telus/Koodo Kiosk.)";
                                    upDatedSpaLINK = "https://forms.gle/VN9LgHRNeDcctfkg9";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/avologi-eneo-victoria-non-surgical-face-lift";
                                    upDatedSpaPhone = "(250) 410-3324";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 45-minute cleansing and the Non-Surgical Face Lift treatment";
                                    upDatedDurationTwo = "- 15-minute consultation ";
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (236) 258-6757";
                                    treatmentSelected = "Non-Surgical Face Lift Treatment";
                                    newSpaPhoneNumberSelected = "(236) 258-6757";
                                    insteadOfSpa = "$350";
                                    break; 

                                    case "AVOLOGI Eneo Victoria Neck and Jawline 69.95":
                                        upDatedSpaName = "Avologi Eneo";
                                    upDatedSpaAddress = "3147 Douglas Street Victoria, BC V8Z 6E3"+"<br>"+"(Unit 361, Mayfair Shopping Centre Beside People's Jewelers Store and the Telus/Koodo Kiosk.)";
                                    upDatedSpaLINK = "https://forms.gle/VN9LgHRNeDcctfkg9";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/avologi-victoria-neck-and-jaw-line-tightening-treatment-promo ";
                                    upDatedSpaPhone = "(250) 410-3324";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 45-minute cleansing and the Neck and Jawline treatment";
                                    upDatedDurationTwo = "- 15-minute consultation ";
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (236) 258-6757";
                                    treatmentSelected = "Neck and Jawline Treatment";
                                    newSpaPhoneNumberSelected = "(236) 258-6757";
                                    insteadOfSpa = "$377";
                                    break; 

                                    case "AVOLOGI Eneo Victoria Collagen Enhancing":
                                        upDatedSpaName = "Avologi Eneo";
                                    upDatedSpaAddress = "3147 Douglas Street Victoria, BC V8Z 6E3"+"<br>"+"(Unit 361, Mayfair Shopping Centre Beside People's Jewelers Store and the Telus/Koodo Kiosk.)";
                                    upDatedSpaLINK = "https://forms.gle/VN9LgHRNeDcctfkg9";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/avologi-eneo-victoria-collagen-enhancing-new-promo";
                                    upDatedSpaPhone = "(250) 410-3324";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 20-minute cleansing and 20 Minutes Collagen Enhancing treatment";
                                    upDatedDurationTwo = "- 20-minute consultation ";
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (236) 258-6757";
                                    treatmentSelected = "Collagen Enhancing";
                                    newSpaPhoneNumberSelected = "(236) 258-6757";
                                    insteadOfSpa = "$377";
                                    break; 

                                    case "AVOLOGI Eneo Victoria":
                                        upDatedSpaName = "Avologi Eneo";
                                    upDatedSpaAddress = "3147 Douglas Street Victoria, BC V8Z 6E3"+"<br>"+"(Unit 361, Mayfair Shopping Centre Beside People's Jewelers Store and the Telus/Koodo Kiosk.)";
                                    upDatedSpaLINK = "https://forms.gle/VN9LgHRNeDcctfkg9";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/avologi-victoria-led-promo";
                                    upDatedSpaPhone = "(250) 410-3324";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 20 Minutes Cleansing";
                                    upDatedDurationTwo = "- 20 Minutes LED Treatmen" + "<br>" + "- 20 Minutes Consultation";
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (236) 258-6757";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(236) 258-6757";
                                    insteadOfSpa = "$350";
                                    break; 

                                    case "AVOLOGI Eneo Victoria Men's LED $69.95":
                                        upDatedSpaName = "Avologi Eneo";
                                    upDatedSpaAddress = "3147 Douglas Street Victoria, BC V8Z 6E3"+"<br>"+"(Unit 361, Mayfair Shopping Centre Beside People's Jewelers Store and the Telus/Koodo Kiosk.)";
                                    upDatedSpaLINK = "https://forms.gle/VN9LgHRNeDcctfkg9";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/avologi-eneo-victoria-mens-led-promo-page";
                                    upDatedSpaPhone = "(250) 410-3324";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 Minutes Cleansing";
                                    upDatedDurationTwo = "- 45 Minutes LED Treatment and Consultation";
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (236) 258-6757";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(236) 258-6757";
                                    insteadOfSpa = "$377";
                                    break; 

                                    case "AVOLOGI Eneo Woodgrove":
                                        upDatedSpaName = "Avologi Eneo";
                                    upDatedSpaAddress = "6631 Island Hwy, Nanaimo, BC V9T 4T7"+"<br>"+"(Woodgrove Centre, across the hall from The Shoe Company)";
                                    upDatedSpaLINK = "https://forms.gle/L7mp4FhBtw9Z8SeG8";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/avologieneo-woodgrove-nonsurgical-face-neck-lift-promo";
                                    upDatedSpaPhone = "(250) 384-2980";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 20 Minutes Cleansing";
                                    upDatedDurationTwo = "- 20 Minutes LED Treatmen" + "<br>" + "- 20 Minutes Consultation";
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (236) 258-6757";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(236) 258-6757";
                                    insteadOfSpa = "$350";
                                    break; 

                                    case "AVOLOGI Eneo Woodgrove Collagen":
                                        upDatedSpaName = "Avologi Eneo";
                                    upDatedSpaAddress = "6631 Island Hwy, Nanaimo, BC V9T 4T7"+"<br>"+"(Woodgrove Centre, across the hall from The Shoe Company)";
                                    upDatedSpaLINK = "https://forms.gle/L7mp4FhBtw9Z8SeG8";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/avologi-eneo-woodgrove-collagen-enhancing-new-promo";
                                    upDatedSpaPhone = "(250) 384-2980";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 20 Minutes Cleansing";
                                    upDatedDurationTwo = "- 20 Minutes Collagen Enhancing" + "<br>" + "- 20 Minutes Consultation";
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (236) 258-6757";
                                    treatmentSelected = "Collagen Enhancing";
                                    newSpaPhoneNumberSelected = "(236) 258-6757";
                                    insteadOfSpa = "$377";
                                    break; 

                                    case "AVOLOGI Eneo Woodgrove Neck and Jawline 69.95":
                                        upDatedSpaName = "Avologi Eneo";
                                    upDatedSpaAddress = "6631 Island Hwy, Nanaimo, BC V9T 4T7"+"<br>"+"(Woodgrove Centre, across the hall from The Shoe Company)";
                                    upDatedSpaLINK = "https://forms.gle/L7mp4FhBtw9Z8SeG8";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/avologi-woodgrove-neck-and-jaw-line-tightening-treatment-promo ";
                                    upDatedSpaPhone = "(250) 384-2980";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 Minutes Cleansing";
                                    upDatedDurationTwo = "- 45 Minutes Neck and Jawline Treatment and consultation";
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (236) 258-6757";
                                    treatmentSelected = "Neck and Jawline Treatment";
                                    newSpaPhoneNumberSelected = "(236) 258-6757";
                                    insteadOfSpa = "$377";
                                    break; 

                                    case "AVOLOGI Eneo Woodgrove Non-Surgical Facelift":
                                        upDatedSpaName = "Avologi Eneo";
                                    upDatedSpaAddress = "6631 Island Hwy, Nanaimo, BC V9T 4T7"+"<br>"+"(Woodgrove Centre, across the hall from The Shoe Company)";
                                    upDatedSpaLINK = "https://forms.gle/L7mp4FhBtw9Z8SeG8";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/avologi-eneo-woodgrove-non-surgical-face-lift";
                                    upDatedSpaPhone = "(250) 384-2980";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 45-minute cleansing and the Non-Surgical Face Lift treatment";
                                    upDatedDurationTwo = "- 15-minute consultation ";
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (236) 258-6757";
                                    treatmentSelected = "Non-Surgical Face Lift Treatment";
                                    newSpaPhoneNumberSelected = "(236) 258-6757";
                                    insteadOfSpa = "$350";
                                    break; 

                                    case "AVOLOGI Eneo Woodgrove Men's LED $69.95":
                                        upDatedSpaName = "Avologi Eneo";
                                    upDatedSpaAddress = "6631 Island Hwy, Nanaimo, BC V9T 4T7"+"<br>"+"(Woodgrove Centre, across the hall from The Shoe Company)";
                                    upDatedSpaLINK = "https://forms.gle/L7mp4FhBtw9Z8SeG8";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/avologi-eneo-woodgrove-mens-led-promo-page";
                                    upDatedSpaPhone = "(250) 384-2980";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 Minutes Cleansing";
                                    upDatedDurationTwo = "- 45 Minutes LED Treatment and Consultation";
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (236) 258-6757";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(236) 258-6757";
                                    insteadOfSpa = "$377";
                                    break; 

                                    case "AVOLOGI Eneo Woodgrove Sagging Neck Rescue $79.95":
                                        upDatedSpaName = "Avologi Eneo";
                                    upDatedSpaAddress = "6631 Island Hwy, Nanaimo, BC V9T 4T7"+"<br>"+"(Woodgrove Centre, across the hall from The Shoe Company)";
                                    upDatedSpaLINK = "https://forms.gle/L7mp4FhBtw9Z8SeG8";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/avologi-woodgrove-sagging-neck-rescue-treatment-promo";
                                    upDatedSpaPhone = "(250) 384-2980";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 Minutes Consultation";
                                    upDatedDurationTwo = "- 45 Minutes Sagging Neck Rescue Treatment";
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (236) 258-6757";
                                    treatmentSelected = "Sagging Neck Rescue Treatment";
                                    newSpaPhoneNumberSelected = "(236) 258-6757";
                                    insteadOfSpa = "$377";
                                    break; 


                                    case "AVOLOGI Eneo Metrotown":
                                        upDatedSpaName = "Avologi Eneo";
                                    upDatedSpaAddress = "Metrotown Mall, 4700 Kingsway #1170, Burnaby, BC V5H 4M5, Canada"+"<br>"+"(Ground level in the Indigo Books wing, at the bottom of the escalator)";
                                    upDatedSpaLINK = "https://forms.gle/c8TFXfwBMpLd3TcM6";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/avologi-metrotown-ledpromo";
                                    upDatedSpaPhone = "(778) 262-1606";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 20 Minutes Cleansing";
                                    upDatedDurationTwo = "- 20 Minutes LED Treatment" + "<br>" + "- 20 Minutes Consultation";
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (236) 258-6757";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(236) 258-6757";
                                    insteadOfSpa = "$350";
                                    break; 

                                    case "AVOLOGI Eneo Metrotown Collagen Enhancing":
                                        upDatedSpaName = "Avologi Eneo";
                                    upDatedSpaAddress = "Metrotown Mall, 4700 Kingsway #1170, Burnaby, BC V5H 4M5, Canada"+"<br>"+"(Ground level in the Indigo Books wing, at the bottom of the escalator)";
                                    upDatedSpaLINK = "https://forms.gle/c8TFXfwBMpLd3TcM6";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/avologi-eneo-metrotown-collagen-enhancing-new-promo";
                                    upDatedSpaPhone = "(778) 262-1606";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 20 Minutes Cleansing";
                                    upDatedDurationTwo = "- 20 Minutes Collagen Enhancing" + "<br>" + "- 20 Minutes Consultation";
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (236) 258-6757";
                                    treatmentSelected = "Collagen Enhancing";
                                    newSpaPhoneNumberSelected = "(236) 258-6757";
                                    insteadOfSpa = "$377";
                                    break; 

                                    case "AVOLOGI Eneo Metrotown Neck and Jawline":
                                        upDatedSpaName = "Avologi Eneo";
                                    upDatedSpaAddress = "Metrotown Mall, 4700 Kingsway #1170, Burnaby, BC V5H 4M5, Canada"+"<br>"+"(Ground level in the Indigo Books wing, at the bottom of the escalator)";
                                    upDatedSpaLINK = "https://forms.gle/c8TFXfwBMpLd3TcM6";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/avologi-metrotown-neck-and-jaw-line-tightening-treatment-promo";
                                    upDatedSpaPhone = "(778) 262-1606";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 Minutes Cleansing";
                                    upDatedDurationTwo = "- 45 Minutes Neck & Jawline Treatment & Consultation";
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (236) 258-6757";
                                    treatmentSelected = "Neck and Jawline Tightening Treatment";
                                    newSpaPhoneNumberSelected = "(236) 258-6757";
                                    insteadOfSpa = "$377";
                                    break; 

                                    case "AVOLOGI Eneo Metrotown Neck and Jawline $69.95":
                                        upDatedSpaName = "Avologi Eneo";
                                    upDatedSpaAddress = "Metrotown Mall, 4700 Kingsway #1170, Burnaby, BC V5H 4M5, Canada"+"<br>"+"(Ground level in the Indigo Books wing, at the bottom of the escalator)";
                                    upDatedSpaLINK = "https://forms.gle/c8TFXfwBMpLd3TcM6";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/avologi-metrotown-neck-and-jaw-line-tightening-treatment-new-promo";
                                    upDatedSpaPhone = "(778) 262-1606";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 Minutes Cleansing";
                                    upDatedDurationTwo = "- 45 Minutes Neck & Jawline Treatment & Consultation";
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (236) 258-6757";
                                    treatmentSelected = "Neck and Jawline Tightening Treatment";
                                    newSpaPhoneNumberSelected = "(236) 258-6757";
                                    insteadOfSpa = "$377";
                                    break; 

                                    case "AVOLOGI Eneo Metrotown Skin Tightening 69.95":
                                        upDatedSpaName = "Avologi Eneo";
                                    upDatedSpaAddress = "Metrotown Mall, 4700 Kingsway #1170, Burnaby, BC V5H 4M5, Canada"+"<br>"+"(Ground level in the Indigo Books wing, at the bottom of the escalator)";
                                    upDatedSpaLINK = "https://forms.gle/c8TFXfwBMpLd3TcM6";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/dtb-avologi-metrotown-skin-tightening-treatment";
                                    upDatedSpaPhone = "(778) 262-1606";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 Minutes Cleansing";
                                    upDatedDurationTwo = "- 45 Minutes Skin Tightening Treatment & Consultation";
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (236) 258-6757";
                                    treatmentSelected = "Skin Tightening";
                                    newSpaPhoneNumberSelected = "(236) 258-6757";
                                    insteadOfSpa = "$377";
                                    break; 

                                    case "AVOLOGI Eneo Metrotown EMS":
                                        upDatedSpaName = "Avologi Eneo";
                                    upDatedSpaAddress = "Metrotown Mall, 4700 Kingsway #1170, Burnaby, BC V5H 4M5, Canada"+"<br>"+"(Ground level in the Indigo Books wing, at the bottom of the escalator)";
                                    upDatedSpaLINK = "https://forms.gle/c8TFXfwBMpLd3TcM6";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/avologi-eneo-metrotown-ems-promo";
                                    upDatedSpaPhone = "(778) 262-1606";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 20 Minutes Cleansing";
                                    upDatedDurationTwo = "- 20 Minutes EMS Treatment" + "<br>" + "- 20 Minutes Consultation";
                                    promoPrice = "99.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (236) 258-6757";
                                    treatmentSelected = "EMS Anti-aging Treatment";
                                    newSpaPhoneNumberSelected = "(236) 258-6757";
                                    insteadOfSpa = "$350";
                                    break; 

                                    case "AVOLOGI Eneo Metrotown Turkey Neck Tightening 79.95":
                                        upDatedSpaName = "Avologi Eneo";
                                    upDatedSpaAddress = "Metrotown Mall, 4700 Kingsway #1170, Burnaby, BC V5H 4M5, Canada"+"<br>"+"(Ground level in the Indigo Books wing, at the bottom of the escalator)";
                                    upDatedSpaLINK = "https://forms.gle/c8TFXfwBMpLd3TcM6";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/avologi-metrotown-turkey-neck-tightening-treatment-promo";
                                    upDatedSpaPhone = "(778) 262-1606";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 Minutes Consultation";
                                    upDatedDurationTwo = "- 45 Minutes Turkey Neck Tightening Treatment";
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (236) 258-6757";
                                    treatmentSelected = "Turkey Neck Tightening Treatment";
                                    newSpaPhoneNumberSelected = "(236) 258-6757";
                                    insteadOfSpa = "$377";
                                    break; 

                                    case "AVOLOGI Eneo Metrotown Sagging Neck Rescue 69.95":
                                        upDatedSpaName = "Avologi Eneo";
                                    upDatedSpaAddress = "Metrotown Mall, 4700 Kingsway #1170, Burnaby, BC V5H 4M5, Canada"+"<br>"+"(Ground level in the Indigo Books wing, at the bottom of the escalator)";
                                    upDatedSpaLINK = "https://forms.gle/c8TFXfwBMpLd3TcM6";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/avologi-metrotown-sagging-neck-rescue-treatment-promo ";
                                    upDatedSpaPhone = "(778) 262-1606";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 Minutes Consultation";
                                    upDatedDurationTwo = "- 45 Minutes Sagging Neck Rescue Treatment";
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (236) 258-6757";
                                    treatmentSelected = "Sagging Neck Rescue Treatment";
                                    newSpaPhoneNumberSelected = "(236) 258-6757";
                                    insteadOfSpa = "$377";
                                    break;

                                    case "AVOLOGI Eneo Metrotown Men's LED 79.95":
                                        upDatedSpaName = "Avologi Eneo";
                                    upDatedSpaAddress = "Metrotown Mall, 4700 Kingsway #1170, Burnaby, BC V5H 4M5, Canada"+"<br>"+"(Ground level in the Indigo Books wing, at the bottom of the escalator)";
                                    upDatedSpaLINK = "https://forms.gle/c8TFXfwBMpLd3TcM6";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/avologi-eneo-metrotown-mens-led-promo-page";
                                    upDatedSpaPhone = "(778) 262-1606";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 Minutes Cleansing";
                                    upDatedDurationTwo = "- 45 Minutes Men's LED Anti-Aging Treatment and Consultation";
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (236) 258-6757";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(236) 258-6757";
                                    insteadOfSpa = "$377";
                                    break; 

                                    case "AVOLOGI Eneo Metrotown Oxygen and LED 89.95":
                                        upDatedSpaName = "Avologi Eneo";
                                    upDatedSpaAddress = "Metrotown Mall, 4700 Kingsway #1170, Burnaby, BC V5H 4M5, Canada"+"<br>"+"(Ground level in the Indigo Books wing, at the bottom of the escalator)";
                                    upDatedSpaLINK = "https://forms.gle/c8TFXfwBMpLd3TcM6";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/avologi-eneo-metrotown-oxygen-anti-aging-treatment";
                                    upDatedSpaPhone = "(778) 262-1606";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 45 Minutes Cleansing and the Oxygen and LED Treatment";
                                    upDatedDurationTwo = "- 15 Minutes Consultation";
                                    promoPrice = "89.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (236) 258-6757";
                                    treatmentSelected = "Oxygen and LED Treatment";
                                    newSpaPhoneNumberSelected = "(236) 258-6757";
                                    insteadOfSpa = "$299";
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

                                    case "Stem Spa Redding":
                                        upDatedSpaName = "Stem Spa";
                                    upDatedSpaAddress = "900 Dana Dr Redding, CA 96003"+"<br>"+"(Mt. Shasta Mall, next to Auntie Anne's)";
                                    upDatedSpaLINK = "https://forms.gle/Eqg9xCBYDHTLCcz16";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/new-introstem-redding-promo-page";
                                    upDatedSpaPhone = "(530) 250-4950";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 5 minutes Cleansing";
                                    upDatedDurationTwo = "- 55 minutes LED Anti-aging treatment & Consultation";
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (530) 768-1056";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(530) 768-1056";
                                    insteadOfSpa = "$350";
                                    break; 

                                    case "Stem Spa Redding Collagen Enhancing":
                                        upDatedSpaName = "Stem Spa";
                                    upDatedSpaAddress = "900 Dana Dr Redding, CA 96003"+"<br>"+"(Mt. Shasta Mall, next to Auntie Anne's)";
                                    upDatedSpaLINK = "https://forms.gle/Eqg9xCBYDHTLCcz16";
                                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/introstem-redding-collagen-enhancing-promo";
                                    upDatedSpaPhone = "(530) 250-4950";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 minutes Cleansing";
                                    upDatedDurationTwo = "- 30 minutes LED Anti-aging treatment & 15 minutes Consultation";
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (530) 768-1056";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(530) 768-1056";
                                    insteadOfSpa = "$377";
                                    break; 

                                    case "Stem Spa Redding Neck and Jawline 69.95":
                                        upDatedSpaName = "Stem Spa";
                                    upDatedSpaAddress = "900 Dana Dr Redding, CA 96003"+"<br>"+"(Mt. Shasta Mall, next to Auntie Anne's)";
                                    upDatedSpaLINK = "https://forms.gle/Eqg9xCBYDHTLCcz16";
                                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/introstem-redding-neck-and-jawline-treatment";
                                    upDatedSpaPhone = "(530) 250-4950";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 minutes of Consultation";
                                    upDatedDurationTwo = "- 45 minutes LED Anti-aging treatment & Consultation";
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (530) 768-1056";
                                    treatmentSelected = "Neck and Jawline Tightening";
                                    newSpaPhoneNumberSelected = "(530) 768-1056";
                                    insteadOfSpa = "$377";
                                    break; 

                                    case "Stem Spa Medford":
                                        upDatedSpaName = "Stem Spa";
                                    upDatedSpaAddress = "1600 N Riverside Ave , Medford, OR , 97501"+"<br>"+"(Rogue Valley Mall, 1st floor, in front of American Eagle)";
                                    upDatedSpaLINK = "https://forms.gle/iNEoopF9HxSicZFE9";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/introstem-medford-led-promo";
                                    upDatedSpaPhone = "(541) 512-7170";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 40 Minutes LED Skin Tightening Treatment";
                                    upDatedDurationTwo = "- 20 Minutes Consultation";
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (541) 816-4404";
                                    treatmentSelected = "Skin Tightening";
                                    newSpaPhoneNumberSelected = "(541) 816-4404";
                                    insteadOfSpa = "$350";
                                    break; 

                                    case "Stem Spa Medford Collagen Enhancing":
                                        upDatedSpaName = "Stem Spa";
                                    upDatedSpaAddress = "1600 N Riverside Ave , Medford, OR , 97501"+"<br>"+"(Rogue Valley Mall, 1st floor, in front of American Eagle)";
                                    upDatedSpaLINK = "https://forms.gle/iNEoopF9HxSicZFE9";
                                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/introstem-medford-collagen-enhancing-promo";
                                    upDatedSpaPhone = "(541) 512-7170";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 minutes Cleansing";
                                    upDatedDurationTwo = "- 30 minutes LED Anti-aging treatment & 15 minutes Consultation";
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (541) 816-4404";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(541) 816-4404";
                                    insteadOfSpa = "$377";
                                    break; 

                                    case "Stem Spa Medford Neck and Jawline 69.95":
                                        upDatedSpaName = "Stem Spa";
                                    upDatedSpaAddress = "1600 N Riverside Ave , Medford, OR , 97501"+"<br>"+"(Rogue Valley Mall, 1st floor, in front of American Eagle)";
                                    upDatedSpaLINK = "https://forms.gle/iNEoopF9HxSicZFE9";
                                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/introstem-medford-neck-and-jawline-treatment";
                                    upDatedSpaPhone = "(541) 512-7170";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 minutes of Consultation";
                                    upDatedDurationTwo = "- 45 minutes LED Anti-aging treatment & Consultation";
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (541) 816-4404";
                                    treatmentSelected = "Neck and Jawline Tightening";
                                    newSpaPhoneNumberSelected = "(541) 816-4404";
                                    insteadOfSpa = "$377";
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

                                    case "Pearl De Flore Augusta":
                                        upDatedSpaName = "Pearl De Flore Spa";
                                    upDatedSpaAddress = "Augusta Mall," + "<br>" + "3450 Wrightsboro Rd, Augusta, GA 30909"+"<br>"+"(Please use the north entrance of Macy’s, 2nd floor next to the Edge store in front of the elevator)";
                                    upDatedSpaLINK = "https://forms.gle/ea7Mes4ARmJjo9fy7";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/pearldeflore-augusta-led-promo";
                                    upDatedSpaPhone = "(706) 434-8750";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 minutes Cleansing";
                                    upDatedDurationTwo = "- 30 minutes LED Anti-aging treatment" + "<br>" + "- 15 minutes of Consultation";
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (706) 901-8979";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(706) 901-8979";
                                    insteadOfSpa = "$350";
                                    break; 

                                    case "Luminous Skin-Tech":
                                        upDatedSpaName = "Luminous Skin-Tech Spa";
                                    upDatedSpaAddress = "La Palmera Mall," + "<br>" + "5488 S Padre island, Corpus Christi, TX 78411"+"<br>"+"(Second floor, next to H&M)";
                                    upDatedSpaLINK = "https://forms.gle/Yaa4AmATGwwPAAVW7";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/luminous-ledpromo";
                                    upDatedSpaPhone = "(361) 356-1025";
                                    upDatedDurationTotal = "50 Minutes";
                                    upDatedDurationOne = "- 30 minutes Non-Surgical Facelift";
                                    upDatedDurationTwo = "- 20 minutes Consultation";
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (361) 462-4319";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(361) 462-4319";
                                    insteadOfSpa = "$350";
                                    break; 

                                    case "Be YOU":
                                        upDatedSpaName = "Be YOU Spa";
                                    upDatedSpaAddress = "SmartCentres Leaside Plaza," + "<br>" + "45 Wicksteed Ave, Suite 280 Unit 4 East York, ON M4G4H9"+"<br>"+"Inside Sola Salon Studios, 2nd floor above RBC" + "<br>" + "Room 4 - 2nd door on the left" + "<br>" + "Major Intersections: Eglinton and Bayview Ave, near Laird Drive";
                                    upDatedSpaLINK = "https://forms.gle/z9qJxCgcyner9a5h6";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/beyou-led-promo";
                                    upDatedSpaPhone = "(647) 255-2607";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 minutes Cleansing";
                                    upDatedDurationTwo = "- 30 minutes LED Anti-aging Treatment" + "<br>" + "- 15 minutes of Consultation";
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (416) 276-3231";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(416) 276-3231";
                                    insteadOfSpa = "$350";
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

                                    case "Premier Pensacola":
                                        upDatedSpaName = "Premier Spa";
                                    upDatedSpaAddress = "Inside Cordova Mall," + "<br>" + "5100 N 9th Ave Pensacola, FL 32504"+"<br>"+"(Dick’s aisle, next to Buckle)";
                                    upDatedSpaLINK = "https://forms.gle/egLGFsf1jdBvVqpz5";
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

                                    case "Premier Pensacola Reverse Turkey Neck 79.95":
                                        upDatedSpaName = "Premier Spa";
                                    upDatedSpaAddress = "Inside Cordova Mall," + "<br>" + "5100 N 9th Ave Pensacola, FL 32504"+"<br>"+"(Dick’s aisle, next to Buckle)";
                                    upDatedSpaLINK = "https://forms.gle/egLGFsf1jdBvVqpz5";
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

                                    case "Esthetix Cloverdale":
                                        upDatedSpaName = "Esthetix Spa";
                                    upDatedSpaAddress = "Cloverdale Mall," + "<br>" + "250 The East Mall Etobicoke ON M9B 3Y8 Canada"+"<br>"+"(Next to Scotiabank)";
                                    upDatedSpaLINK = "https://forms.gle/th8Qyt5uShKY3r5y7";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/esthetixcloverdale-ledpromo";
                                    upDatedSpaPhone = "(437) 826-3445";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 minutes Cleansing";
                                    upDatedDurationTwo = "- 30 minutes LED Anti-aging Treatment" + "<br>" + "- 15 minutes of Consultation";
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (647) 370-8733";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(647) 370-8733";
                                    insteadOfSpa = "$350";
                                    break; 

                                    case "Prestige Clearwater":
                                        upDatedSpaName = "Prestige Spa";
                                    upDatedSpaAddress = "Countryside Mall," + "<br>" + "27001 US Hwy 19 N, Clearwater, FL 33761"+"<br>"+"(Next to Victoria's Secrets)";
                                    upDatedSpaLINK = "https://forms.gle/kALTejFtfwnYpKnm6";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/prestige-clearwater-ledpromo";
                                    upDatedSpaPhone = "(727) 308-0391";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 10 minutes Cleansing";
                                    upDatedDurationTwo = "- 35 minutes LED Anti-aging Treatment" + "<br>" + "- 15 minutes of Consultation";
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (706) 901-8979";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(706) 901-8979";
                                    insteadOfSpa = "$350";
                                    break; 

                                    case "Tierra Med Spa AquaPure Hydration":
                                        upDatedSpaName = "Tierra Med Spa";
                                    upDatedSpaAddress = "The Beaches Toronto ," + "<br>" + "1912 Queen St. E. Toronto ON M4L1H5";
                                    upDatedSpaLINK = "https://forms.gle/JpNRkQvGJnqLgLrs6";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/tierramed-hydration-aquapure-promo";
                                    upDatedSpaPhone = "(647) 476-2808";
                                    upDatedDurationTotal = "50 Minutes";
                                    upDatedDurationOne = "- 10 Minutes Cleansing";
                                    upDatedDurationTwo = "- 40 Minutes AquaPure Hydration Treatment & Consultation";
                                    promoPrice = "99.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (647) 503-5222";
                                    treatmentSelected = "AquaPure Treatment";
                                    newSpaPhoneNumberSelected = "(647) 503-5222";
                                    insteadOfSpa = "$275";
                                    break; 

                                    case "Tierra Med Spa AquaPure Hydration 79.95":
                                        upDatedSpaName = "Tierra Med Spa";
                                    upDatedSpaAddress = "The Beaches Toronto ," + "<br>" + "1912 Queen St. E. Toronto ON M4L1H5";
                                    upDatedSpaLINK = "https://forms.gle/JpNRkQvGJnqLgLrs6";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/new-tierramed-aquapure-promo-page";
                                    upDatedSpaPhone = "(647) 476-2808";
                                    upDatedDurationTotal = "50 Minutes";
                                    upDatedDurationOne = "- 10 Minutes Cleansing";
                                    upDatedDurationTwo = "- 40 Minutes AquaPure Hydration Treatment & Consultation";
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (647) 503-5222";
                                    treatmentSelected = "AquaPure Treatment";
                                    newSpaPhoneNumberSelected = "(647) 503-5222";
                                    insteadOfSpa = "$350";
                                    break; 

                                    case "Tierra Med Spa LED":
                                        upDatedSpaName = "Tierra Med Spa";
                                    upDatedSpaAddress = "The Beaches Toronto ," + "<br>" + "1912 Queen St. E. Toronto ON M4L1H5";
                                    upDatedSpaLINK = "https://forms.gle/JpNRkQvGJnqLgLrs6";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/tierramed-ledpromo";
                                    upDatedSpaPhone = "(647) 476-2808";
                                    upDatedDurationTotal = "50 Minutes";
                                    upDatedDurationOne = "- 10 Minutes Cleansing";
                                    upDatedDurationTwo = "- 40 Minutes LED Experience & Consultation";
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (647) 503-5222";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(647) 503-5222";
                                    insteadOfSpa = "$350";
                                    break; 

                                    case "Tierra Med Spa Gold Collagen Treatment":
                                        upDatedSpaName = "Tierra Med Spa";
                                    upDatedSpaAddress = "The Beaches Toronto ," + "<br>" + "1912 Queen St. E. Toronto ON M4L1H5";
                                    upDatedSpaLINK = "https://forms.gle/JpNRkQvGJnqLgLrs6";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/tierra-med-gold-collagen-facial-promo-page";
                                    upDatedSpaPhone = "(647) 476-2808";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 Minutes Cleansing";
                                    upDatedDurationTwo = "- 30 Minutes Gold Collagen Treatment & 15-minute Consultation";
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (647) 503-5222";
                                    treatmentSelected = "Collagen Enhancing Treatment";
                                    newSpaPhoneNumberSelected = "(647) 503-5222";
                                    insteadOfSpa = "$350";
                                    break;

                                    case "Tierra Med Spa Red Carpet Collagen Treatment":
                                        upDatedSpaName = "Tierra Med Spa";
                                    upDatedSpaAddress = "The Beaches Toronto ," + "<br>" + "1912 Queen St. E. Toronto ON M4L1H5";
                                    upDatedSpaLINK = "https://forms.gle/JpNRkQvGJnqLgLrs6";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/tierra-med-red-carpet-collagen-facial-promo-page";
                                    upDatedSpaPhone = "(647) 476-2808";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 10 Minutes Cleansing";
                                    upDatedDurationTwo = "- 50 Minutes Red Carpet Collagen Treatment & Consultation";
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (647) 503-5222";
                                    treatmentSelected = "Collagen Enhancing Treatment";
                                    newSpaPhoneNumberSelected = "(647) 503-5222";
                                    insteadOfSpa = "$350";
                                    break;

                                    case "Tierra Med Hydraglow Treatment":
                                        upDatedSpaName = "Tierra Med Spa";
                                    upDatedSpaAddress = "The Beaches Toronto ," + "<br>" + "1912 Queen St. E. Toronto ON M4L1H5";
                                    upDatedSpaLINK = "https://forms.gle/JpNRkQvGJnqLgLrs6";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/tierra-med-spa-hydraglow-promo-page";
                                    upDatedSpaPhone = "(647) 476-2808";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 45 Minutes Cleansing and Hydraglow Treatment";
                                    upDatedDurationTwo = "- 15 Minutes Consultation";
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (647) 503-5222";
                                    treatmentSelected = "Hydraglow Treatment";
                                    newSpaPhoneNumberSelected = "(647) 503-5222";
                                    insteadOfSpa = "$275";
                                    break;

                                    case "Tierra Med Non-Surgical Lifting Treatment":
                                        upDatedSpaName = "Tierra Med Spa";
                                    upDatedSpaAddress = "The Beaches Toronto ," + "<br>" + "1912 Queen St. E. Toronto ON M4L1H5";
                                    upDatedSpaLINK = "https://forms.gle/JpNRkQvGJnqLgLrs6";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/tierra-med-non-surgical-lifting-facial-promo-page";
                                    upDatedSpaPhone = "(647) 476-2808";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 10 Minutes Cleansing";
                                    upDatedDurationTwo = "- 50 Minutes Non-Surgical Lifting Treatment & Consultation";
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (647) 503-5222";
                                    treatmentSelected = "Non-surgical Lifting Treatment";
                                    newSpaPhoneNumberSelected = "(647) 503-5222";
                                    insteadOfSpa = "$299";
                                    break;

                                    case "Tierra Med Collagen Enhancing Treatment with LED":
                                        upDatedSpaName = "Tierra Med Spa";
                                    upDatedSpaAddress = "The Beaches Toronto ," + "<br>" + "1912 Queen St. E. Toronto ON M4L1H5";
                                    upDatedSpaLINK = "https://forms.gle/JpNRkQvGJnqLgLrs6";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/tierra-med-collagen-enhancing-facial-with-led-promo-page";
                                    upDatedSpaPhone = "(647) 476-2808";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 10 Minutes Cleansing";
                                    upDatedDurationTwo = "- 50 Minutes Collagen Enhancing Treatment with LED & Consultation";
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (647) 503-5222";
                                    treatmentSelected = "Collagen Enhancing Treatment";
                                    newSpaPhoneNumberSelected = "(647) 503-5222";
                                    insteadOfSpa = "$299";
                                    break;

                                    case "Tierra Med Men's LED":
                                        upDatedSpaName = "Tierra Med Spa";
                                    upDatedSpaAddress = "The Beaches Toronto ," + "<br>" + "1912 Queen St. E. Toronto ON M4L1H5";
                                    upDatedSpaLINK = "https://forms.gle/JpNRkQvGJnqLgLrs6";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/tierra-medspa-mens-led-promo-page";
                                    upDatedSpaPhone = "(647) 476-2808";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 Minutes Cleansing";
                                    upDatedDurationTwo = "- 45 Minutes LED Treatment & Consultation";
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (647) 503-5222";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(647) 503-5222";
                                    insteadOfSpa = "$299";
                                    break;

                                    case "Tierra Med Neck and Jawline":
                                        upDatedSpaName = "Tierra Med Spa";
                                    upDatedSpaAddress = "The Beaches Toronto ," + "<br>" + "1912 Queen St. E. Toronto ON M4L1H5";
                                    upDatedSpaLINK = "https://forms.gle/JpNRkQvGJnqLgLrs6";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/tierra-med-spa-neck-and-jaw-line-tightening-treatment-promo";
                                    upDatedSpaPhone = "(647) 476-2808";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 Minutes Consultation";
                                    upDatedDurationTwo = "- 45 Minutes Neck & Jawline Treatment";
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (647) 503-5222";
                                    treatmentSelected = "Neck and Jawline Tightening Treatment";
                                    newSpaPhoneNumberSelected = "(647) 503-5222";
                                    insteadOfSpa = "$377";
                                    break;

                                    case "Tierra Med Neck and Jawline 69.95":
                                        upDatedSpaName = "Tierra Med Spa";
                                    upDatedSpaAddress = "The Beaches Toronto ," + "<br>" + "1912 Queen St. E. Toronto ON M4L1H5";
                                    upDatedSpaLINK = "https://forms.gle/JpNRkQvGJnqLgLrs6";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/tierra-med-spa-neck-and-jaw-line-treatment";
                                    upDatedSpaPhone = "(647) 476-2808";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 Minutes Consultation";
                                    upDatedDurationTwo = "- 45 Minutes Neck & Jawline Treatment";
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (647) 503-5222";
                                    treatmentSelected = "Neck and Jawline Tightening Treatment";
                                    newSpaPhoneNumberSelected = "(647) 503-5222";
                                    insteadOfSpa = "$377";
                                    break;

                                    case "Tierra Med Turkey Neck Tightening 69.95":
                                        upDatedSpaName = "Tierra Med Spa";
                                    upDatedSpaAddress = "The Beaches Toronto ," + "<br>" + "1912 Queen St. E. Toronto ON M4L1H5";
                                    upDatedSpaLINK = "https://forms.gle/JpNRkQvGJnqLgLrs6";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/tierra-med-spa-turkey-neck-tightening-treatment-promo";
                                    upDatedSpaPhone = "(647) 476-2808";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 Minutes Consultation";
                                    upDatedDurationTwo = "- 45 Minutes Turkey Neck Tightening Treatment";
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (647) 503-5222";
                                    treatmentSelected = "Turkey Neck Tightening Treatment";
                                    newSpaPhoneNumberSelected = "(647) 503-5222";
                                    insteadOfSpa = "$377";
                                    break;

                                    case "Tierra Med Skin Tightening 69.95":
                                        upDatedSpaName = "Tierra Med Spa";
                                    upDatedSpaAddress = "The Beaches Toronto ," + "<br>" + "1912 Queen St. E. Toronto ON M4L1H5";
                                    upDatedSpaLINK = "https://forms.gle/JpNRkQvGJnqLgLrs6";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/dtb-tierra-med-spa-skin-tightening-promo-page";
                                    upDatedSpaPhone = "(647) 476-2808";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 Minutes Consultation";
                                    upDatedDurationTwo = "- 45 Minutes Skin Tightening Treatment";
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (647) 503-5222";
                                    treatmentSelected = "Skin Tightening";
                                    newSpaPhoneNumberSelected = "(647) 503-5222";
                                    insteadOfSpa = "$377";
                                    break;

                                    case "Tierra Med Oxygen and LED Treatment 79.95":
                                        upDatedSpaName = "Tierra Med Spa";
                                    upDatedSpaAddress = "The Beaches Toronto ," + "<br>" + "1912 Queen St. E. Toronto ON M4L1H5";
                                    upDatedSpaLINK = "https://forms.gle/JpNRkQvGJnqLgLrs6";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/tierra-med-spa-oxygen-anti-aging-treatment";
                                    upDatedSpaPhone = "(647) 476-2808";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 45 Minutes Cleansing and the Oxygen & LED Treatment";
                                    upDatedDurationTwo = "- 15 Minutes Consultation";
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (647) 503-5222";
                                    treatmentSelected = "Oxygen and LED Treatment";
                                    newSpaPhoneNumberSelected = "(647) 503-5222";
                                    insteadOfSpa = "$377";
                                    break;

                                    case "Boutique 770":
                                        upDatedSpaName = " Boutique 770 Spa";
                                    upDatedSpaAddress = "1320 Pearl St. Boulder Colorado 80302," + "<br>" + "(STE #100 between the 1320 building and the Falafel shop)";
                                    upDatedSpaLINK = "https://forms.gle/K6F4x2mbqCTGv65VA";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/boutique770-ledpromo";
                                    upDatedSpaPhone = "(720) 548-1094";
                                    upDatedDurationTotal = "45 Minutes";
                                    upDatedDurationOne = "- 5 Minutes Cleansing";
                                    upDatedDurationTwo = "- 25 Minutes LED Experience" +"<br>" + "- 15 Minutes Consultation";
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (303) 248-3104";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(303) 248-3104";
                                    insteadOfSpa = "$350";
                                    break; 

                                    case "BioRevive LED":
                                        upDatedSpaName = " BioRevive Spa";
                                    upDatedSpaAddress = "Lido Marina Village," +"<br>" + "3404 Via Lido a Newport Beach, CA 92663" + "<br>" + "(Next to the the UPS store)";
                                    upDatedSpaLINK = "https://forms.gle/v8BY6QH2oQYG8DbW8";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/biorevive-led-promo";
                                    upDatedSpaPhone = "(949) 688-6429";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 Minutes Cleansing";
                                    upDatedDurationTwo = "- 30 Minutes LED Experience" +"<br>" + "- 15 Minutes Consultation";
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (949) 220-7221";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(949) 220-7221";
                                    insteadOfSpa = "$350";
                                    break;
                                    
                                    case "BioRevive HIFU":
                                        upDatedSpaName = " BioRevive Spa";
                                    upDatedSpaAddress = "Lido Marina Village," +"<br>" + "3404 Via Lido a Newport Beach, CA 92663" + "<br>" + "(Next to the the UPS store)";
                                    upDatedSpaLINK = "https://forms.gle/v8BY6QH2oQYG8DbW8";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/biorevive-hifu-promo";
                                    upDatedSpaPhone = "(949) 688-6429";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 Minutes Cleansing";
                                    upDatedDurationTwo = "- 30 Minutes HIFU Experience" +"<br>" + "- 15 Minutes Consultation";
                                    promoPrice = "119.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (949) 220-7221";
                                    treatmentSelected = "HIFU Treatment";
                                    newSpaPhoneNumberSelected = "(949) 220-7221";
                                    insteadOfSpa = "$350";
                                    break; 

                                    case "BioRevive CryoSkin Body Sculpting":
                                        upDatedSpaName = " BioRevive Spa";
                                        upDatedSpaAddress = "Lido Marina Village," +"<br>" + "3404 Via Lido a Newport Beach, CA 92663" + "<br>" + "(Next to the the UPS store)";
                                        upDatedSpaLINK = "https://forms.gle/v8BY6QH2oQYG8DbW8";
                                        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/biorevive-body-sculpting-promo";
                                        upDatedSpaPhone = "(949) 688-6429";
                                        upDatedDurationTotal = "50 Minutes";
                                        upDatedDurationOne = "- 35 Body Sculpting Treatment";
                                        upDatedDurationTwo = "- 15 Minutes Consultation";
                                        promoPrice = "119.95";
                                        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (949) 220-7221";
                                        treatmentSelected = "Body Sculpting Treatment";
                                        newSpaPhoneNumberSelected = "(949) 220-7221";
                                        insteadOfSpa = "$500";
                                        break; 

                                        case "BioRevive CryoSkin Body Sculpting 99.95":
                                        upDatedSpaName = " BioRevive Spa";
                                        upDatedSpaAddress = "Lido Marina Village," +"<br>" + "3404 Via Lido a Newport Beach, CA 92663" + "<br>" + "(Next to the the UPS store)";
                                        upDatedSpaLINK = "https://forms.gle/v8BY6QH2oQYG8DbW8";
                                        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/biorevive-body-sculpting-promo";
                                        upDatedSpaPhone = "(949) 688-6429";
                                        upDatedDurationTotal = "50 Minutes";
                                        upDatedDurationOne = "- 35 Body Sculpting Treatment";
                                        upDatedDurationTwo = "- 15 Minutes Consultation";
                                        promoPrice = "99.95";
                                        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (949) 220-7221";
                                        treatmentSelected = "Body Sculpting Treatment";
                                        newSpaPhoneNumberSelected = "(949) 220-7221";
                                        insteadOfSpa = "$500";
                                        break; 

                                    case "Natural Blossom LED":
                                        upDatedSpaName = "Natural Blossom Spa";
                                    upDatedSpaAddress = "112 A Saint George Street St. Augustine, Florida 32084" + "<br>" + "(Across from Five & Dime)";
                                    upDatedSpaLINK = "https://forms.gle/92UM2qkkZQdkrJdN9";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/naturalblossom-ledpromo";
                                    upDatedSpaPhone = "(904) 368-6790";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 Minutes Cleansing";
                                    upDatedDurationTwo = "- 30 Minutes LED Experience" +"<br>" + "- 15 Minutes Consultation";
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (904) 615-1394";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(904) 615-1394";
                                    insteadOfSpa = "$350";
                                    break; 

                                    case "ATIK Deerfield Beach LED":
                                    upDatedSpaName = "ATIK Spa";
                                    upDatedSpaAddress = "447 S Federal Hwy, Deerfield Beach, FL 33441" + "<br>" + "(Next to Say Fitness)";
                                    upDatedSpaLINK = "https://forms.gle/mJb9u8wV5XXH7SC69";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/atik-led-promo";
                                    upDatedSpaPhone = "(754) 333-2318";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 60 Minutes LED Experience & Consultation";
                                    upDatedDurationTwo = " ";
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (954) 637-4226";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(954) 637-4226";
                                    insteadOfSpa = "$350";
                                    break;  

                                    case "ATIK Deerfield Beach Laser Lipo":
                                    upDatedSpaName = "ATIK Spa";
                                    upDatedSpaAddress = "447 S Federal Hwy, Deerfield Beach, FL 33441" + "<br>" + "(Next to Say Fitness)";
                                    upDatedSpaLINK = "https://forms.gle/mJb9u8wV5XXH7SC69";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/triangular-laser-lipo-promo-page";
                                    upDatedSpaPhone = "(754) 333-2318";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 60 Minutes Laser Lipo & Consultation";
                                    upDatedDurationTwo = " ";
                                    promoPrice = "70";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (954) 637-4226";
                                    treatmentSelected = "Laser Lipo Treatment";
                                    newSpaPhoneNumberSelected = "(954) 637-4226";
                                    insteadOfSpa = "$350";
                                    break; 

                                    case "ATIK Deerfield Beach Body Sculpting":
                                        upDatedSpaName = "ATIK Spa";
                                        upDatedSpaAddress = "447 S Federal Hwy, Deerfield Beach, FL 33441" + "<br>" + "(Next to Say Fitness)";
                                        upDatedSpaLINK = "https://forms.gle/mJb9u8wV5XXH7SC69";
                                        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/atik-body-sculpting-promo";
                                        upDatedSpaPhone = "(754) 333-2318";
                                        upDatedDurationTotal = "60 Minutes";
                                        upDatedDurationOne = "- 45 Minutes of the Venus Legacy Treatment";
                                        upDatedDurationTwo = "15 Minute Consultation";
                                        promoPrice = "59.95";
                                        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (954) 637-4226";
                                        treatmentSelected = "Body Sculpting Treatment";
                                        newSpaPhoneNumberSelected = "(954) 637-4226";
                                        insteadOfSpa = "$350";
                                        break; 

                                    case "Avinichi Spa Collagen":
                                        upDatedSpaName = "Avinichi Spa";
                                        upDatedSpaAddress = "319 Worth Ave, Palm Beach, FL 33480" + "<br>" + "(Next to CHANEL)";
                                        upDatedSpaLINK = "https://forms.gle/hicyYX3N4HLWQyo4A";
                                        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/avinichi-worth-ave-collagen-promo";
                                        upDatedSpaPhone = "(561) 202-1748";
                                        upDatedDurationTotal = "60 Minutes";
                                        upDatedDurationOne = "- 60 Minutes LED Experience & Consultation";
                                        upDatedDurationTwo = " ";
                                        promoPrice = "99.95";
                                        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (561) 791-6283";
                                        treatmentSelected = "Collagen Lifting Treatment";
                                        newSpaPhoneNumberSelected = "(561) 791-6283";
                                        insteadOfSpa = "$350";
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


                                        case "Orogold Valencia":
                                            upDatedSpaName = "OROGOLD Spa";
                                            upDatedSpaAddress = "Westfield Valencia Town Center, 24201 Valencia Blvd, Valencia, CA 91355" + "<br>" + "(2nd floor near 'Kevin Jewelers')";
                                            upDatedSpaLINK = "https://forms.gle/sjLWKCSRm8531esHA";
                                            upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/orogold-spa-valencia-led-promo";
                                            upDatedSpaPhone = "(661) 206-1303";
                                            upDatedDurationTotal = "60 Minutes";
                                            upDatedDurationOne = "- 60 Minutes LED Experience & Consultation";
                                            upDatedDurationTwo = " ";
                                            promoPrice = "79.95";
                                            upDatedActualSpaPhone = "Can't find our spa? Give us a call at (661) 383-9238";
                                            treatmentSelected = "LED Treatment";
                                            newSpaPhoneNumberSelected = "(661) 383-9238";
                                            insteadOfSpa = "$350";
                                            break; 

                                            case "Orogold Valencia FTB LED 79.95":
                                            upDatedSpaName = "OROGOLD Spa";
                                            upDatedSpaAddress = "Westfield Valencia Town Center, 24201 Valencia Blvd, Valencia, CA 91355" + "<br>" + "(2nd floor near 'Kevin Jewelers')";
                                            upDatedSpaLINK = "https://forms.gle/sjLWKCSRm8531esHA";
                                            upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/orogold-valencia-led-promo";
                                            upDatedSpaPhone = "(661) 206-1303";
                                            upDatedDurationTotal = "60 Minutes";
                                            upDatedDurationOne = "- 60 Minutes LED Experience & Consultation";
                                            upDatedDurationTwo = " ";
                                            promoPrice = "79.95";
                                            upDatedActualSpaPhone = "Can't find our spa? Give us a call at (661) 383-9238";
                                            treatmentSelected = "LED Treatment";
                                            newSpaPhoneNumberSelected = "(661) 383-9238";
                                            insteadOfSpa = "$350";
                                            break; 

                                            case "Pura Vida AB":
                                                upDatedSpaName = "Pura Vida Spa";
                                                upDatedSpaAddress = "Southcentre Mall, 100 Anderson Rd SE, Calgary, AB T2J 3V1" + "<br>" + "(Ground Floor, across from Sport Check)";
                                                upDatedSpaLINK = "https://forms.gle/w7fRjryo9sTSq5p27";
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

                                                case "West County Spa Center":
                                                    upDatedSpaName = "West County Spa Center";
                                                    upDatedSpaAddress = "West County Center Mall," + "<br>" + "53 W County Center, Des Peres, MO 63131" + "<br>" + "(Ground Floor, Next to the Lego store)";
                                                    upDatedSpaLINK = "https://forms.gle/W8RQmTPZ8ZyKToLCA";
                                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/westcounty-spacenter-led-promo";
                                                    upDatedSpaPhone = "(314) 582-1397";
                                                    upDatedDurationTotal = "60 Minutes";
                                                    upDatedDurationOne = "- 10 Minnutes Cleansing";
                                                    upDatedDurationTwo = "- 30 Minutes LED Experience & Consultation" + "<br>" + "- 20 Minutes Consultation";
                                                    promoPrice = "79.95";
                                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (314) 664-9655";
                                                    treatmentSelected = "LED Treatment";
                                                    newSpaPhoneNumberSelected = "(314) 664-9655";
                                                    insteadOfSpa = "$350";
                                                    break; 

                                                    case "West County Spa Center Collagen Enhancing":
                                                    upDatedSpaName = "West County Spa Center";
                                                    upDatedSpaAddress = "West County Center Mall," + "<br>" + "53 W County Center, Des Peres, MO 63131" + "<br>" + "(Ground Floor, Next to the Lego store)";
                                                    upDatedSpaLINK = "https://forms.gle/W8RQmTPZ8ZyKToLCA";
                                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/west-county-spa-center-collagen-enhancing-promo";
                                                    upDatedSpaPhone = "(314) 582-1397";
                                                    upDatedDurationTotal = "60 Minutes";
                                                    upDatedDurationOne = "- 10 Minnutes Cleansing";
                                                    upDatedDurationTwo = "- 30 Minutes Collagen Enhancing Treatment & Consultation" + "<br>" + "- 20 Minutes Consultation";
                                                    promoPrice = "69.95";
                                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (314) 664-9655";
                                                    treatmentSelected = "Collagen Enhancing";
                                                    newSpaPhoneNumberSelected = "(314) 664-9655";
                                                    insteadOfSpa = "$377";
                                                    break;

                                                    case "West County Spa Center Collagen Enhancing 59.95":
                                                    upDatedSpaName = "West County Spa Center";
                                                    upDatedSpaAddress = "West County Center Mall," + "<br>" + "53 W County Center, Des Peres, MO 63131" + "<br>" + "(Ground Floor, Next to the Lego store)";
                                                    upDatedSpaLINK = "https://forms.gle/W8RQmTPZ8ZyKToLCA";
                                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/west-county-spa-center-collagen-enhancing-treatment-promo";
                                                    upDatedSpaPhone = "(314) 582-1397";
                                                    upDatedDurationTotal = "60 Minutes";
                                                    upDatedDurationOne = "- 10 Minnutes Cleansing";
                                                    upDatedDurationTwo = "- 30 Minutes Collagen Enhancing Treatment & Consultation" + "<br>" + "- 20 Minutes Consultation";
                                                    promoPrice = "59.95";
                                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (314) 664-9655";
                                                    treatmentSelected = "Collagen Enhancing";
                                                    newSpaPhoneNumberSelected = "(314) 664-9655";
                                                    insteadOfSpa = "$377";
                                                    break;

                                                    case "Rose Spa":
                                                        upDatedSpaName = "Rose Spa";
                                                        upDatedSpaAddress = "635 SW Morrison St, Portland, OR 97205" + "<br>" + "(Inside of the Wells Fargo Building, across from Pioneer Courthouse Square)";
                                                        upDatedSpaLINK = "https://forms.gle/zx1bo5MnuVnqwXYaA";
                                                        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/rose-beauty-led-promo";
                                                        upDatedSpaPhone = "(971) 350-7408";
                                                        upDatedDurationTotal = "60 Minutes";
                                                        upDatedDurationOne = "- 40 Minutes Cleansing and the LED Experience";
                                                        upDatedDurationTwo = "- 20 Minutes Consultation";
                                                        promoPrice = "79.95";
                                                        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (503) 206-6696";
                                                        treatmentSelected = "LED Treatment";
                                                        newSpaPhoneNumberSelected = "(503) 206-6696";
                                                        insteadOfSpa = "$350";
                                                        break; 

                                                        case "Rose Spa Body Treatment":
                                                        upDatedSpaName = "Rose Spa";
                                                        upDatedSpaAddress = "635 SW Morrison St, Portland, OR 97205" + "<br>" + "(Inside of the Wells Fargo Building, across from Pioneer Courthouse Square)";
                                                        upDatedSpaLINK = " https://forms.gle/zx1bo5MnuVnqwXYaA ";
                                                        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/rosebeauty-revo-promo";
                                                        upDatedSpaPhone = "(971) 350-7408";
                                                        upDatedDurationTotal = "60 Minutes";
                                                        upDatedDurationOne = "- 40 minutes Body Tightening & Healing Treatment";
                                                        upDatedDurationTwo = "- 20 minutes Consultation";
                                                        promoPrice = "99.95";
                                                        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (503) 206-6696";
                                                        treatmentSelected = "Body Tightening & Healing Treatment";
                                                        newSpaPhoneNumberSelected = "(503) 206-6696";
                                                        insteadOfSpa = "$350";
                                                        break; 

                                                        case "Rose Spa Non Surgical Facelift":
                                                        upDatedSpaName = "Rose Spa";
                                                        upDatedSpaAddress = "635 SW Morrison St, Portland, OR 97205" + "<br>" + "(Inside of the Wells Fargo Building, across from Pioneer Courthouse Square)";
                                                        upDatedSpaLINK = "https://forms.gle/zx1bo5MnuVnqwXYaA";
                                                        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/rose-beauty-or-non-surgical-facelift";
                                                        upDatedSpaPhone = "(971) 350-7408";
                                                        upDatedDurationTotal = "60 Minutes";
                                                        upDatedDurationOne = "- 40-minute Cleansing and the Non-Surgical Face Lift treatment";
                                                        upDatedDurationTwo = "- 20-minute Consultation";
                                                        promoPrice = "79.95";
                                                        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (503) 206-6696";
                                                        treatmentSelected = "Non-Surgical Facelift Treatment";
                                                        newSpaPhoneNumberSelected = "(503) 206-6696";
                                                        insteadOfSpa = "$350";
                                                        break; 

                                                        case "Rose Spa Collagen Enhancing Treatment":
                                                            upDatedSpaName = "Rose Spa";
                                                            upDatedSpaAddress = "635 SW Morrison St, Portland, OR 97205" + "<br>" + "(Inside of the Wells Fargo Building, across from Pioneer Courthouse Square)";
                                                            upDatedSpaLINK = " https://forms.gle/zx1bo5MnuVnqwXYaA ";
                                                            upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/rose-beauty-or-collagen-enhancing-facial";
                                                            upDatedSpaPhone = "(971) 350-7408";
                                                            upDatedDurationTotal = "60 Minutes";
                                                            upDatedDurationOne = "- 40-minute cleansing and Collagen Enhancing";
                                                            upDatedDurationTwo = "- 20 minutes Consultation";
                                                            promoPrice = "59.95";
                                                            upDatedActualSpaPhone = "Can't find our spa? Give us a call at (503) 206-6696";
                                                            treatmentSelected = "Collagen Enhancing Treatment";
                                                            newSpaPhoneNumberSelected = "(503) 206-6696";
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

                                                            case "Rose Spa Gold Collagen Treatment":
                                                            upDatedSpaName = "Rose Spa";
                                                            upDatedSpaAddress = "635 SW Morrison St, Portland, OR 97205" + "<br>" + "(Inside of the Wells Fargo Building, across from Pioneer Courthouse Square)";
                                                            upDatedSpaLINK = " https://forms.gle/zx1bo5MnuVnqwXYaA ";
                                                            upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/rose-beauty-gold-collagen-facial";
                                                            upDatedSpaPhone = "(971) 350-7408";
                                                            upDatedDurationTotal = "60 Minutes";
                                                            upDatedDurationOne = "- 40 Minutes Light Cleaning & the Gold Collagen Treatment";
                                                            upDatedDurationTwo = "- 20 Minute Consultation";
                                                            promoPrice = "79.95";
                                                            upDatedActualSpaPhone = "Can't find our spa? Give us a call at (503) 206-6696";
                                                            treatmentSelected = "LED Treatment";
                                                            newSpaPhoneNumberSelected = "(503) 206-6696";
                                                            insteadOfSpa = "$299";
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


                                                        case "Beyond The Spa":
                                                            upDatedSpaName = "Beyond The Spa";
                                                            upDatedSpaAddress = "Dadeland Mall," + "<br>" + "7535 N Kendall Dr, Miami, FL 33156" + "<br>" + "(Lower level, Between Cotton On & A Sneaker City)";
                                                            upDatedSpaLINK = "https://forms.gle/YqnpipYTp8uUPTERA";
                                                            upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/beyond-the-spa-ledpromo";
                                                            upDatedSpaPhone = "(786) 589-7009";
                                                            upDatedDurationTotal = "45 Minutes";
                                                            upDatedDurationOne = "- 10 Minnutes Cleansing";
                                                            upDatedDurationTwo = "- 35 Minutes LED Experience & Consultation";
                                                            promoPrice = "79.95";
                                                            upDatedActualSpaPhone = "Can't find our spa? Give us a call at (786) 537-2523";
                                                            treatmentSelected = "LED Treatment";
                                                            newSpaPhoneNumberSelected = "(786) 537-2523";
                                                            insteadOfSpa = "$350";
                                                            break; 

                                                            case "ATIK Boca Raton LED":
                                                                upDatedSpaName = "ATIK Spa";
                                                                upDatedSpaAddress = "PNC Bank Building," + "<br>" + "9033 Glades Rd, Boca Raton, FL 33434" + "<br>" + "(2nd floor, Use the back entrance, Suite B)";
                                                                upDatedSpaLINK = "https://forms.gle/HZ6bnRKxtijtYkZt6";
                                                                upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/atik-led-promo";
                                                                upDatedSpaPhone = "(561) 210-0586";
                                                                upDatedDurationTotal = "60 Minutes";
                                                                upDatedDurationOne = "60 Minutes LED Treatment";
                                                                upDatedDurationTwo = "";
                                                                promoPrice = "69.95";
                                                                upDatedActualSpaPhone = "Can't find our spa? Give us a call at (954) 408-8882";
                                                                treatmentSelected = "LED Treatment";
                                                                newSpaPhoneNumberSelected = "(954) 408-8882";
                                                                insteadOfSpa = "$350";
                                                                break; 

                                    case "Gentle Touch Beauty":
                                    upDatedSpaName = "Gentle Touch Beauty";
                                    upDatedSpaAddress = "Historic Downtown Venice FL Shops,"+"<br>"+"241 W Venice Ave, Venice, FL 34285"+"<br>"+"(Between Captain's Landing & St Marco Boutique)";
                                    upDatedSpaLINK = "https://forms.gle/PVLf5eCmvnyUHL1i6";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/gentle-touch-beauty-promo-page" ;
                                    upDatedSpaPhone = "(941) 840-5993";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "30 minute Cleansing";
                                    upDatedDurationTwo = "30 minute LED Experience and Consultation";
                                    promoPrice = "79.95"
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (941) 244-0044";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(941) 244-0044";
                                    insteadOfSpa = "$350";
                                    break; 

                                    case "Gentle Touch Beauty LED 99.95":
                                    upDatedSpaName = "Gentle Touch Beauty";
                                    upDatedSpaAddress = "Historic Downtown Venice FL Shops,"+"<br>"+"241 W Venice Ave, Venice, FL 34285"+"<br>"+"(Between Captain's Landing & St Marco Boutique)";
                                    upDatedSpaLINK = "https://forms.gle/PVLf5eCmvnyUHL1i6";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/gentle-touch-beauty-new-promo-page" ;
                                    upDatedSpaPhone = "(941) 840-5993";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "30 minute Cleansing";
                                    upDatedDurationTwo = "30 minute LED Experience and Consultation";
                                    promoPrice = "99.95"
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (941) 244-0044";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(941) 244-0044";
                                    insteadOfSpa = "$350";
                                    break;

                                                            case "ATIK Boca Raton Body Sculpting":
                                                                upDatedSpaName = "ATIK Spa";
                                                                upDatedSpaAddress = "PNC Bank Building," + "<br>" + "9033 Glades Rd, Boca Raton, FL 33434" + "<br>" + "(2nd floor, Use the back entrance, Suite B)";
                                                                upDatedSpaLINK = "https://forms.gle/HZ6bnRKxtijtYkZt6";
                                                                upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/atik-body-sculpting-promo";
                                                                upDatedSpaPhone = "(561) 210-0586";
                                                                upDatedDurationTotal = "60 Minutes";
                                                                upDatedDurationOne = "45 Minutes Venus Legacy Treatment";
                                                                upDatedDurationTwo = "15-minute Consultation";
                                                                promoPrice = "59.95";
                                                                upDatedActualSpaPhone = "Can't find our spa? Give us a call at (954) 408-8882";
                                                                treatmentSelected = "Body Sculpting Treatment";
                                                                newSpaPhoneNumberSelected = "(954) 408-8882";
                                                                insteadOfSpa = "$350";
                                                                break;

                                    case "Ben's Beauty Spa 89.95":
                                    upDatedSpaName = "Ben's Beauty Spa";
                                    upDatedSpaAddress = "20 N Raymond Ave, Pasadena CA 91103,"+"<br>"+"(Entrance is the door just left of Jimmy John's, 2nd Floor, Suite 200)"+"<br>"+"Door Code: 200"+"<br>"+"Use the door code, we'll buzz you in via intercom. Pull the door open after the buzz."+"<br>"+"Park at metered spots in front or park at 48 N Raymond Ave Parking Garage.";
                                    upDatedSpaLINK = "https://form.jotform.com/232685044919060";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/bens-spa-led-promo-page" ;
                                    upDatedSpaPhone = "(626) 381-9054";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "15 minute Cleansing ";
                                    upDatedDurationTwo = "45 minutes of LED therapy and Consultation";
                                    promoPrice = "89.95"
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (626) 298-6456";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(626) 298-6456";
                                    insteadOfSpa = "$350";
                                    break;

                                    case "Ben's Beauty Spa Collagen Enhancing Treatment 79.95":
                                    upDatedSpaName = "Ben's Beauty Spa";
                                    upDatedSpaAddress = "20 N Raymond Ave, Pasadena CA 91103,"+"<br>"+"(Entrance is the door just left of Jimmy John's, 2nd Floor, Suite 200)"+"<br>"+"Door Code: 200"+"<br>"+"Use the door code, we'll buzz you in via intercom. Pull the door open after the buzz."+"<br>"+"Park at metered spots in front or park at 48 N Raymond Ave Parking Garage.";
                                    upDatedSpaLINK = "https://form.jotform.com/232685044919060";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/bens-beauty-collagen-enhancing-facial" ;
                                    upDatedSpaPhone = "(626) 381-9054";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "20 minute Cleansing ";
                                    upDatedDurationTwo = "40 minutes of Collagen Enhancing Faccial and Consultation";
                                    promoPrice = "79.95"
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (626) 298-6456";
                                    treatmentSelected = "Collagen Enhancing Treatment";
                                    newSpaPhoneNumberSelected = "(626) 298-6456";
                                    insteadOfSpa = "$299";
                                    break;

                                    case "Ben's Beauty Spa Hydraglow Treatment 79.95":
                                    upDatedSpaName = "Ben's Beauty Spa";
                                    upDatedSpaAddress = "20 N Raymond Ave, Pasadena CA 91103,"+"<br>"+"(Entrance is the door just left of Jimmy John's, 2nd Floor, Suite 200)"+"<br>"+"Door Code: 200"+"<br>"+"Use the door code, we'll buzz you in via intercom. Pull the door open after the buzz."+"<br>"+"Park at metered spots in front or park at 48 N Raymond Ave Parking Garage.";
                                    upDatedSpaLINK = "https://form.jotform.com/232685044919060";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/bens-beauty-hydraglow-facial-promo-page" ;
                                    upDatedSpaPhone = "(626) 381-9054";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "15 minute Consultation ";
                                    upDatedDurationTwo = "45 minutes of deep cleansing & Hydraglow Treatment";
                                    promoPrice = "79.95"
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (626) 298-6456";
                                    treatmentSelected = "Hydraglow Treatment";
                                    newSpaPhoneNumberSelected = "(626) 298-6456";
                                    insteadOfSpa = "$299";
                                    break;

                                    case "Ben's Beauty Spa Collagen Enhancing Treatment with LED 69.95":
                                    upDatedSpaName = "Ben's Beauty Spa";
                                    upDatedSpaAddress = "20 N Raymond Ave, Pasadena CA 91103,"+"<br>"+"(Entrance is the door just left of Jimmy John's, 2nd Floor, Suite 200)"+"<br>"+"Door Code: 200"+"<br>"+"Use the door code, we'll buzz you in via intercom. Pull the door open after the buzz."+"<br>"+"Park at metered spots in front or park at 48 N Raymond Ave Parking Garage.";
                                    upDatedSpaLINK = "https://form.jotform.com/232685044919060";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/bens-beauty-collagen-enhancing-facial-with-led-promo" ;
                                    upDatedSpaPhone = "(626) 381-9054";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "20 minute Cleansing";
                                    upDatedDurationTwo = "40 minutes of Collagen Enhancing Treatment with LED and Consultation";
                                    promoPrice = "69.95"
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (626) 298-6456";
                                    treatmentSelected = "Collagen Enhancing Treatment";
                                    newSpaPhoneNumberSelected = "(626) 298-6456";
                                    insteadOfSpa = "$299";
                                    break;

                                    case "Ben's Beauty Men LED 79.95":
                                    upDatedSpaName = "Ben's Beauty Spa";
                                    upDatedSpaAddress = "20 N Raymond Ave, Pasadena CA 91103,"+"<br>"+"(Entrance is the door just left of Jimmy John's, 2nd Floor, Suite 200)"+"<br>"+"Door Code: 200"+"<br>"+"Use the door code, we'll buzz you in via intercom. Pull the door open after the buzz."+"<br>"+"Park at metered spots in front or park at 48 N Raymond Ave Parking Garage.";
                                    upDatedSpaLINK = "https://form.jotform.com/232685044919060";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/bens-beauty-mens-led-treatment-promo-page" ;
                                    upDatedSpaPhone = "(626) 381-9054";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "15 minute Cleansing ";
                                    upDatedDurationTwo = "45 minutes of LED therapy and Consultation";
                                    promoPrice = "79.95"
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (626) 298-6456";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(626) 298-6456";
                                    insteadOfSpa = "$299";
                                    break;

                                    case "Ben's Beauty Neck and Jawline Tightening 79.95":
                                    upDatedSpaName = "Ben's Beauty Spa";
                                    upDatedSpaAddress = "20 N Raymond Ave, Pasadena CA 91103,"+"<br>"+"(Entrance is the door just left of Jimmy John's, 2nd Floor, Suite 200)"+"<br>"+"Door Code: 200"+"<br>"+"Use the door code, we'll buzz you in via intercom. Pull the door open after the buzz."+"<br>"+"Park at metered spots in front or park at 48 N Raymond Ave Parking Garage.";
                                    upDatedSpaLINK = "https://form.jotform.com/232685044919060";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/bens-beauty-neck-jawline-tightening" ;
                                    upDatedSpaPhone = "(626) 381-9054";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "15 minute Consultation";
                                    upDatedDurationTwo = "45 minutes of Neck and Jawline Treatment";
                                    promoPrice = "79.95"
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (626) 298-6456";
                                    treatmentSelected = "Neck and Jawline Tightening Treatment";
                                    newSpaPhoneNumberSelected = "(626) 298-6456";
                                    insteadOfSpa = "$377";
                                    break;

                                    case "Ben's Beauty Skin Tightening 69.95":
                                    upDatedSpaName = "Ben's Beauty Spa";
                                    upDatedSpaAddress = "20 N Raymond Ave, Pasadena CA 91103,"+"<br>"+"(Entrance is the door just left of Jimmy John's, 2nd Floor, Suite 200)"+"<br>"+"Door Code: 200"+"<br>"+"Use the door code, we'll buzz you in via intercom. Pull the door open after the buzz."+"<br>"+"Park at metered spots in front or park at 48 N Raymond Ave Parking Garage.";
                                    upDatedSpaLINK = "https://form.jotform.com/232685044919060";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/dtb-bens-beauty-skin-tightening-promo" ;
                                    upDatedSpaPhone = "(626) 381-9054";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "15 minute Consultation";
                                    upDatedDurationTwo = "45 minutes of Skin Tightening Treatment";
                                    promoPrice = "69.95"
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (626) 298-6456";
                                    treatmentSelected = "Skin Tightening";
                                    newSpaPhoneNumberSelected = "(626) 298-6456";
                                    insteadOfSpa = "$377";
                                    break;

                                    case "Ben's Beauty Skin Tightening 59.95":
                                    upDatedSpaName = "Ben's Beauty Spa";
                                    upDatedSpaAddress = "20 N Raymond Ave, Pasadena CA 91103,"+"<br>"+"(Entrance is the door just left of Jimmy John's, 2nd Floor, Suite 200)"+"<br>"+"Door Code: 200"+"<br>"+"Use the door code, we'll buzz you in via intercom. Pull the door open after the buzz."+"<br>"+"Park at metered spots in front or park at 48 N Raymond Ave Parking Garage.";
                                    upDatedSpaLINK = "https://form.jotform.com/232685044919060";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/dtb-bens-spa-skin-tightening-promo-page" ;
                                    upDatedSpaPhone = "(626) 381-9054";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "15 minute Consultation";
                                    upDatedDurationTwo = "45 minutes of Skin Tightening Treatment";
                                    promoPrice = "59.95"
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (626) 298-6456";
                                    treatmentSelected = "Skin Tightening";
                                    newSpaPhoneNumberSelected = "(626) 298-6456";
                                    insteadOfSpa = "$299";
                                    break;

                                    case "Ben's Beauty Skin Tightening 59.95 with DP":
                                    upDatedSpaName = "Ben's Beauty Spa";
                                    upDatedSpaAddress = "20 N Raymond Ave, Pasadena CA 91103,"+"<br>"+"(Entrance is the door just left of Jimmy John's, 2nd Floor, Suite 200)"+"<br>"+"Door Code: 200"+"<br>"+"Use the door code, we'll buzz you in via intercom. Pull the door open after the buzz."+"<br>"+"Park at metered spots in front or park at 48 N Raymond Ave Parking Garage.";
                                    upDatedSpaLINK = "https://form.jotform.com/232685044919060";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/dtb-bens-spa-skin-tightening" ;
                                    upDatedSpaPhone = "(626) 381-9054";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "15 minute Consultation";
                                    upDatedDurationTwo = "45 minutes of Skin Tightening Treatment";
                                    promoPrice = "59.95"
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (626) 298-6456";
                                    treatmentSelected = "Skin Tightening";
                                    newSpaPhoneNumberSelected = "(626) 298-6456";
                                    insteadOfSpa = "$299";
                                    break;

                                    case "Ben's Beauty Men LED 99.95":
                                    upDatedSpaName = "Ben's Beauty Spa";
                                    upDatedSpaAddress = "20 N Raymond Ave, Pasadena CA 91103,"+"<br>"+"(Entrance is the door just left of Jimmy John's, 2nd Floor, Suite 200)"+"<br>"+"Door Code: 200"+"<br>"+"Use the door code, we'll buzz you in via intercom. Pull the door open after the buzz."+"<br>"+"Park at metered spots in front or park at 48 N Raymond Ave Parking Garage.";
                                    upDatedSpaLINK = "https://form.jotform.com/232685044919060";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/bens-beauty-new-mens-led-treatment-promo-page" ;
                                    upDatedSpaPhone = "(626) 381-9054";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "45 minutes Cleansing and the Men's LED Treatment";
                                    upDatedDurationTwo = "15 minutes Consultation";
                                    promoPrice = "99.95"
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (626) 298-6456";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(626) 298-6456";
                                    insteadOfSpa = "$377";
                                    break;

                                    case "FTB Ben's Beauty Spa 79.95":
                                    upDatedSpaName = "Ben's Beauty Spa";
                                    upDatedSpaAddress = "20 N Raymond Ave, Pasadena CA 91103,"+"<br>"+"(Entrance is the door just left of Jimmy John's, 2nd Floor, Suite 200)"+"<br>"+"Door Code: 200"+"<br>"+"Use the door code, we'll buzz you in via intercom. Pull the door open after the buzz."+"<br>"+"Park at metered spots in front or park at 48 N Raymond Ave Parking Garage.";
                                    upDatedSpaLINK = "https://form.jotform.com/232685044919060";
                                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/bens-beauty-led-promo" ;
                                    upDatedSpaPhone = "(626) 381-9054";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "15 minute Cleansing ";
                                    upDatedDurationTwo = "30 minutes of LED Treatment and 15 minutes Consultation";
                                    promoPrice = "79.95"
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (626) 298-6456";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(626) 298-6456";
                                    insteadOfSpa = "$299";
                                    break;

                                    case "FTB Ben's Beauty Spa Skin Tightening 59.95":
                                    upDatedSpaName = "Ben's Beauty Spa";
                                    upDatedSpaAddress = "20 N Raymond Ave, Pasadena CA 91103,"+"<br>"+"(Entrance is the door just left of Jimmy John's, 2nd Floor, Suite 200)"+"<br>"+"Door Code: 200"+"<br>"+"Use the door code, we'll buzz you in via intercom. Pull the door open after the buzz."+"<br>"+"Park at metered spots in front or park at 48 N Raymond Ave Parking Garage.";
                                    upDatedSpaLINK = "https://form.jotform.com/232685044919060";
                                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/bens-beauty-skin-tightening-promo" ;
                                    upDatedSpaPhone = "(626) 381-9054";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "15 minute Cleansing ";
                                    upDatedDurationTwo = "30 minutes of LED Treatment and 15 minutes Consultation";
                                    promoPrice = "59.95"
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (626) 298-6456";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(626) 298-6456";
                                    insteadOfSpa = "$299";
                                    break;

                                    case "Resveratrol":
                                    upDatedSpaName = "Resveratrol Spa";
                                    upDatedSpaAddress = "Biltmore Fashion Park" +"<br>"+"2502 E Camelback Rd, Phoenix, AZ 85016"+"<br>"+"(Between Skin Laundry and Pottery Barn)";
                                    upDatedSpaLINK = "https://docs.google.com/forms/d/e/1FAIpQLSc-Cl2YrrLTk92ckfwdIqIt8J5lEtsG30UsOIsfyFriHlgybA/viewform?usp=sf_link";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/resveratrol-biltmore-led-promo-page";
                                    upDatedSpaPhone = "(602) 887-9960 ";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 Minutes Light Cleaning";
                                    upDatedDurationTwo = "- 45 Minutes LED Light Session & Consultation";
                                    promoPrice = "79.95"
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (602) 935-5655";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(602) 935-5655";
                                    insteadOfSpa = "$350";
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

                                    case "Resveratrol Gold Collagen Treatment":
                                    upDatedSpaName = "Resveratrol Spa";
                                    upDatedSpaAddress = "Biltmore Fashion Park" +"<br>"+"2502 E Camelback Rd, Phoenix, AZ 85016"+"<br>"+"(Between Skin Laundry and Pottery Barn)";
                                    upDatedSpaLINK = "https://docs.google.com/forms/d/e/1FAIpQLSc-Cl2YrrLTk92ckfwdIqIt8J5lEtsG30UsOIsfyFriHlgybA/viewform?usp=sf_link";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/resveratrol-biltmore-gold-collagen-facial";
                                    upDatedSpaPhone = "(602) 887-9960 ";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 Minutes Light Cleaning";
                                    upDatedDurationTwo = "- 30 Minutes Gold Collagen Treatment & a 15 minute Consultation";
                                    promoPrice = "79.95"
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (602) 935-5655";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(602) 935-5655";
                                    insteadOfSpa = "$299";
                                    break;

                                        case "Stem Spa Ann Arbor":
                                    upDatedSpaName = "Stem Spa Ann Arbor";
                                    upDatedSpaAddress = "100 Briarwood Cir Ann Arbor MI 48108"+"<br>"+"(Briarwood mall, In the middle of the mall next to Lush)";
                                    upDatedSpaLINK = "https://forms.gle/X2Z4xKUkrre7Njjn8";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/stem-spa-ann-arbor";
                                    upDatedSpaPhone = "(734) 418-8344";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 minutes Cleansing";
                                    upDatedDurationTwo = "- 30 minutes LED Anti-aging treatment"+"<br>"+"15 minute Consultation";
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (734) 330-0991";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(734) 330-0991";
                                    insteadOfSpa = "$350";
                                    break;

                                    case "GreenBiotics Woodfield":
                                    upDatedSpaName = "GreenBiotics";
                                    upDatedSpaAddress = "Woodfield Mall,"+"<br>"+"5 Woodfield Mall Room F328 Schaumburg, IL 60173"+"<br>"+"(Park near the Cheesecake Factory Entrance/Parking lot, Spa is in front of Akira)";
                                    upDatedSpaLINK = "https://forms.gle/vMMqiYYrMBjwzimp6";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/greenbiotics-il-promo-page";
                                    upDatedSpaPhone = "(847) 792-1710";
                                    upDatedDurationTotal = "45 Minutes";
                                    upDatedDurationOne = "- 10 minutes light cleansing";
                                    upDatedDurationTwo = "- 20 minutes LED Anti-aging treatment"+"<br>"+"15 minute Consultation";
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (614) 592-9909";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(614) 592-9909";
                                    insteadOfSpa = "$299";
                                    break;

                                    case "GreenBiotics Woodfield Turkey Neck Tightening $69.95":
                                    upDatedSpaName = "GreenBiotics";
                                    upDatedSpaAddress = "Woodfield Mall,"+"<br>"+"5 Woodfield Mall Room F328 Schaumburg, IL 60173"+"<br>"+"(Park near the Cheesecake Factory Entrance/Parking lot, Spa is in front of Akira)";
                                    upDatedSpaLINK = "https://forms.gle/vMMqiYYrMBjwzimp6";
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

                                    case "GreenBiotics Woodfield Skin Tightening $69.95":
                                    upDatedSpaName = "GreenBiotics";
                                    upDatedSpaAddress = "Woodfield Mall,"+"<br>"+"5 Woodfield Mall Room F328 Schaumburg, IL 60173"+"<br>"+"(Park near the Cheesecake Factory Entrance/Parking lot, Spa is in front of Akira)";
                                    upDatedSpaLINK = "https://forms.gle/vMMqiYYrMBjwzimp6";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/greenbiotics-il-new-promo-page";
                                    upDatedSpaPhone = "(847) 792-1710";
                                    upDatedDurationTotal = "45 Minutes";
                                    upDatedDurationOne = "- 10 minutes light cleansing";
                                    upDatedDurationTwo = "- 20 minutes Skin Tightening treatment"+"<br>"+"15 minute Consultation";
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (614) 592-9909";
                                    treatmentSelected = "Skin Tightening Treatment";
                                    newSpaPhoneNumberSelected = "(614) 592-9909";
                                    insteadOfSpa = "$377";
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

                                        case "SkinTech Spa Collagen Enhancing":
                                    upDatedSpaName = "SkinTech Spa";
                                    upDatedSpaAddress = "Mira Vista Office Building,"+"<br>"+"6100 Southwest Blvd #100 Benbrook, TX 76109, USA"+"<br>"+"(First Floor)";
                                    upDatedSpaLINK = "https://forms.zohopublic.com/skintechspa/form/SKINTECHSPAFACIALFORMANDHIPPAFORM/formperma/QP2srStVFR-iWxO1_eeJ9S24S89sZbawbL11BS2LjB0";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/skintech-collagen-enhancing-facial-promo-page";
                                    upDatedSpaPhone = "(682) 900-3832";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15-minute skin analysis"+"<br>"+"30 minutes of Cleansing & Collagen Enhancing";
                                    upDatedDurationTwo = "- 15 minute Post-Care Consultation";
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (214) 616-4827";
                                    treatmentSelected = "Collagen Enhancing";
                                    newSpaPhoneNumberSelected = "(214) 616-4827";
                                    insteadOfSpa = "$350";
                                    break;

                                    case "SkinTech Spa Collagen Enhancing $59.95":
                                    upDatedSpaName = "SkinTech Spa";
                                    upDatedSpaAddress = "Mira Vista Office Building,"+"<br>"+"6100 Southwest Blvd #100 Benbrook, TX 76109, USA"+"<br>"+"(First Floor)";
                                    upDatedSpaLINK = "https://forms.zohopublic.com/skintechspa/form/SKINTECHSPAFACIALFORMANDHIPPAFORM/formperma/QP2srStVFR-iWxO1_eeJ9S24S89sZbawbL11BS2LjB0";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/new-skintech-collagen-enhancing-facial-promo-page";
                                    upDatedSpaPhone = "(682) 900-3832";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15-minute skin analysis"+"<br>"+"30 minutes of Cleansing & Collagen Enhancing";
                                    upDatedDurationTwo = "- 15 minute Post-Care Consultation";
                                    promoPrice = "59.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (214) 616-4827";
                                    treatmentSelected = "Collagen Enhancing";
                                    newSpaPhoneNumberSelected = "(214) 616-4827";
                                    insteadOfSpa = "$299";
                                    break;

                                    case "SkinTech LED":
                                    upDatedSpaName = "SkinTech Spa";
                                    upDatedSpaAddress = "Mira Vista Office Building,"+"<br>"+"6100 Southwest Blvd #100 Benbrook, TX 76109, USA"+"<br>"+"(First Floor)";
                                    upDatedSpaLINK = "https://forms.zohopublic.com/skintechspa/form/SKINTECHSPAFACIALFORMANDHIPPAFORM/formperma/QP2srStVFR-iWxO1_eeJ9S24S89sZbawbL11BS2LjB0";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/skintech-spa-promo-page";
                                    upDatedSpaPhone = "(682) 900-3832";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15-minute skin analysis"+"<br>"+"30 minutes of Cleansing & LED Anti-aging treatment";
                                    upDatedDurationTwo = "- 15 minute Post-Care Consultation";
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (214) 616-4827";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(214) 616-4827";
                                    insteadOfSpa = "$299";
                                    break;

                                    case "SkinTech Spa LED $59.95":
                                    upDatedSpaName = "SkinTech Spa";
                                    upDatedSpaAddress = "Mira Vista Office Building,"+"<br>"+"6100 Southwest Blvd #100 Benbrook, TX 76109, USA"+"<br>"+"(First Floor)";
                                    upDatedSpaLINK = "https://forms.zohopublic.com/skintechspa/form/SKINTECHSPAFACIALFORMANDHIPPAFORM/formperma/QP2srStVFR-iWxO1_eeJ9S24S89sZbawbL11BS2LjB0";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/new-skintech-spa-promo-page";
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

                                    case "SkinTech Spa Men's Body Sculpting $69.95":
                                    upDatedSpaName = "SkinTech Spa";
                                    upDatedSpaAddress = "Mira Vista Office Building,"+"<br>"+"6100 Southwest Blvd #100 Benbrook, TX 76109, USA"+"<br>"+"(First Floor)";
                                    upDatedSpaLINK = "https://forms.zohopublic.com/skintechspa/form/SKINTECHSPAFACIALFORMANDHIPPAFORM/formperma/QP2srStVFR-iWxO1_eeJ9S24S89sZbawbL11BS2LjB0";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/skintech-mens-body-sculpting-promo-page";
                                    upDatedSpaPhone = "(682) 900-3832";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 minute consultation and body analysis"+"<br>"+" 30 minutes of treatment time using our 4-in-1 technology including lymphatic massage with Wood Therapy";
                                    upDatedDurationTwo = "- 15 minute Post-Care Consultation";
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (214) 616-4827";
                                    treatmentSelected = "Body Sculpting";
                                    newSpaPhoneNumberSelected = "(214) 616-4827";
                                    insteadOfSpa = "$399";
                                    break;

                                    case "SkinTech Spa Body Sculpting $69.95":
                                    upDatedSpaName = "SkinTech Spa";
                                    upDatedSpaAddress = "Mira Vista Office Building,"+"<br>"+"6100 Southwest Blvd #100 Benbrook, TX 76109, USA"+"<br>"+"(First Floor)";
                                    upDatedSpaLINK = "https://forms.zohopublic.com/skintechspa/form/BodyForm/formperma/94fMdGEeOtBuWFgew2JhOAORr4F6i0-YNUzjcfoFu9M";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/new-skintech-body-sculpting-promo-page";
                                    upDatedSpaPhone = "(682) 900-3832";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 minute consultation and body analysis"+"<br>"+" 30 minutes of treatment time using our 4-in-1 technology including lymphatic massage with Wood Therapy";
                                    upDatedDurationTwo = "- 15 minute Post-Care Consultation";
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (214) 616-4827";
                                    treatmentSelected = "Body Sculpting";
                                    newSpaPhoneNumberSelected = "(214) 616-4827";
                                    insteadOfSpa = "$399";
                                    break;

                                    case "SkinTech Spa Cryogenic Body Sculpting $69.95":
                                    upDatedSpaName = "SkinTech Spa";
                                    upDatedSpaAddress = "Mira Vista Office Building,"+"<br>"+"6100 Southwest Blvd #100 Benbrook, TX 76109, USA"+"<br>"+"(First Floor)";
                                    upDatedSpaLINK = "https://forms.zohopublic.com/skintechspa/form/BodyForm/formperma/94fMdGEeOtBuWFgew2JhOAORr4F6i0-YNUzjcfoFu9M";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/new-skintech-cryogenic-body-sculpting-promo-page";
                                    upDatedSpaPhone = "(682) 900-3832";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 minute consultation and body analysis"+"<br>"+" 30 minutes of treatment time using our 4-in-1 technology including lymphatic massage with Wood Therapy";
                                    upDatedDurationTwo = "- 15 minute Post-Care Consultation";
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (214) 616-4827";
                                    treatmentSelected = "Body Sculpting";
                                    newSpaPhoneNumberSelected = "(214) 616-4827";
                                    insteadOfSpa = "$399";
                                    break;

                                    case "SkinTech Hydraglow":
                                    upDatedSpaName = "SkinTech Spa";
                                    upDatedSpaAddress = "Mira Vista Office Building,"+"<br>"+"6100 Southwest Blvd #100 Benbrook, TX 76109, USA"+"<br>"+"(First Floor)";
                                    upDatedSpaLINK = "https://forms.zohopublic.com/skintechspa/form/SKINTECHSPAFACIALFORMANDHIPPAFORM/formperma/QP2srStVFR-iWxO1_eeJ9S24S89sZbawbL11BS2LjB0";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/skintech-spa-hydraglow-promo-page";
                                    upDatedSpaPhone = "(682) 900-3832";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 minute skin analysis"+"<br>"+"30-minute facial cleansing & Hydraglow treatment";
                                    upDatedDurationTwo = "- 15 minute Post-Care Consultation";
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (214) 616-4827";
                                    treatmentSelected = "Hydraglow Treatment";
                                    newSpaPhoneNumberSelected = "(214) 616-4827";
                                    insteadOfSpa = "$299";
                                    break;

                                    case "SkinTech Free Body Consultation":
                                    upDatedSpaName = "SkinTech Spa";
                                    upDatedSpaAddress = "Mira Vista Office Building,"+"<br>"+"6100 Southwest Blvd #100 Benbrook, TX 76109, USA"+"<br>"+"(First Floor)";
                                    upDatedSpaLINK = "https://forms.zohopublic.com/skintechspa/form/SKINTECHSPAFACIALFORMANDHIPPAFORM/formperma/QP2srStVFR-iWxO1_eeJ9S24S89sZbawbL11BS2LjB0";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/skintech-body-freeconsult";
                                    upDatedSpaPhone = "(682) 900-3832";
                                    upDatedDurationTotal = "30 Minutes";
                                    upDatedDurationOne = "- 15 minute form completion"+"<br>"+"15 minute consultation and analysis";
                                    upDatedDurationTwo = " ";
                                    promoPrice = "Free";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (214) 616-4827";
                                    treatmentSelected = "Free Body Consultation";
                                    newSpaPhoneNumberSelected = "(214) 616-4827";
                                    insteadOfSpa = "$99";
                                    break;

                                    case "Botanifique Spa":
                                    upDatedSpaName = "Botanifique Spa";
                                    upDatedSpaAddress = "Manchester Unity Building,"+"<br>"+"Shop 9/107 Swanston Street, Melbourne, Victoria 3187"+"<br>"+"(Located on the Ground floor)";
                                    upDatedSpaLINK = "https://forms.gle/Zc6Henp3wU25Lxaz6";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/botanifique-led-promo-page";
                                    upDatedSpaPhone = "(03) 7042 2770";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 10 Minutes Cleansing";
                                    upDatedDurationTwo = "- 35 Minutes of LED Anti-Aging Treatment" + "<br>" + "- 15 Minutes of Consultation"
                                    promoPrice = "99.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at +61481768980";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "0481768980";
                                    insteadOfSpa = "$350";
                                    break;

                                    case "Botanifique - Emporium":
                                    upDatedSpaName = "Botanifique - Emporium";
                                    upDatedSpaAddress = "Emporium Melbourne,"+"<br>"+"Shop 18, 287 Lonsdale St, Melbourne VIC 3000"+"<br>"+"(Level 1, next to Replay)";
                                    upDatedSpaLINK = "https://forms.gle/Zc6Henp3wU25Lxaz6";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/botanifique-emporium-promo-page";
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

                                    case "Good Life Spa LED 79.95":
                                    upDatedSpaName = "Good Life Spa";
                                    upDatedSpaAddress = "Volusia Mall,"+"<br>"+"1700 W International Speedway Blvd, Daytona Beach, FL 32114"+"<br>"+"(Across From T-Mobile)";
                                    upDatedSpaLINK = "https://forms.gle/UGhfQHRkfdPqvcdU7";
                                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/good-life-spa-led-promo";
                                    upDatedSpaPhone = "(386) 267-6296";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15-minutes of Cleansing"+"<br>"+" 25 minutes of the LED Anti-aging Experience ";
                                    upDatedDurationTwo = "- 10 minute Upper Body Massage & 10 minutes of Anti-aging serum application and Consultation"
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (386) 267-5157";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(386) 267-5157";
                                    insteadOfSpa = "$350";
                                    break;

                                    case "Good Life Spa LED 59.95":
                                    upDatedSpaName = "Good Life Spa";
                                    upDatedSpaAddress = "Volusia Mall,"+"<br>"+"1700 W International Speedway Blvd, Daytona Beach, FL 32114"+"<br>"+"(Across From T-Mobile)";
                                    upDatedSpaLINK = "https://forms.gle/UGhfQHRkfdPqvcdU7";
                                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/good-life-spa-new-led-promo";
                                    upDatedSpaPhone = "(386) 267-6296";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15-minutes of Cleansing"+"<br>"+" 25 minutes of the LED Anti-aging Experience ";
                                    upDatedDurationTwo = "- 10 minute Upper Body Massage & 10 minutes of Anti-aging serum application and Consultation"
                                    promoPrice = "59.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (386) 267-5157";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(386) 267-5157";
                                    insteadOfSpa = "$350";
                                    break;

                                    case "Good Life Spa Men's LED 79.95":
                                    upDatedSpaName = "Good Life Spa";
                                    upDatedSpaAddress = "Volusia Mall,"+"<br>"+"1700 W International Speedway Blvd, Daytona Beach, FL 32114"+"<br>"+"(Across From T-Mobile)";
                                    upDatedSpaLINK = "https://forms.gle/UGhfQHRkfdPqvcdU7";
                                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/good-life-spa-mens-led-promo";
                                    upDatedSpaPhone = "(386) 267-6296";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15-minutes of Cleansing";
                                    upDatedDurationTwo = "- 45 minutes of the LED Anti-aging Experience & Consultation"
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (386) 267-5157";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(386) 267-5157";
                                    insteadOfSpa = "$299";
                                    break;

                                    case "Good Life Spa Collagen Enhancing 69.95":
                                    upDatedSpaName = "Good Life Spa";
                                    upDatedSpaAddress = "Volusia Mall,"+"<br>"+"1700 W International Speedway Blvd, Daytona Beach, FL 32114"+"<br>"+"(Across From T-Mobile)";
                                    upDatedSpaLINK = "https://forms.gle/UGhfQHRkfdPqvcdU7";
                                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/good-life-spa-collagen-enhancing-promo";
                                    upDatedSpaPhone = "(386) 267-6296";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15-minutes of Cleansing";
                                    upDatedDurationTwo = "- 30 minutes of the Collagen Enhancing Treatment & 15 minutes Consultation"
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (386) 267-5157";
                                    treatmentSelected = "Collagen Enhancing";
                                    newSpaPhoneNumberSelected = "(386) 267-5157";
                                    insteadOfSpa = "$377";
                                    break;

                                    case "Good Life Spa Neck and Jawline 69.95":
                                    upDatedSpaName = "Good Life Spa";
                                    upDatedSpaAddress = "Volusia Mall,"+"<br>"+"1700 W International Speedway Blvd, Daytona Beach, FL 32114"+"<br>"+"(Across From T-Mobile)";
                                    upDatedSpaLINK = "https://forms.gle/UGhfQHRkfdPqvcdU7";
                                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/good-life-spa-neck-and-jawline-treatment-page";
                                    upDatedSpaPhone = "(386) 267-6296";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15-minutes of Consultation";
                                    upDatedDurationTwo = "- 45 minutes of the Neck & Jawline Treatment"
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (386) 267-5157";
                                    treatmentSelected = "Neck and Jawline Tightening Treatment";
                                    newSpaPhoneNumberSelected = "(386) 267-5157";
                                    insteadOfSpa = "$377";
                                    break;

                                    case "NeoLumo Florence":
                                    upDatedSpaName = "NeoLumo Florence";
                                    upDatedSpaAddress = "Magnolia Mall,"+"<br>"+"2701 David H McLeod Blvd Florence, SC 29501"+"<br>"+"(Next to Kay Jewelers)";
                                    upDatedSpaLINK = "https://forms.gle/HLY8sSM46sDjSD8V6";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/neolumo-promo-page";
                                    upDatedSpaPhone = "(864) 999-4665";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15-minutes of Cleansing";
                                    upDatedDurationTwo = "- 30-minutes LED Anti-Aging Treatment"+"<br>"+"15-minutes Consultation"
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (864) 999-4665";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(864) 999-4665";
                                    insteadOfSpa = "$350";
                                    break;

                                    case "Vera Beauty Spa":
                                    upDatedSpaName = "Vera Beauty Spa";
                                    upDatedSpaAddress = "Chandler Fashion Center,"+"<br>"+"3111 W Chandler Blvd Chandler AZ 85226"+"<br>"+"(Second Floor Next To Helzberz Jewelry)";
                                    upDatedSpaLINK = "https://forms.gle/4SbX4TQJudodoCAd6";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/vera-beauty-spa-promo-page";
                                    upDatedSpaPhone = "(480) 805-5171";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15-minutes of Cleansing";
                                    upDatedDurationTwo = "- 30-minutes LED Anti-Aging Treatment"+"<br>"+"15-minutes Consultation"
                                    promoPrice = "59.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (602) 394-7750";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(602) 394-7750";
                                    insteadOfSpa = "$350";
                                    break;

                                    case "BU Care Spa":
                                    upDatedSpaName = "BU Care Spa";
                                    upDatedSpaAddress = "411 E Atlantic Ave Delray Beach FL 33483"+"<br>"+"(Delray Beach next to wine and cheese)";
                                    upDatedSpaLINK = "https://forms.gle/1kexSf7DQpnBhC3w7";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/bu-care-spa-promo-page";
                                    upDatedSpaPhone = "(561) 560-7797";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 10-minutes of light Cleansing";
                                    upDatedDurationTwo = "- 30-minutes LED Anti-Aging Treatment"+"<br>"+"20-minutes Consultation"
                                    promoPrice = "59.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (561) 908-2623";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(561) 908-2623";
                                    insteadOfSpa = "$350";
                                    break;

                                    case "BU Care Spa instead of 377":
                                    upDatedSpaName = "BU Care Spa";
                                    upDatedSpaAddress = "411 E Atlantic Ave Delray Beach FL 33483"+"<br>"+"(Delray Beach next to wine and cheese)";
                                    upDatedSpaLINK = "https://forms.gle/1kexSf7DQpnBhC3w7";
                                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/bu-care-led-promo";
                                    upDatedSpaPhone = "(561) 560-7797";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 10-minutes of light Cleansing";
                                    upDatedDurationTwo = "- 30-minutes LED Anti-Aging Treatment"+"<br>"+"20-minutes Consultation"
                                    promoPrice = "59.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (561) 908-2623";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(561) 908-2623";
                                    insteadOfSpa = "$377";
                                    break;

                                    case "BU Care Spa Gold Collagen Treatment":
                                    upDatedSpaName = "BU Care Spa";
                                    upDatedSpaAddress = "411 E Atlantic Ave Delray Beach FL 33483"+"<br>"+"(Delray Beach next to wine and cheese)";
                                    upDatedSpaLINK = "https://forms.gle/1kexSf7DQpnBhC3w7";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/bu-care-spa-gold-collagen-facial";
                                    upDatedSpaPhone = "(561) 560-7797";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15-minutes of light Cleaning";
                                    upDatedDurationTwo = "- 30 Minutes Gold Collagen Treatment & a 15 minute Consultation"
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (561) 908-2623";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(561) 908-2623";
                                    insteadOfSpa = "$299";
                                    break;

                                    case "BU Care Men's LED":
                                    upDatedSpaName = "BU Care Spa";
                                    upDatedSpaAddress = "411 E Atlantic Ave Delray Beach FL 33483"+"<br>"+"(Delray Beach next to wine and cheese)";
                                    upDatedSpaLINK = "https://forms.gle/1kexSf7DQpnBhC3w7";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/bu-care-mens-led-promo-page";
                                    upDatedSpaPhone = "(561) 560-7797";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15-minutes of light Cleansing";
                                    upDatedDurationTwo = "- 45-minutes LED Anti-Aging Treatment & Consultation"
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (561) 908-2623";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(561) 908-2623";
                                    insteadOfSpa = "$299";
                                    break;

                                    case "The Soap Tree":
                                    upDatedSpaName = "The Soap Tree";
                                    upDatedSpaAddress = "The Mall at Tuttle Crossing"+"<br>"+"5043 Tuttle Crossing Blvd, Dublin, Ohio 43016"+"<br>"+"(First floor near sunglasses hut)";
                                    upDatedSpaLINK = "https://forms.gle/QZeUWwaHiUZESaHx6";
                                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/soap-tree-spa-led-promo";
                                    upDatedSpaPhone = "(614) 763-2688";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15-minutes of Cleansing";
                                    upDatedDurationTwo = "- 45-minutes LED Anti-Aging Treatment & Consultation"
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (614) 370-2401";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(614) 370-2401";
                                    insteadOfSpa = "$350";
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

                                    case "Cecilia Spa Center":
                                    upDatedSpaName = "Cecilia Spa Center";
                                    upDatedSpaAddress = "Oak Park Mall"+"<br>"+"11149 W 95th St, Overland Park, Kansas 66214"+"<br>"+"(Second Floor next to JC penny, Unit 122)";
                                    upDatedSpaLINK = "https://forms.gle/a2h3Hx6oVjQJ8hqWA";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/cecilia-spa-by-voupre-promo-page";
                                    upDatedSpaPhone = "(913) 359-7256";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 20-minutes of Cleansing";
                                    upDatedDurationTwo = "- 40-minutes LED Anti-Aging Treatment & Consultation"
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (913) 408-8071";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(913) 408-8071";
                                    insteadOfSpa = "$350";
                                    break;

                                    case "Vivorelle Gurnee":
                                    upDatedSpaName = "Vivorelle";
                                    upDatedSpaAddress = "Gurnee Mills Mall,"+"<br>"+"6170 W Grand Ave Gurnee IL, 60031"+"<br>"+"(BEST ENTRANCE - Entry E, First Floor, across from Bass Pro Shops)";
                                    upDatedSpaLINK = "https://forms.gle/aPZNTsG6Sf4z2Ry49";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/vivorelle-gurnee-promo-page";
                                    upDatedSpaPhone = "(224) 955-2828";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15-minutes of Cleansing";
                                    upDatedDurationTwo = "- 45-minutes LED Anti-Aging Treatment & Consultation"
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (646) 220-8444";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(646) 220-8444";
                                    insteadOfSpa = "$350";
                                    break; 

                                    case "Vivorelle Gurnee LED 59.95":
                                    upDatedSpaName = "Vivorelle";
                                    upDatedSpaAddress = "Gurnee Mills Mall,"+"<br>"+"6170 W Grand Ave Gurnee IL, 60031"+"<br>"+"(BEST ENTRANCE - Entry E, First Floor, across from Bass Pro Shops)";
                                    upDatedSpaLINK = "https://forms.gle/aPZNTsG6Sf4z2Ry49";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/vivorelle-gurnee-new-promo-page";
                                    upDatedSpaPhone = "(224) 955-2828";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15-minutes of Cleansing";
                                    upDatedDurationTwo = "- 45-minutes LED Anti-Aging Treatment & Consultation"
                                    promoPrice = "59.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (646) 220-8444";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(646) 220-8444";
                                    insteadOfSpa = "$350";
                                    break;

                                    case "Vivorelle Gurnee Men's LED 79.95":
                                    upDatedSpaName = "Vivorelle";
                                    upDatedSpaAddress = "Gurnee Mills Mall,"+"<br>"+"6170 W Grand Ave Gurnee IL, 60031"+"<br>"+"(BEST ENTRANCE - Entry E, First Floor, across from Bass Pro Shops)";
                                    upDatedSpaLINK = "https://forms.gle/aPZNTsG6Sf4z2Ry49";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/vivorelle-gurnee-mens-led-promo-page";
                                    upDatedSpaPhone = "(224) 955-2828";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15-minutes of Cleansing";
                                    upDatedDurationTwo = "- 45-minutes Men's LED Anti-Aging Treatment & Consultation"
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (646) 220-8444";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(646) 220-8444";
                                    insteadOfSpa = "$377";
                                    break;

                                    case "Vivorelle Gurnee Neck and Jawline $69.95":
                                    upDatedSpaName = "Vivorelle";
                                    upDatedSpaAddress = "Gurnee Mills Mall,"+"<br>"+"6170 W Grand Ave Gurnee IL, 60031"+"<br>"+"(BEST ENTRANCE - Entry E, First Floor, across from Bass Pro Shops)";
                                    upDatedSpaLINK = "https://forms.gle/aPZNTsG6Sf4z2Ry49";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/vivorelle-gurnee-neck-and-jaw-line-tightening-treatment-promo";
                                    upDatedSpaPhone = "(224) 955-2828";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15-minutes of Consultation";
                                    upDatedDurationTwo = "- 45-minutes light cleansing & Neck and Jawline Treatment "
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (646) 220-8444";
                                    treatmentSelected = "Neck and Jawline Tightening Treatment";
                                    newSpaPhoneNumberSelected = "(646) 220-8444";
                                    insteadOfSpa = "$377";
                                    break; 

                                    case "Vivorelle Gurnee Turkey Neck Tightening $69.95":
                                    upDatedSpaName = "Vivorelle";
                                    upDatedSpaAddress = "Gurnee Mills Mall,"+"<br>"+"6170 W Grand Ave Gurnee IL, 60031"+"<br>"+"(BEST ENTRANCE - Entry E, First Floor, across from Bass Pro Shops)";
                                    upDatedSpaLINK = "https://forms.gle/aPZNTsG6Sf4z2Ry49";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/vivorelle-gurnee-turkey-neck-tightening-treatment-promo ";
                                    upDatedSpaPhone = "(224) 955-2828";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15-minutes of Consultation";
                                    upDatedDurationTwo = "- 45-minutes Turkey Neck Tightening Treatment "
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (646) 220-8444";
                                    treatmentSelected = "Turkey Neck Tightening Treatment";
                                    newSpaPhoneNumberSelected = "(646) 220-8444";
                                    insteadOfSpa = "$377";
                                    break; 

                                    case "GreenBiotics Barton Creek 59.95":
                                    upDatedSpaName = "GreenBiotics";
                                    upDatedSpaAddress = "Barton Creek Square,"+"<br>"+"2901 S Capital of Texas Hwy. Austin, TX 78746"+"<br>"+"(In front of Sephora)";
                                    upDatedSpaLINK = "https://forms.gle/i5TUHvLgMZa7nuVJ7";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/greenbiotics-barton-creek-new-promo";
                                    upDatedSpaPhone = "(512) 354-2417";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15-minutes of Cleansing";
                                    upDatedDurationTwo = "- 45-minutes LED Anti-Aging Treatment & Consultation"
                                    promoPrice = "59.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (614) 592-9909";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(614) 592-9909";
                                    insteadOfSpa = "$300";
                                    break;

                                    case "GreenBiotics Barton Creek 49.95":
                                    upDatedSpaName = "GreenBiotics";
                                    upDatedSpaAddress = "Barton Creek Square,"+"<br>"+"2901 S Capital of Texas Hwy. Austin, TX 78746"+"<br>"+"(In front of Sephora)";
                                    upDatedSpaLINK = "https://forms.gle/i5TUHvLgMZa7nuVJ7";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/new-greenbiotics-barton-creek-promo-page";
                                    upDatedSpaPhone = "(512) 354-2417";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15-minutes of Cleansing";
                                    upDatedDurationTwo = "- 45-minutes LED Anti-Aging Treatment & Consultation"
                                    promoPrice = "49.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (614) 592-9909";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(614) 592-9909";
                                    insteadOfSpa = "$299";
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

                                    case "OraSempre Montana":
                                    upDatedSpaName = "OraSempre Montana";
                                    upDatedSpaAddress = "201 Central Ave. Whitefish, MT, 59937"+"<br>"+"(Downtown Whitefish)";
                                    upDatedSpaLINK = "https://forms.gle/vZThh2XQUKSwE6TP8";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/orasempre-spa-led";
                                    upDatedSpaPhone = "(406) 545-3587";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 20-minutes of Cleansing";
                                    upDatedDurationTwo = "- 20-minutes LED Anti-Aging Treatment & 20-minutes Consultation"
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (406) 885-1321";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(406) 885-1321";
                                    insteadOfSpa = "$399";
                                    break;

                                    case "OraSempre Collagen Enhancing":
                                    upDatedSpaName = "OraSempre Montana";
                                    upDatedSpaAddress = "201 Central Ave. Whitefish, MT, 59937"+"<br>"+"(Downtown Whitefish)";
                                    upDatedSpaLINK = "https://forms.gle/vZThh2XQUKSwE6TP8";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/orasempre-spa-collagen-enhancing-treatment";
                                    upDatedSpaPhone = "(406) 545-3587";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 20-minutes of Cleansing";
                                    upDatedDurationTwo = "- 20-minutes Collagen Enhancing Treatment & 20-minutes Consultation"
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (406) 885-1321";
                                    treatmentSelected = "Collagen Enhancing";
                                    newSpaPhoneNumberSelected = "(406) 885-1321";
                                    insteadOfSpa = "$377";
                                    break;

                                    case "OraSempre Neck and Jawline":
                                    upDatedSpaName = "OraSempre Montana";
                                    upDatedSpaAddress = "201 Central Ave. Whitefish, MT, 59937"+"<br>"+"(Downtown Whitefish)";
                                    upDatedSpaLINK = "https://forms.gle/vZThh2XQUKSwE6TP8";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/orasempre-spa-neck-and-jaw-line-tightening-treatment-promo";
                                    upDatedSpaPhone = "(406) 545-3587";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15-minutes of Consultation";
                                    upDatedDurationTwo = "- 45-minutes Neck and Jawline Treatment"
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (406) 885-1321";
                                    treatmentSelected = "Neck and Jawline Tightening Treatment";
                                    newSpaPhoneNumberSelected = "(406) 885-1321";
                                    insteadOfSpa = "$377";
                                    break;

                                    case "GreenBiotics Pentagon":
                                    upDatedSpaName = "GreenBiotics";
                                    upDatedSpaAddress = "Pentagon Mall,"+"<br>"+"1100 S Hayes St. Arlington, VA 22202"+"<br>"+"(Second floor near Armani exchange)";
                                    upDatedSpaLINK = "https://forms.gle/FAS5vjGwbH7hWuJq5";
                                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/greenbiotics-pentagon";
                                    upDatedSpaPhone = "(571) 695-2525";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15-minutes of Cleansing";
                                    upDatedDurationTwo = "- 45-minutes LED Anti-Aging Treatment & Consultation"
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (571) 695-2525";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(571) 695-2525";
                                    insteadOfSpa = "$299";
                                    break;

                                    case "Lumiere By Adriana Laser Lipo Treatment":
                                    upDatedSpaName = "Lumiere By Adriana";
                                    upDatedSpaAddress = "2434 E Las Olas Blvd, Fort Lauderdale, FL  33301"+"<br>"+"(Next to Chima Steakhouse, Metered parking is available)";
                                    upDatedSpaLINK = "https://forms.gle/VwV9xhaFEQtL8LqN8";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/lumiere-laser-lipo-promo-page";
                                    upDatedSpaPhone = "(754) 799-8010";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 45 minutes of Cleaning & Laser Lipo Experience";
                                    upDatedDurationTwo = "- 15-minutes of Consultation"
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (954) 777-6770";
                                    treatmentSelected = "Laser Lipo Treatment";
                                    newSpaPhoneNumberSelected = "(954) 777-6770";
                                    insteadOfSpa = "$399";
                                    break;

                                    case "Lumiere By Adriana Laser Lipo Treatment $69.95":
                                    upDatedSpaName = "Lumiere By Adriana";
                                    upDatedSpaAddress = "2434 E Las Olas Blvd, Fort Lauderdale, FL  33301"+"<br>"+"(Next to Chima Steakhouse)";
                                    upDatedSpaLINK = "https://forms.gle/VwV9xhaFEQtL8LqN8";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/new-lumiere-by-adriana-laser-lipo-promo-page";
                                    upDatedSpaPhone = "(754) 799-8010";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 45 minutes of Cleaning & Laser Lipo Experience";
                                    upDatedDurationTwo = "- 15-minutes of Consultation"
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (954) 777-6770";
                                    treatmentSelected = "Laser Lipo Treatment";
                                    newSpaPhoneNumberSelected = "(954) 777-6770";
                                    insteadOfSpa = "$399";
                                    break;

                                    case "Lumiere By Adriana Collagen Enhancing Treatment":
                                    upDatedSpaName = "Lumiere By Adriana";
                                    upDatedSpaAddress = "2434 E Las Olas Blvd, Fort Lauderdale, FL  33301"+"<br>"+"(Next to Chima Steakhouse)";
                                    upDatedSpaLINK = "https://forms.gle/VwV9xhaFEQtL8LqN8";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/lumiere-by-adriana-collagen-enhancing-treatment-promo-page";
                                    upDatedSpaPhone = "(754) 799-8010";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 45 minutes of Cleaning & Collagen Enhancing Treatment";
                                    upDatedDurationTwo = "- 15-minutes of Consultation"
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (954) 777-6770";
                                    treatmentSelected = "Collagen Enhancing Treatment";
                                    newSpaPhoneNumberSelected = "(954) 777-6770";
                                    insteadOfSpa = "$299";
                                    break;

                                    case "Lumiere By Adriana Collagen Enhancing Treatment(instead of $399)":
                                    upDatedSpaName = "Lumiere By Adriana";
                                    upDatedSpaAddress = "2434 E Las Olas Blvd, Fort Lauderdale, FL  33301"+"<br>"+"(Next to Chima Steakhouse)";
                                    upDatedSpaLINK = "https://forms.gle/VwV9xhaFEQtL8LqN8";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/new-lumiere-by-adriana-collagen-enhancing-treatment-promo-page";
                                    upDatedSpaPhone = "(754) 799-8010";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 45 minutes of Cleaning & Collagen Enhancing Treatment";
                                    upDatedDurationTwo = "- 15-minutes of Consultation"
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (954) 777-6770";
                                    treatmentSelected = "Collagen Enhancing Treatment";
                                    newSpaPhoneNumberSelected = "(954) 777-6770";
                                    insteadOfSpa = "$399";
                                    break;

                                    case "Lumiere By Adriana Body Sculpting Treatment":
                                    upDatedSpaName = "Lumiere By Adriana";
                                    upDatedSpaAddress = "2434 E Las Olas Blvd, Fort Lauderdale, FL  33301"+"<br>"+"(Next to Chima Steakhouse)";
                                    upDatedSpaLINK = "https://forms.gle/VwV9xhaFEQtL8LqN8";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/lumiere-by-adriana-body-sculpting-promo-page";
                                    upDatedSpaPhone = "(754) 799-8010";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 45 minutes of Cleaning & Body Sculpting Treatment";
                                    upDatedDurationTwo = "- 15-minutes of Consultation"
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (954) 777-6770";
                                    treatmentSelected = "Body Sculpting Treatment";
                                    newSpaPhoneNumberSelected = "(954) 777-6770";
                                    insteadOfSpa = "$399";
                                    break;
                                    
                                    case "Lumiere By Adriana Body Sculpting Treatment $69.95":
                                    upDatedSpaName = "Lumiere By Adriana";
                                    upDatedSpaAddress = "2434 E Las Olas Blvd, Fort Lauderdale, FL  33301"+"<br>"+"(Next to Chima Steakhouse)";
                                    upDatedSpaLINK = "https://forms.gle/VwV9xhaFEQtL8LqN8";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/new-lumiere-by-adriana-body-sculpting-promo-page";
                                    upDatedSpaPhone = "(754) 799-8010";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 45 minutes of Cleaning & Body Sculpting Treatment";
                                    upDatedDurationTwo = "- 15-minutes of Consultation"
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (954) 777-6770";
                                    treatmentSelected = "Body Sculpting Treatment";
                                    newSpaPhoneNumberSelected = "(954) 777-6770";
                                    insteadOfSpa = "$399";
                                    break;

                                    case "Lumiere By Adriana Body Sculpting Treatment $59.95":
                                        upDatedSpaName = "Lumiere By Adriana";
                                        upDatedSpaAddress = "2434 E Las Olas Blvd, Fort Lauderdale, FL  33301"+"<br>"+"(Next to Chima Steakhouse)";
                                        upDatedSpaLINK = "https://forms.gle/VwV9xhaFEQtL8LqN8";
                                        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/lumiereadriana-bodysculp-promofifty";
                                        upDatedSpaPhone = "(754) 799-8010";
                                        upDatedDurationTotal = "60 Minutes";
                                        upDatedDurationOne = "- 45 minutes of Cleaning & Body Sculpting Treatment";
                                        upDatedDurationTwo = "- 15-minutes of Consultation"
                                        promoPrice = "59.95";
                                        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (954) 777-6770";
                                        treatmentSelected = "Body Sculpting Treatment";
                                        newSpaPhoneNumberSelected = "(954) 777-6770";
                                        insteadOfSpa = "$399";
                                        break;

                                        case "Lumiere By Adriana Men's LED":
                                    upDatedSpaName = "Lumiere By Adriana";
                                    upDatedSpaAddress = "2434 E Las Olas Blvd, Fort Lauderdale, FL  33301"+"<br>"+"(Next to Chima Steakhouse)";
                                    upDatedSpaLINK = "https://forms.gle/VwV9xhaFEQtL8LqN8";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/lumiere-mens-led-treatment-promo-page";
                                    upDatedSpaPhone = "(754) 799-8010";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 45 minutes of LED Treatment";
                                    upDatedDurationTwo = "- 15-minutes of Consultation"
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (954) 777-6770";
                                    treatmentSelected = "Collagen Enhancing Treatment";
                                    newSpaPhoneNumberSelected = "(954) 777-6770";
                                    insteadOfSpa = "$299";
                                    break;

                                    case "Lumiere By Adriana Neck and Jawline":
                                    upDatedSpaName = "Lumiere By Adriana";
                                    upDatedSpaAddress = "2434 E Las Olas Blvd, Fort Lauderdale, FL  33301"+"<br>"+"(Next to Chima Steakhouse)";
                                    upDatedSpaLINK = "https://forms.gle/VwV9xhaFEQtL8LqN8";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/lumiere-adriana-neck-jawline-tightening";
                                    upDatedSpaPhone = "(754) 799-8010";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 45 minutes of Neck and Jawline Treatment";
                                    upDatedDurationTwo = "- 15-minutes of Consultation"
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (954) 777-6770";
                                    treatmentSelected = "Neck and Jawline Tightening Treatment";
                                    newSpaPhoneNumberSelected = "(954) 777-6770";
                                    insteadOfSpa = "$299";
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

                                    case "Colorado MedLaser LED":
                                    upDatedSpaName = "Colorado MedLaser";
                                    upDatedSpaAddress = "Dry Creek Medical Office Building,"+"<br>"+"125 Inverness Dr E, Englewood, CO 80112"+"<br>"+"(3rd floor, STE #340)";
                                    upDatedSpaLINK = "https://forms.gle/4Wk3RaTCuTQP3hhe7";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/colorado-medlaser-led-promo";
                                    upDatedSpaPhone = "(720) 358-4719";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 40-minutes Skin Tightening & LED Anti-Aging Treatment";
                                    upDatedDurationTwo = "- 20-minutes Consultation"
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (720) 960-7077";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(720) 960-7077";
                                    insteadOfSpa = "$299";
                                    break;

                                    case "Colorado MedLaser Skin Tightening":
                                    upDatedSpaName = "Colorado MedLaser";
                                    upDatedSpaAddress = "Dry Creek Medical Office Building,"+"<br>"+"125 Inverness Dr E, Englewood, CO 80112"+"<br>"+"(3rd floor, STE #340)";
                                    upDatedSpaLINK = "https://forms.gle/4Wk3RaTCuTQP3hhe7";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/colorado-medlaser-skin-tightening-promo";
                                    upDatedSpaPhone = "(720) 358-4719";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 30-minutes light Cleansing, Massage & HIFU";
                                    upDatedDurationTwo = "- 10-minutes LED Treatment & 20-minute Consultation"
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (720) 960-7077";
                                    treatmentSelected = "Skin Tightening Treatment";
                                    newSpaPhoneNumberSelected = "(720) 960-7077";
                                    insteadOfSpa = "$399";
                                    break;

                                    case "Colorado MedLaser Skin Tightening 69.95":
                                    upDatedSpaName = "Colorado MedLaser";
                                    upDatedSpaAddress = "Dry Creek Medical Office Building,"+"<br>"+"125 Inverness Dr E, Englewood, CO 80112"+"<br>"+"(3rd floor, STE #340)";
                                    upDatedSpaLINK = "https://forms.gle/4Wk3RaTCuTQP3hhe7";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/new-colorado-medlaser-skin-tightening-promo";
                                    upDatedSpaPhone = "(720) 358-4719";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 30-minutes light Cleansing, Massage & HIFU";
                                    upDatedDurationTwo = "- 10-minutes LED Treatment & 20-minute Consultation"
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (720) 960-7077";
                                    treatmentSelected = "Skin Tightening Treatment";
                                    newSpaPhoneNumberSelected = "(720) 960-7077";
                                    insteadOfSpa = "$299";
                                    break;

                                    case "Colorado MedLaser Skin Tightening 59.95":
                                    upDatedSpaName = "Colorado MedLaser";
                                    upDatedSpaAddress = "Dry Creek Medical Office Building,"+"<br>"+"125 Inverness Dr E, Englewood, CO 80112"+"<br>"+"(3rd floor, STE #340)";
                                    upDatedSpaLINK = "https://forms.gle/4Wk3RaTCuTQP3hhe7";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/colorado-medlaser-skin-tightening-new-promo";
                                    upDatedSpaPhone = "(720) 358-4719";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 30-minutes light Cleansing, Massage & HIFU";
                                    upDatedDurationTwo = "- 10-minutes LED Treatment & 20-minute Consultation"
                                    promoPrice = "59.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (720) 960-7077";
                                    treatmentSelected = "Skin Tightening Treatment";
                                    newSpaPhoneNumberSelected = "(720) 960-7077";
                                    insteadOfSpa = "$299";
                                    break;

                                    case "Colorado MedLaser Cryo Body Sculpting 69.95":
                                    upDatedSpaName = "Colorado MedLaser";
                                    upDatedSpaAddress = "Dry Creek Medical Office Building,"+"<br>"+"125 Inverness Dr E, Englewood, CO 80112"+"<br>"+"(3rd floor, STE #340)";
                                    upDatedSpaLINK = "https://forms.gle/4Wk3RaTCuTQP3hhe7";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/new-colorado-medlaser-cryo-body-sculpting";
                                    upDatedSpaPhone = "(720) 358-4719";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 30-minutes Anti-Freeze Membrane & Cryo Head";
                                    upDatedDurationTwo = "- 10-minute Massage & 20-minutes Consultation"
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (720) 960-7077";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(720) 960-7077";
                                    insteadOfSpa = "$399";
                                    break;

                                    case "Colorado MedLaser Cryo Body Sculpting":
                                    upDatedSpaName = "Colorado MedLaser";
                                    upDatedSpaAddress = "Dry Creek Medical Office Building,"+"<br>"+"125 Inverness Dr E, Englewood, CO 80112"+"<br>"+"(3rd floor, STE #340)";
                                    upDatedSpaLINK = "https://forms.gle/4Wk3RaTCuTQP3hhe7";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/colorado-medlaser-cryo-body-sculpting";
                                    upDatedSpaPhone = "(720) 358-4719";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 30-minutes Anti-Freeze Membrane & Cryo Head";
                                    upDatedDurationTwo = "- 10-minute Massage & 20-minutes Consultation"
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (720) 960-7077";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(720) 960-7077";
                                    insteadOfSpa = "$399";
                                    break;

                                    case "Donna Ella Spa LED":
                                    upDatedSpaName = "Donna Ella Spa";
                                    upDatedSpaAddress = "Galleria Mall,"+"<br>"+"5015 Westheimer Rd, Houston, TX 77056"+"<br>"+"(Main entrance, first floor next door to Cheesecake Factory)";
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

                                    case "Royal Bee Spa LED":
                                    upDatedSpaName = "Royal Bee";
                                    upDatedSpaAddress = "Katy Mills Mall,"+"<br>"+"5000 Katy Mills Cir. Katy, TX 77494"+"<br>"+"(Ground Flr. Between The Rainforest Cafe and Marshalls)";
                                    upDatedSpaLINK = "https://forms.gle/wPtz1bB63FmzDMHr8";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/royal-bee-spa-promo-page";
                                    upDatedSpaPhone = "(737) 910-4135";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 10-minute Cleansing";
                                    upDatedDurationTwo = "- 30-minutes LED Anti-aging Treatment and 20-minutes Consultation"
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (832)-715-4897";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(832)-715-4897";
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
                                    
                                    case "Rilassare Spa LED":
                                    upDatedSpaName = "Rilassare Spa";
                                    upDatedSpaAddress = "Galleria at Sunset Mall,"+"<br>"+"1300 W Sunset Rd, Unit 1237, Henderson, NV 89014"+"<br>"+"(First floor next to Forever 21)";
                                    upDatedSpaLINK = "https://forms.gle/hcJkZsBfyxRL7Brg6";
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

                                    case "Rilassare Spa FTB LED 79.95":
                                    upDatedSpaName = "Rilassare Spa";
                                    upDatedSpaAddress = "Galleria at Sunset Mall,"+"<br>"+"1300 W Sunset Rd, Unit 1237, Henderson, NV 89014"+"<br>"+"(First floor next to Forever 21)";
                                    upDatedSpaLINK = "https://forms.gle/hcJkZsBfyxRL7Brg6";
                                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/rilassare-led-promo";
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

                                    case "Esthetix St. Augustine LED":
                                    upDatedSpaName = "Esthetix Spa";
                                    upDatedSpaAddress = "163 Palencia Village Drive, St Augustine, FL 32095"+"<br>"+"(Unit 110, Near Starbucks and Cleaners)";
                                    upDatedSpaLINK = "https://forms.gle/uqWKcfmgbPZ1Ej17A";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/esthetix-st-augustine-promo-page";
                                    upDatedSpaPhone = "(904) 368-6923";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15-minute Cleansing";
                                    upDatedDurationTwo = "- 30-minutes LED Anti-aging Treatment and 15-minutes Consultation"
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (904) 342-2780";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(904) 342-2780";
                                    insteadOfSpa = "$350";
                                    break;

                                    case "Esthetix St. Augustine LED 69.95":
                                    upDatedSpaName = "Esthetix Spa";
                                    upDatedSpaAddress = "163 Palencia Village Drive, St Augustine, FL 32095"+"<br>"+"(Unit 110, Near Starbucks and Cleaners)";
                                    upDatedSpaLINK = "https://forms.gle/uqWKcfmgbPZ1Ej17A";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/new-esthetix-st-augustine-promo-page";
                                    upDatedSpaPhone = "(904) 368-6923";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15-minute Cleansing";
                                    upDatedDurationTwo = "- 30-minutes LED Anti-aging Treatment and 15-minutes Consultation"   
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (904) 342-2780";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(904) 342-2780";
                                    insteadOfSpa = "$299";
                                    break;

                                    case "Esthetix St. Augustine Men's LED":
                                    upDatedSpaName = "Esthetix Spa";
                                    upDatedSpaAddress = "163 Palencia Village Drive, St Augustine, FL 32095"+"<br>"+"(Unit 110, Near Starbucks and Cleaners)";
                                    upDatedSpaLINK = "https://forms.gle/uqWKcfmgbPZ1Ej17A";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/esthetix-st-augustine-mens-led-promo-page";
                                    upDatedSpaPhone = "(904) 368-6923";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15-minute Cleansing";
                                    upDatedDurationTwo = "- 45-minutes LED Anti-aging Treatment and Consultation"
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (904) 342-2780";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(904) 342-2780";
                                    insteadOfSpa = "$299";
                                    break;

                                    case "Esthetix St. Augustine Neck and Jawline":
                                    upDatedSpaName = "Esthetix Spa";
                                    upDatedSpaAddress = "163 Palencia Village Drive, St Augustine, FL 32095"+"<br>"+"(Unit 110, Near Starbucks and Cleaners)";
                                    upDatedSpaLINK = "https://forms.gle/uqWKcfmgbPZ1Ej17A";
                                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/esthetix-st-augustine-neck-and-jawline-treatment-page";
                                    upDatedSpaPhone = "(904) 368-6923";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15-minute Consultation";
                                    upDatedDurationTwo = "- 45-minutes Neck & Jawline Treatment"
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (904) 342-2780";
                                    treatmentSelected = "Neck and Jawline Tightening Treatment";
                                    newSpaPhoneNumberSelected = "(904) 342-2780";
                                    insteadOfSpa = "$377";
                                    break;

                                    case "Esthetix St. Augustine Reverse Turkey Neck 69.95":
                                    upDatedSpaName = "Esthetix Spa";
                                    upDatedSpaAddress = "163 Palencia Village Drive, St Augustine, FL 32095"+"<br>"+"(Unit 110, Near Starbucks and Cleaners)";
                                    upDatedSpaLINK = "https://forms.gle/uqWKcfmgbPZ1Ej17A";
                                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/esthetix-st-augustine-reverse-turkey-neck-promo";
                                    upDatedSpaPhone = "(904) 368-6923";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15-minute Consultation";
                                    upDatedDurationTwo = "- 45-minutes Reverse Turkey Neck Treatment"
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (904) 342-2780";
                                    treatmentSelected = "Reverse Turkey Neck Treatment";
                                    newSpaPhoneNumberSelected = "(904) 342-2780";
                                    insteadOfSpa = "$377";
                                    break;

                                    case "Joli Visage Spa LED":
                                    upDatedSpaName = "Joli Visage Spa";
                                    upDatedSpaAddress = "640 5th ave S, Naples, FL 34102"+"<br>"+"(Next to Aldo Gallery)";
                                    upDatedSpaLINK = "https://forms.gle/shiD2ANFHFpmizjp6";
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

                                    case "Adore Edmonton LED":
                                    upDatedSpaName = "Adore";
                                    upDatedSpaAddress = "Outlet Collection Way,"+"<br>"+"Edmonton, AB T9E 1J5, Canada"+"<br>"+"(Shopping mall, right next to entrance 4)";
                                    upDatedSpaLINK = "https://forms.gle/t5PE58hv1M3gzFbx8";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/adore-edmonton-promo-page";
                                    upDatedSpaPhone = "(587) 442-4900";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15-minute Cleansing";
                                    upDatedDurationTwo = "- 30-minutes LED Anti-aging Treatment and 15-minutes Consultation"
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (780) 890-0008";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(780) 890-0008";
                                    insteadOfSpa = "$350";
                                    break;

                                    case "Adore Edmonton Neck and Jawline 99.95":
                                    upDatedSpaName = "Adore";
                                    upDatedSpaAddress = "Outlet Collection Way,"+"<br>"+"Edmonton, AB T9E 1J5, Canada"+"<br>"+"(Shopping mall, right next to entrance 4)";
                                    upDatedSpaLINK = "https://forms.gle/t5PE58hv1M3gzFbx8";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/adore-edmonton-neck-and-jaw-line-tightening-treatment-promo";
                                    upDatedSpaPhone = "(587) 442-4900";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15-minute Consultaion";
                                    upDatedDurationTwo = "- 45-minutes Neck and Jawline Treatment"
                                    promoPrice = "99.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (780) 890-0008";
                                    treatmentSelected = "Neck and Jawline Tightening";
                                    newSpaPhoneNumberSelected = "(780) 890-0008";
                                    insteadOfSpa = "$377";
                                    break;

                                    case "Adore Edmonton Skin Tightening 99.95":
                                    upDatedSpaName = "Adore";
                                    upDatedSpaAddress = "Outlet Collection Way,"+"<br>"+"Edmonton, AB T9E 1J5, Canada"+"<br>"+"(Shopping mall, right next to entrance 4)";
                                    upDatedSpaLINK = "https://forms.gle/t5PE58hv1M3gzFbx8";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/adore-edmonton-skin-tightening-promo-page";
                                    upDatedSpaPhone = "(587) 442-4900";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15-minute Consultaion";
                                    upDatedDurationTwo = "- 45-minutes Skin Tightening Treatment"
                                    promoPrice = "99.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (780) 890-0008";
                                    treatmentSelected = "Skin Tightening";
                                    newSpaPhoneNumberSelected = "(780) 890-0008";
                                    insteadOfSpa = "$377";
                                    break;

                                    case "Beauty Essentials LED":
                                    upDatedSpaName = "Beauty Essentials";
                                    upDatedSpaAddress = "Briarwood Mall,"+"<br>"+"480 Briarwood Cir. Ann Arbor, MI 48108"+"<br>"+"(Main floor, next to Pandora)";
                                    upDatedSpaLINK = "https://forms.gle/17UVeGaXJyFPgsnG7";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/beauty-essentials-promo-page";
                                    upDatedSpaPhone = "(734) 659-0707";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15-minute Cleansing";
                                    upDatedDurationTwo = "- 30-minutes LED Anti-aging Treatment and 15-minutes Consultation"
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (734) 330-0991";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(734) 330-0991";
                                    insteadOfSpa = "$350";
                                    break;

                                    case "Beauty Essentials LED Skin Tightening":
                                    upDatedSpaName = "Beauty Essentials";
                                    upDatedSpaAddress = "Briarwood Mall,"+"<br>"+"480 Briarwood Cir. Ann Arbor, MI 48108"+"<br>"+"(Main floor, next to Pandora)";
                                    upDatedSpaLINK = "https://forms.gle/17UVeGaXJyFPgsnG7";
                                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/beauty-essentials-led-skin-tightening-promo";
                                    upDatedSpaPhone = "(734) 659-0707";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15-minute Cleansing";
                                    upDatedDurationTwo = "- 30-minutes LED Skin Tightening Treatment and 15-minutes Consultation"
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (734) 330-0991";
                                    treatmentSelected = "Skin Tightening";
                                    newSpaPhoneNumberSelected = "(734) 330-0991";
                                    insteadOfSpa = "$377";
                                    break;

                                    case "Beauty Essentials Neck and Jawline":
                                    upDatedSpaName = "Beauty Essentials";
                                    upDatedSpaAddress = "Briarwood Mall,"+"<br>"+"480 Briarwood Cir. Ann Arbor, MI 48108"+"<br>"+"(Main floor, next to Pandora)";
                                    upDatedSpaLINK = "https://forms.gle/17UVeGaXJyFPgsnG7";
                                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/beauty-essentials-neck-and-jawline-treatment-page";
                                    upDatedSpaPhone = "(734) 659-0707";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15-minute Cleansing";
                                    upDatedDurationTwo = "- 30-minutes Neck and Jawline Tightening Treatment and 15-minutes Consultation"
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (734) 330-0991";
                                    treatmentSelected = "Neck and Jawline Tightening Treatment";
                                    newSpaPhoneNumberSelected = "(734) 330-0991";
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

                                    case "ISHA Body Sculpting":
                                        upDatedSpaName = "ISHA Beauty & Wellness";
                                        upDatedSpaAddress = "31 Almeria Ave, Coral Gables, FL 33134"+"<br>"+"(Douglas & Almeria Ave, Next to Bellami hair salon)";
                                        upDatedSpaLINK = "https://forms.gle/anBN3G7GuuKCydG1A";
                                        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/isha-beauty-amp-wellness-body-contouring-promo";
                                        upDatedSpaPhone = "(786) 744-5319";
                                        upDatedDurationTotal = "60 Minutes";
                                        upDatedDurationOne = "- 20-minute Cleansing and Massage";
                                        upDatedDurationTwo = "- 25-minutes LED Treatment and 15-minutes Consultation"
                                        promoPrice = "79.95";
                                        upDatedActualSpaPhone = "Can't find our spa? Give us a call at 305-603-7536";
                                        treatmentSelected = "Body Sculpting Treatment";
                                        newSpaPhoneNumberSelected = "305-603-7536";
                                        insteadOfSpa = "$399";
                                        break;

                                    case "Y and G Boutique LED":
                                    upDatedSpaName = "Y and G Boutique Spa";
                                    upDatedSpaAddress = "9625 Brighton Way Beverly Hills, CA 90210"+"<br>"+"(Right across Madison Beverly Hills)";
                                    upDatedSpaLINK = "https://forms.gle/bVZE7GS3Zbz8qsoZ9";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/y-amp-g-boutique-promo-page";
                                    upDatedSpaPhone = "(424) 423-0151";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15-minute Cleansing";
                                    upDatedDurationTwo = "- 30-minutes LED Anti-aging Treatment and 15-minutes Consultation"
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (424) 335-0070";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(424) 335-0070";
                                    insteadOfSpa = "$350";
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

                                    case "Introstem Spokane LED":
                                    upDatedSpaName = "Introstem Spa";
                                    upDatedSpaAddress = "NorthTown Mall"+"<br>"+"4750 N Division St, Spokane, WA. 99207"+"<br>"+"(First Floor, in front of Torrid)";
                                    upDatedSpaLINK = "https://forms.gle/Szqy67sxVYiWX3sQA";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/introstem-spokane-promo-page";
                                    upDatedSpaPhone = "(509) 606-6110";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 10-minute Cleansing";
                                    upDatedDurationTwo = "- 35-minutes LED Anti-aging Treatment and 15-minutes Consultation"
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (509) 824-9926";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(509) 824-9926";
                                    insteadOfSpa = "$350";
                                    break;

                                    case "Introstem Spokane LED 69.95":
                                    upDatedSpaName = "Introstem Spa";
                                    upDatedSpaAddress = "NorthTown Mall"+"<br>"+"4750 N Division St, Spokane, WA. 99207"+"<br>"+"(First Floor, in front of Torrid)";
                                    upDatedSpaLINK = "https://forms.gle/Szqy67sxVYiWX3sQA";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/new-introstem-spokane-led-promo-page";
                                    upDatedSpaPhone = "(509) 606-6110";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 10-minute Cleansing";
                                    upDatedDurationTwo = "- 35-minutes LED Anti-aging Treatment and 15-minutes Consultation"
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (509) 824-9926";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(509) 824-9926";
                                    insteadOfSpa = "$377";
                                    break;

                                    case "Introstem Spokane Neck and Jawline":
                                    upDatedSpaName = "Introstem Spa";
                                    upDatedSpaAddress = "NorthTown Mall"+"<br>"+"4750 N Division St, Spokane, WA. 99207"+"<br>"+"(First Floor, in front of Torrid)";
                                    upDatedSpaLINK = "https://forms.gle/Szqy67sxVYiWX3sQA";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/introstem-spokane-neck-and-jaw-line-tightening-treatment-promo";
                                    upDatedSpaPhone = "(509) 606-6110";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15-minute Consultation";
                                    upDatedDurationTwo = "- 45-minutes Neck and Jawline Treatment and Consultation"
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (509) 824-9926";
                                    treatmentSelected = "Neck and Jawline Tightening Treatment";
                                    newSpaPhoneNumberSelected = "(509) 824-9926";
                                    insteadOfSpa = "$377";
                                    break;

                                    case "Lavelier Spokane LED":
                                    upDatedSpaName = "Lavelier";
                                    upDatedSpaAddress = "Spokane Valley Mall,"+"<br>"+"14700 E Indiana Ave, Spokane, WA. 99216"+"<br>"+"(Unit 1150, First Floor, next to Victoria Secret)";
                                    upDatedSpaLINK = "https://forms.gle/4g8M9UygaSjWZVkd9";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/lavelier-spokane-promo-page";
                                    upDatedSpaPhone = "(509) 508-4214";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 10-minute Cleansing";
                                    upDatedDurationTwo = "- 35-minutes LED Anti-aging Treatment and 15-minutes Consultation"
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (516) 369-2994";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(516) 369-2994";
                                    insteadOfSpa = "$350";
                                    break;

                                    case "Lavelier Spokane FTB LED 79.95":
                                    upDatedSpaName = "Lavelier";
                                    upDatedSpaAddress = "Spokane Valley Mall,"+"<br>"+"14700 E Indiana Ave, Spokane, WA. 99216"+"<br>"+"(Unit 1150, First Floor, next to Victoria Secret)";
                                    upDatedSpaLINK = "https://forms.gle/4g8M9UygaSjWZVkd9";
                                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/lavelier-spokane-led-promo";
                                    upDatedSpaPhone = "(509) 508-4214";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15-minute Cleansing";
                                    upDatedDurationTwo = "- 30-minutes LED Anti-aging Treatment and 15-minutes Consultation"
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (516) 369-2994";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(516) 369-2994";
                                    insteadOfSpa = "$350";
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

                                    case "Introstem Alderwood LED":
                                    upDatedSpaName = "Introstem Spa";
                                    upDatedSpaAddress = "Alderwood Mall,"+"<br>"+"3000 184th St SW, Lynnwood, WA. 98037"+"<br>"+"(Space #976, OUTSIDE Section between Purple and Lovesac, right outside the entrance of Sephora)"+"<br>"+"(Nearest Landmark Apple store or Sephora)"+"<br>"+"NOTE: You may also use mall directions";
                                    upDatedSpaLINK = "https://forms.gle/Xd7zenHToR2ga51c7";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/introstem-alderwood-promo-page";
                                    upDatedSpaPhone = "(425) 546-0417";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15-minute Cleansing";
                                    upDatedDurationTwo = "- 30-minutes LED Anti-aging Treatment and 15-minutes Consultation"
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (509) 986-3222";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(509) 986-3222";
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

                                    case "Royal Bee Rosemont LED":
                                    upDatedSpaName = "Royal Bee";
                                    upDatedSpaAddress = "5220 Fashion Outlet Way"+"<br>"+"Rosemont, IL. 60118"+"<br>"+"(First floor, in front of Bath & Body works)";
                                    upDatedSpaLINK = "https://forms.gle/PrdnpxyQLnMTFwFE6";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/royal-bee-rosemont-promo-page";
                                    upDatedSpaPhone = "(847) 585-2401";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15-minute Light Cleansing";
                                    upDatedDurationTwo = "- 30-minutes LED Anti-aging Treatment and 15 minutes Consultation"
                                    promoPrice = "99.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (919) 420-4647";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(919) 420-4647";
                                    insteadOfSpa = "$350";
                                    break;

                                    case "Royal Bee Rosemont LED 59":
                                    upDatedSpaName = "Royal Bee";
                                    upDatedSpaAddress = "5220 Fashion Outlet Way"+"<br>"+"Rosemont, IL. 60118"+"<br>"+"(First floor, in front of Bath & Body works)";
                                    upDatedSpaLINK = "https://forms.gle/PrdnpxyQLnMTFwFE6";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/royal-bee-rosemont-new-promo-page";
                                    upDatedSpaPhone = "(847) 230-7546";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15-minute Light Cleansing";
                                    upDatedDurationTwo = "- 30-minutes LED Anti-aging Treatment and 15 minutes Consultation"
                                    promoPrice = "59.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (919) 420-4647";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(919) 420-4647";
                                    insteadOfSpa = "$299";
                                    break;

                                    case "Introstem Carlsbad Collagen Enhancing Treatment":
                                    upDatedSpaName = "Introstem Spa";
                                    upDatedSpaAddress = "The Shoppes at Carlsbad,"+"<br>"+"2525 El Camino real Carlsbad, CA. 92008"+"<br>"+"(Second floor, front of Macy's Women)";
                                    upDatedSpaLINK = "https://forms.gle/WuKSMaAcUSzaoATW8";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/introstem-carlsbad-led-promo-page";
                                    upDatedSpaPhone = "(760) 621-0800";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15-minute Cleansing";
                                    upDatedDurationTwo = "- 45-minutes LED Anti-aging Treatment and Consultation"
                                    promoPrice = "59.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (760) 421-4454";
                                    treatmentSelected = "Collagen Enhancing";
                                    newSpaPhoneNumberSelected = "(760) 421-4454";
                                    insteadOfSpa = "$299";
                                    break;

                                    case "Introstem Carlsbad Body Sculpting":
                                    upDatedSpaName = "Introstem Spa";
                                    upDatedSpaAddress = "The Shoppes at Carlsbad,"+"<br>"+"2525 El Camino real Carlsbad, CA. 92008"+"<br>"+"(Second floor, front of Macy's Women)";
                                    upDatedSpaLINK = "https://forms.gle/WuKSMaAcUSzaoATW8";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/introstem-carlsbad-body-sculpting-promo-page";
                                    upDatedSpaPhone = "(760) 621-0800";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15-minute Consultation";
                                    upDatedDurationTwo = "- 45-minutes Cleaning & Body Sculpting Treatment"
                                    promoPrice = "59.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (760) 421-4454";
                                    treatmentSelected = "Body Sculpting";
                                    newSpaPhoneNumberSelected = "(760) 421-4454";
                                    insteadOfSpa = "$399";
                                    break;

                                    case "Introstem Carlsbad Men's LED Treatment":
                                    upDatedSpaName = "Introstem Spa";
                                    upDatedSpaAddress = "The Shoppes at Carlsbad,"+"<br>"+"2525 El Camino real Carlsbad, CA. 92008"+"<br>"+"(Second floor, front of Macy's Women)";
                                    upDatedSpaLINK = "https://forms.gle/WuKSMaAcUSzaoATW8";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/introstem-carlsbad-mens-led-treatment-promo-page ";
                                    upDatedSpaPhone = "(760) 621-0800";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15-minute Cleansing";
                                    upDatedDurationTwo = "- 45-minutes LED Anti-aging Treatment and Consultation"
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (760) 421-4454";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(760) 421-4454";
                                    insteadOfSpa = "$299";
                                    break;

                                    case "Introstem Carlsbad Neck and Jawline 59.95":
                                    upDatedSpaName = "Introstem Spa";
                                    upDatedSpaAddress = "The Shoppes at Carlsbad,"+"<br>"+"2525 El Camino real Carlsbad, CA. 92008"+"<br>"+"(Second floor, front of Macy's Women)";
                                    upDatedSpaLINK = "https://forms.gle/WuKSMaAcUSzaoATW8";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/introstem-carlsbad-neck-and-jaw-line-tightening-treatment-promo";
                                    upDatedSpaPhone = "(760) 621-0800";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15-minute Cleansing";
                                    upDatedDurationTwo = "- 45-minutes Neck and Jawline Treatment and Consultation"
                                    promoPrice = "59.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (760) 421-4454";
                                    treatmentSelected = "Neck and Jawline Tightening Treatment";
                                    newSpaPhoneNumberSelected = "(760) 421-4454";
                                    insteadOfSpa = "$377";
                                    break;

                                    case "Introstem Carlsbad Body Lipo 69.95":
                                    upDatedSpaName = "Introstem Spa";
                                    upDatedSpaAddress = "The Shoppes at Carlsbad,"+"<br>"+"2525 El Camino real Carlsbad, CA. 92008"+"<br>"+"(Second floor, front of Macy's Women)";
                                    upDatedSpaLINK = "https://forms.gle/WuKSMaAcUSzaoATW8";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/introstem-carlsbad-lipo-cavitation-promo-page";
                                    upDatedSpaPhone = "(760) 621-0800";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15-minute Consultation";
                                    upDatedDurationTwo = "- 45-minutes Body Cleaning and Body Lipo Cavitation Treatment"
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (760) 421-4454";
                                    treatmentSelected = "Body Lipo Cavitation Treatment";
                                    newSpaPhoneNumberSelected = "(760) 421-4454";
                                    insteadOfSpa = "$399";
                                    break;

                                    case "FTB Introstem Carlsbad Body Lipo 69.95":
                                    upDatedSpaName = "Introstem Spa";
                                    upDatedSpaAddress = "The Shoppes at Carlsbad,"+"<br>"+"2525 El Camino real Carlsbad, CA. 92008"+"<br>"+"(Second floor, front of Macy's Women)";
                                    upDatedSpaLINK = "https://forms.gle/WuKSMaAcUSzaoATW8";
                                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/introstem-carlsbad-body-lipo-cavitation-promo";
                                    upDatedSpaPhone = "(760) 621-0800";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15-minute Consultation";
                                    upDatedDurationTwo = "- 45-minutes Body Cleaning and Body Lipo Cavitation Treatment"
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (760) 421-4454";
                                    treatmentSelected = "Body Lipo Cavitation Treatment";
                                    newSpaPhoneNumberSelected = "(760) 421-4454";
                                    insteadOfSpa = "$399";
                                    break;

                                    case "Introstem Carlsbad Reverse Turkey Neck Treatment 59.95":
                                    upDatedSpaName = "Introstem Spa";
                                    upDatedSpaAddress = "The Shoppes at Carlsbad,"+"<br>"+"2525 El Camino real Carlsbad, CA. 92008"+"<br>"+"(Second floor, front of Macy's Women)";
                                    upDatedSpaLINK = "https://forms.gle/WuKSMaAcUSzaoATW8";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/introstem-carlsbad-reverse-turkey-neck-treatment-promo ";
                                    upDatedSpaPhone = "(760) 621-0800";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15-minute Consultation";
                                    upDatedDurationTwo = "- 45-minutes Reverse Turkey Neck Treatment"
                                    promoPrice = "59.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (760) 421-4454";
                                    treatmentSelected = "Reverse Turkey Neck Treatment";
                                    newSpaPhoneNumberSelected = "(760) 421-4454";
                                    insteadOfSpa = "$299";
                                    break;

                                    case "Introstem Carlsbad HIFU 69.95":
                                    upDatedSpaName = "Introstem Spa";
                                    upDatedSpaAddress = "The Shoppes at Carlsbad,"+"<br>"+"2525 El Camino real Carlsbad, CA. 92008"+"<br>"+"(Second floor, front of Macy's Women)";
                                    upDatedSpaLINK = "https://forms.gle/WuKSMaAcUSzaoATW8";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/introstem-carlsbad-hifu-promo-page";
                                    upDatedSpaPhone = "(760) 621-0800";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15-minute light cleansing";
                                    upDatedDurationTwo = "- 45-minutes HIFU Anti-Aging and Consultation"
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (760) 421-4454";
                                    treatmentSelected = "HIFU Treatment";
                                    newSpaPhoneNumberSelected = "(760) 421-4454";
                                    insteadOfSpa = "$377";
                                    break;

                                    case "Introstem FTB LED 59.95":
                                    upDatedSpaName = "Introstem Spa";
                                    upDatedSpaAddress = "The Shoppes at Carlsbad,"+"<br>"+"2525 El Camino real Carlsbad, CA. 92008"+"<br>"+"(Second floor, front of Macy's Women)";
                                    upDatedSpaLINK = "https://forms.gle/WuKSMaAcUSzaoATW8";
                                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/introstem-carlsbad-led-promo";
                                    upDatedSpaPhone = "(760) 621-0800";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15-minute Cleansing";
                                    upDatedDurationTwo = "- 30-minutes LED Anti-aging Treatment and 15 minutes Consultation"
                                    promoPrice = "59.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (760) 421-4454";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(760) 421-4454";
                                    insteadOfSpa = "$299";
                                    break;

                                    case "Introstem Carlsbad FTB Men's LED Treatment 79.95":
                                    upDatedSpaName = "Introstem Spa";
                                    upDatedSpaAddress = "The Shoppes at Carlsbad,"+"<br>"+"2525 El Camino real Carlsbad, CA. 92008"+"<br>"+"(Second floor, front of Macy's Women)";
                                    upDatedSpaLINK = "https://forms.gle/WuKSMaAcUSzaoATW8";
                                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/introstem-carlsbad-mens-led-promo";
                                    upDatedSpaPhone = "(760) 621-0800";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15-minute Cleansing";
                                    upDatedDurationTwo = "- 45-minutes Men's LED Anti-aging Treatment and Consultation"
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (760) 421-4454";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(760) 421-4454";
                                    insteadOfSpa = "$299";
                                    break;

                                    case "Lavelier Longview LED":
                                    upDatedSpaName = "Lavelier";
                                    upDatedSpaAddress = "Longview Mall,"+"<br>"+"3500 McCann Rd, Longview, TX 75605"+"<br>"+"(STE F01, First floor next to JCPenney)";
                                    upDatedSpaLINK = "https://forms.gle/R9fcAUEfE5MJciwz5";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/lavelier-longview-promo-page";
                                    upDatedSpaPhone = "(430) 288-5519";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 10-minute Cleansing";
                                    upDatedDurationTwo = "- 45-minutes LED Anti-aging Treatment and Consultation"
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (928) 399-9242";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(928) 399-9242";
                                    insteadOfSpa = "$350";
                                    break;

                                    case "Lavelier Longview Neck and Jawline":
                                    upDatedSpaName = "Lavelier";
                                    upDatedSpaAddress = "Longview Mall,"+"<br>"+"3500 McCann Rd, Longview, TX 75605"+"<br>"+"(STE F01, First floor next to JCPenney)";
                                    upDatedSpaLINK = "https://forms.gle/R9fcAUEfE5MJciwz5";
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

                                    case "TKO Beauty Tech LED":
                                    upDatedSpaName = "TKO Beauty Tech";
                                    upDatedSpaAddress = "Pleasant Grove Plaza,"+"<br>"+"1090 Pleasant Grove Blvd. Roseville, CA 95678"+"<br>"+"(Suite 140, Two stores next to Safeway)";
                                    upDatedSpaLINK = "https://forms.gle/1Xyfqm9shmPhU9i28";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/tko-beauty-tech-promo-page";
                                    upDatedSpaPhone = "(916) 249-8700";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15-minute Cleansing";
                                    upDatedDurationTwo = "- 30-minutes LED Anti-aging Treatment and 15 minutes Consultation"
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (916) 781-0167";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(916) 781-0167";
                                    insteadOfSpa = "$377";
                                    break;

                                    case "TKO Beauty Tech Reverse Turkey Neck Treatment 79.95":
                                    upDatedSpaName = "TKO Beauty Tech";
                                    upDatedSpaAddress = "Pleasant Grove Plaza,"+"<br>"+"1090 Pleasant Grove Blvd. Roseville, CA 95678"+"<br>"+"(Suite 140, Two stores next to Safeway)";
                                    upDatedSpaLINK = "https://forms.gle/1Xyfqm9shmPhU9i28";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/tko-beauty-tech-reverse-turkey-neck-tightening-treatment-promo";
                                    upDatedSpaPhone = "(916) 249-8700";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15-minute Consultation";
                                    upDatedDurationTwo = "- 45-minutes Reverse Turkey Neck Treatment"
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (916) 781-0167";
                                    treatmentSelected = "Reverse Turkey Neck Treatment";
                                    newSpaPhoneNumberSelected = "(916) 781-0167";
                                    insteadOfSpa = "$377";
                                    break;

                                    case "TKO Beauty Tech LED FTB 79.95":
                                    upDatedSpaName = "TKO Beauty Tech";
                                    upDatedSpaAddress = "Pleasant Grove Plaza,"+"<br>"+"1090 Pleasant Grove Blvd. Roseville, CA 95678"+"<br>"+"(Suite 140, Two stores next to Safeway)";
                                    upDatedSpaLINK = "https://forms.gle/1Xyfqm9shmPhU9i28";
                                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/tko-beauty-tech-led-promo";
                                    upDatedSpaPhone = "(916) 249-8700";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15-minute Cleansing";
                                    upDatedDurationTwo = "- 30-minutes LED Anti-aging Treatment and 15 minutes Consultation"
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (916) 781-0167";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(916) 781-0167";
                                    insteadOfSpa = "$377";
                                    break;

                                    case "Bee and Co Olympia LED":
                                    upDatedSpaName = "Bee and Co";
                                    upDatedSpaAddress = "Capital Mall,"+"<br>"+"625 Black Lake Blvd SW. Olympia, WA 98502"+"<br>"+"(Unit 233, in front of Victoria's Secret)";
                                    upDatedSpaLINK = "https://forms.gle/JhrhG3XiisY9JfW38";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/bee-and-co-olympia-promo-page";
                                    upDatedSpaPhone = "(253) 528-4765";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15-minute Cleansing";
                                    upDatedDurationTwo = "- 35-minutes LED Anti-aging Treatment and Consultation"
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (702) 210-2937";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(702) 210-2937";
                                    insteadOfSpa = "$350";
                                    break;

                                    case "The Glow Med Spa Collagen Enhancing Treatment":
                                    upDatedSpaName = "The Glow Med Spa";
                                    upDatedSpaAddress = "937 S Coast Hwy 101, Encinitas, CA 92024"+"<br>"+"(at the plaza next to the Donuts Place & F45 fitness)";
                                    upDatedSpaLINK = "https://forms.gle/u9CoVLbPmLxcHUNm7";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/the-glow-med-spa-promo-page";
                                    upDatedSpaPhone = "(760) 683-2256";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15-minute Cleansing";
                                    upDatedDurationTwo = "- 45-minutes Collagen Enhancing Treatment and Consultation"
                                    promoPrice = "59.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (760) 452-6073";
                                    treatmentSelected = "Collagen Enhancing";
                                    newSpaPhoneNumberSelected = "(760) 452-6073";
                                    insteadOfSpa = "$299";
                                    break;

                                    case "The Glow Med Spa Body Sculpting":
                                    upDatedSpaName = "The Glow Med Spa";
                                    upDatedSpaAddress = "937 S Coast Hwy 101, Encinitas, CA 92024"+"<br>"+"(at the plaza next to the Donuts Place & F45 fitness)";
                                    upDatedSpaLINK = "https://forms.gle/u9CoVLbPmLxcHUNm7";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/the-glow-med-spa-body-sculpting-promo-page";
                                    upDatedSpaPhone = "(760) 683-2256";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15-minute Consultation";
                                    upDatedDurationTwo = "- 45-minutes Body Sculpting Treatment"
                                    promoPrice = "59.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (760) 452-6073";
                                    treatmentSelected = "Body Sculpting";
                                    newSpaPhoneNumberSelected = "(760) 452-6073";
                                    insteadOfSpa = "$399";
                                    break;

                                    case "The Glow Med Spa Men's LED":
                                    upDatedSpaName = "The Glow Med Spa";
                                    upDatedSpaAddress = "937 S Coast Hwy 101, Encinitas, CA 92024"+"<br>"+"(at the plaza next to the Donuts Place & F45 fitness)";
                                    upDatedSpaLINK = "https://forms.gle/u9CoVLbPmLxcHUNm7";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/the-glow-med-spa-mens-led-treatment-promo-page ";
                                    upDatedSpaPhone = "(760) 683-2256";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15-minute Cleansing";
                                    upDatedDurationTwo = "- 45-minutes LED Treatment and Consultation"
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (760) 452-6073";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(760) 452-6073";
                                    insteadOfSpa = "$299";
                                    break;

                                    case "The Glow Med Spa Neck and Jawline 59.95":
                                    upDatedSpaName = "The Glow Med Spa";
                                    upDatedSpaAddress = "937 S Coast Hwy 101, Encinitas, CA 92024"+"<br>"+"(at the plaza next to the Donuts Place & F45 fitness)";
                                    upDatedSpaLINK = "https://forms.gle/u9CoVLbPmLxcHUNm7";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/the-glow-neck-and-jaw-line-tightening-treatment-promo";
                                    upDatedSpaPhone = "(760) 683-2256";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15-minute Cleansing";
                                    upDatedDurationTwo = "- 45-minutes Neck and Jawline Treatment and Consultation"
                                    promoPrice = "59.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (760) 452-6073";
                                    treatmentSelected = "Neck and Jawline Tightening Treatment";
                                    newSpaPhoneNumberSelected = "(760) 452-6073";
                                    insteadOfSpa = "$377";
                                    break;

                                    case "The Glow Med Spa Body Lipo 69.95":
                                    upDatedSpaName = "The Glow Med Spa";
                                    upDatedSpaAddress = "937 S Coast Hwy 101, Encinitas, CA 92024"+"<br>"+"(at the plaza next to the Donuts Place & F45 fitness)";
                                    upDatedSpaLINK = "https://forms.gle/u9CoVLbPmLxcHUNm7";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/the-glow-med-spa-lipo-cavitation-promo-page";
                                    upDatedSpaPhone = "(760) 683-2256";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15-minute Consultation";
                                    upDatedDurationTwo = "- 45-minutes Body Cleaning and Body Lipo Cavitation Treatment"
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (760) 452-6073";
                                    treatmentSelected = "Body Lipo Cavitation Treatment";
                                    newSpaPhoneNumberSelected = "(760) 452-6073";
                                    insteadOfSpa = "$399";
                                    break;

                                    case "FTB The Glow Med Spa Body Lipo 69.95":
                                    upDatedSpaName = "The Glow Med Spa";
                                    upDatedSpaAddress = "937 S Coast Hwy 101, Encinitas, CA 92024"+"<br>"+"(at the plaza next to the Donuts Place & F45 fitness)";
                                    upDatedSpaLINK = "https://forms.gle/u9CoVLbPmLxcHUNm7";
                                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/the-glow-body-lipo-cavitation-promo";
                                    upDatedSpaPhone = "(760) 683-2256";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15-minute Consultation";
                                    upDatedDurationTwo = "- 45-minutes Body Cleaning and Body Lipo Cavitation Treatment"
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (760) 452-6073";
                                    treatmentSelected = "Body Lipo Cavitation Treatment";
                                    newSpaPhoneNumberSelected = "(760) 452-6073";
                                    insteadOfSpa = "$399";
                                    break;

                                    case "The Glow Med Spa HIFU 69.95":
                                    upDatedSpaName = "The Glow Med Spa";
                                    upDatedSpaAddress = "937 S Coast Hwy 101, Encinitas, CA 92024"+"<br>"+"(at the plaza next to the Donuts Place & F45 fitness)";
                                    upDatedSpaLINK = "https://forms.gle/u9CoVLbPmLxcHUNm7";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/the-glow-med-spa-hifu-promo-page";
                                    upDatedSpaPhone = "(760) 683-2256";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15-minute light cleansing";
                                    upDatedDurationTwo = "- 45-minutes HIFU Treatment and Consultation"
                                    promoPrice = "69.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (760) 452-6073";
                                    treatmentSelected = "HIFU Treatment";
                                    newSpaPhoneNumberSelected = "(760) 452-6073";
                                    insteadOfSpa = "$377";
                                    break;

                                    case "The Glow Med Spa FTB LED 59.95":
                                    upDatedSpaName = "The Glow Med Spa";
                                    upDatedSpaAddress = "937 S Coast Hwy 101, Encinitas, CA 92024"+"<br>"+"(at the plaza next to the Donuts Place & F45 fitness)";
                                    upDatedSpaLINK = "https://forms.gle/u9CoVLbPmLxcHUNm7";
                                    upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/the-glow-med-spa-led-promo";
                                    upDatedSpaPhone = "(760) 683-2256";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15-minute Cleansing";
                                    upDatedDurationTwo = "- 30-minutes LED Treatment and 15 minutes Consultation"
                                    promoPrice = "59.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (760) 452-6073";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(760) 452-6073";
                                    insteadOfSpa = "$299";
                                    break;

                                    case "D'or24k Prestige Spa LED":
                                        upDatedSpaName = "D'or24k Prestige Spa";
                                        upDatedSpaAddress = "Franklin Park Mall,"+"<br>"+"5001 Monroe St, Toledo, OH 43623"+"<br>"+"(first floor, across Victoria's secret)";
                                        upDatedSpaLINK = "https://forms.gle/o2S43wbLekVFC81x9";
                                        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/d-or24k-prestige-promo-page";
                                        upDatedSpaPhone = "(567) 298-4583";
                                        upDatedDurationTotal = "45 Minutes";
                                        upDatedDurationOne = "- 15-minute Consultation";
                                        upDatedDurationTwo = "- 30-minutes LED Anti-Aging Treatment"
                                        promoPrice = "79.95";
                                        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (971) 380-9085";
                                        treatmentSelected = "LED Treatment";
                                        newSpaPhoneNumberSelected = "(971) 380-9085";
                                        insteadOfSpa = "$350";
                                        break;

                                        case "D'or24k Prestige Spa LED 69.95":
                                        upDatedSpaName = "D'or24k Prestige Spa";
                                        upDatedSpaAddress = "Franklin Park Mall,"+"<br>"+"5001 Monroe St, Toledo, OH 43623"+"<br>"+"(first floor, across Victoria's secret)";
                                        upDatedSpaLINK = "https://forms.gle/o2S43wbLekVFC81x9";
                                        upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/dor24k-prestige-led-promo";
                                        upDatedSpaPhone = "(567) 298-4583";
                                        upDatedDurationTotal = "45 Minutes";
                                        upDatedDurationOne = "- 15-minute Consultation";
                                        upDatedDurationTwo = "- 30-minutes LED Anti-Aging Treatment"
                                        promoPrice = "69.95";
                                        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (971) 380-9085";
                                        treatmentSelected = "LED Treatment";
                                        newSpaPhoneNumberSelected = "(971) 380-9085";
                                        insteadOfSpa = "$377";
                                        break;
                                    
                                        case "Sthetics Med Spa LED":
                                        upDatedSpaName = "Sthetics Med Spa";
                                        upDatedSpaAddress = "450 A St. San Diego, CA 92101"+"<br>"+"(4th Floor, Ste 400, just next to the Paul Mitchell School)";
                                        upDatedSpaLINK = "https://forms.gle/FyXERa9QLfAfDbEA6";
                                        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/sthetics-med-spa-promo-page";
                                        upDatedSpaPhone = "(619) 983-0069";
                                        upDatedDurationTotal = "60 Minutes";
                                        upDatedDurationOne = "- 10-minute Light Cleansing";
                                        upDatedDurationTwo = "- 35-minutes LED Anti-Aging Treatment and 15 minutes Consultation"
                                        promoPrice = "59.95";
                                        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (619) 379-7301";
                                        treatmentSelected = "LED Treatment";
                                        newSpaPhoneNumberSelected = "(619) 379-7301";
                                        insteadOfSpa = "$299";
                                        break;

                                        case "Sthetics Med Spa Body Sculpting":
                                        upDatedSpaName = "Sthetics Med Spa";
                                        upDatedSpaAddress = "450 A St. San Diego, CA 92101"+"<br>"+"(4th Floor, Ste 400, just next to the Paul Mitchell School)";
                                        upDatedSpaLINK = "https://forms.gle/FyXERa9QLfAfDbEA6";
                                        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/sthetics-med-spa-body-sculpting-promo-page";
                                        upDatedSpaPhone = "(619) 983-0069";
                                        upDatedDurationTotal = "60 Minutes";
                                        upDatedDurationOne = "- 15-minutes of Consultation";
                                        upDatedDurationTwo = "- 45-minutes of the Body Sculpting Treatment"
                                        promoPrice = "59.95";
                                        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (619) 379-7301";
                                        treatmentSelected = "RF Body Sculpting";
                                        newSpaPhoneNumberSelected = "(619) 379-7301";
                                        insteadOfSpa = "$299";
                                        break;

                                        case "Sthetics Med Spa Men's LED":
                                        upDatedSpaName = "Sthetics Med Spa";
                                        upDatedSpaAddress = "450 A St. San Diego, CA 92101"+"<br>"+"(4th Floor, Ste 400, just next to the Paul Mitchell School)";
                                        upDatedSpaLINK = "https://forms.gle/FyXERa9QLfAfDbEA6";
                                        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/sthetics-med-spa-mens-led-treatment-promo-page";
                                        upDatedSpaPhone = "(619) 983-0069";
                                        upDatedDurationTotal = "60 Minutes";
                                        upDatedDurationOne = "- 10-minute Light Cleansing";
                                        upDatedDurationTwo = "- 35-minutes LED Anti-Aging Treatment and 15 minutes Consultation"
                                        promoPrice = "79.95";
                                        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (619) 379-7301";
                                        treatmentSelected = "LED Treatment";
                                        newSpaPhoneNumberSelected = "(619) 379-7301";
                                        insteadOfSpa = "$299";
                                        break;

                                        case "Sthetics Med Spa Neck and Jawline":
                                        upDatedSpaName = "Sthetics Med Spa";
                                        upDatedSpaAddress = "450 A St. San Diego, CA 92101"+"<br>"+"(4th Floor, Ste 400, just next to the Paul Mitchell School)";
                                        upDatedSpaLINK = "https://forms.gle/FyXERa9QLfAfDbEA6";
                                        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/sthetics-med-spa-neck-and-jaw-line-tightening-treatment-promo ";
                                        upDatedSpaPhone = "(619) 983-0069";
                                        upDatedDurationTotal = "60 Minutes";
                                        upDatedDurationOne = "- 10-minute Light Cleansing";
                                        upDatedDurationTwo = "- 35-minutes Neck and Jawline Treatment and 15 minutes Consultation"
                                        promoPrice = "69.95";
                                        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (619) 379-7301";
                                        treatmentSelected = "Neck and Jawline Tightening Treatment";
                                        newSpaPhoneNumberSelected = "(619) 379-7301";
                                        insteadOfSpa = "$377";
                                        break;

                                        case "Sthetics Med Spa Body Lipo $69.95":
                                        upDatedSpaName = "Sthetics Med Spa";
                                        upDatedSpaAddress = "450 A St. San Diego, CA 92101"+"<br>"+"(4th Floor, Ste 400, just next to the Paul Mitchell School)";
                                        upDatedSpaLINK = "https://forms.gle/FyXERa9QLfAfDbEA6";
                                        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/sthetics-med-spa-body-lipo-cavitation-promo-page";
                                        upDatedSpaPhone = "(619) 983-0069";
                                        upDatedDurationTotal = "60 Minutes";
                                        upDatedDurationOne = "- 15-minutes of Consultation";
                                        upDatedDurationTwo = "- 45-minutes of the Body Lipo Cavitation Treatment"
                                        promoPrice = "69.95";
                                        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (619) 379-7301";
                                        treatmentSelected = "Body Lipo Cavitation";
                                        newSpaPhoneNumberSelected = "(619) 379-7301";
                                        insteadOfSpa = "$399";
                                        break;

                                        case "FTB Sthetics Med Spa Body Lipo $69.95":
                                        upDatedSpaName = "Sthetics Med Spa";
                                        upDatedSpaAddress = "450 A St. San Diego, CA 92101"+"<br>"+"(4th Floor, Ste 400, just next to the Paul Mitchell School)";
                                        upDatedSpaLINK = "https://forms.gle/FyXERa9QLfAfDbEA6";
                                        upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/sthetics-med-spa-body-lipo-cavitation-promo";
                                        upDatedSpaPhone = "(619) 983-0069";
                                        upDatedDurationTotal = "60 Minutes";
                                        upDatedDurationOne = "- 15-minutes of Consultation";
                                        upDatedDurationTwo = "- 45-minutes of the Body Lipo Cavitation Treatment"
                                        promoPrice = "69.95";
                                        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (619) 379-7301";
                                        treatmentSelected = "Body Lipo Cavitation";
                                        newSpaPhoneNumberSelected = "(619) 379-7301";
                                        insteadOfSpa = "$399";
                                        break;

                                        case "Sthetics Med Spa Turkey Neck Tightening $69.95":
                                        upDatedSpaName = "Sthetics Med Spa";
                                        upDatedSpaAddress = "450 A St. San Diego, CA 92101"+"<br>"+"(4th Floor, Ste 400, just next to the Paul Mitchell School)";
                                        upDatedSpaLINK = "https://forms.gle/FyXERa9QLfAfDbEA6";
                                        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/sthetics-med-spa-turkey-neck-tightening-treatment-promo";
                                        upDatedSpaPhone = "(619) 983-0069";
                                        upDatedDurationTotal = "60 Minutes";
                                        upDatedDurationOne = "- 15-minute Consultation";
                                        upDatedDurationTwo = "- 45-minutes Turkey Neck Tightening Treatment"
                                        promoPrice = "69.95";
                                        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (619) 379-7301";
                                        treatmentSelected = "Turkey Neck Tightening Treatment";
                                        newSpaPhoneNumberSelected = "(619) 379-7301";
                                        insteadOfSpa = "$377";
                                        break;

                                        case "Sthetics Med Spa FTB LED 69.95":
                                        upDatedSpaName = "Sthetics Med Spa";
                                        upDatedSpaAddress = "450 A St. San Diego, CA 92101"+"<br>"+"(4th Floor, Ste 400, just next to the Paul Mitchell School)";
                                        upDatedSpaLINK = "https://forms.gle/FyXERa9QLfAfDbEA6";
                                        upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/sthetics-med-spa-led-promo-page";
                                        upDatedSpaPhone = "(619) 983-0069";
                                        upDatedDurationTotal = "60 Minutes";
                                        upDatedDurationOne = "- 10-minute Light Cleansing";
                                        upDatedDurationTwo = "- 35-minutes LED Anti-Aging Treatment and 15 minutes Consultation"
                                        promoPrice = "69.95";
                                        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (619) 379-7301";
                                        treatmentSelected = "LED Treatment";
                                        newSpaPhoneNumberSelected = "(619) 379-7301";
                                        insteadOfSpa = "$299";
                                        break;

                                    case "Introstem Tyler LED":
                                    upDatedSpaName = "Introstem";
                                    upDatedSpaAddress = "Broad Way Square,"+"<br>"+"4601 S Broadway Ave. Tyler, TX 75703"+"<br>"+"(Unit C12, In front of Victoria's Secret)";
                                    upDatedSpaLINK = "https://forms.gle/REouLcpGxFGhpsQC9";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/introstem-tyler-promo-page";
                                    upDatedSpaPhone = "(430) 562-9946";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15-minute Cleansing";
                                    upDatedDurationTwo = "- 30-minutes LED Anti-aging Treatment and 15-minutes Consultation"
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (928) 399-9243";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(928) 399-9243";
                                    insteadOfSpa = "$350";
                                    break;

                                    case "Lavelier Round Rock LED":
                                    upDatedSpaName = "Lavelier";
                                    upDatedSpaAddress = "Round Rock Premium Outlets,"+"<br>"+"4401 N Interstate Hwy 35, Round Rock, TX 78664"+"<br>"+"(Unit 764, next to Michael Kors)";
                                    upDatedSpaLINK = "https://forms.gle/cpgsKXAFgNchNqLP6";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/lavelier-round-rock-promo-page";
                                    upDatedSpaPhone = "(512) 600-9666";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15-minute Cleansing";
                                    upDatedDurationTwo = "- 30-minutes LED Anti-aging Treatment and 15-minutes Consultation"
                                    promoPrice = "59.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (512) 953-8818";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(512) 953-8818";
                                    insteadOfSpa = "$299";
                                    break;

                                    case "Lavelier Round Rock Men's LED":
                                    upDatedSpaName = "Lavelier";
                                    upDatedSpaAddress = "Round Rock Premium Outlets,"+"<br>"+"4401 N Interstate Hwy 35, Round Rock, TX 78664"+"<br>"+"(Unit 764, next to Michael Kors)";
                                    upDatedSpaLINK = "https://forms.gle/cpgsKXAFgNchNqLP6";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/lavelier-round-rock-mens-led-treatment-promo-page";
                                    upDatedSpaPhone = "(512) 600-9666";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15-minute Cleansing";
                                    upDatedDurationTwo = "- 30-minutes LED Anti-aging Treatment and 15-minutes Consultation"
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (512) 953-8818";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(512) 953-8818";
                                    insteadOfSpa = "$299";
                                    break;

                                    case "Iridescent Wellness and Medical Spa LED":
                                    upDatedSpaName = "Iridescent Wellness and Medical Spa";
                                    upDatedSpaAddress = "Partridge Creek Mall,"+"<br>"+"17370 Hall Rd. Suite 111B. Clinton Twp, MI 48038"+"<br>"+"(Inside Partridge Creek Mall. We are located by Vera Bradley and Cato)";
                                    upDatedSpaLINK = "https://forms.gle/c66G44jKBffGC9Q69";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/iridescent-med-spa-promo-page";
                                    upDatedSpaPhone = "(586) 981-1850";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15-minute Cleansing";
                                    upDatedDurationTwo = "- 30-minutes LED Anti-aging Treatment and 15-minutes Consultation"
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (586) 981-1850";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(586) 981-1850";
                                    insteadOfSpa = "$299";
                                    break;

                                    case "Iridescent Wellness and Medical Spa Hydrofacial $79.95":
                                    upDatedSpaName = "Iridescent Wellness and Medical Spa";
                                    upDatedSpaAddress = "Partridge Creek Mall,"+"<br>"+"17370 Hall Rd. Suite 111B. Clinton Twp, MI 48038"+"<br>"+"(Inside Partridge Creek Mall. We are located by Vera Bradley and Cato)";
                                    upDatedSpaLINK = "https://forms.gle/c66G44jKBffGC9Q69";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/iridescent-med-spa-hydrofacial-promo-page";
                                    upDatedSpaPhone = "(586) 981-1850";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 10-minute Cleansing and Steam";
                                    upDatedDurationTwo = "- 20-minutes HydroFacial Cleansing and 15-minutes of infrared and 15-minutes Consultation"
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (586) 981-1850";
                                    treatmentSelected = "Hydrafacial Treatment";
                                    newSpaPhoneNumberSelected = "(586) 981-1850";
                                    insteadOfSpa = "$299";
                                    break;

                                    case "Iridescent Wellness and Medical Spa Sagging Neck Recue $99.95":
                                    upDatedSpaName = "Iridescent Wellness and Medical Spa";
                                    upDatedSpaAddress = "Partridge Creek Mall,"+"<br>"+"17370 Hall Rd. Suite 111B. Clinton Twp, MI 48038"+"<br>"+"(Inside Partridge Creek Mall. We are located by Vera Bradley and Cato)";
                                    upDatedSpaLINK = "https://forms.gle/c66G44jKBffGC9Q69";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/iridescent-med-spa-sagging-neck-rescue-treatment-promo";
                                    upDatedSpaPhone = "(586) 981-1850";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15-minute Consultation";
                                    upDatedDurationTwo = "- 45-minutes Sagging Neck Recue Treatment"
                                    promoPrice = "99.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (586) 981-1850";
                                    treatmentSelected = "Sagging Neck Recue Treatment";
                                    newSpaPhoneNumberSelected = "(586) 981-1850";
                                    insteadOfSpa = "$377";
                                    break;

                                    case "Iridescent Wellness and Medical Spa LED $99.95":
                                    upDatedSpaName = "Iridescent Wellness and Medical Spa";
                                    upDatedSpaAddress = "Partridge Creek Mall,"+"<br>"+"17370 Hall Rd. Suite 111B. Clinton Twp, MI 48038"+"<br>"+"(Inside Partridge Creek Mall. We are located by Vera Bradley and Cato)";
                                    upDatedSpaLINK = "https://forms.gle/c66G44jKBffGC9Q69";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/iridescent-med-spa-new-promo-page";
                                    upDatedSpaPhone = "(586) 981-1850";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15-minute Cleansing";
                                    upDatedDurationTwo = "- 30-minutes LED Anti-aging Treatment and 15-minutes Consultation"
                                    promoPrice = "99.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (586) 981-1850";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(586) 981-1850";
                                    insteadOfSpa = "$377";
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

                                        case "Melle Soul Skin and Body LED":
                                        upDatedSpaName = "Melle Soul Skin and Body";
                                        upDatedSpaAddress = "12247 Queenston Blvd. Houston, TX 77095"+"<br>"+"(STE A)"+"<br>"+"(Free Parking within the Plaza)";
                                        upDatedSpaLINK = "https://forms.gle/eqHNxsWTKb8peijE8";
                                        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/melle-soul-skin-amp-body-led-promo-page";
                                        upDatedSpaPhone = "(346) 646-5755";
                                        upDatedDurationTotal = "45 Minutes";
                                        upDatedDurationOne = "- 10-minutes Consultation";
                                        upDatedDurationTwo = "- 35-minute LED Anti-aging Treatment"
                                        promoPrice = "79.95";
                                        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (832) 920-4942";
                                        treatmentSelected = "LED Treatment";
                                        newSpaPhoneNumberSelected = "(832) 920-4942";
                                        insteadOfSpa = "$300";
                                        break;

                                        case "Melle Soul Skin and Body Collagen Enhancing":
                                        upDatedSpaName = "Melle Soul Skin and Body";
                                        upDatedSpaAddress = "12247 Queenston Blvd. Houston, TX 77095"+"<br>"+"(STE A)"+"<br>"+"(Free Parking within the Plaza)";
                                        upDatedSpaLINK = "https://forms.gle/eqHNxsWTKb8peijE8";
                                        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/melle-soul-skin-amp-body-collagen-enhancing-promo-page";
                                        upDatedSpaPhone = "(346) 646-5755";
                                        upDatedDurationTotal = "45 Minutes";
                                        upDatedDurationOne = "- 15-minutes light cleansing";
                                        upDatedDurationTwo = "- 30-minute Collagen Enhancing Treatment and Consultation"
                                        promoPrice = "69.95";
                                        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (832) 920-4942";
                                        treatmentSelected = "Collagen Enhancing";
                                        newSpaPhoneNumberSelected = "(832) 920-4942";
                                        insteadOfSpa = "$377";
                                        break;

                                        case "Melle Soul Skin and Body Collagen Enhancing 59":
                                        upDatedSpaName = "Melle Soul Skin and Body";
                                        upDatedSpaAddress = "12247 Queenston Blvd. Houston, TX 77095"+"<br>"+"(STE A)"+"<br>"+"(Free Parking within the Plaza)";
                                        upDatedSpaLINK = "https://forms.gle/eqHNxsWTKb8peijE8";
                                        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/melle-soul-skin-amp-body-collagen-enhancing-promo";
                                        upDatedSpaPhone = "(346) 646-5755";
                                        upDatedDurationTotal = "45 Minutes";
                                        upDatedDurationOne = "- 15-minutes light cleansing";
                                        upDatedDurationTwo = "- 30-minute Collagen Enhancing Treatment and Consultation"
                                        promoPrice = "59.95";
                                        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (832) 920-4942";
                                        treatmentSelected = "Collagen Enhancing";
                                        newSpaPhoneNumberSelected = "(832) 920-4942";
                                        insteadOfSpa = "$377";
                                        break;

                                        case "Melle Soul Skin and Body Neck and Jawline":
                                        upDatedSpaName = "Melle Soul Skin and Body";
                                        upDatedSpaAddress = "12247 Queenston Blvd. Houston, TX 77095"+"<br>"+"(STE A)"+"<br>"+"(Free Parking within the Plaza)";
                                        upDatedSpaLINK = "https://forms.gle/eqHNxsWTKb8peijE8";
                                        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/melle-soul-skin-amp-body-neck-and-jaw-line-tightening-treatment-promo";
                                        upDatedSpaPhone = "(346) 646-5755";
                                        upDatedDurationTotal = "45 Minutes";
                                        upDatedDurationOne = "- 30-minute Neck and Jawline Treatment";
                                        upDatedDurationTwo = "- 15-minutes Consultation"
                                        promoPrice = "69.95";
                                        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (832) 920-4942";
                                        treatmentSelected = "Neck and Jawline Tightening Treatment";
                                        newSpaPhoneNumberSelected = "(832) 920-4942";
                                        insteadOfSpa = "$377";
                                        break;

                                        case "Melle Soul Skin and Body Men's LED":
                                        upDatedSpaName = "Melle Soul Skin and Body";
                                        upDatedSpaAddress = "12247 Queenston Blvd. Houston, TX 77095"+"<br>"+"(STE A)"+"<br>"+"(Free Parking within the Plaza)";
                                        upDatedSpaLINK = "https://forms.gle/eqHNxsWTKb8peijE8";
                                        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/melle-soul-skin-amp-body-mens-led-promo-page";
                                        upDatedSpaPhone = "(346) 646-5755";
                                        upDatedDurationTotal = "45 Minutes";
                                        upDatedDurationOne = "- 30-minute LED Anti-Aging Treatment";
                                        upDatedDurationTwo = "- 15-minutes Consultation"
                                        promoPrice = "79.95";
                                        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (832) 920-4942";
                                        treatmentSelected = "LED Treatment";
                                        newSpaPhoneNumberSelected = "(832) 920-4942";
                                        insteadOfSpa = "$377";
                                        break;

                                        case "Melle Soul Skin and Body Skin Tightening 69.95":
                                        upDatedSpaName = "Melle Soul Skin and Body";
                                        upDatedSpaAddress = "12247 Queenston Blvd. Houston, TX 77095"+"<br>"+"(STE A)"+"<br>"+"(Free Parking within the Plaza)";
                                        upDatedSpaLINK = "https://forms.gle/eqHNxsWTKb8peijE8";
                                        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/dtb-melle-soul-skin-amp-body-skin-tightening-treatment";
                                        upDatedSpaPhone = "(346) 646-5755";
                                        upDatedDurationTotal = "45 Minutes";
                                        upDatedDurationOne = "- 30-minute LED Anti-Aging Treatment";
                                        upDatedDurationTwo = "- 15-minutes Consultation"
                                        promoPrice = "69.95";
                                        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (832) 920-4942";
                                        treatmentSelected = "Skin Tightening";
                                        newSpaPhoneNumberSelected = "(832) 920-4942";
                                        insteadOfSpa = "$377";
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

                                        case "Truffoire LED 69.95":
                                        upDatedSpaName = "Truffoire";
                                        upDatedSpaAddress = "Parkway Place, 2801 Memorial Pkwy SW, Huntsville, AL 35801"+"<br>"+"(Unit R-146, First floor next to GNC)"+"<br>"+"(Best spot is to park near Dillards)";
                                        upDatedSpaLINK = "https://forms.gle/gPtr7z3YNX75bJwZ7";
                                        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/new-truffoire-led-promo-page";
                                        upDatedSpaPhone = "(938) 867-6022";
                                        upDatedDurationTotal = "60 Minutes";
                                        upDatedDurationOne = "- 45 minutes LED Anti-aging Treatment";
                                        upDatedDurationTwo = "- 15 minutes Consultation"
                                        promoPrice = "69.95";
                                        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (256) 517-8740";
                                        treatmentSelected = "LED Treatment";
                                        newSpaPhoneNumberSelected = "(256) 517-8740";
                                        insteadOfSpa = "$377";
                                        break;

                                        case "Truffoire LED 59.95":
                                        upDatedSpaName = "Truffoire";
                                        upDatedSpaAddress = "Parkway Place, 2801 Memorial Pkwy SW, Huntsville, AL 35801"+"<br>"+"(Unit R-146, First floor next to GNC)"+"<br>"+"(Best spot is to park near Dillards)";
                                        upDatedSpaLINK = "https://forms.gle/gPtr7z3YNX75bJwZ7";
                                        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/truffoire-led-new-promo-page";
                                        upDatedSpaPhone = "(938) 867-6022";
                                        upDatedDurationTotal = "60 Minutes";
                                        upDatedDurationOne = "- 45 minutes LED Anti-aging Treatment";
                                        upDatedDurationTwo = "- 15 minutes Consultation"
                                        promoPrice = "59.95";
                                        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (256) 517-8740";
                                        treatmentSelected = "LED Treatment";
                                        newSpaPhoneNumberSelected = "(256) 517-8740";
                                        insteadOfSpa = "$377";
                                        break;

                                        case "Laconico Spa LED":
                                        upDatedSpaName = "Laconico";
                                        upDatedSpaAddress = "15805 Biscayne Blvd. North Miami Beach, FL 33160"+"<br>"+"(First Floor, Unit 102 of 15805 Building)";
                                        upDatedSpaLINK = "https://forms.gle/wEj6wz45i8V4fr898";
                                        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/laconico-spa-promo-page";
                                        upDatedSpaPhone = "(786) 522-2327";
                                        upDatedDurationTotal = "60 Minutes";
                                        upDatedDurationOne = "- 20 minutes cleansing";
                                        upDatedDurationTwo = "- 25-minute LED Anti-aging Treatment and 15-minutes Consultation"
                                        promoPrice = "69.95";
                                        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (747) 333-1979";
                                        treatmentSelected = "LED Treatment";
                                        newSpaPhoneNumberSelected = "(747) 333-1979";
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

                                        case "Blossom Cosmetics LED":
                                        upDatedSpaName = "Blossom";
                                        upDatedSpaAddress = "10400 San Jose Blvd, Jacksonville, FL 32257"+"<br>"+"(Suite 2, Next to EverBank)"+"<br>"+"(Plenty of parking within the premises)";
                                        upDatedSpaLINK = "https://forms.gle/wMBGEkEVzETSdEr77";
                                        upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/blossom-promo-page";
                                        upDatedSpaPhone = "(904) 516-9268";
                                        upDatedDurationTotal = "60 Minutes";
                                        upDatedDurationOne = "- 15 minutes cleansing";
                                        upDatedDurationTwo = "- 30-minute LED Anti-aging Treatment and 15-minutes Consultation"
                                        promoPrice = "99.95";
                                        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (904) 629-3611";
                                        treatmentSelected = "LED Treatment";
                                        newSpaPhoneNumberSelected = "(904) 629-3611";
                                        insteadOfSpa = "$377";
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

                                        case "Blossom Cosmetics Neck and Jawline 69.95":
                                        upDatedSpaName = "Blossom";
                                        upDatedSpaAddress = "10400 San Jose Blvd, Jacksonville, FL 32257"+"<br>"+"(Suite 2, Next to EverBank)"+"<br>"+"(Plenty of parking within the premises)";
                                        upDatedSpaLINK = "https://forms.gle/wMBGEkEVzETSdEr77";
                                        upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/blossom-neck-and-jawline-treatment-page";
                                        upDatedSpaPhone = "(904) 516-9268";
                                        upDatedDurationTotal = "60 Minutes";
                                        upDatedDurationOne = "- 15 minutes cleansing";
                                        upDatedDurationTwo = "- 30-minute LED Neck and Jawline Treatment and Consultation"
                                        promoPrice = "69.95";
                                        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (904) 629-3611";
                                        treatmentSelected = "Neck and Jawline Tightening Treatment";
                                        newSpaPhoneNumberSelected = "(904) 629-3611";
                                        insteadOfSpa = "$377";
                                        break;

                                        case "Blossom Cosmetics Neck and Jawline 59.95":
                                        upDatedSpaName = "Blossom";
                                        upDatedSpaAddress = "10400 San Jose Blvd, Jacksonville, FL 32257"+"<br>"+"(Suite 2, Next to EverBank)"+"<br>"+"(Plenty of parking within the premises)";
                                        upDatedSpaLINK = "https://forms.gle/wMBGEkEVzETSdEr77";
                                        upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/blossom-neck-and-jawline-treatment-new";
                                        upDatedSpaPhone = "(904) 516-9268";
                                        upDatedDurationTotal = "60 Minutes";
                                        upDatedDurationOne = "- 15 minutes cleansing";
                                        upDatedDurationTwo = "- 30-minute LED Neck and Jawline Treatment and Consultation"
                                        promoPrice = "59.95";
                                        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (904) 629-3611";
                                        treatmentSelected = "Neck and Jawline Tightening Treatment";
                                        newSpaPhoneNumberSelected = "(904) 629-3611";
                                        insteadOfSpa = "$377";
                                        break;

                                        case "Glamour Spa LED":
                                        upDatedSpaName = "Glamour Spa";
                                        upDatedSpaAddress = "Pheasant Lane Mall, 310 Daniel Webster Hwy, Nashua NH 03060"+"<br>"+"(Second Floor, near the elevator, next to Ann Taylor)"+"<br>"+"(Park near target)";
                                        upDatedSpaLINK = "https://forms.gle/LRBGgjLb759EGy9EA";
                                        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/glamour-spa-promo-page";
                                        upDatedSpaPhone = "(603) 600-8357";
                                        upDatedDurationTotal = "45 Minutes";
                                        upDatedDurationOne = "- 15 minutes cleansing";
                                        upDatedDurationTwo = "- 45-minute LED Anti-aging Treatment and Consultation"
                                        promoPrice = "69.95";
                                        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (603) 943-1805";
                                        treatmentSelected = "LED Treatment";
                                        newSpaPhoneNumberSelected = "(603) 943-1805";
                                        insteadOfSpa = "$377";
                                        break;

                                        case "Glamour Spa LED 79.95":
                                        upDatedSpaName = "Glamour Spa";
                                        upDatedSpaAddress = "Pheasant Lane Mall, 310 Daniel Webster Hwy, Nashua NH 03060"+"<br>"+"(Second Floor, near the elevator, next to Ann Taylor)"+"<br>"+"(Park near target)";
                                        upDatedSpaLINK = "https://forms.gle/LRBGgjLb759EGy9EA";
                                        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/glamour-spa-promo";
                                        upDatedSpaPhone = "(603) 600-8357";
                                        upDatedDurationTotal = "45 Minutes";
                                        upDatedDurationOne = "- 15 minutes cleansing";
                                        upDatedDurationTwo = "- 45-minute LED Anti-aging Treatment and Consultation"
                                        promoPrice = "79.95";
                                        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (603) 943-1805";
                                        treatmentSelected = "LED Treatment";
                                        newSpaPhoneNumberSelected = "(603) 943-1805";
                                        insteadOfSpa = "$377";
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

                                        case "Forever Flawless Biltmore":
                                        upDatedSpaName = "Forever Flawless";
                                        upDatedSpaAddress = "2502 E Camelback Rd, Phoenix, AZ 85016"+"<br>"+"(STE101, Next to Macy's, across Express Tailoring)"+"<br>"+"(Please park at the north end of Biltmore Fashion Park. Inside the parking garage of Saks Fifth Avenue / next to BLDG. B)";
                                        upDatedSpaLINK = "https://forms.gle/bxfiEhPtH4LtwdW89";
                                        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/forever-flawless-promo-page";
                                        upDatedSpaPhone = "(602) 887-9960";
                                        upDatedDurationTotal = "60 Minutes";
                                        upDatedDurationOne = "- 10 minutes cleansing";
                                        upDatedDurationTwo = "- 50 minutes LED Anti-aging Treatment and Consultation"
                                        promoPrice = "79.95";
                                        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (602) 956-3077";
                                        treatmentSelected = "LED Treatment";
                                        newSpaPhoneNumberSelected = "(602) 956-3077";
                                        insteadOfSpa = "$249";
                                        break;

                                        case "Forever Flawless Biltmore LED 69.95":
                                        upDatedSpaName = "Forever Flawless";
                                        upDatedSpaAddress = "2502 E Camelback Rd, Phoenix, AZ 85016"+"<br>"+"(STE101, Next to Macy's, across Express Tailoring)"+"<br>"+"(Please park at the north end of Biltmore Fashion Park. Inside the parking garage of Saks Fifth Avenue / next to BLDG. B)";
                                        upDatedSpaLINK = "https://forms.gle/bxfiEhPtH4LtwdW89";
                                        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/forever-flawless-led-promo-page";
                                        upDatedSpaPhone = "(602) 887-9960";
                                        upDatedDurationTotal = "60 Minutes";
                                        upDatedDurationOne = "- 10 minutes cleansing";
                                        upDatedDurationTwo = "- 50 minutes LED Anti-aging Treatment and Consultation"
                                        promoPrice = "69.95";
                                        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (602) 956-3077";
                                        treatmentSelected = "LED Treatment";
                                        newSpaPhoneNumberSelected = "(602) 956-3077";
                                        insteadOfSpa = "$249";
                                        break;

                                        case "Aloe Skin Aesthetics Skin Tightening $59.95":
                                        upDatedSpaName = "Aloe Skin Aesthetics";
                                        upDatedSpaAddress = "3225 N 75th St. Scottsdale, AZ 85251"+"<br>"+"(STE 110, Next to Great wall Chinese Medicine)"+"<br>"+"(There is a big parking lot in front of the spa for customers use)";
                                        upDatedSpaLINK = "https://forms.gle/1nvezFf1zSk8n8zp9";
                                        upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/aloe-skin-aesthetics-promo-page";
                                        upDatedSpaPhone = "(480) 618-6720";
                                        upDatedDurationTotal = "45 Minutes";
                                        upDatedDurationOne = "- 15 minutes cleansing";
                                        upDatedDurationTwo = "- 30 minutes Skin Tightening Treatment and Consultation"
                                        promoPrice = "59.95";
                                        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (602) 956-3077";
                                        treatmentSelected = "Skin Tightening Treatment";
                                        newSpaPhoneNumberSelected = "(602) 956-3077";
                                        insteadOfSpa = "$377";
                                        break;

                                        case "Malka Med Spa Skin Tightening 79.95":
                                        upDatedSpaName = "Malka Med Spa";
                                        upDatedSpaAddress = "2601 Little Elm Parkway, Little Elm, TX, 75068"+"<br>"+"(Unit 1801, Building 18)"+"<br>"+"(Parking is available just in front of the spa)";
                                        upDatedSpaLINK = "https://forms.gle/kxpo1f7uQZBy6MUi9";
                                        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/malka-med-spa-promo-page";
                                        upDatedSpaPhone = "(469) 487-7573";
                                        upDatedDurationTotal = "60 Minutes";
                                        upDatedDurationOne = "- 45 minutes light cleansing and the Skin Tightening treatment";
                                        upDatedDurationTwo = "- 15 minutes Consultation"
                                        promoPrice = "79.95";
                                        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (469) 888-6616";
                                        treatmentSelected = "Skin Tightening Treatment";
                                        newSpaPhoneNumberSelected = "(469) 888-6616";
                                        insteadOfSpa = "$377";
                                        break;

                                        case "Malka Med Spa Skin Tightening 59.95":
                                        upDatedSpaName = "Malka Med Spa";
                                        upDatedSpaAddress = "2601 Little Elm Parkway, Little Elm, TX, 75068"+"<br>"+"(Unit 1801, Building 18)"+"<br>"+"(Parking is available just in front of the spa)";
                                        upDatedSpaLINK = "https://forms.gle/kxpo1f7uQZBy6MUi9";
                                        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/malka-med-spa-skin-tightening-promo";
                                        upDatedSpaPhone = "(469) 487-7573";
                                        upDatedDurationTotal = "60 Minutes";
                                        upDatedDurationOne = "- 45 minutes light cleansing and the Skin Tightening treatment";
                                        upDatedDurationTwo = "- 15 minutes Consultation"
                                        promoPrice = "59.95";
                                        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (469) 888-6616";
                                        treatmentSelected = "Skin Tightening Treatment";
                                        newSpaPhoneNumberSelected = "(469) 888-6616";
                                        insteadOfSpa = "$377";
                                        break;

                                        case "Malka Med Spa Skin Tightening 59.95 instead of $299":
                                        upDatedSpaName = "Malka Med Spa";
                                        upDatedSpaAddress = "2601 Little Elm Parkway, Little Elm, TX, 75068"+"<br>"+"(Unit 1801, Building 18)"+"<br>"+"(Parking is available just in front of the spa)";
                                        upDatedSpaLINK = "https://forms.gle/kxpo1f7uQZBy6MUi9";
                                        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/malka-med-spa-skin-tightening-promo";
                                        upDatedSpaPhone = "(469) 487-7573";
                                        upDatedDurationTotal = "60 Minutes";
                                        upDatedDurationOne = "- 45 minutes light cleansing and the Skin Tightening treatment";
                                        upDatedDurationTwo = "- 15 minutes Consultation"
                                        promoPrice = "59.95";
                                        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (469) 888-6616";
                                        treatmentSelected = "Skin Tightening Treatment";
                                        newSpaPhoneNumberSelected = "(469) 888-6616";
                                        insteadOfSpa = "$299";
                                        break;

                                        case "Malka Med Spa Neck and Jawline 59.95":
                                        upDatedSpaName = "Malka Med Spa";
                                        upDatedSpaAddress = "2601 Little Elm Parkway, Little Elm, TX, 75068"+"<br>"+"(Unit 1801, Building 18)"+"<br>"+"(Parking is available just in front of the spa)";
                                        upDatedSpaLINK = "https://forms.gle/kxpo1f7uQZBy6MUi9";
                                        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/malka-med-spa-neck-and-jaw-line-tightening-treatment-promo";
                                        upDatedSpaPhone = "(469) 487-7573";
                                        upDatedDurationTotal = "60 Minutes";
                                        upDatedDurationOne = "- 45 minutes light cleansing and the Neck and Jawline treatment";
                                        upDatedDurationTwo = "- 15 minutes Consultation"
                                        promoPrice = "59.95";
                                        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (469) 888-6616";
                                        treatmentSelected = "Neck and Jawline Tightening";
                                        newSpaPhoneNumberSelected = "(469) 888-6616";
                                        insteadOfSpa = "$377";
                                        break;

                                        case "Malka Med Spa Collagen 69.95":
                                        upDatedSpaName = "Malka Med Spa";
                                        upDatedSpaAddress = "2601 Little Elm Parkway, Little Elm, TX, 75068"+"<br>"+"(Unit 1801, Building 18)"+"<br>"+"(Parking is available just in front of the spa)";
                                        upDatedSpaLINK = "https://forms.gle/kxpo1f7uQZBy6MUi9";
                                        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/malka-med-spa-collagen-promo";
                                        upDatedSpaPhone = "(469) 487-7573";
                                        upDatedDurationTotal = "60 Minutes";
                                        upDatedDurationOne = "- 45 minutes light cleansing and the Collagen Enhancing treatment";
                                        upDatedDurationTwo = "- 15 minutes Consultation"
                                        promoPrice = "69.95";
                                        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (469) 888-6616";
                                        treatmentSelected = "Collagen Enhancing";
                                        newSpaPhoneNumberSelected = "(469) 888-6616";
                                        insteadOfSpa = "$377";
                                        break;

                                        case "Malka Med Spa Men's LED 69.95":
                                        upDatedSpaName = "Malka Med Spa";
                                        upDatedSpaAddress = "2601 Little Elm Parkway, Little Elm, TX, 75068"+"<br>"+"(Unit 1801, Building 18)"+"<br>"+"(Parking is available just in front of the spa)";
                                        upDatedSpaLINK = "https://forms.gle/kxpo1f7uQZBy6MUi9";
                                        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/malka-medspa-mens-led-promo-page";
                                        upDatedSpaPhone = "(469) 487-7573";
                                        upDatedDurationTotal = "60 Minutes";
                                        upDatedDurationOne = "- 15 minutes light cleansing";
                                        upDatedDurationTwo = "- 45 minutes LED Treatment and  Consultation"
                                        promoPrice = "69.95";
                                        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (469) 888-6616";
                                        treatmentSelected = "LED Treatment";
                                        newSpaPhoneNumberSelected = "(469) 888-6616";
                                        insteadOfSpa = "$377";
                                        break;

                                        case "Malka Med Spa Sagging Neck Rescue 79.95":
                                        upDatedSpaName = "Malka Med Spa";
                                        upDatedSpaAddress = "2601 Little Elm Parkway, Little Elm, TX, 75068"+"<br>"+"(Unit 1801, Building 18)"+"<br>"+"(Parking is available just in front of the spa)";
                                        upDatedSpaLINK = "https://forms.gle/kxpo1f7uQZBy6MUi9";
                                        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/malka-med-spa-sagging-neck-rescue-treatment-promo";
                                        upDatedSpaPhone = "(469) 487-7573";
                                        upDatedDurationTotal = "60 Minutes";
                                        upDatedDurationOne = "- 15 minutes Consultation";
                                        upDatedDurationTwo = "- 45 minutes Sagging Neck Rescue Treatment"
                                        promoPrice = "79.95";
                                        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (469) 888-6616";
                                        treatmentSelected = "Sagging Neck Rescue Treatment";
                                        newSpaPhoneNumberSelected = "(469) 888-6616";
                                        insteadOfSpa = "$377";
                                        break;

                                        case "Malka Med Spa HIFU LED 89.95":
                                        upDatedSpaName = "Malka Med Spa";
                                        upDatedSpaAddress = "2601 Little Elm Parkway, Little Elm, TX, 75068"+"<br>"+"(Unit 1801, Building 18)"+"<br>"+"(Parking is available just in front of the spa)";
                                        upDatedSpaLINK = "https://forms.gle/kxpo1f7uQZBy6MUi9";
                                        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/malka-med-spa-hifu-amp-led-treatment-promo";
                                        upDatedSpaPhone = "(469) 487-7573";
                                        upDatedDurationTotal = "60 Minutes";
                                        upDatedDurationOne = "- 45 minutes Cleansing and the HIFU with LED Treatment";
                                        upDatedDurationTwo = "- 15 minutes Consultation"
                                        promoPrice = "89.95";
                                        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (469) 888-6616";
                                        treatmentSelected = "HIFU with LED Treatment";
                                        newSpaPhoneNumberSelected = "(469) 888-6616";
                                        insteadOfSpa = "$299";
                                        break;

                                        case "Lavelier Grand Junction LED 79.95":
                                        upDatedSpaName = "Lavelier";
                                        upDatedSpaAddress = "Mesa Mall, 2424 US-6, Grand Junction, CO 81505"+"<br>"+"(in the aisle of Target next to Verizon)"+"<br>"+"(The entrance by Target is the closest)";
                                        upDatedSpaLINK = "https://forms.gle/EoTh4TZAKX8K1AP67";
                                        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/lavelier-colorado-promo-page";
                                        upDatedSpaPhone = "(970) 398-8569";
                                        upDatedDurationTotal = "60 Minutes";
                                        upDatedDurationOne = "- 5 minute Skin Analysis and 10 minutes cleansing";
                                        upDatedDurationTwo = "- 30 minutes Skin Tightening Treatment and 15 minutes Consultation"
                                        promoPrice = "79.95";
                                        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (720) 404-3885";
                                        treatmentSelected = "LED Treatment";
                                        newSpaPhoneNumberSelected = "(720) 404-3885";
                                        insteadOfSpa = "$350";
                                        break;

                                        case "Lavelier Grand Junction FTB LED 79.95":
                                        upDatedSpaName = "Lavelier";
                                        upDatedSpaAddress = "Mesa Mall, 2424 US-6, Grand Junction, CO 81505"+"<br>"+"(in the aisle of Target next to Verizon)"+"<br>"+"(The entrance by Target is the closest)";
                                        upDatedSpaLINK = "https://forms.gle/EoTh4TZAKX8K1AP67";
                                        upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/lavelier-grand-junction-led-promo";
                                        upDatedSpaPhone = "(970) 398-8569";
                                        upDatedDurationTotal = "60 Minutes";
                                        upDatedDurationOne = "- 5 minute Skin Analysis and 10 minutes cleansing";
                                        upDatedDurationTwo = "- 30 minutes Skin Tightening Treatment and 15 minutes Consultation"
                                        promoPrice = "79.95";
                                        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (720) 404-3885";
                                        treatmentSelected = "LED Treatment";
                                        newSpaPhoneNumberSelected = "(720) 404-3885";
                                        insteadOfSpa = "$350";
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

                                        case "Oasis Aesthetics LED 69.95":
                                        upDatedSpaName = "Oasis Aesthetics";
                                        upDatedSpaAddress = "3073 Ness Ave, Winnipeg, MB R2Y 2G3"+"<br>"+"(Winnipeg - Ness Avenue)"+"<br>"+"(Parking is available just in front of the spa)";
                                        upDatedSpaLINK = "https://forms.gle/X8CkCCRLLaFTSzqZ9";
                                        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/oasis-aesthetics-promo-page";
                                        upDatedSpaPhone = "(204) 201-4734";
                                        upDatedDurationTotal = "60 Minutes";
                                        upDatedDurationOne = "- 15 minutes cleansing";
                                        upDatedDurationTwo = "- 30 minutes LED Anti-Aging Treatment and 15 minutes Consultation"
                                        promoPrice = "69.95";
                                        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (204) 306-7627";
                                        treatmentSelected = "LED Treatment";
                                        newSpaPhoneNumberSelected = "(204) 306-7627";
                                        insteadOfSpa = "$377";
                                        break;

                                        case "Lavan Med Spa LED 59.95":
                                        upDatedSpaName = "Lavan Med Spa";
                                        upDatedSpaAddress = "3301 N. Miller Rd. Scottsdale AZ 85251"+"<br>"+"(STE 115, Inside the Medical Building)"+"<br>"+"(Free parking in front of the building)";
                                        upDatedSpaLINK = "https://forms.gle/qmfihMGsNn9jrNyK8";
                                        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/lavan-med-spa-promo-page";
                                        upDatedSpaPhone = "(480) 863-3599";
                                        upDatedDurationTotal = "60 Minutes";
                                        upDatedDurationOne = "- 15 minutes cleansing";
                                        upDatedDurationTwo = "- 30 minutes LED Anti-Aging Treatment and 15 minutes Consultation"
                                        promoPrice = "59.95";
                                        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (480) 408-4170";
                                        treatmentSelected = "LED Treatment";
                                        newSpaPhoneNumberSelected = "(480) 408-4170";
                                        insteadOfSpa = "$377";
                                        break;

                                        case "Lavan Med Spa Neck and Jawline 59.95":
                                        upDatedSpaName = "Lavan Med Spa";
                                        upDatedSpaAddress = "3301 N. Miller Rd. Scottsdale AZ 85251"+"<br>"+"(STE 115, Inside the Medical Building)"+"<br>"+"(Free parking in front of the building)";
                                        upDatedSpaLINK = "https://forms.gle/qmfihMGsNn9jrNyK8";
                                        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/lavan-med-spa-neck-and-jaw-line-tightening-treatment-promo";
                                        upDatedSpaPhone = "(480) 863-3599";
                                        upDatedDurationTotal = "60 Minutes";
                                        upDatedDurationOne = "- 15 minutes cleansing";
                                        upDatedDurationTwo = "- 45 minutes Neck and Jawline Treatment and 15 minutes Consultation"
                                        promoPrice = "59.95";
                                        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (480) 408-4170";
                                        treatmentSelected = "Neck and Jawline Tightening";
                                        newSpaPhoneNumberSelected = "(480) 408-4170";
                                        insteadOfSpa = "$377";
                                        break;

                                        case "Be You Wellness LED 79.95":
                                        upDatedSpaName = "Be You";
                                        upDatedSpaAddress = "227 Eagle St, Newmarket, ON L3Y 1J8"+"<br>"+"(Gray building next to Dentistry on Eagle Street)"+"<br>"+"(Public Parking around the area)";
                                        upDatedSpaLINK = "https://forms.gle/8cQjaWcNoEtQFJ6u9";
                                        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/be-you-ontario-promo-page";
                                        upDatedSpaPhone = "(289) 667-1380";
                                        upDatedDurationTotal = "45 Minutes";
                                        upDatedDurationOne = "- 15 minutes cleansing and facial massage";
                                        upDatedDurationTwo = "- 30 minutes LED Anti-Aging Treatment and Consultation"
                                        promoPrice = "79.95";
                                        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (416) 276-3231";
                                        treatmentSelected = "LED Treatment";
                                        newSpaPhoneNumberSelected = "(416) 276-3231";
                                        insteadOfSpa = "$377";
                                        break;

                                        case "Be You Wellness Reverse Turkey Neck 79.95":
                                            upDatedSpaName = "Be You";
                                            upDatedSpaAddress = "227 Eagle St, Newmarket, ON L3Y 1J8"+"<br>"+"(Gray building next to Dentistry on Eagle Street)"+"<br>"+"(Public Parking around the area)";
                                            upDatedSpaLINK = "https://forms.gle/8cQjaWcNoEtQFJ6u9";
                                            upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/be-you-wellness-reverse-turkey-neck-treatment-promo";
                                            upDatedSpaPhone = "(289) 667-1380";
                                            upDatedDurationTotal = "45 Minutes";
                                            upDatedDurationOne = "- 15 minutes consultation";
                                            upDatedDurationTwo = "- 30 minutes Reverse Turkey Neck Treatment"
                                            promoPrice = "79.95";
                                            upDatedActualSpaPhone = "Can't find our spa? Give us a call at (416) 276-3231";
                                            treatmentSelected = "Reverse Turkey Neck Treatment";
                                            newSpaPhoneNumberSelected = "(416) 276-3231";
                                            insteadOfSpa = "$377";
                                            break;

                                            case "Sinfulicious LED 79.95":
                                            upDatedSpaName = "Sinfulicious";
                                            upDatedSpaAddress = "114 N Palm Canyon Dr. Palm Springs,  CA. 92262 United States"+"<br>"+"(Between Balboa Candy and Peepa's)"+"<br>"+"(In Front of Store)";
                                            upDatedSpaLINK = "https://forms.gle/qvo1ebyuCpyd8xVcA";
                                            upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/sinfulicious-led-promo";
                                            upDatedSpaPhone = "(760) 688-7992";
                                            upDatedDurationTotal = "45 Minutes";
                                            upDatedDurationOne = "- 10 minutes light cleansing";
                                            upDatedDurationTwo = "- 35 minutes LED Anti-Aging Treatment and Consultation"
                                            promoPrice = "79.95";
                                            upDatedActualSpaPhone = "Can't find our spa? Give us a call at (760) 459-3426";
                                            treatmentSelected = "LED Treatment";
                                            newSpaPhoneNumberSelected = "(760) 459-3426";
                                            insteadOfSpa = "$377";
                                            break;

                                            case "Sinfulicious LED 99.95":
                                            upDatedSpaName = "Sinfulicious";
                                            upDatedSpaAddress = "114 N Palm Canyon Dr. Palm Springs,  CA. 92262 United States"+"<br>"+"(Between Balboa Candy and Peepa's)"+"<br>"+"(In Front of Store)";
                                            upDatedSpaLINK = "https://forms.gle/qvo1ebyuCpyd8xVcA";
                                            upDatedSpaWebLINK = "https://www.firstouchbeauty.com/pages/sinfulicious-led-promo-page";
                                            upDatedSpaPhone = "(760) 688-7992";
                                            upDatedDurationTotal = "45 Minutes";
                                            upDatedDurationOne = "- 10 minutes light cleansing";
                                            upDatedDurationTwo = "- 35 minutes LED Anti-Aging Treatment and Consultation"
                                            promoPrice = "99.95";
                                            upDatedActualSpaPhone = "Can't find our spa? Give us a call at (760) 459-3426";
                                            treatmentSelected = "LED Treatment";
                                            newSpaPhoneNumberSelected = "(760) 459-3426";
                                            insteadOfSpa = "$377";
                                            break;

                                            case "La Reve LED 79.95":
                                            upDatedSpaName = "La Reve";
                                            upDatedSpaAddress = "Woodfield Mall,"+"<br>"+"5 Woodfield Mall Room F328 Schaumburg, IL 60173"+"<br>"+"(Second Floor, Near Sephora)"+"<br>"+"(Park near main entrance)";
                                            upDatedSpaLINK = "https://forms.gle/koSZjR9n17v9PQqV8";
                                            upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/le-reve-il-promo-page";
                                            upDatedSpaPhone = "(847) 779-6577";
                                            upDatedDurationTotal = "45 Minutes";
                                            upDatedDurationOne = "- 10 minutes light cleansing";
                                            upDatedDurationTwo = "- 20 minutes LED Anti-Aging Treatment and 15 minutes Consultation"
                                            promoPrice = "79.95";
                                            upDatedActualSpaPhone = "Can't find our spa? Give us a call at (848) 219-0593";
                                            treatmentSelected = "LED Treatment";
                                            newSpaPhoneNumberSelected = "(848) 219-0593";
                                            insteadOfSpa = "$377";
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

                                            case "Predire Paris LED 79.95":
                                            upDatedSpaName = "Predire Paris";
                                            upDatedSpaAddress = "Freehold Raceway Mall,"+"<br>"+"3710 US-9 Space #C116 Freehold, NJ 07728"+"<br>"+"(First Floor in front of Victoria's Secret)"+"<br>"+"Park Near the Main Entrance";
                                            upDatedSpaLINK = "https://forms.gle/BVyHXmrRBWiYzUGq7";
                                            upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/predire-paris-promo-page";
                                            upDatedSpaPhone = "(732) 790-5966";
                                            upDatedDurationTotal = "60 Minutes";
                                            upDatedDurationOne = "- 15 minutes light cleansing";
                                            upDatedDurationTwo = "- 30 minutes LED Anti-Aging Treatment and 15 minutes Consultation"
                                            promoPrice = "79.95";
                                            upDatedActualSpaPhone = "Can't find our spa? Give us a call at (725) 314-4125";
                                            treatmentSelected = "LED Treatment";
                                            newSpaPhoneNumberSelected = "(725) 314-4125";
                                            insteadOfSpa = "$377";
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
