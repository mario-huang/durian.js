import {
  CanActivate,
  DynamicModule,
  ExceptionFilter,
  HttpServer,
  INestApplication,
  INestApplicationContext,
  INestMicroservice,
  LoggerService,
  LogLevel,
  NestHybridApplicationOptions,
  NestInterceptor,
  PipeTransform,
  ShutdownSignal,
  Type,
  VersioningOptions,
  WebSocketAdapter,
} from '@nestjs/common';
import { GlobalPrefixOptions } from '@nestjs/common/interfaces';
import {
  CorsOptions,
  CorsOptionsDelegate,
} from '@nestjs/common/interfaces/external/cors-options.interface';

class NestDurianApplication implements INestApplication {
  use(...args: any[]): this {
    throw new Error('Method not implemented.');
  }
  enableCors(options?: CorsOptions | CorsOptionsDelegate<any>): void {
    throw new Error('Method not implemented.');
  }
  enableVersioning(options?: VersioningOptions): this {
    throw new Error('Method not implemented.');
  }
  listen(port: unknown, hostname?: unknown, callback?: unknown): Promise<any> {
    throw new Error('Method not implemented.');
  }
  getUrl(): Promise<string> {
    throw new Error('Method not implemented.');
  }
  setGlobalPrefix(prefix: string, options?: GlobalPrefixOptions): this {
    throw new Error('Method not implemented.');
  }
  useWebSocketAdapter(adapter: WebSocketAdapter): this {
    throw new Error('Method not implemented.');
  }
  connectMicroservice<T extends object = any>(
    options: T,
    hybridOptions?: NestHybridApplicationOptions,
  ): INestMicroservice {
    throw new Error('Method not implemented.');
  }
  getMicroservices(): INestMicroservice[] {
    throw new Error('Method not implemented.');
  }
  getHttpServer() {
    throw new Error('Method not implemented.');
  }
  getHttpAdapter(): HttpServer {
    throw new Error('Method not implemented.');
  }
  startAllMicroservices(): Promise<this> {
    throw new Error('Method not implemented.');
  }
  useGlobalFilters(...filters: ExceptionFilter[]): this {
    throw new Error('Method not implemented.');
  }
  useGlobalPipes(...pipes: PipeTransform<any>[]): this {
    throw new Error('Method not implemented.');
  }
  useGlobalInterceptors(...interceptors: NestInterceptor[]): this {
    throw new Error('Method not implemented.');
  }
  useGlobalGuards(...guards: CanActivate[]): this {
    throw new Error('Method not implemented.');
  }
  close(): Promise<void> {
    throw new Error('Method not implemented.');
  }
  select<T>(module: Type<T> | DynamicModule): INestApplicationContext {
    throw new Error('Method not implemented.');
  }
  get(
    typeOrToken: unknown,
    options?: unknown,
  ): TResult | TResult | TResult | TResult[] | TResult[] {
    throw new Error('Method not implemented.');
  }
  resolve(
    typeOrToken: unknown,
    contextId?: unknown,
    options?: unknown,
  ):
    | Promise<TResult>
    | Promise<TResult>
    | Promise<TResult>
    | Promise<TResult[]>
    | Promise<TResult | TResult[]> {
    throw new Error('Method not implemented.');
  }
  registerRequestByContextId<T = any>(
    request: T,
    contextId: { id: number },
  ): void {
    throw new Error('Method not implemented.');
  }
  useLogger(logger: LoggerService | LogLevel[] | false): void {
    throw new Error('Method not implemented.');
  }
  flushLogs(): void {
    throw new Error('Method not implemented.');
  }
  enableShutdownHooks(signals?: ShutdownSignal[] | string[]): this {
    throw new Error('Method not implemented.');
  }
  init(): Promise<this> {
    throw new Error('Method not implemented.');
  }
}
