# KENtrack Course Planning Portal

KENtrack은 KENTECH (한국에너지공과대학교) 학부생들을 위해 개발된 웹 기반 수강 계획 및 졸업 요건 추적 포털입니다. 모든 학생이 학과 구분 없이 5개의 융합 에너지 교육 트랙을 추구하는 KENTECH의 학사 구조를 반영하여, KENtrack은 학생들이 모든 트랙에 걸쳐 자신의 학업 진행 상황을 유연하게 계획, 모니터링 및 최적화할 수 있도록 지원합니다.

## 1. Product Overview (제품 개요)

KENtrack은 KENTECH 학생들이 자신의 수강 이력을 기록 및 관리하고, 핵심 및 선택 학점을 포함한 복잡한 졸업 요건을 실시간으로 추적하며, 학생들의 트랙 선택 및 학업 관심사에 맞춰 추천 코스 로드맵("코스 트리")을 시각화할 수 있는 중앙 집중식의 직관적인 플랫폼을 제공합니다.

### 1.1 Target Users (타겟 사용자):

*   KENTECH 학부생, 특히 복잡한 졸업 요건을 탐색하고 간소화된 학사 관리를 원하는 학생.

### 1.2 Core Purpose (핵심 목적):

*   학생들이 자신의 수강 이력을 기록하고 관리할 수 있는 중앙 집중식 플랫폼 제공.
*   핵심 및 선택 학점을 포함한 졸업 요건을 실시간으로 추적 가능하게 함.
*   학생의 트랙 선택 및 학업 관심사에 맞춰 추천 코스 로드맵("코스 트리") 시각화.
*   누락되거나 중복되는 학점의 위험을 최소화하여 효과적이고 자율적인 수강 계획 수립 지원.

## 2. Project Goals (프로젝트 목표)

*   학생들이 현재 자신의 학업 상태와 진행 상황을 명확히 이해하도록 지원.
*   졸업 요건 미충족으로 인한 부정적인 결과 방지.
*   다중 트랙 계획의 복잡성 간소화.
*   KENTECH 시스템에 맞춰진 직관적이고 반응형인 UI/UX를 통해 사용자 편의성 극대화.
*   KENTECH의 교육 철학에 부합하는 유연하고 융합적인 커리큘럼 관리 지원.

## 3. Feature List (기능 목록)

### 3.1 Must-Have Features (필수 기능)

1.  **Course History Management (수강 이력 관리)**
    *   학기별, 연도별 수강 과목 추가, 편집, 삭제.
    *   학기별 또는 연도별 필터링.
    *   이수 학점 자동 계산.
    *   중복 수강 선택 감지 및 경고.
    *   LocalStorage 기반의 수강 이력 자동 저장 및 불러오기.
    *   선택한 과목만 보기 또는 전체 과목 보기 토글.
    *   총 학점 및 이수 완료 과목 실시간 표시.

2.  **Graduation Requirement Tracking (졸업 요건 추적)**
    *   각 요건 영역(예: EF/EN 등)별 진행 상황 시각화.
    *   필수 및 선택 학점 이수 현황 및 부족분 추적.
    *   세부 요건 추적(예: EF/EL 영역의 세부 요건, EL4/EL5 학점, EF 수학/물리/화학/AI 등).
    *   자동 학점 계산 및 이체 규칙(예: 초과 학점은 자유 선택 학점으로 적용).
    *   ESP(English) 학점은 모든 과목 완료 시에만 부여.
    *   영역별, 학기별 과목 상세 내역 드릴다운 보기.
    *   남은 요건 강조 및 충족할 수 있는 과목 제안.

3.  **Course Tree Visualization (코스 트리 시각화)**
    *   각 트랙별 추천 코스 로드맵 시각화.
    *   이수 완료 과목 강조 및 각 트랙별 진행 상황 추적.
    *   사용자 진행 상황에 따른 상위 3개 최적 매칭 트랙 표시 및 정렬.
    *   구조화된 계획을 위한 학년별 과목 그룹화.

### 3.2 Should-Have (Planned/Future) (계획/향후 기능)

*   영구 클라우드 저장소(예: Supabase 연동).
*   PDF/Excel 형태의 졸업 상태 및 성적표 내보내기.

### 3.3 Nice-to-Have (추가 고려 기능)

*   소셜 로그인(Google, Kakao) 및 클라우드 동기화.
*   분석, 모니터링 및 피드백 연동(ChannelIO, Sentry 등).
*   스마트 알림 및 개인 맞춤형 리마인더.

## 4. Technical and Design Requirements (기술 및 디자인 요구사항)

### 4.1 Technology Stack (기술 스택)

