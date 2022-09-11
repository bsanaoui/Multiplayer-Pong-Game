import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { INSTANCE_METADATA_SYMBOL } from '@nestjs/core/injector/instance-wrapper';
import { Observable,map, from, toArray} from 'rxjs';

@Injectable()
export class TransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next
            .handle()
            .pipe(
              map((items:any) => items.map(item => {

                return ({
                    id : item.user.id,
                    username : item.username,
                    user_role : item.user_role,
                    avatar : item.user.avatar
                });
            }))
            )

}
}