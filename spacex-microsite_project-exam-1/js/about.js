const url = "https://api.spacexdata.com/v4/company";

const companyData = document.querySelector(".about-company") 

let name, ceo, coo, cto, cto_propulsion, employees, founded, 
founder, summary, valuation, twitter, elon_twitter, website, 
flickr,  address, city, state

fetch(url)
.then( (Response) => Response.json())
.then( (data) => {
    name = data.name;
    employees = data.employees;
    founded = data.founded;
    founder = data.founder;
    summary = data.summary;
    valuation = data.valuation;
    address = data.headquarters.address;
    city = data.headquarters.city;
    state = data.headquarters.state;
    twitter = data.links.twitter;
    elon_twitter = data.links.elon_twitter;
    website = data.links.website;
    flickr = data.links.flickr;

            document.getElementById('about-company').innerHTML=
                                                              `<h1 class="title">` +name+ `</h1>`+

                                                              `<h3 class="sub">Founder:</h3>` +
                                                              `<p class="des">` +founder+ `</p>`+

                                                              `<h3 class="sub">Founded:</h3>` +
                                                              `<p class="des">` +founded+ `</p>`+

                                                              `<h3 class="sub">Employees:</h3>` +
                                                              `<p class="des">` +employees+ `</p>`+

                                                              `<h3 class="sub">Valuation:</h3>` +
                                                              `<p class="des">` +valuation+ `</p>`+

                                                              `<h3 class="sub">Address:</h3>` +
                                                              `<p class="des">` +address+ `</p>`+
                                                              `<p class="des">` +city+ `</p>`+
                                                              `<p class="des">` +state+ `</p>`+

                                                              `<h3 class="sub">Summary:</h3>`+
                                                              `<p class="des">` +summary+ `</p>`+

                                                              `<h3 class="sub">links:</h3>` +
                                                              `<a href="` +website+ `" class="more-links">Website</a>`+
                                                              `<a href="` +twitter+ `" class="more-links">Twitter</a>`+
                                                              `<a href="` +flickr+ `" class="more-links">Flickr</a>`;
                                    
                                     
    })

    .catch( (error) => console.log("No info"));

