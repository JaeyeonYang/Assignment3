# KENtrack Course Planning Portal

이 프로젝트는 KENTECH 학생들을 위한 맞춤형 수강 관리 및 졸업 요건 추적용 웹 KENtrack입니다. 특히 복수 트랙 이수 학생들의 학사 관리를 돕고, 효과적인 수강 계획 수립 및 학업 로드맵 시각화를 지원하는 것을 목표로 합니다.

## 1. Product Overview 

KENtrack은 KENTECH 학생들이 자신의 수강 이력을 관리하고, 복잡한 졸업 요건을 쉽게 추적하며, 선택한 트랙에 따른 코스 트리를 시각적으로 확인할 수 있는 웹 포털입니다.

*   **타겟 사용자:** 한국에너지공과대학교(KENTECH) 학부생 
*   **핵심 목적:**
    *   개인의 수강 기록을 체계적으로 관리
    *   졸업을 위한 필수 및 선택 이수 학점 충족 현황 파악
    *   선택한 트랙의 권장 수강 로드맵 (코스 트리) 확인
    *   효율적인 수강 계획 수립 지원

## 2. Project Goals 

*   학생들이 자신의 학업 상태를 명확히 이해하도록 지원
*   졸업 요건 미충족으로 인한 불이익 방지
*   복수 트랙 이수 계획 수립의 복잡성 감소
*   직관적인 UI/UX를 통해 사용자 편의성 극대화

## 3. Feature List 

*   **수강 이력 관리 (Completed)**
    *   개인별 수강 과목 추가, 수정, 삭제
    *   학기/년도별 필터링 기능
    *   이수 학점 자동 계산
*   **졸업 요건 추적 (Completed)**
    *   영역별 (전공필수, 교양선택 등) 이수 학점 현황 표시
    *   졸업 필수 학점 충족 여부 확인 및 부족 영역 표시
    *   세부 요건 (예: EF 영역 세부 요건, EL4/EL5 학점) 추적
    *   총 이수 학점 계산 (P/F, 초과 학점 등 규칙 반영)
*   **코스 트리 시각화 (Basic Implemented)**
    *   트랙별 권장 수강 로드맵 표시
    *   이수 완료 과목 표시
*   **데이터 저장 및 관리 (Implemented using LocalStorage)**
    *   수강 이력 자동 저장 및 불러오기 기능
*   **UI/UX 개선 (Ongoing)**
    *   모바일 반응형 디자인
    *   접근성 고려

## 4. Technical and Design Requirements 

*   **기술 스택:**
    *   **Frontend:** Next.js (App Router), React, TypeScript
    *   **Styling:** Tailwind CSS, Shadcn UI
    *   **State Management:** Zustand (예정)
    *   **Data Fetching/Caching:** @tanstack/react-query (예정)
    *   **Validation:** Zod (예정)
    *   **Utility Libraries:** date-fns, react-use, es-toolkit, ts-pattern
    *   **Icons:** lucide-react
    *   **Backend (예정):** Supabase (데이터 영구 저장을 위해 고려 중, 현재는 LocalStorage 사용)
*   **UI/UX 가이드라인:**
    *   직관적이고 사용하기 쉬운 인터페이스
    *   모바일 및 데스크톱 반응형 디자인
    *   Shadcn UI 컴포넌트를 활용한 통일성 있는 디자인
    *   핵심 정보 (이수 학점, 부족 요건) 시각적 강조
*   **통합 요건:**
    *   (현재는 없음, 향후 Supabase 또는 다른 백엔드 서비스와 통합 예정)

## 5. Milestones 

*   **Milestone 1 (완료):** 프로젝트 기본 구조 설정 (Next.js, Tailwind, TypeScript), 2022 Spring 데이터 기반 수강 선택 및 기본 학점 계산 기능 구현
*   **Milestone 2 (완료):** 전체 학기 데이터 통합, 학기 필터링, LocalStorage를 이용한 수강 이력 저장/불러오기 기능 구현
*   **Milestone 3 (완료):** 졸업 요건 페이지 구현 (영역별 이수 현황, 필수/선택 학점 추적, EF/EL 세부 요건, 총 학점 계산 및 표시, 이수 필요 영역 목록)
*   **Milestone 4 (완료):** 코스 트리 페이지 기본 구조 구현, 트랙 선택 및 이수 과목 표시
*   **Milestone 5 (진행 중):** 수강 과목 동적 추가/삭제 기능 개선, 데이터 영구 저장을 위한 백엔드 통합 (예: Supabase), 코스 트리 상세 기능 구현, UI/UX 개선 및 버그 수정

## Getting Started

개발 서버를 실행합니다. 자세한 내용은 기존 README 하단의 "Getting Started" 섹션을 참고해주세요.

```bash
npm run dev
```

## 기본 포함 라이브러리

- [Next.js](https://nextjs.org)
- [React](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)
- [ESLint](https://eslint.org)
- [Prettier](https://prettier.io)
- [Shadcn UI](https://ui.shadcn.com)
- [Lucide Icon](https://lucide.dev)
- [date-fns](https://date-fns.org)
- [react-use](https://github.com/streamich/react-use)
- [es-toolkit](https://github.com/toss/es-toolkit)
- [Zod](https://zod.dev)
- [React Query](https://tanstack.com/query/latest)
- [React Hook Form](https://react-hook-form.com)
- [TS Pattern](https://github.com/gvergnaud/ts-pattern)

## 사용 가능한 명령어

한글버전 사용

```sh
easynext lang ko
```

최신버전으로 업데이트

```sh
npm i -g @easynext/cli@latest
# or
yarn add -g @easynext/cli@latest
# or
pnpm add -g @easynext/cli@latest
```

Supabase 설정

```sh
easynext supabase
```

Next-Auth 설정

```sh
easynext auth

# ID,PW 로그인
easynext auth idpw
# 카카오 로그인
easynext auth kakao
```

유용한 서비스 연동

```sh
# Google Analytics
easynext gtag

# Microsoft Clarity
easynext clarity

# ChannelIO
easynext channelio

# Sentry
easynext sentry

# Google Adsense
easynext adsense
```
