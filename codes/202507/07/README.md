### 메타버스 사용자 생성 예제 (C#)

최근 메타버스 관련 소식이 많은 가운데, 메타버스 내에서 사용자 아바타를 생성하는 간단한 프로그램을 작성해 보았다. 이 코드는 사용자로부터 입력받은 정보를 바탕으로 아바타를 생성하며, Unity 엔진을 사용하여 시각적으로 표현할 수 있다.

```csharp
using System;
using UnityEngine;

public class AvatarCreator : MonoBehaviour
{
    public string avatarName;
    public Color avatarColor;

    void Start()
    {
        CreateAvatar();
    }

    void CreateAvatar()
    {
        // 아바타 GameObject 생성
        GameObject avatar = GameObject.CreatePrimitive(PrimitiveType.Cylinder);

        // 아바타 이름 설정
        avatar.name = avatarName;

        // 아바타 색상 설정
        Renderer renderer = avatar.GetComponent<Renderer>();
        renderer.material.color = avatarColor;

        // 아바타 위치 설정
        avatar.transform.position = new Vector3(0, 0, 0);

        Debug.Log($"아바타 '{avatarName}'이(가) 생성되었습니다.");
    }
}

// 사용 예시
public class Program
{
    public static void Main(string[] args)
    {
        AvatarCreator avatarCreator = new AvatarCreator();
        avatarCreator.avatarName = "내 아바타";
        avatarCreator.avatarColor = Color.blue; // 파란색 아바타 생성

        avatarCreator.Start();
    }
}
```

위 코드에서는 Unity 엔진의 기본 형태인 Cylinder를 사용하여 아바타를 생성하는 예제를 보여준다. 사용자가 아바타의 이름과 색상을 입력하면, 해당 정보를 바탕으로 아바타가 생성된다. 이와 같은 간단한 기능을 통해 메타버스 내에서 사용자 맞춤형 아바타를 만들 수 있는 기반을 제공할 수 있다.