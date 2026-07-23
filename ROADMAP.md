# HeroDefensePlatform 개발 로드맵

## 완료된 작업

### v0.0.2
- README.md 수정
- PROJECT_STRUCTURE.md 추가

### v0.0.3
- css/assets 디렉토리 생성
  - CSS 관련 파일 추가
- index.html 추가

### v0.0.4
- index.html 수정
  - 스크롤바 제거
  - 관련 CSS 수정


---

# 개발 예정 로드맵


# 1. 엔진 기본 구조 구축

## v0.0.5
- engine/main.js 생성
- Engine 시작 코드 구현
- "Engine Started" 출력

## v0.0.6
- Game 클래스 생성
- Engine에서 Game 생성

## v0.0.7
- GameLoop 클래스 생성
- requestAnimationFrame 적용

## v0.0.8
- FPS 계산
- FPS 출력

## v0.0.9
- Renderer 클래스 생성
- Canvas 생성

## v0.1.0
- Canvas 화면 출력
- 배경색 렌더링


---

# 2. Scene 시스템 구축

## v0.1.1
- SceneManager 생성
- 기본 Scene 생성

## v0.1.2
- LoadingScene 구현
- Scene 전환 기능 구현


---

# 3. Entity 시스템 구축

## v0.1.3
- Entity 클래스 생성
- EntityManager 생성

## v0.1.4
- Hero 클래스 생성
- HeroFactory 생성

## v0.1.5
- Hero Render 구현
- Hero 화면 출력

## v0.1.6
- DeltaTime 적용
- Update 루프 분리


---

# 4. 입력 및 카메라 시스템

## v0.1.7
- InputManager 생성
- Keyboard 이벤트 등록

## v0.1.8
- Hero 이동 구현
- WASD 입력 처리

## v0.1.9
- Camera 생성
- Camera 적용


---

# 5. 전투 시스템 구축

## 몬스터 시스템

### v0.2.0
- Monster 클래스 생성
- MonsterFactory 생성
- Monster 화면 출력

### v0.2.1
- MonsterManager 생성
- Monster Update 구현

### v0.2.2
- Monster 이동 구현


## 충돌 시스템

### v0.2.3
- ColliderComponent 생성
- CollisionSystem 생성

### v0.2.4
- Hero / Monster 충돌 처리


## 체력 및 사망 시스템

### v0.2.5
- HealthComponent 생성
- HP 시스템 구현

### v0.2.6
- DeathSystem 생성
- Monster 제거 처리


## 공격 시스템

### v0.2.7
- AttackComponent 생성
- AttackSystem 생성

### v0.2.8
- Projectile 생성
- Projectile Render 구현

### v0.2.9
- Monster 피격 처리


---

# 6. 게임 진행 시스템 구축

## Wave 시스템

### v0.3.0
- WaveManager 생성
- Wave 시작 처리

### v0.3.1
- Wave 데이터 로드

### v0.3.2
- 몬스터 자동 Spawn

### v0.3.3
- Wave 종료 처리


## 게임 결과 시스템

### v0.3.4
- Gold 시스템 구현

### v0.3.5
- Kill Count 구현

### v0.3.6
- 게임 오버 처리

### v0.3.7
- 게임 클리어 처리

### v0.3.8
- ResultScene 구현

### v0.3.9
- TitleScene 구현


---

# 7. 스킬 및 이펙트 시스템

## v0.4.0
- SkillComponent 생성
- SkillManager 생성

## v0.4.1
- 첫 번째 Skill 구현

## v0.4.2
- Skill Effect 출력

## v0.4.3
- Skill 쿨타임 구현

## v0.4.4
- BuffComponent 생성

## v0.4.5
- BuffSystem 생성

## v0.4.6
- EffectManager 생성

## v0.4.7
- Effect Render 구현

## v0.4.8
- Damage Number 출력

## v0.4.9
- Particle 시스템 구현


---

# 8. UI 시스템 구축

## v0.5.0
- HUD 생성
- Hero HP 표시

## v0.5.1
- Wave UI 구현

## v0.5.2
- Gold UI 구현

## v0.5.3
- Pause 메뉴 구현

## v0.5.4
- Setting 메뉴 구현


---

# 9. 저장 시스템 구축

## v0.5.5
- SaveManager 구현

## v0.5.6
- 저장 기능 구현

## v0.5.7
- 불러오기 기능 구현

## v0.5.8
- Auto Save 구현

## v0.5.9
- Save Slot 구현


---

# 10. 리소스 및 플러그인 시스템

## v0.6.0
- PluginManager 구현
- Plugin 로딩 기능

## v0.6.1
- Pack 로딩 기능

## v0.6.2
- ResourceManager 개선

## v0.6.3
- JsonLoader 구현

## v0.6.4
- SpriteLoader 구현

## v0.6.5
- AudioLoader 구현

## v0.6.6
- FontLoader 구현

## v0.6.7
- ThemeManager 구현

## v0.6.8
- 다국어(Locales) 적용

## v0.6.9
- DebugOverlay 구현


---

# 11. 에디터 시스템 구축

## v0.7.0
- Editor 기본 화면 생성
- Editor 실행