# simsimeweb-room — 개발 인수인계 먼저 읽기

개인 홈페이지 개발을 Antigravity에서 이어갑니다. 작업을 시작하기 전에 **[AGENTS.md](AGENTS.md)**와 **[상세 인수인계](docs/ANTIGRAVITY_HANDOFF.md)**를 먼저 읽어 주세요.

- 공간 디자인은 사용자가 Blender에서 직접 결정하고, 개발 에이전트는 모델 분석과 웹 기능 구현을 맡습니다.
- 최근 선호 콘셉트는 한밤중의 아늑한 다락방 작업실과 작은 망원경입니다.
- 현재 소스는 원본 기반입니다. PC 빌드 → 게시 → 기존 홈페이지 복구 테스트까지 사용자가 확인했습니다.
- 마지막 확인 상태는 **기존 홈페이지로 복구 완료**입니다.
- npm 12 설치 해결책과 개발 이력은 상세 인수인계에 기록했습니다.
- 실제 서버 운영 상세는 사용자 선택에 따라 공개 문서에서 제외했습니다.

Antigravity 첫 요청 예시:

> AGENTS.md와 docs/ANTIGRAVITY_HANDOFF.md를 먼저 읽고 프로젝트를 인수인계받아 줘. 확정 사항과 제안을 구분하고, 현재 상태를 요약해 줘.

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
