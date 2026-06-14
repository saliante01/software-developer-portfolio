import { Pipe, PipeTransform, OnDestroy } from '@angular/core';
import { TranslateService } from '../services/translate.service';
import { Subject, takeUntil } from 'rxjs';

@Pipe({
  name: 'translate',
  standalone: true,
  pure: false
})
export class TranslatePipe implements PipeTransform, OnDestroy {
  private value = '';
  private lastKey = '';
  private destroy$ = new Subject<void>();

  constructor(private service: TranslateService) {
    this.service.lang$.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.value = this.service.translate(this.lastKey);
    });
  }

  transform(key: string): string {
    if (key !== this.lastKey) {
      this.lastKey = key;
      this.value = this.service.translate(key);
    }
    return this.value;
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
