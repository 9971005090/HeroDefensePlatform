HeroDefensePlatform(v0.0.2)/
│
├── index.html                      // 게임 실행
├── README.md                       // 프로젝트 설명
├── PROJECT_STRUCTURE.md            // 프로젝트 구조 설명
├── LICENSE
├── favicon.ico
│
├── assets/                         // 모든 Pack에서 공통 사용하는 리소스
│   ├── images/
│   ├── sounds/
│   ├── fonts/
│   ├── cursor/
│   └── icons/
│   └── shaders/
│
├── locales/                        // 다국어 지원
│   ├── ko.json
│   ├── en.json
│   ├── ja.json
│   └── zh.json
│
├── css/
│   ├── reset.css
│   ├── common.css
│   ├── game.css
│   ├── ui.css
│   └── debug.css
│
├── engine/                         // ★ 게임 엔진 (절대 테마를 모름)
│   ├── main.js
│   ├── config/
│   │   ├── EngineConfig.js
│   │   ├── GameConfig.js
│   │   ├── RenderConfig.js
│   │   ├── AudioConfig.js
│   │   └── DebugConfig.js
│   ├── constants/
│   │   ├── GameConstants.js
│   │   ├── EventConstants.js
│   │   └── KeyCode.js
│   ├── core/
│   │   ├── Game.js
│   │   ├── GameLoop.js
│   │   ├── Renderer.js
│   │   ├── Time.js
│   │   ├── Camera.js
│   │   ├── Input.js
│   │   ├── Audio.js
│   │   ├── SaveManager.js
│   │   └── PluginManager.js
│   ├── event/
│   │   ├── EventBus.js
│   │   ├── GameEvent.js
│   │   ├── HeroEvent.js
│   │   ├── MonsterEvent.js
│   │   ├── UIEvent.js
│   │   └── PluginEvent.js
│   ├── render/
│   │   ├── Renderer.js
│   │   ├── CanvasRenderer.js
│   │   ├── SpriteRenderer.js
│   │   ├── ParticleRenderer.js
│   │   ├── LayerRenderer.js
│   │   └── TextRenderer.js
│   ├── physics/
│   │   ├── Collision.js
│   │   ├── PhysicsWorld.js
│   │   ├── Raycast.js
│   │   └── HitTest.js
│   ├── script/
│   │   ├── ScriptEngine.js
│   │   ├── ScriptManager.js
│   │   └── ScriptRunner.js
│   ├── scene/
│   │   ├── Scene.js
│   │   ├── SceneManager.js
│   │   ├── LoadingScene.js
│   │   ├── TitleScene.js
│   │   ├── StageScene.js
│   │   ├── PauseScene.js
│   │   ├── ResultScene.js
│   │   └── SettingScene.js
│   ├── entity/
│   │   ├── Entity.js
│   │   ├── Hero.js
│   │   ├── Monster.js
│   │   ├── Projectile.js
│   │   ├── Effect.js
│   │   ├── Item.js
│   │   └── Obstacle.js
│   ├── component/
│   │   ├── Component.js
│   │   ├── TransformComponent.js
│   │   ├── RenderComponent.js
│   │   ├── HealthComponent.js
│   │   ├── AttackComponent.js
│   │   ├── MoveComponent.js
│   │   ├── AIComponent.js
│   │   ├── AnimationComponent.js
│   │   ├── SkillComponent.js
│   │   ├── BuffComponent.js
│   │   └── ColliderComponent.js
│   ├── factory/
│   │   ├── HeroFactory.js
│   │   ├── MonsterFactory.js
│   │   ├── SkillFactory.js
│   │   ├── EffectFactory.js
│   │   └── ProjectileFactory.js
│   ├── manager/
│   │   ├── EntityManager.js
│   │   ├── HeroManager.js
│   │   ├── MonsterManager.js
│   │   ├── ProjectileManager.js
│   │   ├── WaveManager.js
│   │   ├── SkillManager.js
│   │   ├── EffectManager.js
│   │   ├── ResourceManager.js
│   │   ├── AudioManager.js
│   │   ├── ThemeManager.js
│   │   ├── UIManager.js
│   │   └── DebugManager.js
│   ├── system/
│   │   ├── MovementSystem.js
│   │   ├── CollisionSystem.js
│   │   ├── AttackSystem.js
│   │   ├── DamageSystem.js
│   │   ├── AISystem.js
│   │   ├── AnimationSystem.js
│   │   ├── RenderSystem.js
│   │   ├── SkillSystem.js
│   │   ├── BuffSystem.js
│   │   └── DeathSystem.js
│   ├── ui/
│   │   ├── UIBase.js
│   │   ├── HUD.js
│   │   ├── HeroPanel.js
│   │   ├── SkillPanel.js
│   │   ├── Popup.js
│   │   ├── Toast.js
│   │   └── DebugOverlay.js
│   ├── resource/
│   │   ├── ImageLoader.js
│   │   ├── AudioLoader.js
│   │   ├── SpriteLoader.js
│   │   ├── FontLoader.js
│   │   └── JsonLoader.js
│   ├── data/
│   │   ├── DataManager.js
│   │   ├── DataValidator.js
│   │   └── Schema.js
│   ├── interfaces/
│   │   ├── IEntity.js
│   │   ├── IComponent.js
│   │   ├── ISystem.js
│   │   └── IPlugin.js
│   ├── debug/
│   │   ├── FPS.js
│   │   ├── Profiler.js
│   │   ├── Logger.js
│   │   └── PerformanceMonitor.js
│   └── util/
│       ├── MathUtil.js
│       ├── RandomUtil.js
│       ├── CollisionUtil.js
│       ├── PathUtil.js
│       └── JsonUtil.js
│
├── packs/                        // 공식 콘텐츠 Pack
│   ├── medieval/
│   │   ├── pack.json
│   │   ├── heroes.json
│   │   ├── monsters.json
│   │   ├── skills.json
│   │   ├── items.json
│   │   ├── stages.json
│   │   ├── waves.json
│   │   ├── effects.json
│   │   ├── ui.json
│   │   ├── images/
│   │   ├── sounds/
│   │   ├── fonts/
│   │   ├── effects/
│   │   └── ui/
│   │
│   ├── joseon/
│   ├── mythology/
│   ├── future/
│   └── three_kingdoms/
│
├── mods/                         // 사용자 제작 콘텐츠
│   ├── dragon_pack/
│   ├── zombie_pack/
│   └── my_custom_pack/
│
├── plugins/                      // 기능 확장
│   ├── ranking/
│   │   ├── plugin.json
│   │   └── RankingPlugin.js
│   │
│   ├── multiplayer/
│   │   ├── plugin.json
│   │   └── MultiplayerPlugin.js
│   │
│   ├── analytics/
│   │   ├── plugin.json
│   │   └── AnalyticsPlugin.js
│   │
│   ├── replay/
│   │   ├── plugin.json
│   │   └── ReplayPlugin.js
│   │
│   ├── achievement/
│   │   ├── plugin.json
│   │   └── AchievementPlugin.js
│   │
│   ├── cloud_save/
│   │   ├── plugin.json
│   │   └── CloudSavePlugin.js
│   │
│   └── weather/
│       ├── plugin.json
│       └── WeatherPlugin.js
│
├── editor/                             // Game Studio
│   │
│   ├── index.html
│   ├── editor.js
│   │
│   ├── core/
│   │   ├── Editor.js
│   │   ├── EditorManager.js
│   │   ├── EditorEventBus.js
│   │   └── EditorConfig.js
│   │
│   ├── builders/
│   │   ├── ProjectBuilder.js
│   │   ├── PackBuilder.js
│   │   ├── PluginBuilder.js
│   │   └── ModBuilder.js
│   │
│   ├── tools/
│   │   ├── HeroEditor.js
│   │   ├── MonsterEditor.js
│   │   ├── SkillEditor.js
│   │   ├── ItemEditor.js
│   │   ├── StageEditor.js
│   │   ├── WaveEditor.js
│   │   ├── EffectEditor.js
│   │   ├── AnimationEditor.js
│   │   ├── UISkinEditor.js
│   │   ├── FontEditor.js
│   │   ├── SoundEditor.js
│   │   └── ResourceEditor.js
│   │
│   ├── preview/
│   │   ├── HeroPreview.js
│   │   ├── MonsterPreview.js
│   │   ├── AnimationPreview.js
│   │   ├── EffectPreview.js
│   │   └── StagePreview.js
│   │
│   ├── templates/
│   │   ├── Empty/
│   │   ├── BasicDefense/
│   │   ├── HeroDefense/
│   │   ├── TowerDefense/
│   │   └── RPGDefense/
│   │
│   ├── workspace/
│   │   ├── LayoutManager.js
│   │   ├── WindowManager.js
│   │   ├── DockPanel.js
│   │   ├── CanvasView.js
│   │   ├── AssetBrowser.js
│   │   ├── Hierarchy.js
│   │   ├── InspectorView.js
│   │   └── ConsoleView.js
│   │
│   ├── import/
│   │   ├── ImageImporter.js
│   │   ├── AudioImporter.js
│   │   ├── JsonImporter.js
│   │   └── PackImporter.js
│   │
│   ├── export/
│   │   ├── PackExporter.js
│   │   ├── PluginExporter.js
│   │   └── ProjectExporter.js
│   │
│   ├── ui/
│   │   ├── TreeView.js
│   │   ├── PropertyPanel.js
│   │   ├── Inspector.js
│   │   ├── Toolbar.js
│   │   ├── Menu.js
│   │   ├── StatusBar.js
│   │   ├── Console.js
│   │   └── Dialog.js
│   │
│   └── util/
│       ├── FileUtil.js
│       ├── JsonUtil.js
│       ├── ImageUtil.js
│       └── ValidationUtil.js
│
├── saves/
│   ├── autosave/
│   ├── slot1/
│   ├── slot2/
│   └── slot3/
│
├── tests/
│   ├── engine/
│   ├── packs/
│   └── plugins/
│
├── tools/
│   ├── Build.js
│   ├── Packager.js
│   ├── VersionManager.js
│   └── AssetOptimizer.js
│
└── docs/                         // 설계 문서
    ├── ENGINE.md
    ├── COMPONENT.md
    ├── ECS_GUIDE.md
    ├── PACK_FORMAT.md
    ├── PLUGIN_API.md
    ├── MOD_GUIDE.md
    ├── SAVE_FORMAT.md
    ├── EDITOR_GUIDE.md
    ├── TEMPLATE_GUIDE.md
    └── CHANGELOG.md