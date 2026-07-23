# HeroDefensePlatform

> A modular JavaScript game engine and studio for building hero defense games.  
> 영웅 디펜스 게임을 제작하기 위한 모듈형 JavaScript 게임 엔진 및 스튜디오

---

## 프로젝트 소개

**HeroDefensePlatform**은 JavaScript 기반의 Hero Defense 게임 제작 플랫폼입니다.

단순한 하나의 게임 구현이 아닌, 다양한 세계관과 콘텐츠를 쉽게 확장할 수 있는  
**모듈형 게임 엔진 구조**를 목표로 개발하고 있습니다.

게임 엔진과 게임 콘텐츠를 분리하여 하나의 엔진 위에서 다양한 테마의 Hero Defense 게임을 제작할 수 있도록 설계되었습니다.

예:

- 중세 판타지
- 조선 시대
- 신화 세계관
- 미래 SF
- 삼국지 스타일

등 다양한 세계관을 **Pack 추가 방식**으로 확장하는 것을 목표로 합니다.

---

## 주요 특징

### Modular Engine

게임의 핵심 기능은 Engine 영역에서 관리하며,  
게임 콘텐츠와 테마는 독립적인 모듈 형태로 구성됩니다.

```
Engine
 ├── GameLoop
 ├── Renderer
 ├── Scene System
 ├── Entity System
 ├── Resource System
 └── Plugin System


Pack
 ├── Hero
 ├── Monster
 ├── Skill
 ├── Theme
 └── Resource
```

엔진 변경 없이 새로운 Pack을 추가하여 다양한 게임 제작이 가능합니다.

---

## 설계 원칙

HeroDefensePlatform은 다음 원칙을 기반으로 설계합니다.

### Engine / Content 분리

- 게임 엔진과 콘텐츠 영역 분리
- 테마와 게임 로직 분리
- 리소스와 코드 분리
- Plugin 기반 확장 구조

이를 통해 새로운 세계관이나 콘텐츠 추가 시 기존 엔진 수정 없이 확장할 수 있도록 합니다.

---

## 프로젝트 구조

전체 디렉터리 구조와 설계 방향은 아래 문서를 참고하세요.

```
PROJECT_STRUCTURE.md
```

현재 프로젝트의 아키텍처는 초기 설계 단계에서 확정되었으며,  
이후 개발은 해당 구조를 유지하면서 기능 구현 중심으로 진행합니다.

---

## 개발 로드맵

전체 개발 계획은 아래 문서를 참고하세요.

```
ROADMAP.md
```

주요 개발 단계:

- Engine Core
- Scene System
- Entity System
- Combat System
- Skill & Effect System
- UI System
- Save System
- Resource System
- Plugin System
- Editor System

순서로 단계적으로 개발합니다.

---

## 버전 표기 규칙

HeroDefensePlatform은 다음 버전 규칙을 사용합니다.

```
0.0.4.001
│ │ │ │
│ │ │ └─ Revision
│ │ │    버그 수정 / 문서 수정 / 보완 작업
│ │ └── Patch
│ │     기능 단위 추가
│ └──── Minor
│       큰 기능 그룹
└────── Major
        초기 버전
```

예:

```
v0.0.5
- Engine 기본 구조 추가


v0.0.5.001
- Engine 초기화 오류 수정


v0.0.5.002
- 관련 문서 수정
```

---

## 현재 버전

```
v0.0.4.002
```

---

## 프로젝트 상태

### Architecture Freeze

현재 프로젝트의 디렉터리 구조와 전체 아키텍처 설계는 안정적인 상태로 확정되었습니다.

향후 개발은 현재 구조를 유지하면서 기능 구현을 중심으로 진행합니다.

다음 원칙을 유지합니다.

- 기존 아키텍처 변경 최소화
- 새로운 기능은 확장 구조로 추가
- Engine과 Content 영역 분리 유지
- Module 기반 확장 방식 유지

---

## 개발 환경

| 항목 | 내용 |
|---|---|
| Language | JavaScript |
| Platform | Web Browser |
| Rendering | HTML5 Canvas |
| Architecture | Modular Game Engine |
| Target | Hero Defense Game Platform |

---

## Documentation

| 문서 | 설명 |
|---|---|
| README.md | 프로젝트 소개 및 기본 정보 |
| PROJECT_STRUCTURE.md | 프로젝트 구조 및 설계 문서 |
| ROADMAP.md | 개발 로드맵 |
| CHANGELOG.md | 버전별 변경 기록 |

---

## Credits

프로젝트의 아키텍처 설계와 초기 문서 작성은  
ChatGPT의 도움을 받아 진행되었습니다.