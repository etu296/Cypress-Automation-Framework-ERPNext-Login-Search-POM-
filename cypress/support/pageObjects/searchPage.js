class SearchBar {
    search(searchContent) {
    cy.get('#navbar-search')
    .type(searchContent).wait(1000)
    .type('{enter}');
}

}
export default SearchBar;