*   **Frontend:** Next.js (App Router), React, TypeScript
*   **Styling:** Tailwind CSS, Shadcn UI
*   **State Management:** Zustand (계획)
*   **Data Fetching/Caching:** @tanstack/react-query (계획)
*   **Validation:** Zod
*   **Utilities:** date-fns, react-use, es-toolkit, ts-pattern
*   **Icons:** lucide-react
*   **Backend:** Supabase (계획; 현재 LocalStorage 사용)
*   **Quality Tools:** ESLint, Prettier

### 4.2 UI/UX Guidelines (UI/UX 가이드라인)

*   모바일 및 데스크톱 완전 반응형.
*   Shadcn UI 컴포넌트의 일관된 사용.
*   현황 파악 용이성("나는 어디에 있고", "무엇이 부족한가") 강조.
*   사용자 오류에 대한 즉각적인 피드백(예: 중복 과목).
*   많은 데이터에 대한 원활한 UX(로딩, 토스트 알림, 모달).

### 4.3 Integration Requirements (통합 요구사항)

*   MVP에서는 요구되지 않음; Supabase, Next-Auth, Google Analytics, Sentry 및 기타 서비스 지원 예정.

## 5. Milestones (주요 일정)

| Milestone       | Description                             | Status    |
| :-------------- | :-------------------------------------- | :-------- |
| Milestone 1     | 프로젝트 구조, 기본 UI, 데이터셋 통합           | Completed |
| Milestone 2     | 전체 수강 이력 관리 (LocalStorage 사용)         | Completed |
| Milestone 3     | 졸업 요건 로직 및 세부 요건 페이지              | Completed |
| Milestone 4     | 코스 트리/트랙 시각화 및 진행 상황 추적         | Completed |
| Milestone 5     | UI/UX 개선, 버그 수정, 향후 기능 기반 작업     | Ongoing   |
| Milestone 6 (Planned) | Supabase, 인증, 알림, 데이터 내보내기 등 | Planned   |

## 6. Implementation Plan & Structure (구현 계획 및 구조)

*   프로젝트는 Next.js로 빌드되었으며 모노레포 구조로 구성되어 있습니다.
*   **Pages:**
    *   `/`: 홈 (개요, 주요 네비게이션)
    *   `/history`: 수강 이력 (선택, 관리, 중복 체크, 학점 계산)
    *   `/requirements`: 졸업 요건 (영역별/세부 영역별, 부족분 강조)
    *   `/coursetree`: 코스 트리/트랙 시각화 (추천 과목, 진행 상황)
    *   (선택 사항: `/about`, `/contact` 등)
*   **Folder structure:** data, components, pages 등으로 명확하게 분리.
*   **Code quality:** 일관된 ESLint/Prettier, 함수형 컴포넌트, React Hooks 사용.
*   **Scalable design:** 추가 기능(상태 관리, 백엔드, 알림, 분석)을 위해 확장 가능하도록 설계.

## 9. UI/UX Mockup (Summary) (UI/UX 목업 요약)

*   **Home:** 히어로 섹션(학교 이미지, 간단한 소개), 세 가지 주요 메뉴(수강 이력 / 졸업 요건 / 코스 트리).
*   **Course History:** 학기/영역별 과목 선택, 학점 표시, 중복 경고, 전체 상태.
*   **Requirements:** 요건 영역 박스, 부족분 강조, 세부 요건 섹션(EL4/5, EF 세부 영역).
*   **Course Tree:** 트랙 박스, 진행률 바, 연간 그룹화, 이수 완료/미완료 시각적 구분.

## Getting Started

개발 서버를 실행합니다.

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인할 수 있습니다.

## 기본 포함 라이브러리

*   [Next.js](https://nextjs.org)
*   [React](https://react.dev)
*   [Tailwind CSS](https://tailwindcss.com)
*   [TypeScript](https://www.typescriptlang.org)
*   [ESLint](https://eslint.org)
*   [Prettier](https://prettier.io)
*   [Shadcn UI](https://ui.shadcn.com)
*   [Lucide Icon](https://lucide.dev)
*   [date-fns](https://date-fns.org)
*   [react-use](https://github.com/streamich/react-use)
*   [es-toolkit](https://github.com/toss/es-toolkit)
*   [Zod](https://zod.dev)
*   [React Query](https://tanstack.com/query/latest)
*   [React Hook Form](https://react-hook-form.com)
*   [TS Pattern](https://github.com/gvergnaud/ts-pattern)

## 사용 가능한 명령어

```sh
easynext lang ko   # 한글버전 사용
easynext supabase  # Supabase 설정
easynext auth      # Next-Auth 설정
easynext auth idpw # ID,PW 로그인
easynext auth kakao # 카카오 로그인

# 유용한 서비스 연동
easynext gtag     # Google Analytics
easynext clarity  # Microsoft Clarity
easynext channelio # ChannelIO
easynext sentry   # Sentry
easynext adsense  # Google Adsense

# 최신버전으로 업데이트
npm i -g @easynext/cli@latest
```
