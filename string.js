#include <stdio.h>
#include<string.h>
int Repeatedstring(char* s)
{
    int l=i,j,-1;
    for(i=0; i<strlen(s);i++){
        for(j=i+1; j< strlen(s);j++){
            if(s[i]==s[j]){
                l=i;
                break;
            }
        }
        if(l!=-1)
        break;
    }
    return l;
}
int main()
{
    char str[]="defgadef";
    int result=Repeatedstring(str);
    if(result==-1)
    printf("\n the string is not found");
    else
 printf("%c" ,str[result]);
    return 0;
}
