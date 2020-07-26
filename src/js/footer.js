const footer = (() => {
  const footer = document.createElement('footer');
  footer.setAttribute('class', 'footer bg-light');
  const footerContainer = document.createElement('div');
  footerContainer.setAttribute('class', 'container');
  const rowFooter = document.createElement('div');
  rowFooter.setAttribute('class', 'row');
  const colList = document.createElement('div');
  colList.setAttribute('class', 'col-lg-6 h-100 text-center text-lg-left my-auto');
  const socialList = document.createElement('ul');
  socialList.setAttribute('class', 'list-inline mb-2');
  socialList.innerHTML = `
<li class="list-inline-item">
<a href="#">About</a>
</li>
<li class="list-inline-item">&sdot;</li>
<li class="list-inline-item">
<a href="#">Contact</a>
</li>
<li class="list-inline-item">&sdot;</li>
<li class="list-inline-item">
<a href="#">Terms of Use</a>
</li>
<li class="list-inline-item">&sdot;</li>
<li class="list-inline-item">
<a href="#">Privacy Policy</a>
</li>
`;
  const footerText = document.createElement('p');
  footerText.setAttribute('class', 'text-muted small mb-4 mb-lg-0');
  footerText.innerHTML = '&copy; Your Website 2020. All Rights Reserved.';
  colList.appendChild(socialList);
  colList.appendChild(footerText);
  const colNetwrk = document.createElement('div');
  colNetwrk.setAttribute('class', 'col-lg-6 h-100 text-center text-lg-right my-auto');
  const networkList = document.createElement('ul');
  networkList.setAttribute('class', 'list-inline mb-0');
  networkList.innerHTML = `
<li class="list-inline-item mr-3">
<a href="#">
  <i class="fab fa-facebook fa-2x fa-fw"></i>
</a>
</li>
<li class="list-inline-item mr-3">
<a href="#">
  <i class="fab fa-twitter-square fa-2x fa-fw"></i>
</a>
</li>
<li class="list-inline-item">
<a href="#">
  <i class="fab fa-instagram fa-2x fa-fw"></i>
</a>
</li>
`;
  colNetwrk.appendChild(networkList);
  rowFooter.appendChild(colList);
  rowFooter.appendChild(colNetwrk);
  footerContainer.appendChild(rowFooter);
  footer.appendChild(footerContainer);
  return footer;
})();
export default footer;