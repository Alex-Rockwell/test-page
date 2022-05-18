const toggleTabs = () => {
    let tablinks = document.querySelectorAll('.prices__tablinks')
    let tabcontent = document.querySelectorAll('.tabcontent')
  
    tablinks.forEach(tablink => {
      tablink.addEventListener('click', function(e){
        e.preventDefault();
        let activeTabAttr = e.target.getAttribute('data-tab');
    
        for (let i = 0; i < tablinks.length; i++) {
          let contentAttr = tabcontent[i].getAttribute('data-tab-content')
    
          if (activeTabAttr === contentAttr) {
            tablinks[i].classList.add('active')
            tabcontent[i].classList.add('active')
          } else {
            tablinks[i].classList.remove('active')
            tabcontent[i].classList.remove('active')
          }
        }
      })
    })
}
export {toggleTabs}