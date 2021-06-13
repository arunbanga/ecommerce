const SidebarListItem = ({ familyName, count, onFamilyClick }) => (
  <a
    href="#"
    className="list-group-item list-style-none list-group-item-action d-flex justify-content-between align-items-center"
    onClick={onFamilyClick}
    id={familyName}
  >
    {familyName}
  </a>
);

export default SidebarListItem;
