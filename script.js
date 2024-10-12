// Function to create Element :
function ele(tag, classname, id, text) {
  let tags = document.createElement(tag);
  tags.classList = classname;
  tags.id = id;
  tags.innerHTML = text;
  return tags;
}

// Create all elements :
let container = ele("div", "container", "", "");
let h1 = ele("h1", "rounded text-center p-3 text-white", "", "CITY BIKES");
const p = ele(
  "p",
  "text-center fs-3 text-danger",
  "",
  "Show All Bike Details"
);
const row = ele("div", "row mb-3", "", "");

// Fetch API :
const url1 = fetch("https://api.citybik.es/v2/networks");
url1
  .then((data1) => data1.json()) //convert to json format and to object
  .then((result1) => {
    const obj = result1.networks;
   // console.log(obj);
    for (i = 0; i < obj.length; i++) {
      const col = document.createElement("div");
      col.classList = "col-sm-3 col-md-4 col-lg-4 mb-3";
      col.innerHTML = `
      <div class="card h-100">
      <div class="card-header text-bg-primary"><h5 class="card-title text-center">Name : ${obj[i].name}</h5></div>
      <div class="card-body text-bg-dark text-warning">
      <p class="card-text"><strong class="text-white">City : </strong>${obj[i].location.city}</P>
      <p class="card-text"><strong class="text-white">Country :</strong> ${obj[i].location.country}</P>
      <p class="card-text"><strong class="text-white">Latitude : </strong>${obj[i].location.latitude}</P>
      <p class="card-text"><strong class="text-white">Longitude :</strong> ${obj[i].location.longitude}</P>
      <p class="card-text"><strong class="text-white">Company :</strong> ${obj[i].company}</P>
      </div>
     </div>
      `;
      row.append(col);
    }
    container.append(row);
    document.body.append(h1, p, container);
  });

