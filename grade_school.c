#include<stdio.h>

void main(){

    int a[5],b[5],r[15];
    int t,p=0,i,j;

    printf("Enter size (m,n): ");
    
    printf("Enter first number in reverse: ");
    for(i=0;;i<m;i++)
        scanf(&a[i]);

    printf("Enter second number in reverse: ");
    for(i=0;;i<n;i++)
        scanf(&b[i]);

    for(i=m;i<5;i++)
        a[i]=0;

    for(i=n;i<5;i++)
        b[i]=0;

    for(i=0;i<15;i++)
        r[i]=0;

    for(i=0;i<m;i++){
        p=i;
        for(j=0;j<n;j++){
            t=b[i]*a[j];
            if((r[p]+(t%10))/10)
                r[p]=((r[p]+(t%10))%10)+r[p];
            r[p]=(t%10)+r[p];
            p++;
            r[p]=(t/10)+r[p];
        }
    }


}