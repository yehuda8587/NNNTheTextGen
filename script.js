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
                break;

            case "Skin Analytics":
                upDatedSpaName = "Skin Analytics Spa";
                upDatedSpaAddress = "6910 Fayetteville Rd, Durham, NC 27713" +"<br>"+"(Southpoint Mall, ground floor next to Macy's across from Forever 21)";
                upDatedSpaLINK = "https://forms.gle/1he49LWJJgKBtHQD8";
                upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/skinanalytics-spa-led-promo"
                upDatedSpaPhone = "(919) 321-1008";
                upDatedDurationTotal = "60 Minutes";
                upDatedDurationOne = "- 15 Minutes Deep Skin Cleaning";
                upDatedDurationTwo = "- 30 Minutes LED Light Session & a 15 minutes Consultation"+"<br><br>"+"Dont Forget! You are eligible for a 25% off your next purchase at our spa :)";
                promoPrice = "79.95"
                upDatedActualSpaPhone = "Can't find our spa? Give us a call at (919) 405-2586";
                treatmentSelected = "LED Treatment";
                newSpaPhoneNumberSelected = "(919) 405-2586";
                break;

            case "Esthetix Raliegh":
                upDatedSpaName = "Esthetix Spa";
                upDatedSpaAddress = "4325 Glenwood Ave, Suit 2106, Raleigh NC 27612" +"<br>"+"(Crabtree Valley Mall, 2nd floor, next to Johnston & Murphy)";
                upDatedSpaLINK = "https://forms.gle/WHjM6Js3yYA6w6Y59";
                upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/esthetix-nc-promo";
                upDatedSpaPhone = "(984) 205-6033";
                upDatedDurationTotal = "60 Minutes";
                upDatedDurationOne = "- 30 Minutes Deep Skin Cleaning";
                upDatedDurationTwo = "- 30 Minutes LED Light Session & Consultation"+"<br><br>"+"Dont Forget! You are eligeble for a 25% off your next purchase at our spa :)";
                promoPrice = "79.95"
                upDatedActualSpaPhone = "Can't find our spa? Give us a call at (919) 900-8271";
                treatmentSelected = "LED Treatment";
                newSpaPhoneNumberSelected = "(919) 900-8271";
                break;

                case "The Bay Aesthetics Tampa":
                upDatedSpaName = "The Bay Aesthetics Tampa";
                upDatedSpaAddress = "1413 south howard avenue, Tampa, Florida 33606" +"<br>"+"(Soho building next to Clayton Gray Home)";
                upDatedSpaLINK = "";
                upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/the-bay-aesthetics";
                upDatedSpaPhone = "(813)798-6023";
                upDatedDurationTotal = "60 Minutes";
                upDatedDurationOne = "";
                upDatedDurationTwo = "";
                upDatedActualSpaPhone = "Can't find our spa? Give us a call at";
                treatmentSelected = "LED Treatment";
                newSpaPhoneNumberSelected = "non set";
                break;
                
                case "Earth Sarasota":
                upDatedSpaName = "Earth Spa";
                upDatedSpaAddress = "380B saint Armands circle, Sarasota FL 34236" +"<br>"+"(Next to Ben & Jerrys)";
                upDatedSpaLINK = "ask admin to add link";
                upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/sarasota-promo" ;
                upDatedSpaPhone = "(941)789-8086";
                upDatedDurationTotal = "90 Minutes";
                upDatedDurationOne = "- 45 Minutes Anti-Aging Collagen Facial & LED Light";
                upDatedDurationTwo = "- 45 Minutes LED Light Benefit Consultation";
                promoPrice = "79.95"
                upDatedActualSpaPhone = "Can't find our spa? Give us a call at (941) 302-5495";
                treatmentSelected = "LED Treatment";
                newSpaPhoneNumberSelected = "(941) 302-5495";
                break; 
                
                case "Forever Flawless Sarasota":
                upDatedSpaName = "Forever Flawless Spa";
                upDatedSpaAddress = "140 University Town Center Dr, Sarasota, FL 34243" +"<br>"+ "(The Mall at University Town Center, second floor next to Macy's)";
                upDatedSpaLINK = "ask admin to add link";
                upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/flawless-sar-promo";
                upDatedSpaPhone = "(941)977-4893";
                upDatedDurationTotal = "90 Minutes";
                upDatedDurationOne = "- 45 Minutes Anti-Aging Collagen Facial & LED Light";
                upDatedDurationTwo = "- 45 Minutes LED Light Benefit Consultation";
                promoPrice = "79.95"
                upDatedActualSpaPhone = "Can't find our spa? Give us a call at ";
                treatmentSelected = "LED Treatment";
                newSpaPhoneNumberSelected = "none set";
                break;

                case "Esthetix Sarasota":
                    upDatedSpaName = "Esthetix Spa";
                    upDatedSpaAddress = "140 University Town Center Dr, Sarasota, FL 34243" +"<br>"+ "(The Mall at University Town Center, second floor next to Macy's)";
                    upDatedSpaLINK = "https://forms.gle/oXDozKmQBfd5ewfQA";
                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/esthetix-sarasota-promo";
                    upDatedSpaPhone = "(941) 867-8627";
                    upDatedDurationTotal = "90 Minutes";
                    upDatedDurationOne = "- 45 Minutes Anti-Aging Collagen Facial & LED Light";
                    upDatedDurationTwo = "- 45 Minutes LED Light Benefit Consultation";
                    promoPrice = "89.95"
                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (941) 302-5495";
                    treatmentSelected = "LED Treatment";
                    newSpaPhoneNumberSelected = "(941) 302-5495";
                    break;
        
                case "Voupre MD":
                upDatedSpaName = "Voupre Spa";
                upDatedSpaAddress = "211 Main St, Annapolis, MD 21401";
                upDatedSpaLINK = "https://forms.gle/ZqMTRgNFz48hfLU48";
                upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/voupre-spa-md" ;
                upDatedSpaPhone = "(443) 545-3555";
                upDatedDurationTotal = "90 Minutes";
                upDatedDurationOne = "- 45 Minutes Deep Skin Cleaning";
                upDatedDurationTwo = "- 45 Minutes LED Light Session & Consultation";
                promoPrice = "79.95"
                upDatedActualSpaPhone = "Can't find our spa? Give us a call at (301) 775-3494";
                treatmentSelected = "LED Treatment";
                newSpaPhoneNumberSelected = "(301) 775-3494";
                break; 

                case "Beauty Frizz MD":
                upDatedSpaName = "BeautyFrizz Spa";
                upDatedSpaAddress = "7101 Democracy Blvd, Bethesda, MD 20817" +"<br>"+"(Montgomery Mall, 1st floor across from 'LEGO Store')";
                upDatedSpaLINK = "https://forms.gle/srNaY1uJefDZFANW8";
                upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/beautyfrizz-led-promo";
                upDatedSpaPhone = "(301) 291-7543";
                upDatedDurationTotal = "90 Minutes";
                upDatedDurationOne = "- 45 Minutes Deep Skin Cleaning";
                upDatedDurationTwo = "- 45 Minutes LED Light Session & Consultation";
                promoPrice = "99.95"
                upDatedActualSpaPhone = "Can't find our spa? Give us a call at (301) 775-3494";
                treatmentSelected = "LED Treatment";
                newSpaPhoneNumberSelected = "(301) 775-3494";
                break; 

                case "Beauty Frizz MD Body Sculpting":
                    upDatedSpaName = "BeautyFrizz Spa";
                    upDatedSpaAddress = "7101 Democracy Blvd, Bethesda, MD 20817" +"<br>"+"(Montgomery Mall, 1st floor across from 'LEGO Store')";
                    upDatedSpaLINK = "https://forms.gle/srNaY1uJefDZFANW8";
                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/beautyfrizz-bodysculpting-promo";
                    upDatedSpaPhone = "(301) 291-7543";
                    upDatedDurationTotal = "90 Minutes";
                    upDatedDurationOne = "- 60 Body Sculpting";
                    upDatedDurationTwo = "- Consultation";
                    promoPrice = "120"
                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (301) 775-3494";
                    treatmentSelected = "Body Sculpting Treatment";
                    newSpaPhoneNumberSelected = "(301) 775-3494";
                    break; 

                case "Lionesse Exclusive CA":
                    upDatedSpaName = "Lionesse Exclusive Spa";
                    upDatedSpaAddress = "14006 Riverside Dr #213a, Sherman Oaks, CA 91423" +"<br>"+"(Second floor near Express Clothing in front Cotton On Clothing)";
                    upDatedSpaLINK = "https://forms.gle/KZ9C1f4gNPuLVKLEA";
                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/lionesse-ca-led-promo" ;
                    upDatedSpaPhone = "(301)887-5495";
                    upDatedDurationTotal = "60 Minutes";
                    upDatedDurationOne = "- 30 Minutes Deep Skin Cleaning";
                    upDatedDurationTwo = "- 30 Minutes LED Light Experience & Consultation";
                    promoPrice = "79.95"
                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (747) 247-2204";
                    treatmentSelected = "LED Treatment";
                    newSpaPhoneNumberSelected = "(747) 247-2204";
                    break; 

                        case "Kristals Burlington LED":
                            upDatedSpaName = "Kristals Burlington Spa";
                            upDatedSpaAddress = "Burlington Mall,"+"<br>"+"777 Guelph Line, Burlington,ON L7R 3N2" + "<br>"+"Please enter through entrance #3 and you'll see us right after 'Marks')"; 
                            upDatedSpaLINK = "https://forms.gle/JQoAioVQEG9gZH197";
                            upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/kristals-burlington-led-promo-page" ;
                            upDatedSpaPhone = "(289) 293-9711";
                            upDatedDurationTotal = "50 Minutes";
                            upDatedDurationOne = "- 10 Minutes Deep Skin Cleaning";
                            upDatedDurationTwo = "- 40 Minutes LED Light Experience & Consultation";
                            promoPrice = "79.95"
                            upDatedActualSpaPhone = "Can't find our spa? Give us a call at (647) 293-1112";
                            treatmentSelected = "LED Treatment";
                            newSpaPhoneNumberSelected = "(647) 293-1112";
                            break; 

                            case "Kristals Burlington AquaPure":
                                upDatedSpaName = "Kristals Burlington Spa";
                                upDatedSpaAddress = "Burlington Mall,"+"<br>"+"777 Guelph Line, Burlington,ON L7R 3N2" + "<br>"+"Please enter through entrance #3 and you'll see us right after 'Marks')"; 
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
                                break; 

                            case "Kristals Barrie":
                                upDatedSpaName = "Kristals Barrie Spa";
                                upDatedSpaAddress = "Georgian Mall,"+"<br>"+"500 Bayfield St, Barrie, ON L4M 4Z8" +"<br>"+"(Main entrance lower level, next to Victoria's Secret)";
                                upDatedSpaLINK = "https://forms.gle/WyFD3HQApwUDL7hH6";
                                upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/kristals-barrie-spa-led-promo-page" ;
                                upDatedSpaPhone = "(705) 408-2681";
                                upDatedDurationTotal = "60 Minutes";
                                upDatedDurationOne = "- 20 Minutes Deep Skin Cleaning";
                                upDatedDurationTwo = "- 40 Minutes LED Light Experience & Consultation";
                                promoPrice = "79.95"
                                upDatedActualSpaPhone = "Can't find our spa? Give us a call at (647) 787-7105";
                                treatmentSelected = "LED Treatment";
                                newSpaPhoneNumberSelected = "(647) 787-7105";
                                break; 

                                case "Adore Cookstown":
                                    upDatedSpaName = "Adore spa";
                                    upDatedSpaAddress = "Tanger Outlet,"+"<br>"+"3311 County Road 89, Cookstown, ON L0L 1L0" +"<br>"+"(Entrance #3, next to Sketchers)";
                                    upDatedSpaLINK = "https://forms.gle/wQhsDWzjTS6GM9ko7";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/adorecookstown-ledpromo" ;
                                    upDatedSpaPhone = "(705) 408-0758";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 20 Minutes Deep Skin Cleaning";
                                    upDatedDurationTwo = "- 40 Minutes LED Light Experience & Consultation";
                                    promoPrice = "79.95"
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (844) 377-7753";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(844) 377-7753";
                                    break; 

                                    case "Kristals Erin Mills LED":
                                    upDatedSpaName = "Kristals Erin Mills spa";
                                    upDatedSpaAddress = "Erin Mills Centre,"+"<br>"+"5100 Erin Mills Pkwy, Mississauga, ON L5M 4Z5" +"<br>"+"(1st floor, between Erin Mills Photo & Bluenotes)";
                                    upDatedSpaLINK = "https://forms.gle/WYLHZFb4fk3s3J4e9";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/kristals-erinmills-spa-led-promo-page" ;
                                    upDatedSpaPhone = "(437) 253-8259";
                                    upDatedDurationTotal = "50 Minutes";
                                    upDatedDurationOne = "- 10 Minutes Deep Skin Cleaning";
                                    upDatedDurationTwo = "- 40 Minutes LED Light Experience & Consultation";
                                    promoPrice = "79.95"
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (647) 293-1112";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(647) 293-1112";
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
                                    break;       
                    
        
                                        case "GreenBiotics Sherway Gardens":
                                            upDatedSpaName = "GreenBiotics Spa";
                                            upDatedSpaAddress = "CF Sherway Gardens,"+"<br>"+"25 The West Mall, Etobicoke, ON M9C 1B8" +"<br>"+"(First floor, next to Sephora)";
                                            upDatedSpaLINK = "https://forms.gle/Lu4idBaYGDGdLYwt6";
                                            upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/greenbiotics-sherwaygardens-led-promo" ;
                                            upDatedSpaPhone = "(647) 259-6810";
                                            upDatedDurationTotal = "60 Minutes";
                                            upDatedDurationOne = "- 20 Minutes Deep Skin Cleaning";
                                            upDatedDurationTwo = "- 40 Minutes LED Experience & Consultation";
                                            promoPrice = "79.95";
                                            upDatedActualSpaPhone = "Can't find our spa? Give us a call at (647) 370-8733";
                                            treatmentSelected = "LED Treatment";
                                            newSpaPhoneNumberSelected = "(647) 370-8733";
                                            break;   
                                                

                                                    case "Rachels Beauty Scottsdale LED":
                                                        upDatedSpaName = "Rachel’s Beauty Spa";
                                                        upDatedSpaAddress = "Scottsdale Quarter,"+"<br>"+"15147 N Scottsdale Rd, Scottsdale, AZ 85254, STE 130"+"<br>"+"(When you arrive at Sephora, turn right onto South Street, across from Skin Laundry.)";
                                                        upDatedSpaLINK = "https://forms.gle/QTfEEaaG3Y6RXNzV6";
                                                        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/rachel-beauty-scottsdale-spa-led-promo-page" ;
                                                        upDatedSpaPhone = "(480) 847-1841";
                                                        upDatedDurationTotal = "60 Minutes";
                                                        upDatedDurationOne = "- 30 Minutes Deep Skin Cleaning";
                                                        upDatedDurationTwo = "- 30 Minutes LED Light Experience & Consultation";
                                                        promoPrice = "59.95";
                                                        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (480) 808-9400";
                                                        treatmentSelected = "LED Treatment";
                                                        newSpaPhoneNumberSelected = "(480) 808-9400";
                                                        break;   

                                                                        case "Earth Lakeline Neck Tightening":
                                                                            upDatedSpaName = "Earth Spa";
                                                                            upDatedSpaAddress = "Lakeline Mall," + "<br>" + "11200 Lakeline Mall Dr, Cedar Park, TX 78613"+"<br>" + "(First floor, between Macy's & Plusbeauxatour)";
                                                                            upDatedSpaLINK = "https://forms.gle/pPPf7Sy3TMNsuCmT7";
                                                                            upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/earth-lakeline-neck-tightening-promo";
                                                                            upDatedSpaPhone = "(512) 957-0399";
                                                                            upDatedDurationTotal = "75 Minutes";
                                                                            upDatedDurationOne = "- 50 Minutes Neck Tightening Experience";
                                                                            upDatedDurationTwo = "- 25 Minutes Consultation";
                                                                            promoPrice = "59.95";
                                                                            upDatedActualSpaPhone = "Can't find our spa? Give us a call at (512) 551-9944";
                                                                            treatmentSelected = "Neck Tightening Treatment";
                                                                            newSpaPhoneNumberSelected = "(512) 551-9944";
                                                                            break;

                                                                            case "Earth Lakeline Non-Surgical Face Lift":
                                                                                upDatedSpaName = "Earth Spa";
                                                                                upDatedSpaAddress = "Lakeline Mall," + "<br>" + "11200 Lakeline Mall Dr, Cedar Park, TX 78613"+"<br>" + "(First floor, between Macy's & Plusbeauxatour)";
                                                                                upDatedSpaLINK = "https://forms.gle/pPPf7Sy3TMNsuCmT7";
                                                                                upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/earth-lakeline-non-surgical-fl-promo";
                                                                                upDatedSpaPhone = "(512) 957-0399";
                                                                                upDatedDurationTotal = "75 Minutes";
                                                                                upDatedDurationOne = "- 50 Minutes Non-Surgical Face Lift Experience";
                                                                                upDatedDurationTwo = "- 25 Minutes Consultation";
                                                                                promoPrice = "59.95";
                                                                                upDatedActualSpaPhone = "Can't find our spa? Give us a call at (512) 551-9944";
                                                                                treatmentSelected = "Non-surgical Face Lift Treatment";
                                                                                newSpaPhoneNumberSelected = "(512) 551-9944";
                                                                                break;

                                                                                case "Earth Lakeline Rewind Facial Treatment":
                                                                                    upDatedSpaName = "Earth Spa";
                                                                                    upDatedSpaAddress = "Lakeline Mall," + "<br>" + "11200 Lakeline Mall Dr, Cedar Park, TX 78613"+"<br>" + "(First floor, between Macy's & Plusbeauxatour)";
                                                                                    upDatedSpaLINK = "https://forms.gle/pPPf7Sy3TMNsuCmT7";
                                                                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/earth-lakeline-rewind-promo";
                                                                                    upDatedSpaPhone = "(512) 957-0399";
                                                                                    upDatedDurationTotal = "75 Minutes";
                                                                                    upDatedDurationOne = "- 50 Minutes Rewind Facial Treatment";
                                                                                    upDatedDurationTwo = "- 25 Minutes Consultation";
                                                                                    promoPrice = "59.95";
                                                                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (512) 551-9944";
                                                                                    treatmentSelected = "Rewind Facial Treatment";
                                                                                    newSpaPhoneNumberSelected = "(512) 551-9944";
                                                                                    break;

                                                                                    case "Earth Lakeline LED Tightening":
                                                                                    upDatedSpaName = "Earth Spa";
                                                                                    upDatedSpaAddress = "Lakeline Mall," + "<br>" + "11200 Lakeline Mall Dr, Cedar Park, TX 78613"+"<br>" + "(First floor, between Macy's & Plusbeauxatour)";
                                                                                    upDatedSpaLINK = "https://forms.gle/pPPf7Sy3TMNsuCmT7";
                                                                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/earth-lakeline-led-tightening-promo";
                                                                                    upDatedSpaPhone = "(512) 957-0399";
                                                                                    upDatedDurationTotal = "75 Minutes";
                                                                                    upDatedDurationOne = "- 50 Minutes LED Tightening Treatment";
                                                                                    upDatedDurationTwo = "- 25 Minutes Consultation";
                                                                                    promoPrice = "59.95";
                                                                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (512) 551-9944";
                                                                                    treatmentSelected = "LED Tightening";
                                                                                    newSpaPhoneNumberSelected = "(512) 551-9944";
                                                                                    break;

                                                                                    case "Earth Lakeline Age Reverse":
                                                                                    upDatedSpaName = "Earth Spa";
                                                                                    upDatedSpaAddress = "Lakeline Mall," + "<br>" + "11200 Lakeline Mall Dr, Cedar Park, TX 78613"+"<br>" + "(First floor, between Macy's & Plusbeauxatour)";
                                                                                    upDatedSpaLINK = "https://forms.gle/pPPf7Sy3TMNsuCmT7";
                                                                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/earth-lakeline-age-reverse-promo";
                                                                                    upDatedSpaPhone = "(512) 957-0399";
                                                                                    upDatedDurationTotal = "75 Minutes";
                                                                                    upDatedDurationOne = "- 50 Minutes Age Reverse Treatment";
                                                                                    upDatedDurationTwo = "- 25 Minutes Consultation";
                                                                                    promoPrice = "59.95";
                                                                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (512) 551-9944";
                                                                                    treatmentSelected = "Age Reverse";
                                                                                    newSpaPhoneNumberSelected = "(512) 551-9944";
                                                                                    break;

                                                                                    case "Earth Lakeline Collagen Lifting Facial":
                                                                                        upDatedSpaName = "Earth Spa";
                                                                                        upDatedSpaAddress = "Lakeline Mall," + "<br>" + "11200 Lakeline Mall Dr, Cedar Park, TX 78613"+"<br>" + "(First floor, between Macy's & Plusbeauxatour)";
                                                                                        upDatedSpaLINK = "https://forms.gle/pPPf7Sy3TMNsuCmT7";
                                                                                        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/earth-lakeline-collagen-lifting-promo";
                                                                                        upDatedSpaPhone = "(512) 957-0399";
                                                                                        upDatedDurationTotal = "75 Minutes";
                                                                                        upDatedDurationOne = "- 50 Minutes Collagen Lifting Facial";
                                                                                        upDatedDurationTwo = "- 25 Minutes Consultation";
                                                                                        promoPrice = "59.95";
                                                                                        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (512) 551-9944";
                                                                                        treatmentSelected = "Collagen Lifting Facial Treatment";
                                                                                        newSpaPhoneNumberSelected = "(512) 551-9944";
                                                                                        break;

                                                                                        case "Earth Lakeline Elastin Tightening 70":
                                                                                            upDatedSpaName = "Earth Spa";
                                                                                            upDatedSpaAddress = "Lakeline Mall," + "<br>" + "11200 Lakeline Mall Dr, Cedar Park, TX 78613"+"<br>" + "(First floor, between Macy's & Plusbeauxatour)";
                                                                                            upDatedSpaLINK = "https://forms.gle/pPPf7Sy3TMNsuCmT7";
                                                                                            upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/earth-lakeline-spa-elastin-tightening-promo";
                                                                                            upDatedSpaPhone = "(512) 957-0399";
                                                                                            upDatedDurationTotal = "75 Minutes";
                                                                                            upDatedDurationOne = "- 50 Minutes Elastin Tightening Facial";
                                                                                            upDatedDurationTwo = "- 25 Minutes Consultation";
                                                                                            promoPrice = "70";
                                                                                            upDatedActualSpaPhone = "Can't find our spa? Give us a call at (512) 551-9944";
                                                                                            treatmentSelected = "Elastin Tightening Treatment";
                                                                                            newSpaPhoneNumberSelected = "(512) 551-9944";
                                                                                            break;
                                                            
                                                                                            case "Earth Lakeline Collagen Enhancing 70":
                                                                                                upDatedSpaName = "Earth Spa";
                                                                                                upDatedSpaAddress = "Lakeline Mall," + "<br>" + "11200 Lakeline Mall Dr, Cedar Park, TX 78613"+"<br>" + "(First floor, between Macy's & Plusbeauxatour)";
                                                                                                upDatedSpaLINK = "https://forms.gle/pPPf7Sy3TMNsuCmT7";
                                                                                                upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/earth-lakeline-collagen-enhancing-promo";
                                                                                                upDatedSpaPhone = "(512) 957-0399";
                                                                                                upDatedDurationTotal = "75 Minutes";
                                                                                                upDatedDurationOne = "- 50 Minutes Collagen Enhancing Treatment";
                                                                                                upDatedDurationTwo = "- 25 Minutes Consultation";
                                                                                                promoPrice = "70";
                                                                                                upDatedActualSpaPhone = "Can't find our spa? Give us a call at (512) 551-9944";
                                                                                                treatmentSelected = "Collagen Enhancing Treatment";
                                                                                                break;

                                                                                                case "Earth Round Rock LED Firming Facial (Face and Neck)":
                                                                                                upDatedSpaName = "Earth Spa";
                                                                                                upDatedSpaAddress = "Please write on Google maps: Salons By JC"+"<br>" + "(Inside Salons by JC, suite #4)";
                                                                                                upDatedSpaLINK = "FORM";
                                                                                                upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/earth-roundrock-led-firming-face-neck-promo";
                                                                                                upDatedSpaPhone = "(512) 887-1733";
                                                                                                upDatedDurationTotal = "75 Minutes";
                                                                                                upDatedDurationOne = "- 50 LED Firming Facial (Face&Neck)";
                                                                                                upDatedDurationTwo = "- 25 Minutes Consultation";
                                                                                                promoPrice = "70";
                                                                                                upDatedActualSpaPhone = "Can't find our spa? Give us a call at (512) 551-9944";
                                                                                                treatmentSelected = "LED Firming Facial Face & Neck Treatment";
                                                                                                newSpaPhoneNumberSelected = "(512) 551-9944";
                                                                                                break;

                                                                                                case "Earth Round Rock RF Tightening And Brightening":
                                                                                                upDatedSpaName = "Earth Spa";
                                                                                                upDatedSpaAddress = "3021 S Frontage Rd"+"<br>" + "(Inside Salons by JC, suite #4)";
                                                                                                upDatedSpaLINK = "FORM";
                                                                                                upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/earthtech-roundrock-rftightbright-promo";
                                                                                                upDatedSpaPhone = "(512) 887-1733";
                                                                                                upDatedDurationTotal = "75 Minutes";
                                                                                                upDatedDurationOne = "- 50 RF Tightening & Brightening Treatment";
                                                                                                upDatedDurationTwo = "- 25 Minutes Consultation";
                                                                                                promoPrice = "70";
                                                                                                upDatedActualSpaPhone = "Can't find our spa? Give us a call at (512) 551-9944";
                                                                                                treatmentSelected = "RF Tightening & Brightening Treatment";
                                                                                                newSpaPhoneNumberSelected = "(512) 551-9944";
                                                                                                break;

                                                                                                

                                                            case "Earth Lakeline HydroDermabrasion":
                                                                upDatedSpaName = "Earth Spa";
                                                                upDatedSpaAddress = "Lakeline Mall," + "<br>" + "11200 Lakeline Mall Dr, Cedar Park, TX 78613"+"<br>" + "(First floor, between Macy's & Plusbeauxatour)";
                                                                upDatedSpaLINK = "https://forms.gle/pPPf7Sy3TMNsuCmT7";
                                                                upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/earthtech-lakeline-hydrodermabrasion-promo";
                                                                upDatedSpaPhone = "(512) 957-0399";
                                                                upDatedDurationTotal = "60 Minutes";
                                                                upDatedDurationOne = "- 15 Minutes Cleansing";
                                                                upDatedDurationTwo = "- 45 Minutes HydroDermabrasion & Consultation";
                                                                promoPrice = "70";
                                                                upDatedActualSpaPhone = "Can't find our spa? Give us a call at (512) 551-9944";
                                                                treatmentSelected = "HydroDermabrasion Treatment";
                                                                newSpaPhoneNumberSelected = "(512) 551-9944";
                                                                break;

                                                                case "Earth Lakeline Chin RF":
                                                                upDatedSpaName = "Earth Spa";
                                                                upDatedSpaAddress = "Lakeline Mall," + "<br>" + "11200 Lakeline Mall Dr, Cedar Park, TX 78613"+"<br>" + "(First floor, between Macy's & Plusbeauxatour)";
                                                                upDatedSpaLINK = "https://forms.gle/pPPf7Sy3TMNsuCmT7";
                                                                upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/earthtech-lakeline-rf-chin-promo";
                                                                upDatedSpaPhone = "(512) 957-0399";
                                                                upDatedDurationTotal = "75 Minutes";
                                                                upDatedDurationOne = "- 50 Minutes RadioFrequency Chin";
                                                                upDatedDurationTwo = "- 25 Minutes Consultation";
                                                                promoPrice = "70";
                                                                upDatedActualSpaPhone = "Can't find our spa? Give us a call at (512) 551-9944";
                                                                treatmentSelected = "Chin RF Treatment";
                                                                newSpaPhoneNumberSelected = "(512) 551-9944";
                                                                break;

                                                            case "Earth Lakeline Age Defying":
                                                                upDatedSpaName = "Earth Spa";
                                                                upDatedSpaAddress = "Lakeline Mall," + "<br>" + "11200 Lakeline Mall Dr, Cedar Park, TX 78613"+"<br>" + "(First floor, between Macy's & Plusbeauxatour)";
                                                                upDatedSpaLINK = "https://forms.gle/pPPf7Sy3TMNsuCmT7";
                                                                upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/earthlakeline-spa-ad-promo";
                                                                upDatedSpaPhone = "(512) 957-0399";
                                                                upDatedDurationTotal = "75 Minutes";
                                                                upDatedDurationOne = "- 50 Minutes LED Age Defying";
                                                                upDatedDurationTwo = "- 25 Minutes Consultation";
                                                                promoPrice = "70";
                                                                upDatedActualSpaPhone = "Can't find our spa? Give us a call at (512) 551-9944";
                                                                treatmentSelected = "Age Defying Treatment";
                                                                newSpaPhoneNumberSelected = "(512) 551-9944";
                                                                break;

                                                                case "Earth Lakeline Body Sculpting":
                                                                    upDatedSpaName = "Earth Spa";
                                                                    upDatedSpaAddress = "Lakeline Mall," + "<br>" + "11200 Lakeline Mall Dr, Cedar Park, TX 78613"+"<br>" + "(First floor, between Macy's & Plusbeauxatour)";
                                                                    upDatedSpaLINK = "https://forms.gle/pPPf7Sy3TMNsuCmT7";
                                                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/earth-tech-lakeline-body-sculpting-body-sculpting-promo-page";
                                                                    upDatedSpaPhone = "(512) 957-0399";
                                                                    upDatedDurationTotal = "85 Minutes";
                                                                    upDatedDurationOne = "- 60 Minutes Body Sculpting";
                                                                    upDatedDurationTwo = "- 25 Minutes Consultation";
                                                                    promoPrice = "79.95";
                                                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (512) 551-9944";
                                                                    treatmentSelected = "Body Sculpting Treatment";
                                                                    newSpaPhoneNumberSelected = "(512) 551-9944";
                                                                    break;

                                                                    case "Earth Lakeline RF Tightening And Brightening":
                                                                    upDatedSpaName = "Earth Spa";
                                                                    upDatedSpaAddress = "Lakeline Mall," + "<br>" + "11200 Lakeline Mall Dr, Cedar Park, TX 78613"+"<br>" + "(First floor, between Macy's & Plusbeauxatour)";
                                                                    upDatedSpaLINK = "https://forms.gle/pPPf7Sy3TMNsuCmT7";
                                                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/earthtech-lakeline-rf-tightening-brightening-promo";
                                                                    upDatedSpaPhone = "(512) 957-0399";
                                                                    upDatedDurationTotal = "85 Minutes";
                                                                    upDatedDurationOne = "- 60 Minutes RF Tightening & Brightening";
                                                                    upDatedDurationTwo = "- 25 Minutes Consultation";
                                                                    promoPrice = "79.95";
                                                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (512) 551-9944";
                                                                    treatmentSelected = "RF Tightening & Brightening Treatment";
                                                                    newSpaPhoneNumberSelected = "(512) 551-9944";
                                                                    break;

                                                                    case "Earth Lakeline Perfect Skin Complexion Facial":
                                                                        upDatedSpaName = "Earth Spa";
                                                                        upDatedSpaAddress = "Lakeline Mall," + "<br>" + "11200 Lakeline Mall Dr, Cedar Park, TX 78613"+"<br>" + "(First floor, between Macy's & Plusbeauxatour)";
                                                                        upDatedSpaLINK = "https://forms.gle/pPPf7Sy3TMNsuCmT7";
                                                                        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/earth-akeline-perfectskincomplexion-promo";
                                                                        upDatedSpaPhone = "(512) 957-0399";
                                                                        upDatedDurationTotal = "85 Minutes";
                                                                        upDatedDurationOne = "- 60 Minutes Perfect Skin Complexion Facial";
                                                                        upDatedDurationTwo = "- 25 Minutes Consultation";
                                                                        promoPrice = "70";
                                                                        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (512) 551-9944";
                                                                        treatmentSelected = "Perfect Skin Complexion Facial Treatment";
                                                                        newSpaPhoneNumberSelected = "(512) 551-9944";
                                                                        break;

                                                                        case "Earth Lakeline Non-Surgical Lifting Facial":
                                                                            upDatedSpaName = "Earth Spa";
                                                                            upDatedSpaAddress = "Lakeline Mall," + "<br>" + "11200 Lakeline Mall Dr, Cedar Park, TX 78613"+"<br>" + "(First floor, between Macy's & Plusbeauxatour)";
                                                                            upDatedSpaLINK = "https://forms.gle/pPPf7Sy3TMNsuCmT7";
                                                                            upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/earth-lakeline-spa-non-surgical-lifting-facial-promo";
                                                                            upDatedSpaPhone = "(512) 957-0399";
                                                                            upDatedDurationTotal = "85 Minutes";
                                                                            upDatedDurationOne = "- 60 Minutes Non-Surgical Lifting Facial";
                                                                            upDatedDurationTwo = "- 25 Minutes Consultation";
                                                                            promoPrice = "70";
                                                                            upDatedActualSpaPhone = "Can't find our spa? Give us a call at (512) 551-9944";
                                                                            treatmentSelected = "Non-surgical Lifting Facial Treatment";
                                                                            newSpaPhoneNumberSelected = "(512) 551-9944";
                                                                            break;

                                                                            case "Earth Lakeline LED Firming Facial (Face and Neck)":
                                                                            upDatedSpaName = "Earth Spa";
                                                                            upDatedSpaAddress = "Lakeline Mall," + "<br>" + "11200 Lakeline Mall Dr, Cedar Park, TX 78613"+"<br>" + "(First floor, between Macy's & Plusbeauxatour)";
                                                                            upDatedSpaLINK = "https://forms.gle/pPPf7Sy3TMNsuCmT7";
                                                                            upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/earth-lakeline-spa-led-firming-facial-face-amp-neck-promo";
                                                                            upDatedSpaPhone = "(512) 957-0399";
                                                                            upDatedDurationTotal = "85 Minutes";
                                                                            upDatedDurationOne = "- 60 Minutes Non-Surgical Lifting Facial";
                                                                            upDatedDurationTwo = "- 25 Minutes Consultation";
                                                                            promoPrice = "70";
                                                                            upDatedActualSpaPhone = "Can't find our spa? Give us a call at (512) 551-9944";
                                                                            treatmentSelected = "LED Firming Facial Face & Neck Treatment";
                                                                            newSpaPhoneNumberSelected = "(512) 551-9944";
                                                                            break;


                                                                                case "Earth Lakeline Elastin Facial (Face and Neck)":
                                                                                    upDatedSpaName = "Earth Spa";
                                                                                    upDatedSpaAddress = "Lakeline Mall," + "<br>" + "11200 Lakeline Mall Dr, Cedar Park, TX 78613"+"<br>" + "(First floor, between Macy's & Plusbeauxatour)";
                                                                                    upDatedSpaLINK = "https://forms.gle/pPPf7Sy3TMNsuCmT7";
                                                                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/earth-lakeline-spa-elastin-facial-face-amp-neck-promo";
                                                                                    upDatedSpaPhone = "(512) 957-0399";
                                                                                    upDatedDurationTotal = "85 Minutes";
                                                                                    upDatedDurationOne = "- 60 Minutes Elastin Facial (Face&Neck)";
                                                                                    upDatedDurationTwo = "- 25 Minutes Consultation";
                                                                                    promoPrice = "70";
                                                                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (512) 551-9944";
                                                                                    treatmentSelected = "Elastin Faciel Face & Neck Treatment";
                                                                                    newSpaPhoneNumberSelected = "(512) 551-9944";
                                                                                    break;
        
                                                                                    case "Earth Lakeline Skin Tightening Facial (Face and Neck) + Free Scalp Massage":
                                                                                        upDatedSpaName = "Earth Spa";
                                                                                        upDatedSpaAddress = "Lakeline Mall," + "<br>" + "11200 Lakeline Mall Dr, Cedar Park, TX 78613"+"<br>" + "(First floor, between Macy's & Plusbeauxatour)";
                                                                                        upDatedSpaLINK = "https://forms.gle/pPPf7Sy3TMNsuCmT7";
                                                                                        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/earth-lakeline-skin-tightening-facial-face-amp-neck-fsm-promo";
                                                                                        upDatedSpaPhone = "(512) 957-0399";
                                                                                        upDatedDurationTotal = "85 Minutes";
                                                                                        upDatedDurationOne = "- 60 Minutes Skin Tightening Facial (Face & Neck) + Free Scalp Massage";
                                                                                        upDatedDurationTwo = "- 25 Minutes Consultation";
                                                                                        promoPrice = "70"
                                                                                        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (512) 551-9944";
                                                                                        treatmentSelected = "Skin Tightening Face & Neck Treatment";
                                                                                        newSpaPhoneNumberSelected = "(512) 551-9944";
                                                                                        break;

                                                                                    
                                                                                    
                                                        
                                                            case "Earth Barton Creek Body Sculpting":
                                                                upDatedSpaName = "Earth Tech Spa";
                                                                upDatedSpaAddress = "Barton Creek Square," + "<br>" + "2901 S Capital of Texas Hwy, Austin, TX 78746"+"<br>" + "(2nd floor, in front of Forever 21 between Express and Dillard's)";
                                                                upDatedSpaLINK = "https://forms.gle/qqJDfZr9QmL1cJye6";
                                                                upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/earth-tech-barton-creek-body-sculpting-body-sculpting-promo-page";
                                                                upDatedSpaPhone = "(512) 356-9260";
                                                                upDatedDurationTotal = "60 Minutes";
                                                                upDatedDurationOne = "- 60 Minutes Body Sculpting & Consultation";
                                                                upDatedDurationTwo = " ";
                                                                promoPrice = "79.95"
                                                                upDatedActualSpaPhone = "Can't find our spa? Give us a call at (512) 992-0050";
                                                                treatmentSelected = "Body Sculpting Treatment";
                                                                newSpaPhoneNumberSelected = "(512) 992-0050";
                                                                break;

                                                                case "Earth Barton Creek Neck Tightening":
                                                                upDatedSpaName = "Earth Tech Spa";
                                                                upDatedSpaAddress = "Barton Creek Square," + "<br>" + "2901 S Capital of Texas Hwy, Austin, TX 78746"+"<br>" + "(2nd floor, in front of Forever 21 between Express and Dillard's)";
                                                                upDatedSpaLINK = "https://forms.gle/qqJDfZr9QmL1cJye6";
                                                                upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/earth-tech-barton-creek-spa-led-neck-lift-promo-page";
                                                                upDatedSpaPhone = "(512) 356-9260";
                                                                upDatedDurationTotal = "60 Minutes";
                                                                upDatedDurationOne = "- 60 Minutes Neck Lifting & Consultation";
                                                                upDatedDurationTwo = " ";
                                                                promoPrice = "59.95"
                                                                upDatedActualSpaPhone = "Can't find our spa? Give us a call at (512) 992-0050";
                                                                treatmentSelected = "Neck Tightening Treatment";
                                                                newSpaPhoneNumberSelected = "(512) 992-0050";
                                                                break;

                                                                case "Earth Barton Creek Collagen Lifting":
                                                                upDatedSpaName = "Earth Tech Spa";
                                                                upDatedSpaAddress = "Barton Creek Square," + "<br>" + "2901 S Capital of Texas Hwy, Austin, TX 78746"+"<br>" + "(2nd floor, in front of Forever 21 between Express and Dillard's)";
                                                                upDatedSpaLINK = "https://forms.gle/qqJDfZr9QmL1cJye6";
                                                                upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/earth-tech-barton-creek-spa-non-surgical-collagen-lift-promo-page";
                                                                upDatedSpaPhone = "(512) 356-9260";
                                                                upDatedDurationTotal = "60 Minutes";
                                                                upDatedDurationOne = "- 60 Minutes Collagen Lifting & Consultation";
                                                                upDatedDurationTwo = " ";
                                                                promoPrice = "59.95"
                                                                upDatedActualSpaPhone = "Can't find our spa? Give us a call at (512) 992-0050";
                                                                treatmentSelected = "Collagen Lifting Treatment";
                                                                newSpaPhoneNumberSelected = "(512) 992-0050";
                                                                break;

                                                                case "Earth Barton Creek Chin Tightening":
                                                                    upDatedSpaName = "Earth Tech Spa";
                                                                    upDatedSpaAddress = "Barton Creek Square," + "<br>" + "2901 S Capital of Texas Hwy, Austin, TX 78746"+"<br>" + "(2nd floor, in front of Forever 21 between Express and Dillard's)";
                                                                    upDatedSpaLINK = "https://forms.gle/qqJDfZr9QmL1cJye6";
                                                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/earthtech-bartoncreek-chin-promo";
                                                                    upDatedSpaPhone = "(512) 356-9260";
                                                                    upDatedDurationTotal = "60 Minutes";
                                                                    upDatedDurationOne = "- 60 Minutes Chin Tightening & Consultation";
                                                                    upDatedDurationTwo = " ";
                                                                    promoPrice = "70"
                                                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (512) 992-0050";
                                                                    treatmentSelected = "Chin Tightening Treatment";
                                                                    newSpaPhoneNumberSelected = "(512) 992-0050";
                                                                    break;

                                                                    case "Earth Aventura LED Anti-aging":
                                                                        upDatedSpaName = "Earth Tech Spa";
                                                                        upDatedSpaAddress = "Promenade Shops," + "<br>" + "20335 Biscayne Blvd Suite #10 Miami, FL 33180"+"<br>" + "(Between Chuck E. Cheese and Olympia Gym)";
                                                                        upDatedSpaLINK = "https://forms.gle/tsbzwRoFssaCfHnN8";
                                                                        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/earth-aventura-led-promo";
                                                                        upDatedSpaPhone = "(786) 539-3034";
                                                                        upDatedDurationTotal = "75 Minutes";
                                                                        upDatedDurationOne = "- 50 Minutes LED Anti-aging Experience";
                                                                        upDatedDurationTwo = "- 25 Minutes Consultation";
                                                                        promoPrice = "59.95"
                                                                        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (305) 203-2300";
                                                                        treatmentSelected = "LED Anti-aging Treatment";
                                                                        newSpaPhoneNumberSelected = "(305) 203-2300";
                                                                        break;

                                                                        case "Earth Aventura LED Skin Tightening":
                                                                        upDatedSpaName = "Earth Tech Spa";
                                                                        upDatedSpaAddress = "Promenade Shops," + "<br>" + "20335 Biscayne Blvd Suite #10 Miami, FL 33180"+"<br>" + "(Between Chuck E. Cheese and Olympia Gym)";
                                                                        upDatedSpaLINK = "https://forms.gle/tsbzwRoFssaCfHnN8";
                                                                        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/earth-aventura-led-skin-tightening-promo";
                                                                        upDatedSpaPhone = "(786) 539-3034";
                                                                        upDatedDurationTotal = "75 Minutes";
                                                                        upDatedDurationOne = "- 50 Minutes LED Skin Tightening Experience";
                                                                        upDatedDurationTwo = "- 25 Minutes Consultation";
                                                                        promoPrice = "59.95"
                                                                        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (305) 203-2300";
                                                                        treatmentSelected = "LED Skin Tightening Treatment";
                                                                        newSpaPhoneNumberSelected = "(305) 203-2300";
                                                                        break;

                                                                        case "Earth Aventura Non-surgical Facelift":
                                                                        upDatedSpaName = "Earth Tech Spa";
                                                                        upDatedSpaAddress = "Promenade Shops," + "<br>" + "20335 Biscayne Blvd Suite #10 Miami, FL 33180"+"<br>" + "(Between Chuck E. Cheese and Olympia Gym)";
                                                                        upDatedSpaLINK = "https://forms.gle/tsbzwRoFssaCfHnN8";
                                                                        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/earth-aventura-nonsurgicalfacelift-promo";
                                                                        upDatedSpaPhone = "(786) 539-3034";
                                                                        upDatedDurationTotal = "75 Minutes";
                                                                        upDatedDurationOne = "- 50 Minutes LED Skin Tightening Experience";
                                                                        upDatedDurationTwo = "- 25 Minutes Consultation";
                                                                        promoPrice = "59.95"
                                                                        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (305) 203-2300";
                                                                        treatmentSelected = "Non-surgical Face Lift Treatment";
                                                                        newSpaPhoneNumberSelected = "(305) 203-2300";
                                                                        break;


                                                                        case "Earth Aventura LED Light Facial":
                                                                        upDatedSpaName = "Earth Tech Spa";
                                                                        upDatedSpaAddress = "Promenade Shops," + "<br>" + "20335 Biscayne Blvd Suite #10 Miami, FL 33180"+"<br>" + "(Between Chuck E. Cheese and Olympia Gym)";
                                                                        upDatedSpaLINK = "https://forms.gle/tsbzwRoFssaCfHnN8";
                                                                        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/earth-aventura-ledlight-promo";
                                                                        upDatedSpaPhone = "(786) 539-3034";
                                                                        upDatedDurationTotal = "75 Minutes";
                                                                        upDatedDurationOne = "- 50 Minutes LED Skin Tightening Experience";
                                                                        upDatedDurationTwo = "- 25 Minutes Consultation";
                                                                        promoPrice = "59.95"
                                                                        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (305) 203-2300";
                                                                        treatmentSelected = "LED Light Facial Treatment";
                                                                        newSpaPhoneNumberSelected = "(305) 203-2300";
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
                                                                        break;  
                                                                    
                                                                case "Supreme Brea":
                                                                    upDatedSpaName = "Supreme Spa";
                                                                    upDatedSpaAddress = "910 E birch st. suite #200, Brea, CA 92821"+"<br>"+"[Embassy court near embassy hotel Ground floor (#2 in the elevator)] Please use underground parking of the Embassy Hotel";
                                                                    upDatedSpaLINK = "https://forms.gle/4x1BvF7zdW75rkCg8";
                                                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/supreme-spa-brea-led-promo-page" ;
                                                                    upDatedSpaPhone = "(714) 592-0373";
                                                                    upDatedDurationTotal = "60 Minutes";
                                                                    upDatedDurationOne = "- 15 Minutes Cleaning";
                                                                    upDatedDurationTwo = "- 45 Minutes LED Light Experience & Consultation";
                                                                    promoPrice = "79.95"
                                                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (714) 784-6884";
                                                                    treatmentSelected = "LED Treatment";
                                                                    newSpaPhoneNumberSelected = "(714) 784-6884";
                                                                    break;  


                                    case "Tresor Rare Las Olas":
                                        upDatedSpaName = "Tresor Rare Spa";
                                    upDatedSpaAddress = "617 east las Olas Blvd, Fort Lauderdale, FL 333011"+"<br>"+"(Next to Pan'e Dolci Italian Bakery)";
                                    upDatedSpaLINK = "https://forms.gle/ojW56idhkRSLmsCa9";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/tresor-rare-las-olas-spa-led-promo-page" ;
                                    upDatedSpaPhone = "(786) 206-8520";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 20 Minutes Deep Skin Cleaning";
                                    upDatedDurationTwo = "- 40 Minutes LED Light Experience & Consultation";
                                    promoPrice = "79.95"
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (754) 701-0937";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(754) 701-0937";
                                    break;  

                                    case "Lola Beauty Tanger":
                                        upDatedSpaName = "Lola Beauty spa";
                                    upDatedSpaAddress = "Tanger Outlets," + "<br>" + "4840 Tanger outlet Blvd , North Charleston SC 29418"+"<br>"+"(In front of 'The North Face')";
                                    upDatedSpaLINK = "https://forms.gle/5EoAxgvLh111YhVcA";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/lola-beauty-spa-tanger-led-promo-page" ;
                                    upDatedSpaPhone = "(843) 277-9518";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 20 Minutes Deep Skin Cleaning";
                                    upDatedDurationTwo = "- 40 Minutes LED Light Experience & Consultation";
                                    promoPrice = "79.95"
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (843) 818-4617";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(843) 818-4617";
                                    break;  

                                    case "Lavelier Orange Park":
                                        upDatedSpaName = "Lavelier spa";
                                    upDatedSpaAddress = "Orange Park Mall," + "<br>" + "1910 Wells Rd, Orange Park, FL 32073"+"<br>"+"(Next to 'Helzberg Diamonds')";
                                    upDatedSpaLINK = "https://forms.gle/kWcQs5a8tgAPpaqe6";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/lavelier-orange-park-spa-led-promo-page" ;
                                    upDatedSpaPhone = "(904) 458-7896";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 30 Minutes Deep Skin Cleaning";
                                    upDatedDurationTwo = "- 30 Minutes LED Light Experience & Consultation";
                                    promoPrice = "79.95"
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (904) 592-7266";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(904) 592-7266";
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
                                    break; 

                                    case "Elevatione Spa Beauty RF Facial":
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
                                    treatmentSelected = "RF Facial Treatment";
                                    newSpaPhoneNumberSelected = "(561) 469-6135";
                                    break; 

                                    case "Elevatione Spa Beauty Non-Surgical Lifting With Mesotherapy Facial":
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
                                    treatmentSelected = "Non-Surgical Lifting With Mesotherapy Facial";
                                    newSpaPhoneNumberSelected = "(561) 469-6135";
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
                                    break; 
                                    

                                    case "Adore Estero":
                                        upDatedSpaName = "Adore Spa";
                                    upDatedSpaAddress = "Miromar Outlets,"+"<br>"+"10801 Corkscrew Rd Estero, FL 33928"+"<br>"+"(Between Ford's Garage & Aerie)";
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
                                    break; 

                                    case "AVOLOGI Eneo Victoria":
                                        upDatedSpaName = "Avologi Eneo Spa";
                                    upDatedSpaAddress = "3147 Douglas Street Victoria, BC V8Z 6E3"+"<br>"+"(Mayfair Shopping Centre next to Zoomies)";
                                    upDatedSpaLINK = "https://forms.gle/VN9LgHRNeDcctfkg9";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/avologi-victoria-led-promo";
                                    upDatedSpaPhone = "(250) 410-3324";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 20 Minutes Cleansing";
                                    upDatedDurationTwo = "- 20 Minutes LED Treatmen" + "<br>" + "- 20 Minutes Consultation";
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (778) 265-5141";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(778) 265-5141";
                                    break; 

                                    case "AVOLOGI Eneo Woodgrove":
                                        upDatedSpaName = "Avologi Eneo Spa";
                                    upDatedSpaAddress = "6631 Island Hwy, Nanaimo, BC V9T 4T7"+"<br>"+"(Woodgrove Centre, across the hall from The Shoe Company)";
                                    upDatedSpaLINK = "https://forms.gle/L7mp4FhBtw9Z8SeG8";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/avologieneo-woodgrove-nonsurgical-face-neck-lift-promo";
                                    upDatedSpaPhone = "(250) 384-2980";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 20 Minutes Cleansing";
                                    upDatedDurationTwo = "- 20 Minutes LED Treatmen" + "<br>" + "- 20 Minutes Consultation";
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (587) 589-4007";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(587) 589-4007";
                                    break; 

                                    case "AVOLOGI Eneo Metrotown":
                                        upDatedSpaName = "Avologi Eneo Spa";
                                    upDatedSpaAddress = "Metrotown Mall, 4700 Kingsway #1170, Burnaby, BC V5H 4M5, Canada"+"<br>"+"(Ground level in the Indigo Books wing, at the bottom of the escalator)";
                                    upDatedSpaLINK = "https://forms.gle/c8TFXfwBMpLd3TcM6";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/avologi-metrotown-ledpromo";
                                    upDatedSpaPhone = "(778) 262-1606";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 20 Minutes Cleansing and Facial Massage";
                                    upDatedDurationTwo = "- 20 Minutes LED Treatment" + "<br>" + "- 20 Minutes Consultation";
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (604) 423-4141";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(604) 423-4141";
                                    break; 

                                    case "AVOLOGI Eneo Metrotown EMS":
                                        upDatedSpaName = "Avologi Eneo Spa";
                                    upDatedSpaAddress = "Metrotown Mall, 4700 Kingsway #1170, Burnaby, BC V5H 4M5, Canada"+"<br>"+"(Ground level in the Indigo Books wing, at the bottom of the escalator)";
                                    upDatedSpaLINK = "https://forms.gle/c8TFXfwBMpLd3TcM6";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/avologi-eneo-metrotown-ems-promo";
                                    upDatedSpaPhone = "(778) 262-1606";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 20 Minutes Cleansing and Facial Massage";
                                    upDatedDurationTwo = "- 20 Minutes EMS Treatment" + "<br>" + "- 20 Minutes Consultation";
                                    promoPrice = "99.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (604) 423-4141";
                                    treatmentSelected = "EMS Anti-aging Treatment";
                                    newSpaPhoneNumberSelected = "(604) 423-4141";
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
                                    break; 

                                    case "Introstem Redding":
                                        upDatedSpaName = "Introstem Spa";
                                    upDatedSpaAddress = "900 Dana Dr Redding, CA 96003"+"<br>"+"(Mt. Shasta Mall, next to Auntie Anne's)";
                                    upDatedSpaLINK = "https://forms.gle/Eqg9xCBYDHTLCcz16";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/introstem-redding-led-promo";
                                    upDatedSpaPhone = "(279) 972-0008";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 5 minutes Cleansing";
                                    upDatedDurationTwo = "- 55 minutes LED Anti-aging treatment & Consultation";
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (530) 768-1056";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(530) 768-1056";
                                    break; 

                                    case "Introstem Medford":
                                        upDatedSpaName = "Introstem Spa";
                                    upDatedSpaAddress = "1600 N Riverside Ave , Medford, OR , 97501"+"<br>"+"(Rogue Valley Mall, 1st floor, in front of American Eagle)";
                                    upDatedSpaLINK = "https://forms.gle/iNEoopF9HxSicZFE9";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/introstem-medford-led-promo";
                                    upDatedSpaPhone = "(541) 549-1196";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 30 minutes Cleansing";
                                    upDatedDurationTwo = "- 30 minutes LED Anti-aging treatment & Consultation";
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (541) 816-4404";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(541) 816-4404";
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
                                    break; 

                                    case "Luminous Skin-Tech":
                                        upDatedSpaName = "Luminous Skin-Tech Spa";
                                    upDatedSpaAddress = "La Palmera Mall," + "<br>" + "5488 S Padre island, Corpus Christi, TX 78411"+"<br>"+"(Second floor, next to H&M)";
                                    upDatedSpaLINK = "https://forms.gle/Yaa4AmATGwwPAAVW7";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/luminous-ledpromo";
                                    upDatedSpaPhone = "(361) 356-1025";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 15 minutes Cleansing";
                                    upDatedDurationTwo = "- 30 minutes LED Non-Surgical Face & Neck Lift" + "<br>" + "- 15 minutes of Consultation";
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (361) 462-4319";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(361) 462-4319";
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
                                    break; 

                                    case "Premier Pensacola":
                                        upDatedSpaName = "Premier Spa";
                                    upDatedSpaAddress = "Cordova Mall," + "<br>" + "5100 N 9th Ave Pensacola, FL 32504"+"<br>"+"(Dick’s aisle, next to Buckle)";
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
                                    break; 

                                    case "Tierra Med Spa AquaPure Hydration":
                                        upDatedSpaName = "Tierra Med Spa";
                                    upDatedSpaAddress = "The Beaches Toronto ," + "<br>" + "1912 Queen St. E. Toronto ON M4L1H5";
                                    upDatedSpaLINK = "https://forms.gle/JpNRkQvGJnqLgLrs6";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/tierramed-hydration-aquapure-promo";
                                    upDatedSpaPhone = "(647) 476-2808";
                                    upDatedDurationTotal = "50 Minutes";
                                    upDatedDurationOne = "- 10 Minutes Cleansing";
                                    upDatedDurationTwo = "- 40 Minutes AquaPure Hydration Facial & Consultation";
                                    promoPrice = "99.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (647) 370-3334";
                                    treatmentSelected = "AquaPure Treatment";
                                    newSpaPhoneNumberSelected = "(647) 370-3334";
                                    break; 

                                    case "Tierra Med Spa AquaPure Hydration 79.95":
                                        upDatedSpaName = "Tierra Med Spa";
                                    upDatedSpaAddress = "The Beaches Toronto ," + "<br>" + "1912 Queen St. E. Toronto ON M4L1H5";
                                    upDatedSpaLINK = "https://forms.gle/JpNRkQvGJnqLgLrs6";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/new-tierramed-aquapure-promo-page";
                                    upDatedSpaPhone = "(647) 476-2808";
                                    upDatedDurationTotal = "50 Minutes";
                                    upDatedDurationOne = "- 10 Minutes Cleansing";
                                    upDatedDurationTwo = "- 40 Minutes AquaPure Hydration Facial & Consultation";
                                    promoPrice = "79.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (647) 370-3334";
                                    treatmentSelected = "AquaPure Treatment";
                                    newSpaPhoneNumberSelected = "(647) 370-3334";
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
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (647) 370-3334";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(647) 370-3334";
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
                                    break; 

                                    case "Triangular Spa LED":
                                    upDatedSpaName = "Triangular Spa";
                                    upDatedSpaAddress = "447 S Federal Hwy, Deerfield Beach, FL 33441" + "<br>" + "(Next to Say Fitness)";
                                    upDatedSpaLINK = "https://forms.gle/mJb9u8wV5XXH7SC69";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/triangular-spa-led-promo";
                                    upDatedSpaPhone = "(754) 333-2318";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 60 Minutes LED Experience & Consultation";
                                    upDatedDurationTwo = " ";
                                    promoPrice = "59.95";
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (954) 637-4226";
                                    treatmentSelected = "LED Treatment";
                                    newSpaPhoneNumberSelected = "(954) 637-4226";
                                    break; 

                                    case "Triangular Spa Laser Lipo":
                                    upDatedSpaName = "Triangular Spa";
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
                                            break; 


                                        case "Orogold Valencia":
                                            upDatedSpaName = "OROGOLD Spa";
                                            upDatedSpaAddress = "Westfield Valencia Town Center, 24201 Valencia Blvd, Valencia, CA 91355" + "<br>" + "(2nd floor near 'Lush')";
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
                                            break; 

                                            case "Pura Vida AB":
                                                upDatedSpaName = "Pura Vida Spa";
                                                upDatedSpaAddress = "Southcentre Mall, 100 Anderson Rd SE, Calgary, AB T2J 3V1" + "<br>" + "(First Floor, across from Sport Check)";
                                                upDatedSpaLINK = "https://forms.gle/w7fRjryo9sTSq5p27";
                                                upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/puravida-antiaging-led-promo";
                                                upDatedSpaPhone = "(825) 258-5779";
                                                upDatedDurationTotal = "60 Minutes";
                                                upDatedDurationOne = "- 15 Minnutes Cleansing";
                                                upDatedDurationTwo = "- 45 Minutes LED Experience & Consultation";
                                                promoPrice = "79.95";
                                                upDatedActualSpaPhone = "Can't find our spa? Give us a call at (587) 800-1699";
                                                treatmentSelected = "LED Treatment";
                                                newSpaPhoneNumberSelected = "(587) 800-1699";
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
                                                    break; 

                                                    case "Rose Spa":
                                                        upDatedSpaName = "Rose Spa";
                                                        upDatedSpaAddress = "635 SW Morrison St, Portland, OR 97205" + "<br>" + "(Inside of the Wells Fargo Building, across from Starbucks)";
                                                        upDatedSpaLINK = "https://forms.gle/zx1bo5MnuVnqwXYaA";
                                                        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/rose-beauty-led-promo";
                                                        upDatedSpaPhone = "(971) 350-7408";
                                                        upDatedDurationTotal = "60 Minutes";
                                                        upDatedDurationOne = "- 10 Minnutes Cleansing";
                                                        upDatedDurationTwo = "- 50 Minutes LED Experience & Consultation";
                                                        promoPrice = "79.95";
                                                        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (503) 206-6696";
                                                        treatmentSelected = "LED Treatment";
                                                        newSpaPhoneNumberSelected = "(503) 206-6696";
                                                        break; 

                                                    case "Rose Spa Body Treatment":
                                                        upDatedSpaName = "Rose Spa";
                                                        upDatedSpaAddress = "635 SW Morrison St, Portland, OR 97205" + "<br>" + "(Inside of the Wells Fargo Building, across from Starbucks)";
                                                        upDatedSpaLINK = "FORM";
                                                        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/rosebeauty-revo-promo";
                                                        upDatedSpaPhone = "(971) 350-7408";
                                                        upDatedDurationTotal = "45 Minutes";
                                                        upDatedDurationOne = "- 30 minutes Body Tightening & Healing Treatment";
                                                        upDatedDurationTwo = "- 15 minutes Consultation";
                                                        promoPrice = "79.95";
                                                        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (503) 206-6696";
                                                        treatmentSelected = "Body Tightening & Healing Treatment";
                                                        newSpaPhoneNumberSelected = "(503) 206-6696";
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
                                                            break; 

                                                            case "ATIK Aesthetics":
                                                                upDatedSpaName = "ATIK Aesthetics Spa";
                                                                upDatedSpaAddress = "PNC Bank Building," + "<br>" + "9033 Glades Rd, Boca Raton, FL 33434" + "<br>" + "(2nd floor, Use the back entrance, Suite B)";
                                                                upDatedSpaLINK = "https://forms.gle/HZ6bnRKxtijtYkZt6";
                                                                upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/atik-aesthetics-ledpromo";
                                                                upDatedSpaPhone = "(561) 210-0586";
                                                                upDatedDurationTotal = "60 Minutes";
                                                                upDatedDurationOne = "60 Minutes LED Treatment";
                                                                upDatedDurationTwo = "";
                                                                promoPrice = "69.95";
                                                                upDatedActualSpaPhone = "Can't find our spa? Give us a call at (954) 408-8882";
                                                                treatmentSelected = "LED Treatment";
                                                                newSpaPhoneNumberSelected = "(954) 408-8882";
                                                                break; 

                                                                case "Voupre Beverly Hills":
                                                                    upDatedSpaName = "Voupre Spa";
                                                                    upDatedSpaAddress = "363 N Beverly Dr, Beverly Hills, CA 90210" + "<br>" + "(In Front of The Cheesecake Factory)";
                                                                    upDatedSpaLINK = "https://forms.gle/K4G86angPuq3yjmB7";
                                                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/voupre-ca-promo-page";
                                                                    upDatedSpaPhone = "(310) 751-2750";
                                                                    upDatedDurationTotal = "45 Minutes";
                                                                    upDatedDurationOne = "15 Cleansing";
                                                                    upDatedDurationTwo = "30 Minutes LED Treatment & Consultation";
                                                                    promoPrice = "79.95";
                                                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (310) 734-7031";
                                                                    treatmentSelected = "LED Treatment";
                                                                    newSpaPhoneNumberSelected = "(310) 734-7031";
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

