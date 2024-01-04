import styled from '@emotion/styled';
import { theme } from 'styles';

export const FilterSelectionContainer = styled.div`
  display: inline-flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
  text-transform: capitalize;
`;
export const FilterSelectionOption = styled.div`
  padding: 4px 8px;

  background: ${theme.colors.secGreen};
  display: flex;
  align-items: center;
  gap: 2px;
`;

export const FilterSelectionText = styled.span`
  white-space: nowrap;
  color: ${theme.colors.black};
  font-variant-numeric: lining-nums proportional-nums;
  font-feature-settings: 'ss09' on;

  /* reviews */
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 16px; /* 114.286% */
`;
export const FilterSelectionButton = styled.button`
  padding: 0;
  margin: 0;
  text-decoration: none;
  display: inline-block;
  line-height: 0;
  width: 16px;
  height: 16px;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M11.9021 11.4672C11.9323 11.4954 11.9565 11.5293 11.9734 11.5671C11.9902 11.6048 11.9992 11.6456 12 11.6869C12.0007 11.7282 11.9931 11.7692 11.9776 11.8075C11.9621 11.8459 11.9391 11.8807 11.9099 11.9099C11.8807 11.9391 11.8459 11.9621 11.8075 11.9776C11.7692 11.9931 11.7282 12.0007 11.6869 12C11.6456 11.9992 11.6048 11.9902 11.5671 11.9734C11.5293 11.9565 11.4954 11.9323 11.4672 11.9021L7.99232 8.42771L4.51745 11.9021C4.45912 11.9564 4.38198 11.986 4.30226 11.9846C4.22255 11.9832 4.1465 11.9509 4.09012 11.8945C4.03375 11.8382 4.00145 11.7621 4.00005 11.6824C3.99864 11.6027 4.02823 11.5255 4.08258 11.4672L7.55694 7.99232L4.08258 4.51745C4.02823 4.45912 3.99864 4.38198 4.00005 4.30226C4.00145 4.22255 4.03375 4.1465 4.09012 4.09012C4.1465 4.03375 4.22255 4.00145 4.30226 4.00005C4.38198 3.99864 4.45912 4.02823 4.51745 4.08258L7.99232 7.55694L11.4672 4.08258C11.5255 4.02823 11.6027 3.99864 11.6824 4.00005C11.7621 4.00145 11.8382 4.03375 11.8945 4.09012C11.9509 4.1465 11.9832 4.22255 11.9846 4.30226C11.986 4.38198 11.9564 4.45912 11.9021 4.51745L8.42771 7.99232L11.9021 11.4672Z" fill="black"/><path d="M11.9021 11.4672C11.9323 11.4954 11.9565 11.5293 11.9734 11.5671C11.9902 11.6048 11.9992 11.6456 12 11.6869C12.0007 11.7282 11.9931 11.7692 11.9776 11.8075C11.9621 11.8459 11.9391 11.8807 11.9099 11.9099C11.8807 11.9391 11.8459 11.9621 11.8075 11.9776C11.7692 11.9931 11.7282 12.0007 11.6869 12C11.6456 11.9992 11.6048 11.9902 11.5671 11.9734C11.5293 11.9565 11.4954 11.9323 11.4672 11.9021L7.99232 8.42771L4.51745 11.9021C4.45912 11.9564 4.38198 11.986 4.30226 11.9846C4.22255 11.9832 4.1465 11.9509 4.09012 11.8945C4.03375 11.8382 4.00145 11.7621 4.00005 11.6824C3.99864 11.6027 4.02823 11.5255 4.08258 11.4672L7.55694 7.99232L4.08258 4.51745C4.02823 4.45912 3.99864 4.38198 4.00005 4.30226C4.00145 4.22255 4.03375 4.1465 4.09012 4.09012C4.1465 4.03375 4.22255 4.00145 4.30226 4.00005C4.38198 3.99864 4.45912 4.02823 4.51745 4.08258L7.99232 7.55694L11.4672 4.08258C11.5255 4.02823 11.6027 3.99864 11.6824 4.00005C11.7621 4.00145 11.8382 4.03375 11.8945 4.09012C11.9509 4.1465 11.9832 4.22255 11.9846 4.30226C11.986 4.38198 11.9564 4.45912 11.9021 4.51745L8.42771 7.99232L11.9021 11.4672Z" fill="black" fill-opacity="0.2"/></svg>');
`;
