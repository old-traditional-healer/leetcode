char findTheDifference(char * s, char * t){
    int m = strlen(s), n = strlen(t);
    int ret=0;

    for(int i=0;i<m;i++) ret ^= s[i];

    for(int i=0;i<n;i++) ret ^= t[i];

    return ret;
}
