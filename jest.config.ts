import type { Config } from 'jest';
import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './', // Next.js 앱의 루트 디렉토리 설정
});

const config: Config = {
  testEnvironment: 'jsdom', // 브라우저 환경 시뮬레이션
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/components/$1', // 경로 별칭 매핑
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // 테스트 환경 설정 파일
};

export default createJestConfig(config);
