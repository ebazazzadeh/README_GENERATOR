// This function returns a license badge based on which license is passed in, If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license == 'CC0 (Creative Commons Zero)') {
      return '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)'
    };
    if (license == 'MIT') {
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    };
    if (license == 'Apache 2.0') {
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    };
    if (license == 'BSD 3-Clause') {
      return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
    }
    if (license == 'none') {
      return ''
    }
  }
  
  // This function returns the license link, If there is no license, return an empty string
  function renderLicenseLink(license) {
    if (license == 'CC0 (Creative Commons Zero)') {
      return '--- \n \n ## License \n \n https://creativecommons.org/publicdomain/zero/1.0/'
    };
    if (license == 'MIT') {
      return '--- \n \n ## License \n \n https://opensource.org/licenses/MIT'
    };
    if (license == 'Apache 2.0') {
      return '--- \n \n ## License \n \n https://opensource.org/licenses/Apache-2.0'
    };
    if (license == 'BSD 3-Clause') {
      return '--- \n \n ## License \n \n https://opensource.org/licenses/BSD-3-Clause'
    }
  
  }
function generatReadMeFile(data) {
    var licenseBadge = renderLicenseBadge(data.license);
    var licenseLink = renderLicenseLink(data.license);
    if (data.promptImage === "Yes") {
      var image1 = "\n \n ![image1](" + data.image1 + ") \n \n";
    } else {
      var image1 = "";
    }
    if (data.promptImage2 === "Yes") {
      var image2 = "\n \n ![image2](" + data.image2 + ") \n \n";
    } else {
      var image2 = "";
    }
    if (data.promptImage3 === "Yes") {
      var image3 = "\n \n ![image3](" + data.image3 + ") \n \n";
    } else {
      var image3 = "";
    }
    if (data.promptVideo === "Yes") {
      var video1 = "\n \n ![video1](" + data.video1 + ") \n \n";
    } else {
      var video1 = "";
    }
    if (data.gitTorF === 'Yes') {
      var gitHubIO = '- Deployed site: [GitHub Pages](https://' + data.gitName + '.github.io/' + data.gitRepo + '/)'
    } else if (data.projLinks === "") {
      var gitHubIO = ''
    } else {
      var gitHubIO = '- Deployed site: [Deployed Here](' + data.projLinks + ')'
    }
    if (data.gitName !== "") {
      var gitHubHome = '| [GitHub](https://github.com/' + data.gitName + ')';
      if (data.gitRepoTF === 'Yes' || data.gitTorF === 'Yes') {
        var gitHubName = '- GitHub: [' + data.gitName + '](https://github.com/' + data.gitName + '/' + data.gitRepo + ')';
      } else {
        var gitHubName = ''
      }
    } else {
      var gitHubHome = '';
    }
  
    // renderLicenseSection(data.license);
    return `# ${data.title}
  
  
    ${licenseBadge}
    
    ---
    ## Author
    
    ${data.name}
    
    
    ${gitHubHome} | [Email](${data.email}) |
    
    ---
    ## Project Links:
    
    ${gitHubIO}
    ${gitHubName}
    
    ---
    ## Table of Contents
    
    - [Description](##Description)
    
    - [Installation](##Installation)
    
    - [Usage](##Usage)
    
    - [Questions](##Questions)
    
    - [License](##License)
    
    - [Contributions](##Contributing)
    
    
    ---
    ## Description
    
    ${data.description}
    ${image1} ${image2} ${image3}
    ${video1}
    
    ---
    ## Installation
    
    ${data.install}
    
    ---
    ## Usage
    
    ${data.usage}
    
    ---
    ## Questions
    
    If you have any questions or concerns please contact me at ${data.email} or any of my contact information above. [Back to Author](##Author)
    
    
    ${licenseLink}
    
    ---
    ## Contributing
    
    ${data.contribute}
    
    If you'd like to contribute, please contact me.
    
   
  
  `;
  }
  
  module.exports = generatReadMeFile;