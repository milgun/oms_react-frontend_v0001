import { IMenuData } from './vertical/Widgets';

export const testData: IMenuData[] = [
  {
    id: 1,
    label: '기준 정보',
    subMenuItem: [
      {
        id: 11,
        label: 'Test1 Page',
        bindingComponent: 'test/Test1',
        subMenuItem: [
          {
            id: 111,
            label: 'Test2 Page',
            bindingComponent: 'test/Test2',
            subMenuItem: [
              {
                id: 1111,
                label: 'Test3 Page',
                bindingComponent: 'test/Test3',
              },
            ],
          },
        ],
      },
      {
        id: 12,
        label: '공정 기준 정보',
        bindingComponent: 'test/Counter',
      },
      {
        id: 13,
        label: 'Route flow setup',
        bindingComponent: 'test/Test2',
      },
      {
        id: 14,
        label: 'User code',
        bindingComponent: 'test/Test3',
      },
      {
        id: 15,
        label: 'System code',
        bindingComponent: 'test/Test4',
      },
      {
        id: 16,
        label: 'Sap code 기준 정보',
        bindingComponent: 'test/Test5',
      },
      {
        id: 17,
        label: '제품 정보 통합 관리',
        bindingComponent: 'test/Test6',
      },
      {
        id: 18,
        label: 'Mailing 관리',
        bindingComponent: 'test/Test1',
      },
      {
        id: 19,
        label: '단축키 설정',
        bindingComponent: 'test/WaitingWindow',
      },
    ],
  },
  {
    id: 2,
    label: 'System 관리',
    subMenuItem: [
      {
        id: 21,
        label: '사용자 정보 관리',
        subMenuItem: [
          { id: 21, label: '사용자 정보 관리' },
          { id: 22, label: '메뉴' },
          { id: 221, label: 'Main 메뉴' },
          { id: 222, label: 'Sub 메뉴' },
          { id: 223, label: '메인 메뉴' },
          { id: 224, label: '보조 메뉴' },
        ],
      },
      { id: 23, label: 'Role 그룹 기준정보' },
      { id: 24, label: 'Property 관리' },
      { id: 25, label: 'Map Symbol Color 관리' },
      { id: 26, label: 'Calendar 관리' },
      { id: 27, label: '언어 관리' },
      { id: 28, label: '알람 이력 조회' },
      { id: 29, label: '쿼리 로그 조회' },
    ],
  },
  { id: 3, label: '계획' },
  { id: 4, label: '비용' },
  { id: 5, label: '재공' },
  { id: 6, label: 'BOM' },
  { id: 7, label: '발주' },
  { id: 8, label: '납품' },
  { id: 9, label: 'IQC' },
];
