const data = {
  name: "eStartup templates",
  keyword: "XXX DODODOD Home Care",
  pagetitle: "XXX Surge Name",
  targeturl: "https://google.com",
  metadescription: "TEST are a team of talented designers making websites with Bootstrap",
  // pagedescription: "TEST are a team of talented designers making websites with Bootstrap",
  businessname: "Senior Helpers Indianaopils",
  fulladdress: "XXX",
  street: "XXX",
  city: "XXX",
  state: "XXX",
  zip: "XXX",
  latLong: "XXX",
  gmbphone: "XXX",
  websiteurl: "XXX",
  facebook: "XXX",
  twitter: "XXX",
  linkedin: "XXX",
  yelp: "XXX",
  logofilename: "logo.png",
  aboutus: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  publicemail: "xxxxxx@xxx.com",
  // add here surge info
  gmbmapembed: "XXX",
  gmbimageurl: "assets/img/services.jpg",
  youtubeurl: "XXX",
  youtubechannelurl: "XXX",
  youtubeembed: "XXX",
  rssfeedembed: "XXX",
  surgeimage: "XXX",
  youtuberelatedvideourl1: "XXX",
  youtuberelatedvideourl2: "XXX",
  town1name: "XXX",
  town1url: "XXX",
  town2name: "XXX",
  town2url: "XXX",
  town3name: "XXX",
  town3url: "XXX",
  town4name: "XXX",
  town5name: "XXX",
  town6name: "XXX",
  town7name: "XXX",
  town8name: "XXX",
  town9name: "XXX",
  town10name: "XXX",
  owner: "XXXOwner Name",
  descriptionshort: "XXX Description Short = Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.",
  descriptionmedium: "XXX",
  XXX: "XXX",
  XXX: "XXX",
  articletitle: "articletitle",
  article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  ",

  header() {
    return `
      <ul>
        <li><a href="#hero" class="active">Home</a></li>
        <li><a href="#about">About</a></li>
        <li class="dropdown"><a href="#"><span>Services</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
            <ul>
                <li><a href="/home-care">Home Care</a></li>
                <li><a href="/24-hour-home-care">Respite Home Care</a></li>
                <li><a href="/caregivers-for-seniors">Caregivers for Seniors</a></li>
                <li><a href="/hospice-care-at-home">Hospice care at home</a></li>
                <li><a href="/alzhimers-and-dementia-care">Alzheimers and Dementia Care</a></li>
                <li><a href="/private-home-care-aide">Private Home Care Aide</a></li>
                <li><a href="/respite-care">Respite Care</a></li>
            </ul>
        </li>
        <li><a href="#contact">Contact</a></li>
    </ul>`;
  },
  footer() {
    return `
      <footer id="footer" class="footer light-background">
        <div class="container">
        <div class="copyright text-center ">
            <p>© ${new Date().getFullYear()} <span>Copyright</span> <strong class="px-1 sitename">${this.businessname}</strong> <span>All Rights Reserved</span></p>
        </div>
          <!-- <div class="social-links d-flex justify-content-center">
                <a href=""><i class="bi bi-twitter-x"></i></a>
                <a href=""><i class="bi bi-facebook"></i></a>
                <a href=""><i class="bi bi-instagram"></i></a>
                <a href=""><i class="bi bi-linkedin"></i></a>
            </div> -->
        </div>
      </footer>`;
  }
}